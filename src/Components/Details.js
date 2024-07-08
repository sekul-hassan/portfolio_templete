import React from 'react';
import {Carousel, Col, Container, Row} from "react-bootstrap";
import img1 from "../Assets/Images/software.jpg"
import img2 from "../Assets/Images/java.jpg"
import img3 from "../Assets/Images/react.jpg"

function Details({project}) {
    return (
        <Container fluid="true" className="mt-3">
            <Row>
               <Col className="sliderCol" sm={12} md={6} lg={6}>
                   <h3 className="title">FEATURE IMAGES</h3>
                   <Carousel>
                       {
                           project && project.images.map((image,idx)=>(
                               <Carousel.Item>
                                   <img className="slideImg" src={image} alt=""/>
                               </Carousel.Item>
                           ))
                       }

                   </Carousel>
               </Col>
               <Col className="sliderCol" sm={12} md={6} lg={6}>
                   <h3 className="title">{project.projectName}</h3>
                   <p className="description">
                       {project.description}
                   </p>
                   <p>Github Link : <a href="https://github.com/sekul-hassan"> {project.gitHubLink}</a></p>
                   <p>Live Link : <a href="https://github.com/sekul-hassan"> {project.projectLink}</a></p>
               </Col>
            </Row>
        </Container>
    );
}

export default Details;