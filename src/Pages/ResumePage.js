import React, {Fragment} from 'react';
import NavBar from "../Components/NavBar";
import GlobalTop from "../Components/GlobalTop";
import Resume from "../Components/Resume";
import Footer from "../Components/Footer";

function ResumePage(props) {
    const text = "EXPLORE ME WITH MY RESUME."
    return (
        <Fragment>
            <NavBar/>
            <GlobalTop text={text}/>
            <Resume/>
            <Footer/>
        </Fragment>
    );
}

export default ResumePage;