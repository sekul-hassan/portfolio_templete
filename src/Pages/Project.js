import React, {Fragment} from 'react';
import NavBar from "../Components/NavBar";
import GlobalTop from "../Components/GlobalTop";
import ProjectCard from "../Components/ProjectCard";
import Footer from "../Components/Footer";
import img1 from "../Assets/Images/java.jpg";
import img2 from "../Assets/Images/react.jpg";
import {Col, Container, Row} from "react-bootstrap";

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
                  <Col sm={12} md={6} lg={4}>
                      <ProjectCard text={text1} image={img1}/>
                  </Col>
                  <Col sm={12} md={6} lg={4}>
                      <ProjectCard text={text2} image={img2}/>
                  </Col>
                  <Col sm={12} md={6} lg={4}>
                      <ProjectCard text={text2} image={img1}/>
                  </Col>
                  <Col sm={12} md={6} lg={4}>
                      <ProjectCard text={text2} image={img2}/>
                  </Col>
               </Row>
           </Container>
           <Footer/>
       </Fragment>
    );
}

export default Project;

