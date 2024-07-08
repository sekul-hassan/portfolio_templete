import React from 'react';
import {Card, CardBody, CardFooter} from "react-bootstrap";
import {Link} from "react-router-dom";

function ProjectCard({image,text,projectId}) {
    return (
        <Link to={`/project/${projectId}`}>
            <Card className="mt-3">
                <CardBody className="cardBody p-0">
                    <img className="projectCardImg" src={image} alt=""/>
                </CardBody>
                <CardFooter className="cardFooter">
                    {text}
                </CardFooter>
            </Card>
        </Link>
    );
}

export default ProjectCard;
