import logo from './logo.svg';
import './App.css';
import {Fragment} from "react";
import Home from "./Pages/Home";
import "../src/Assets/CSS/Custom.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import About from "./Pages/About";
import Project from "./Pages/Project";

function App() {
  return (
   <Fragment>
     <Project/>
   </Fragment>
  );
}

export default App;
