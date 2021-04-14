import React from "react";
import home1 from "../image/home1.png";

const AboutSection = () => {
  return (
    <div>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>We Work to Make</h2>
          </div>
          <div className="hide">
            <h2>
              your <span>Dreams</span> come
            </h2>
          </div>
          <div className="hide">
            <h2>True</h2>
          </div>
        </div>
        <p>
          Contact Us for any Photography or Videography ideas that you Have. We
          have Professinals with amazing Skills
        </p>
        <button>Contact US</button>
      </div>
      <div className="image">
        <img src={home1} alt="Guy with Camera" />
      </div>
    </div>
  );
};

export default AboutSection;
