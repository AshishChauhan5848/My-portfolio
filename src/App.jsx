import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Portfolio from "./components/portfolio/Portfolio";
import Projects from "./components/Projects/Projects";
import { ToastContainer, toast } from 'react-toastify';
const App = () => {
  return (
    <div className="App">
      <Navbar />
      <ToastContainer/>
      <Home />
      <About />
      <Portfolio />
      <Skills />
      <Projects/>
      <Contact />

    </div>
  );
};

export default App;
