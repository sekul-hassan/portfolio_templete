import React, {Fragment} from 'react';
import NavBar from "../Components/NavBar";
import GlobalTop from "../Components/GlobalTop";
import Details from "../Components/Details";
import Footer from "../Components/Footer";

function ProjectDetails(props) {
    const text = "EXPLORE ME WITH MY PROJECTS"
    return (
       <Fragment>
           <NavBar/>
           <GlobalTop text={text}/>
           <Details/>
           <Footer/>
       </Fragment>
    );
}

export default ProjectDetails;