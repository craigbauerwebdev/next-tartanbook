import Head from 'next/head';
import Header from "./Header";
import Footer from "./Footer";
//import Slider from "./Slider";
//import { useRouter } from 'next/router';
//import bannerData from "../util/getBannerData";

const Layout = ({children})=> {
    // Get Banner Data for Specific Page
    //const heroBannerData = bannerData();//
    //console.log(heroBannerData);
    return (
        <div className="site-wrapper">
            <Head>
                <title>Tartan Book - Tartan Weddings</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.1/css/bootstrap.min.css"
                    integrity="sha384-VCmXjywReHh4PwowAiWNagnWcLhlEJLA5buUprzK8rxFgeH0kww/aWY76TfkUoSX" crossorigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@700&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
            </Head>
            <main>
                <Header />
                {/* {heroBannerData.banner && <Slider {...heroBannerData} />} */}
                <div className="content">
                    {children}
                </div>
                <Footer />
            </main>
            <style jsx global>
                {`
                    html,
                    body {
                    padding: 0;
                    margin: 0;
                    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                        Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
                        sans-serif;
                    }

                    * {
                    box-sizing: border-box;
                    }

                    h1 {
                        font-family: Arial;
                    }
                `}
            </style>

        </div>
    );
}

export default Layout;
