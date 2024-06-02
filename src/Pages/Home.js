import React, {Fragment} from 'react';
import HomeTop from "../Components/HomeTop";
import TopMost from "../Components/TopMost";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

function Home(props) {
    return (
       <Fragment>
           <NavBar/>
           <HomeTop/>
           <TopMost/>
           <Footer/>
       </Fragment>
    );
}

export default Home;
