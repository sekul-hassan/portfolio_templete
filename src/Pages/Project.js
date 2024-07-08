import React, {Fragment} from 'react';
import NavBar from "../Components/NavBar";
import GlobalTop from "../Components/GlobalTop";
import ProjectCard from "../Components/ProjectCard";
import Footer from "../Components/Footer";
import img1 from "../Assets/Images/java.jpg";
import img2 from "../Assets/Images/react.jpg";
import {Col, Container, Row} from "react-bootstrap";
import projectConfig from "../Config/ProjectConfig";

function Project(props) {
   const text = "EXPLORE ME WITH MY PROJECTS";
   const text1 = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa explicabo impedit, libero minima nemo veniam?"
   const text2 = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa explicabo impedit, libero minima nemo veniam?"
    return (
       <Fragment>
           <NavBar/>
           <GlobalTop text={text}/>
           <Container fluid="true" className="px-3">
               <Row>

                      {
                          projectConfig && projectConfig.map((project,idx)=>(
                              <Col sm={12} md={6} lg={4}>
                                    <ProjectCard text={project.description} image={project.demoImage} projectId={project.projectId}/>
                              </Col>
                          ))
                      }
               </Row>
           </Container>
           <Footer/>
       </Fragment>
    );
}

export default Project;

