import React, {Fragment} from 'react';
import NavBar from "../Components/NavBar";
import GlobalTop from "../Components/GlobalTop";
import Details from "../Components/Details";
import Footer from "../Components/Footer";
import {useParams} from "react-router-dom";
import projectConfig from "../Config/ProjectConfig";
import project from "./Project";

function ProjectDetails(props) {
    const text = "EXPLORE ME WITH MY PROJECTS"

    const{projectId} = useParams();
    const project = projectConfig.find(project=> project.projectId===projectId);
    return (
       <Fragment>
           <NavBar/>
           <GlobalTop text={text}/>
           {
               project ? (
                   <Details project={project}/>
               ):(
                   <div className="container text-center mt-4 mb-2">Project not found.</div>
               )
           }
           <Footer/>
       </Fragment>
    );
}

export default ProjectDetails;