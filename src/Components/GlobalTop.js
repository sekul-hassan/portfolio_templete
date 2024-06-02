import React from 'react';
import { Container} from "react-bootstrap";

function GlobalTop(props) {
    return (
        <Container fluid="true" className="globalTopBackground">
            <div className="globalTopBackgroundOverlay">
                <div className="content">
                   <h3 className="title text-light">ALL INFORMATION ABOUT MYSELF</h3>
                </div>
            </div>
        </Container>
    );
}

export default GlobalTop;
