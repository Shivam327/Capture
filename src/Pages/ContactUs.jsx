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
              <a href="https://wa.me/+917738822023">
                Send Us a Message on Whatsapp
              </a>
            </h2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <h2>
              <a href="mailto:Shivamthaker1999@gmail.com">Send an Email</a>
            </h2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <SocialIcon>
              <a href="https://instagram.com/shivam.k.thaker">
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
    h2 {
      font-size: 2rem;
    }
  }
`;
const Title = styled.div`
  margin-bottom: 4rem;
  color: black;

  @media (max-width: 1500px) {
    margin-top: 5rem;
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
    margin: 2rem;
    font-size: 3.5rem;
  }
  a:hover {
    color: #23d997;
  }
  @media (max-width: 1500px) {
    h2 {
      font-size: 2rem;
    }
  }
`;
const SocialIcon = styled(motion.div)`
  display: flex;
  font-size: 1.5rem;
  width: 50%;
  padding: 1.5rem 2rem;
  justify-content: space-between;

  a {
    padding: 0rem 1rem;
    font-size: 5rem;
    color: black;
  }
  a:hover {
    color: #23d997;
  }
  @media (max-width: 1500px) {
    width: 100;
    a {
      padding-left: 2rem;
      font-size: 2rem;
    }
  }
`;
const Line = styled(motion.div)`
  height: 0.5rem;
  background: #23d997;
  width: 25%;
`;

export default ContactUs;
