import React from "react";
import nookies from "nookies";
import {verifyIdToken} from "../components/Auth/firebaseAdmin";
import firebaseClient from "../components/Auth/firebaseClient";
//import firebase from "firebase/app";
import "firebase/auth"; //for sign out
//import secrets from "../components/Auth/secrets";

function Authenticated({session}) {
    firebaseClient();
    //console.log(JSON.stringify(secrets));
    if(session) {
        //console.log("session exists");
        //console.log(secrets);
        //console.log(JSON.stringify(secrets));
        return (
        <div>
            <h1>Authenticated Content</h1>
            <div>{session}</div>

            {/* <p>yay!!!</p> */}
            
            {/* <button onClick={async()=>{
                await firebase.auth().signout();
                //window.location.href = "/"
            }}>Sign Out</button> */}
        </div>
        );
    } else {
        return <h3>Loading...</h3>
    }
};

export async function getServerSideProps(context) {
    console.log("getting server side props");
    try {
        console.log("tried");
        const cookies = nookies.get(context);
        const token = await verifyIdToken(cookies.token);
        const {uid, email} = token;
        return {
            props: {session: `Email: ${email} IUD: ${uid}`}
        }
    } catch (err) {
        console.log("err: ", err);
        context.res.writeHead(302, {location: "/login"});
        context.res.end();
        return (
            { props: [] }
        )
    }
}

export default Authenticated;