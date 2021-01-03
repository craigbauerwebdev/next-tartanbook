import firebase from "firebase";
import "firebase/auth";

const FIREBASE_CONFIG = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_DOMAIN,
    databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASURMENT_ID
}

export default function firbaseClient() {
    if(!firebase.apps.length) {
        firebase.initializeApp(FIREBASE_CONFIG);
    }
};
