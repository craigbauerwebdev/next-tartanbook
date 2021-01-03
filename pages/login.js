import { useState } from "react";
import firebaseClient from "../components/Auth/firebaseClient";
import firebase from "firebase/app";
import "firebase/auth";
import { useRouter } from 'next/router';

export default function login() {
    firebaseClient();
    //const toast = useToast();
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const router = useRouter();

    return (
        <div className="login-page">
            <div className="form-wrap">
                <h1>LogIn</h1>
                <label>
                    Email
                </label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} name="email" type="email" placeholder="Email" />

                <label>
                    Password
                </label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} name="password" type="password" placeholder="Password" />
                <button 
                    onClick={async () => {
                        await firebase.auth().signInWithEmailAndPassword(email, pass)
                        .then(() => {
                            router.push('/vendors');   
                        })
                        .catch((error) => {
                            console.log(error.message);
                        })
                    }}
                >
                    Log In
                </button>
            </div>
        </div>
    )

}
