import React from "react";
import nookies from "nookies";
import {verifyIdToken} from "../components/Auth/firebaseAdmin";
import firebaseClient from "../components/Auth/firebaseClient";
//import firebase from "firebase/app";
import "firebase/auth"; //for sign out
import { useAuth } from "../components/Auth/Auth";
import VendorCard from '../components/VendorCard';
import useSWR from 'swr';
//import secrets from "../components/Auth/secrets";

const fetcher = (url) => fetch(url).then((res) => res.json())
function Vendors({session}) {
    const { user } = useAuth();
    console.log(user);
    const { data, error } = useSWR('/api/vendors', fetcher);

    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>

    firebaseClient();

    if(session) {
        return (
            <ul>
                {data.map((r, i) => {
                    return <VendorCard key={i} recipe={r} />
                    //return <h1>{p.title.rendered}</h1>
                })}
            </ul>
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