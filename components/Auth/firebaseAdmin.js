import admin from "firebase-admin";
//import serviceAccount from "./secrets.json";

export const verifyIdToken = async (token) => {
    if(!admin.apps.length) {
        admin.initializeApp({
            credential: admin.credential.cert(
                {
                    "type": process.env.NEXT_PUBLIC_TYPE,
                    "project_id": process.env.NEXT_PUBLIC_PROJECT_ID,
                    "private_key_id": process.env.NEXT_PUBLIC_PRIVATE_KEY_ID,
                    "private_key": process.env.NEXT_PUBLIC_PRIVATE_KEY,
                    "client_email": process.env.NEXT_PUBLIC_CLIENT_EMAIL,
                    "client_id": process.env.NEXT_PUBLIC_CLIENT_ID,
                    "auth_uri": process.env.NEXT_PUBLIC_AUTH_URI,
                    "token_uri": process.env.NEXT_PUBLIC_TOKEN_URI,
                    "auth_provider_x509_cert_url": process.env.NEXT_PUBLIC_AUTH_PROVIDER_CERT_URL,
                    "client_x509_cert_url": process.env.NEXT_PUBLIC_CLIENT_CERT_URL
                }
            ),
            databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
        });
    }
    return admin
        .auth()
        .verifyIdToken(token)
        .catch((error) => {
            throw error;
        });
}
