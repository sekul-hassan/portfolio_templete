import React from 'react';
import {Container} from "react-bootstrap";
import image from "../Assets/Images/software.jpg";

function AboutContent(props) {
    return (
        <Container fluid="true" className="mt-3">
            <div className="text-center">
                <div className="imgDiv">
                    <img src={image} alt=""/>
                </div>
                <h3 className="title mt-3">SEKUL HASSAN</h3>
                <a className="boldDes" href="#">CEO of Recursive Education</a>
            </div>
            <div className="mt-4 px-4">
                <p className="description">
                    <span className="globalTitle">University :</span> Under graduate student at Jahangirnagar University
                    (Department of Computer Science of Engineering).
                </p>
                <p className="description">
                    <span className="globalTitle">College :</span> Netrakona Govt. Collage
                </p>
                <p className="description">
                    <span className="globalTitle"> School :</span> Bekhoir Hati N.K High School Kendua, Netrakona
                </p>
                <p className="description">
                    <span className="globalTitle"> Current Address : </span> Jahangirnagar University, Savar, Dhaka
                </p>
                <p className="description">
                    <span className="globalTitle">Permanent Address : </span>Challisha Koreha, Gouripur , Mymenshingh
                </p>
                <p className="description">
                    <span className="globalTitle">Religion : </span>Islam
                </p>
                <p className="description">
                    <span className="globalTitle">Marital Status : </span>Un married
                </p>
                <p className="description">
                    <span className="globalTitle">Date of Birth : </span>25 February 2001
                </p>
                <p className="description">
                    <span className="globalTitle">Contact Number : </span>01824340471
                </p>
                <p className="description">
                    <span className="globalTitle"></span>
                </p>
                <p className="description">
                    <span className="globalTitle">Email : </span><a className="text-decoration-none" href="">sekulhassan3031@gmail.com</a>
                </p>
                <p className="description">
                    <span className="globalTitle">LinkedIn : </span><a className="text-decoration-none" href="">https://linkedid.com/in/sekul-hassan</a>
                </p>
                <p className="description">
                    <span className="globalTitle">Github : </span><a className="text-decoration-none" href="">https://github.com/sekul-hassan</a>
                </p>
            </div>
        </Container>
    );
}

export default AboutContent;
