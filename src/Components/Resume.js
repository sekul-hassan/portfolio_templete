import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import img1 from "../Assets/Images/software.jpg";

function Resume(props) {
    return (
        <Container fluid="true" className="mt-3 px-4 text-start text-light">
            <Row className="resumeBody">
                <Col className="resumeLeft py-2" sm={5} md={5} lg={5}>
                    <img className="resumeProfile" src={img1} alt=""/>
                    <h3 className="title text-light text-start">CONTACT</h3>
                    <hr className="hrClass"/>

                    <h3 className="title text-light text-start">Portfolio</h3>
                    <a className="description text-light" href="#">https://sekul.recursiveeducation.com</a>

                    <h3 className="title text-light text-start mt-2">Phone</h3>
                    <h3 className="description text-light">017xxxxxxxxx</h3>

                    <h3 className="title text-light text-start mt-2">Email</h3>
                    <a className="description text-light" href="#">sekulhassan3031@gmail.com</a>

                    <h3 className="title text-light text-start mt-2">Github</h3>
                    <a className="description text-light" href="#">https://sekul.recursiveeducation.com</a>

                    <h3 className="title text-light text-start mt-2">LinkedIn</h3>
                    <a className="description text-light" href="#">https://sekul.recursiveeducation.com</a>

                    <h3 className="title text-light text-start mt-2">Address</h3>
                    <h3 className="description text-light">JU, Saver, Dhaka</h3>

                    <h3 className="title text-light text-start">EDUCATION</h3>
                    <hr className="hrClass"/>

                    <h3 className="globalTitle text-light">2019 H.S.C</h3>
                    <h3 className="description text-light">Netrakona Govt. College</h3>

                    <h3 className="globalTitle text-light">2024 B.sc in CSE</h3>
                    <h3 className="description text-light">Jahangirnagar University</h3>

                    <h3 className="title text-light text-start">EXPERTISE</h3>
                    <hr className="hrClass"/>

                    <ol className="text-light mx-0 px-3 description">
                        <li>Problem Solving</li>
                        <li>DSA</li>
                        <li> Git & Github, CI/CD, Docker</li>
                        <li> Managing Cloud Server</li>
                        <li>C, C++, Java</li>
                        <li> DBMS MySql</li>
                        <li>bKash API integration</li>
                        <li> HTML, CSS, Bootstrap,Javascript</li>
                        <li>React</li>
                        <li>Spring Boot</li>
                    </ol>

                </Col>
                <Col sm={7} md={7} lg={7}>
                    <h3 className="title text-start">SEKUL HASSAN</h3>
                    <h3 className="globalTitle">Software Engineer</h3>
                    <h4 className="description">
                        Sekul Hassan is a skilled Software Engineer with a strong foundation in web development and
                        project management. With a passion for creating efficient and user-friendly solutions, Sekul has
                        demonstrated expertise in both academic and professional settings.
                    </h4>

                    <h3 className="title text-start mt-3">PROJECTS</h3>
                    <hr className="text-dark"/>

                    <h4 className="description">
                        <a className="globalTitle" href="#">Recursive Education : </a> This is a learning (Academic and
                        Software Development) platform. <br/>
                        <a href="">Live Link : </a> https://recursiveeducaion.com <br/>
                        <a href="#">Github Link : </a> https://recursiveeducaion.com <br/>
                    </h4>

                    <h4 className="description">
                        <a className="globalTitle" href="#">Mess Management :  </a> management web platform, here any one can manage his mess including Mess Member, Meal Rate, Daily Bazar Bills etc. <br/>
                        <a href="">Live Link : </a> https://recursiveeducaion.com <br/>
                        <a href="#">Github Link : </a> https://recursiveeducaion.com <br/>
                    </h4>
                    <h4 className="description">
                        <a className="globalTitle" href="#">Biye Shadi :  </a> This project is developed by inspiring Matrimoni site. After creating an account in this site any one can find out his/her life partner. <br/>
                        <a href="">Live Link : </a> https://recursiveeducaion.com <br/>
                        <a href="#">Github Link : </a> https://recursiveeducaion.com <br/>
                    </h4>

                    <h3 className="title text-start mt-3">REFERENCES</h3>
                    <hr className="text-dark"/>
                    <h4 className="description">XYZ Company xxx</h4>

                </Col>
            </Row>
        </Container>
    );
}

export default Resume;
