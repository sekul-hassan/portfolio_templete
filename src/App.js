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

function App() {
  return (
   <Fragment>
     <SkillPages/>
   </Fragment>
  );
}

export default App;
