import logo from './logo.svg';
import './App.css';
import {Fragment} from "react";
import Home from "./Pages/Home";
import "../src/Assets/CSS/Custom.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import About from "./Pages/About";
import Project from "./Pages/Project";
import ProjectDetails from "./Pages/ProjectDetails";
import SkillPages from "./Pages/SkillPages";
import ResumePage from "./Pages/ResumePage";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
   <BrowserRouter>
       <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path="/resume" element={ <ResumePage/>}/>
           <Route path="/about" element={ <About/>}/>
           <Route path="/project" element={ <Project/>}/>
           <Route path="/project/:projectId" element={ <ProjectDetails/>}/>
           <Route path="/skill" element={ <SkillPages/>}/>
       </Routes>

   </BrowserRouter>
  );
}

export default App;
