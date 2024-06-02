import React, {Fragment} from 'react';
import {Navbar} from "react-bootstrap";
import GlobalTop from "../Components/GlobalTop";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";

function About(props) {
    return (
        <Fragment>
            <NavBar/>
            <GlobalTop/>
            <Footer/>
        </Fragment>
    );
}

export default About;