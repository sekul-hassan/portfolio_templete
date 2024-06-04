import React, {Fragment} from 'react';
import NavBar from "../Components/NavBar";
import GlobalTop from "../Components/GlobalTop";
import Skills from "../Components/Skills";
import Footer from "../Components/Footer";

function SkillPages(props) {
    const text = "EXPLORE ME WITH MY SKILLS.";
    return (
       <Fragment>
           <NavBar/>
           <GlobalTop text={text}/>
           <Skills/>
           <Footer/>
       </Fragment>
    );
}

export default SkillPages;