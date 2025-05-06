import React from "react";

import "./Projects.css";
import { assets } from "../../assets/assets.js";
import { div } from "framer-motion/client";

const projectData = [
  {
    id: 1,
    category: "React",
    img: assets.food_del,
    title: "Food delivery",
    link: "https://google.com",
  },
  {
    id: 3,
    category: "React",
    img: assets.crypto,
    title: "Crypto",
    link: "https://ashishchauhan5848.github.io/Crypto-app/",
  },
  {
    id: 2,
    category: "Website Design",
    img: assets.car2,
    title: "LONG ROAD",
    link: "https://google.com",
  },
];
const Projects = () => {
  return (
    <div id="projects" className="project">
      <div className="project-all">
        <div className="project-content">
          <hr />
          <h3>PROJECTS</h3>
        </div>
        <div className="project-content-p">
          <p>
            Here's a selection of projects I've worked on, each showcasing my
            skills, creativity, and attention to detail. From concept to
            completion, every project reflects my passion for building impactful
            and meaningful experiences. Take a look at what I've created!
          </p>
        </div>
        <div className="project-grid">
          {projectData.map((item) => (
            <div key={item.id} className="project-item">
              <img src={item.img} alt={item.category} />
              {item.title && (
                <div className="overlay">
                  <h3>{item.title}</h3> 
                  <p>{item.category}</p>
                  <a href={item.link} target="_blank">Visit me</a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
