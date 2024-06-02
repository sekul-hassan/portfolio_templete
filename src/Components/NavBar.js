import React, {useEffect, useState} from 'react';
import {Nav, Navbar} from "react-bootstrap";
import logo from "../Assets/Images/logo.png";

function NavBar(props) {

    const[css,setCss] = useState({
        navBody:"navBody",
        navLink:"navLink",
    });

    useEffect(() => {
        function handleScroll(){
            if(window.scrollY>1){
                setCss({
                    navBody: "navBodyScroll",
                    navLink: "navLinkScroll",
                })
            }
            else{
                setCss({
                    navBody:"navBody",
                    navLink:"navLink",
                })
            }
        }

        window.addEventListener('scroll',handleScroll);

        return ()=> window.removeEventListener('scroll',handleScroll);

    }, []);

    return (
        <Navbar expand={true} fixed="top" className={css.navBody}>
            <Navbar.Brand href="#home"><img className="logo" src={logo} alt=""/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto"/>
                <Nav className="mx-3">
                    <Nav.Link className={css.navLink} href="#home">Home</Nav.Link>
                    <Nav.Link className={css.navLink} href="#link">About</Nav.Link>
                    <Nav.Link className={css.navLink} href="#link">Projects</Nav.Link>
                    <Nav.Link className={css.navLink} href="#link">Skills</Nav.Link>
                    <Nav.Link className={css.navLink} href="#link">Resume</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;
