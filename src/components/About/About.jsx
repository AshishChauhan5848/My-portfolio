import React from "react";
import "./About.css";

import about from "../../assets/about.jpg";

const About = () => {
  return (
    <div id="about" className="About">
      <div className="about-all">
        <div className="about-content">
          <hr />
          <h3>ABOUT</h3>
        </div>
        <div className="about-content-p">
          <p>
            My portfolio is a reflection of my journey — every project here
            tells a story of growth, learning, and innovation. In this
            portfolio, you'll find a collection of my favorite projects — each
            one a reflection of my commitment to quality, creativity, and
            continuous learning.
          </p>
        </div>
        <div className="img-details">
          <div className="img-tag">
            <img src={about} alt="img" />
          </div>
          <div className="details-h-p">
            <h3>
              Hello world, I am&nbsp;
              <span>
                Ashish Chauhan <br />
              </span>
              Full stack developer & designer
            </h3>
            <p>
              Over the past few years, I have worked on diverse projects that
              helped me sharpen my skills, expand my creativity, and better
              understand how to turn ideas into reality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
