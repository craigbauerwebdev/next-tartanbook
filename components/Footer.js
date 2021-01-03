import firebase from "firebase/app";
import { useAuth } from "../components/Auth/Auth";
import { useRouter } from 'next/router';

const Footer = ({children})=> {
    const { user } = useAuth();
    const router = useRouter();
    return (
        <footer>
            <p>&copy; Tartan Book</p>
            {user ?
            <button
                onClick={
                    async () => {
                        await firebase.auth().signOut();
                        router.push('/login');
                    }  
                }
            >
                Signout
            </button> :
            ""}
        </footer>
    );
}

export default Footer;
