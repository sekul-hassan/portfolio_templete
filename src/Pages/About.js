import React from 'react';
import GlobalTop from "../Components/GlobalTop";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import AboutContent from "../Components/AboutContent";

function About(props) {
    const text = "ALL INFORMATION ABOUT MYSELF"
    return (
        <div>
            <NavBar/>
            <GlobalTop text={text}/>
            <AboutContent/>
            <Footer/>
        </div>
    );
}

export default About;