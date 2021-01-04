import React, { Fragment, useState, useEffect } from "react";
import nookies from "nookies";
import {verifyIdToken} from "../components/Auth/firebaseAdmin";
import firebaseClient from "../components/Auth/firebaseClient";
//import firebase from "firebase/app";
import "firebase/auth"; //for sign out
import { useAuth } from "../components/Auth/Auth";
import VendorCard from '../components/VendorCard';
import useSWR from 'swr';
import VendorFilters from "../components/VendorFilters";
//import secrets from "../components/Auth/secrets";

const fetcher = (url) => fetch(url).then((res) => res.json())
function Vendors({session}) {
    const { user } = useAuth();
    console.log(user);
    const { data, error } = useSWR('/api/vendors', fetcher);
    const [type, setType] = useState(null);
    const [location, setLocation] = useState(null);

    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>

    firebaseClient();

    if(session) {

        /* getVendors = (vendors) => {
            const randomVendors = vendors.sort(() => {
                return .5 - Math.random();
            });
            return (
                randomVendors.map((vendor) => {
                    const imgStyle = {
                        backgroundImage: vendor.fimg_url ? `url("${vendor.fimg_url}")`
                            : "url(http://tartanweddings.com/wp-content/uploads/2018/11/dundas-events-page.jpg)",
                        backgroundSize: "cover",
                        backgroundPosition: "top"
                    }
                    const markup = <div key={vendor.id} className="vendor clearfix">
                        <div className="image-container" style={imgStyle}></div>
                        <div className="meta">
                            <h2>{vendor.title.rendered}</h2>
                            <strong>{vendor.vendor_type}</strong>
                            <p><i>{vendor.location}</i></p>
                            <p>{vendor.description}</p>
                        </div>
                        <div className="meta links">
                            {vendor.website &&
                                <a href={vendor.website} target="_blank" rel="noopener noreferrer">
                                    <img alt="website logo" src={process.env.PUBLIC_URL + "/images/website.png"} height="35" />
                                </a>
                            }
                            {vendor.instagram &&
                                <a href={vendor.instagram} target="_blank">
                                    <img alt="instagram logo" src={process.env.PUBLIC_URL + "/images/instagram.png"} height="35" />
                                </a>
                            }
                            {vendor.facebook &&
                                <a href={vendor.facebook} target="_blank" rel="noopener noreferrer">
                                    <img alt="facebook logo" src={process.env.PUBLIC_URL + "/images/facebook.png"} height="35" />
                                </a>
                            }
                        </div>
                        {<div className="like-btn">
                                {vendor.liked &&
                                <i className="large material-icons">favorite</i>
                                }
                                {!vendor.liked &&
                                <i className="large material-icons">favorite_border</i>
                                }
                            </div> 
                        }
                    </div>;
                    //console.log(markup);
                    return markup;
                })
            );
        } */

        const sortBy = (e, sortType) => { //updates state in this Component
            if (sortType === "vendorType") {
                /* this.setState({
                    vendorType: e.target.value
                }, () => this.filterVendors()); */
            } else if (sortType === "location") {
                /* this.setState({
                    location: e.target.value
                }, () => this.filterVendors()); */
            }
        }

        return (
            <Fragment>
                <VendorFilters />
                <ul>
                    {data.map((vendor, i) => {
                        return <VendorCard key={i} vendor={vendor} />
                    })}
                </ul>
            </Fragment>
        );
    } else {
        return <h3>Loading...</h3>
    }
};

export async function getServerSideProps(context) {
    console.log("getting server side props");
    try {
        //console.log("tried");
        const cookies = nookies.get(context);
        const token = await verifyIdToken(cookies.token);
        const {uid, email} = token;
        return {
            props: {session: `Email: ${email} IUD: ${uid}`}
        }
    } catch (err) {
        //console.log("err: ", err);
        context.res.writeHead(302, {location: "/login"});
        context.res.end();
        return (
            { props: [] }
        )
    }
}

export default Vendors;