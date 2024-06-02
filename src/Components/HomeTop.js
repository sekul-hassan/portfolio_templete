import React from 'react';
import {Button, Container} from "react-bootstrap";

function HomeTop(props) {
    return (
       <Container fluid="true" className="homeTopBackground">
           <div className="homeTopBackgroundOverlay">
               <div className="content">
                   <Button className="contactBtn">Contact Now</Button>
               </div>
           </div>
       </Container>
    );
}

export default HomeTop;
