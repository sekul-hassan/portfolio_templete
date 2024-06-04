import React from 'react';
import {Carousel, Col, Container, Row} from "react-bootstrap";
import img1 from "../Assets/Images/software.jpg"
import img2 from "../Assets/Images/java.jpg"
import img3 from "../Assets/Images/react.jpg"

function Details(props) {
    return (
        <Container fluid="true" className="mt-3">
            <Row>
               <Col className="sliderCol" sm={12} md={6} lg={6}>
                   <h3 className="title">FEATURE IMAGES</h3>
                   <Carousel>
                       <Carousel.Item>
                           <img className="slideImg" src={img1} alt=""/>
                       </Carousel.Item>
                       <Carousel.Item>
                           <img className="slideImg" src={img2} alt=""/>
                       </Carousel.Item>
                       <Carousel.Item>
                           <img className="slideImg" src={img3} alt=""/>
                       </Carousel.Item>
                   </Carousel>
               </Col>
               <Col className="sliderCol" sm={12} md={6} lg={6}>
                   <h3 className="title">REACT PROJECT</h3>
                   <p className="description">
                       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos exercitationem fuga molestias nemo nihil repellendus repudiandae saepe voluptatum! Amet eligendi facere laborum omnis ullam. Accusamus deleniti illo incidunt porro quos.
                   </p>
                   <p>Github Link : <a href="https://github.com/sekul-hassan"> https://github.com/sekul-hassan</a></p>
                   <p>Live Link : <a href="https://github.com/sekul-hassan"> https://github.com/sekul-hassan</a></p>
               </Col>
            </Row>
        </Container>
    );
}

export default Details;