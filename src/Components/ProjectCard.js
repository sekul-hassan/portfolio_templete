import React from 'react';
import {Card, CardBody, CardFooter} from "react-bootstrap";

function ProjectCard({image,text}) {
    return (
        <Card className="mt-3">
            <CardBody className="cardBody p-0">
                <img className="projectCardImg" src={image} alt=""/>
            </CardBody>
            <CardFooter className="cardFooter">
                {text}
            </CardFooter>
        </Card>
    );
}

export default ProjectCard;
