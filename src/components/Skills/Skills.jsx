import React from "react";

import Cards from "../Cards/Cards";
import "./skills.css";

const Skills = () => {
  return (
    <div className="skills">
      <div className="skills-all">
        <div className="skill-content">
          <hr />
          <h3>SKILLS</h3>
        </div>
        <div className="para">
          <p>
            I bring a versatile set of skills to the table, combining
            creativity, technical expertise, and a passion for continuous
            learning. Here are some of the tools and technologies I work with:
          </p>
        </div>
        <div className="cards">
          <Cards />
        </div>
      </div>
    </div>
  );
};

export default Skills;
