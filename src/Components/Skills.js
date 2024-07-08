import React from 'react';
import {Container} from "react-bootstrap";
import skillConfig from "../Config/SkillConfig";

function Skills(props) {
    return (
        <Container className="mt-3">
            {
                skillConfig && skillConfig.map((skill,idx)=> (
                    <p className="description"><span className="globalTitle">{skill.name}</span>{skill.description}</p>
                ))
            }
        </Container>
    );
}

export default Skills;
