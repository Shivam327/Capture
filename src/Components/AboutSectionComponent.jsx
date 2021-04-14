import React from "react";
import home1 from "../image/home1.png";
//Style
import styled from "styled-components";

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
const About = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5rem 10rem;
  color: white;
`;

const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
`;

const Image = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

export default AboutSection;
