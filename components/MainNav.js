//import Head from 'next/head';
import Link from "next/link";

const MainNav = ({children})=> {
    return (
        <nav>
            <ul>
            	<li>
            		<Link href="/">
            			<a>Home</a>
            		</Link>
            	</li>
            	<li>
            		<Link href="/vendors">
            			<a>Vendors</a>
            		</Link>
            	</li>
				<li>
					<Link href="/login">
						<a>Login</a>
					</Link>
				</li>
				<li>
					<Link href="/authenticated">
						<a>Authenticated</a>
					</Link>
				</li>
            	<li>Contact</li>
            </ul>
        </nav>
    );
}



export default MainNav;
