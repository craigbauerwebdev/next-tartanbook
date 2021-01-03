//import Head from 'next/head';
import Link from "next/link";


const Slider = ({img, text})=> {

	const styles = {
		backgroundImage: `url(${img})`,
    	paddingTop: "30%",
	}
    return (
        <div className="hero-banner" style={styles}>
        	<div className="info">
            	<h1>{text}</h1>
            </div>
        </div>
    );
}



export default Slider;
