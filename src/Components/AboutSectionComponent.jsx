/* eslint-disable no-unused-vars */
import React from "react";
import home1 from "../image/home1.png";
//Style
import styled from "styled-components";
import { About, Description, Hide, Image } from "../styles";
const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <h2>We Work to Make</h2>
          </Hide>
          <Hide>
            <h2>
              your <span>Dreams</span> come
            </h2>
          </Hide>
          <Hide>
            <h2>True</h2>
          </Hide>
        </div>
        <p>
          Contact Us for any Photography or Videography ideas that you Have. We
          have Professinals with amazing Skills
        </p>
        <button>Contact US</button>
      </Description>
      <Image>
        <img src={home1} alt="Guy with Camera" />
      </Image>
    </About>
  );
};

//Styled Component

export default AboutSection;
