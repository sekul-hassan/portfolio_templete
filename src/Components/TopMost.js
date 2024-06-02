import React from 'react';
import {Card, CardBody, CardFooter, Col, Container, Row} from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import react from "../Assets/Images/react.jpg";
import java from "../Assets/Images/java.jpg";

function TopMost(props) {
    const text1 = " Lorem ipsum dolor sit amet, consectetur adipisicing elit. At explicabo laboriosam nam, officiis reprehenderit sapiente."
    const text2 = " Lorem ipsum dolor sit amet, consectetur adipisicing elit. At explicabo laboriosam nam, officiis reprehenderit sapiente."
    return (
       <Container fluid="true" className="mt-4 mx-3">
           <Row>
               <h4 className="title">Top most three projects</h4>
               <Col lg={4} md={4} sm={6}>
                  <ProjectCard image={react} text={text1}/>
               </Col>
               <Col lg={4} md={4} sm={6}>
                   <ProjectCard image={react} text={text2}/>
               </Col>
               <Col lg={4} md={4} sm={6}>
                   <ProjectCard image={java} text={text1}/>
               </Col>
           </Row>
       </Container>
    );
}

export default TopMost;
