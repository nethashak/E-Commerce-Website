import React from "react";
import "./Parallax.css"; // Import styles

const ParallaxSection = ({ image, text }) => {
  return (
    <div className="parallax-container">
      <div className="parallax" style={{ backgroundImage: `url(${heroImage})` }}></div>
      <div className="parallax-content">
        <h2>{text}</h2>
      </div>
    </div>
  );
};

export default ParallaxSection;
