import React from 'react';
import {Container} from "react-bootstrap";
import aboutConfig from "../Config/AboutConfig";

function AboutContent(props) {
    return (
        <Container fluid="true" className="mt-3">
            <div className="text-center">
                <div className="imgDiv">
                    {
                        aboutConfig && (
                            <img src={aboutConfig.image} alt=""/>
                        )
                    }
                </div>
                <h3 className="title mt-3">{aboutConfig.name}</h3>
                <a className="boldDes" href="#">{aboutConfig.description}</a>
            </div>
            <div className="mt-4 px-4">
                <p className="description">
                    <span className="globalTitle">University :</span> {aboutConfig.university
                }
                </p>
                <p className="description">
                    <span className="globalTitle">College :</span> {aboutConfig.college
                }
                </p>
                <p className="description">
                    <span className="globalTitle"> School :</span> {aboutConfig.school}
                </p>
                <p className="description">
                    <span className="globalTitle"> Current Address : </span> {aboutConfig.current_address}
                </p>
                <p className="description">
                    <span className="globalTitle">Permanent Address : </span>{aboutConfig.permanent_address}
                </p>
                <p className="description">
                    <span className="globalTitle">Religion : </span>{aboutConfig.religion}
                </p>
                <p className="description">
                    <span className="globalTitle">Marital Status : </span>{aboutConfig.martial_status}
                </p>
                <p className="description">
                    <span className="globalTitle">Date of Birth : </span>{aboutConfig.dob}
                </p>
                <p className="description">
                    <span className="globalTitle">Contact Number : </span>{aboutConfig.number}
                </p>
                <p className="description">
                    <span className="globalTitle">Email : </span><a className="text-decoration-none" href="">{aboutConfig.email}</a>
                </p>
                <p className="description">
                    <span className="globalTitle">LinkedIn : </span><a className="text-decoration-none" href="">{aboutConfig.linkedIn}</a>
                </p>
                <p className="description">
                    <span className="globalTitle">Github : </span><a className="text-decoration-none" href="">{aboutConfig.gitHub}</a>
                </p>
            </div>
        </Container>
    );
}

export default AboutContent;
