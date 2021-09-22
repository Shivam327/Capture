import React from "react";
//Animation
import { motion } from "framer-motion";
import { pageAnimation, titleAnim } from "../Animation";
import styled from "styled-components";
import ScrollTop from "../Components/ScrollTop";

const ContactUs = () => {
  return (
    <ContactStyle
      style={{ background: "#fff" }}
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Title>
        <Hide>
          <motion.h2 variants={titleAnim}> Get in Touch</motion.h2>
          <Line></Line>
        </Hide>
      </Title>
      <div>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <h2>
              <a href="www.google.com">Send Us a Message</a>
            </h2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <h2>
              <a href="mailto:">Send an Email</a>
            </h2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <SocialIcon>
              {/* <a href="https://instagram.com/shivam.k.thaker">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://twitter.com/shivamthaker3">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="www.linkedin.com/in/thakershivam">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/Shivam327">
                <i className="fab fa-github"></i>
              </a> */}
              <a href="https://instagram.com/">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://twitter.com/">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="www.linkedin.com/in/">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/">
                <i className="fab fa-github"></i>
              </a>
            </SocialIcon>
          </Social>
        </Hide>
      </div>

      <ScrollTop />
    </ContactStyle>
  );
};
const ContactStyle = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
  a {
    font-size: 4.5rem;
    text-decoration: none;
    color: black;
  }
  @media (max-width: 1500px) {
    padding: 2rem;
  }
`;
const Title = styled.div`
  margin-bottom: 4rem;
  color: black;
  h2 {
    font-size: 5rem;
  }
  @media (max-width: 1500px) {
    margin-top: 5rem;
    h2 {
      font-size: 4rem;
    }
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;
const Circle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: #353535;
  @media (max-width: 1500px) {
    width: 1.5rem;
    height: 1.5rem;
  }
`;
const Social = styled(motion.div)`
  display: flex;
  align-items: center;

  h2 {
    padding: 2rem;
    margin: 0 1.5rem;
  }
  a {
    font-size: 3.5rem;
  }
  a:hover {
    color: #23d997;
  }
  @media (max-width: 1500px) {
    a {
      font-size: 2rem;
    }
  }
`;
const SocialIcon = styled(motion.div)`
  display: flex;
  width: 75%;
  padding: 2rem 0rem;
  margin: 0 1.5rem;
  justify-content: flex-start;

  a {
    padding: 0rem 1.5rem;
    font-size: 3.5rem;
    color: black;
  }
  a:hover {
    color: #23d997;
  }
  @media (max-width: 1500px) {
    margin: 0rem 1.5rem;
    a {
      padding: 1rem;
      font-size: 2.5rem;
    }
  }
`;
const Line = styled(motion.div)`
  height: 0.5rem;
  background: #23d997;
  width: 75%;
`;

export default ContactUs;
