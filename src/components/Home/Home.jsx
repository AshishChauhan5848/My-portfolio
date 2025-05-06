import React from "react";
import { motion } from "framer-motion";
import { assets } from "../../assets/assets.js";

import "./Home.css";
import Intro from "../../assets/Intro.jpg";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  const animation = {
    h2: {
      initial: {
        x: "-50%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: "-50%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };

  return (
    <div className="home">
      <div className="home-all">
        <div id="home" className="image-wrapper">
          <img className="background-img" src={Intro} alt="Img" />
          <div className="text">
            <div className="overlay-text">
              <motion.h2 {...animation.h2}>
                Hi, I Am <br /> Ashish Chauhan
              </motion.h2>
              
                <span className="typewriterpara">
                  <Typewriter
                    
                    words={["A Developer...", "A Designer..."]}
                    loop={60}
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
            
              <div className="home-buttons">
                <motion.button {...animation.button}>
                  <a href="mailto:chauhanashish5555@gmail.com">Hire Me</a>
                </motion.button>
                <motion.button {...animation.button}>
                  <a href={assets.CV} download>
                    Download CV
                  </a>
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
