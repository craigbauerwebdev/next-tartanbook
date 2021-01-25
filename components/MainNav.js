//import Head from 'next/head';
import { useAuth } from "./Auth/Auth";
import firebase from "firebase/app";
import { useRouter } from 'next/router';
import Link from "next/link";

const MainNav = ({children})=> {
	const { user } = useAuth();
	const router = useRouter();
    return (
        <nav>
            <ul>
            	<li>
            		<Link href="/">
            			<a>Home</a>
            		</Link>
            	</li>
				{user &&
					<li>
						<Link href="/vendors">
							<a>Vendors</a>
						</Link>
					</li>
				}
            	<li>
					<Link href="/contact">
						Contact
					</Link>
				</li>
				{!user &&
					<li>
						<Link href="/login">
							<a>Login</a>
						</Link>
					</li>
				}
				{user &&
					<li
						onClick={
							async () => {
								await firebase.auth().signOut();
								router.push('/login');
							}
						}
					>
						Logout
					</li>
				}
            </ul>
        </nav>
    );
}



export default MainNav;
