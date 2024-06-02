import React from 'react';
import {Container} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faGithub, faLinkedin, faYoutube} from "@fortawesome/free-brands-svg-icons";

function Footer(props) {
    return (
       <Container fluid="true" className="mt-3 text-center">
           <div className="iconDiv">
               <a className="footerLink" href=""><FontAwesomeIcon icon={faLinkedin}/></a>
               <a className="footerLink" href=""><FontAwesomeIcon icon={faGithub}/></a>
               <a className="footerLink" href=""><FontAwesomeIcon icon={faFacebook}/></a>
               <a className="footerLink" href=""><FontAwesomeIcon icon={faYoutube}/></a>
           </div>
           <div className="footerCredit">
               <p className="m-0">© 2024 <a className="footerCreditLink" href="">recursiveeducation.com</a></p>
           </div>
       </Container>
    );
}

export default Footer;
