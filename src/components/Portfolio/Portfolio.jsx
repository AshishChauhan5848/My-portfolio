// src/components/Portfolio.jsx
import React, { useState } from "react";
import "./Portfolio.css";
import { assets } from "../../assets/assets.js";

const portfolioData = [
  { id: 1, category: "Frontend Development", img: assets.crypto },
  {
    id: 3,
    category: "Frontend Development",
    img: assets.frontend3,
  },
  {
    id: 2,
    category: "Javascript",
    img: assets.js2,
  },
  
  {
    id: 5,
    category: "Javascript",
    img: assets.calculator,
  },
  {
    id: 4,
    category: "Full Stack",
    img: assets.portfolio,
  },
  
  {
    id: 6,
    category: "Full Stack",
    img: assets.food_del,
  },
  ,

  {
    id: 7,
    category: "UI/UX Design",
    img: assets.uiux1,
  },
  ,

  {
    id: 8,
    category: "UI/UX Design",
    img: assets.uiux2,
  },
];

const categories = ["All", "Frontend Development", "Full Stack", "Javascript","UI/UX Design"];

const Portfolio = () => {
  const [active, setActive] = useState("Frontend Development");

  const filtered =
    active === "All"
      ? portfolioData
      : portfolioData.filter((item) => item.category === active);

  return (
    <div id="portfolio" className="portfolio">
      <div className="portfolio-all">
        <div className="portfolio-container">
          <div className="portfolio-content">
            <hr />
            <h3>PORTFOLIO</h3>
          </div>
          <div className="portfolio-content-p">
            <p>
              Here's a glimpse of my work — a collection of projects that
              reflect my skills, creativity, and passion. Each piece tells a
              story of learning, growth, and the pursuit of excellence. Explore
              my projects below!
            </p>
          </div>

          <div className="tabs">
            {categories.map((cat) => (
              <button
                key={cat}
                className={active === cat ? "tab active" : "tab"}
                onClick={() => setActive(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="portfolio-grid">
            {filtered.map((item) => (
              <div key={item.id} className="portfolio-item">
                <img src={item.img} alt={item.category} />
                {item.title && (
                  <div className="overlay">
                    <h3>{item.title}</h3>
                    <p>{item.category}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
