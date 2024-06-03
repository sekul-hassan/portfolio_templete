import React, {Fragment} from 'react';
import GlobalTop from "../Components/GlobalTop";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import AboutContent from "../Components/AboutContent";

function About(props) {
    return (
        <Fragment>
            <NavBar/>
            <GlobalTop/>
            <AboutContent/>
            <Footer/>
        </Fragment>
    );
}

export default About;