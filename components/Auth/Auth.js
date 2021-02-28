import React, { useEffect, useState, useContext, createContext } from "react";
import nookies from "nookies";
import firebaseClient from "./firebaseClient";
import firebase from "firebase/app";
import "firebase/auth";
//import Cookies from "js-cookie";

const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
    firebaseClient();
    const [user, setUser] = useState(null);

    useEffect(() => {
        return firebase.auth().onIdTokenChanged( async (user) => {
            if(!user) {
                
                setUser(null);
                // set cookie on login doesn't seem to work on vercel
                nookies.set(undefined, "token", "", {});
                //Cookies.set("token", token);
                return;
            }
            const token = await user.getIdToken();
            setUser(user);
            //Cookies.set("token", token);
            nookies.set(undefined, "token", token, {});
        })
    }, [])
    return (
        <AuthContext.Provider value={{user}}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);
