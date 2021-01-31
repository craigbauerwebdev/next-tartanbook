import React, { Fragment, useState, useEffect } from "react";
import nookies from "nookies";
import {verifyIdToken} from "../../components/Auth/firebaseAdmin";
import firebaseClient from "../../components/Auth/firebaseClient";
//import firebase from "firebase/app";
import "firebase/auth";
import { useAuth } from "../../components/Auth/Auth";
import VendorCard from '../../components/VendorCard';
import useSWR from 'swr';
import VendorFilters from "../../components/VendorFilters";

const fetcher = (url) => fetch(url).then((res) => res.json());

function Vendors({session}) {
    const { user } = useAuth();
    const { data, error } = useSWR('/api/vendors', fetcher);
    const [types, setVendorTypes] = useState(null);
    const [locations, setLocationTypes] = useState(null);
    const [sortedVendors, setSortedVendors] = useState(null);
    const [type, setType] = useState("AllVendors");
    const [location, setLocation] = useState("AllLocations");
    const [searchTerm, setSearchTerm] = useState(null);
    const [startIndex, setStartIndex] = useState(0);
    const [endIndex, setEndIndex] = useState(10);
    const [totalVendors, setTotalVendors] = useState(null);

    useEffect(() => {
        if(data) {
            let vendorTypes = data.map((vendor) => {
                if (vendor.vendor_type) {
                    return vendor.vendor_type;
                }
                return null;
            })
            let locations = data.map((location) => {
                if (location.location) {
                    return location.location;
                }
                return null;
            })
            setVendorTypes([...new Set(vendorTypes)]);
            setLocationTypes([...new Set(locations)]);

            setTotalVendors(data.length);
        }
    }, [data]);

    useEffect(() => {
        setEndIndex(10);
    }, [type, location, searchTerm]);

    useEffect(() => {
        if(data) {
            const
                obj = { vendor: type, location: location };
            setSortedVendors(
                data.filter(v => {
                    const title = v.title.rendered.toLowerCase();
                    return (
                        (v.vendor_type.toLowerCase() === obj.vendor.toLowerCase() || obj.vendor === "AllVendors") &&
                        (v.location.toLowerCase() === obj.location.toLowerCase() || obj.location === "AllLocations") &&
                        (searchTerm ? title.includes(searchTerm.toLowerCase()) : title)
                    );
                })
            )
        }
    }, [type, location, data, searchTerm, endIndex, setEndIndex]);

    const loadMoreItems = () => {
        console.log("loading 10 more items");
        setEndIndex(endIndex + 10)
    }

    if (error) return <div>Failed to load</div>
    if (!data || !type || !locations) {
        return (
            <div>
                <div className="loading-screen">
                    <div className="loader-wrap center">
                        <div className="loader"></div>
                        <p>Just a second</p>
                    </div>
                </div>
            </div>
        );
    }
    //console.log("EndIndex: ", endIndex, "Sorted Vendors", sortedVendors.length);
    //console.table("TotalVendors: ", totalVendors)

    // sets filter state on parent component
    const sortBy = (e, sortType) => {
        if (sortType === "vendorType") {
            setType(e.target.value);
        } else if (sortType === "location") {
            setLocation(e.target.value);
        } else if (sortType === "search") {
            setSearchTerm(e.target.value);
        }
    }

    firebaseClient();

    //if(session) {
    if (user) {
        return (
            <Fragment>
                <VendorFilters sortBy={sortBy} type={type} location={location} vendorFilters={types} locationFilters={locations} />
                {sortedVendors &&
                    <ul>
                        {sortedVendors.map((vendor, i) => {
                            return <VendorCard key={i} vendor={vendor} />
                        }).slice(startIndex, endIndex)}
                    </ul>
                }
                {!sortedVendors.length &&
                    <p>No Vendors Match your search</p>
                }
                {endIndex < sortedVendors.length &&
                    <div className="load-more-items">
                        <button
                            onClick={loadMoreItems}
                        >
                            load more vendors
                        </button>
                    </div>
                }
            </Fragment>
        );
    } else {
        return null
    }
};

export async function getServerSideProps(context) {
    try {
        console.log("get serverside props try block");
        const cookies = nookies.get(context);
        const token = await verifyIdToken(cookies.token);
        const {uid, email} = token;
        return {
            props: {session: `Email: ${email} IUD: ${uid}`}
        }
    } catch (err) {
        console.log("get serverside props err block");
        context.res.writeHead(302, {location: "/login"}); //login //change to welcome page
        context.res.end();
        return (
            { props: [] }
        )
    }
}

export default Vendors;
