import React from "react";

import "./Navbar.css";

import {assets}  from '../../assets/assets.js'

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="Navbar-all">
        <div className="ashish-name ">
          <h2>ashish.</h2>
        </div>

        <div className="Navbar-list">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="email-button">
          <a href="mailto:chauhanashish5555@gmail.com">
            <img src={assets.email} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
