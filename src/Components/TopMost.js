import React from 'react';
import {Card, CardBody, CardFooter, Col, Container, Row} from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import react from "../Assets/Images/react.jpg";
import java from "../Assets/Images/java.jpg";
import projectConfig from "../Config/ProjectConfig";

function TopMost(props) {
    const text1 = " Lorem ipsum dolor sit amet, consectetur adipisicing elit. At explicabo laboriosam nam, officiis reprehenderit sapiente."
    const text2 = " Lorem ipsum dolor sit amet, consectetur adipisicing elit. At explicabo laboriosam nam, officiis reprehenderit sapiente."

    const threeProjects = projectConfig.slice(0,2);

    return (
       <Container fluid="true" className="mt-4 mx-3">
           <Row>
               <h4 className="title">Top most three projects</h4>
               {
                   threeProjects && threeProjects.map((project,idx)=>(
                       <Col lg={4} md={4} sm={6}>
                           <ProjectCard image={project.demoImage} text={project.description} projectId={project.projectId}/>
                       </Col>
                   ))
               }

           </Row>
       </Container>
    );
}

export default TopMost;
