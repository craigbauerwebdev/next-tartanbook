//import Head from 'next/head';
//import Link from "next/link";
import React, {Fragment} from "react";
import MainNav from "./MainNav";

const Header = ({children})=> {
    return (
        <Fragment>
            <header>
                <img alt="tartanbook logo" className="logo" src="/images/tb-logo.png" />
                <div className="mobile-menu-icon">&#9776;</div>
                {/* <button onClick={() => app.auth().signOut()}>Sign Out</button> */}
                <MainNav />
                {/* <MobileNav /> */}
            </header>
        </Fragment>
    );
}



export default Header;
