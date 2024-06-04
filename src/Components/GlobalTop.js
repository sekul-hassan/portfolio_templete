import React from 'react';
import { Container} from "react-bootstrap";

function GlobalTop({text}) {
    return (
        <Container fluid="true" className="globalTopBackground">
            <div className="globalTopBackgroundOverlay">
                <div className="content">
                   <h3 className="title text-light">{text}</h3>
                </div>
            </div>
        </Container>
    );
}

export default GlobalTop;
