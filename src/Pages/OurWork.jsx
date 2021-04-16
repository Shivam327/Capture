import React from "react";
import { Link } from "react-router-dom";
//Images
import athlete from "../image/athlete-small.png";
import theracer from "../image/theracer-small.png";
import goodtimes from "../image/goodtimes-small.png";
import styled from "styled-components";
//Animation
import { motion } from "framer-motion";
import {
  pageAnimation,
  fade,
  photoAnim,
  LineAnim,
  slider,
  slidercontainer,
} from "../Animatiom";

const OurWork = () => {
  return (
    <Work
      style={{ background: "#fff" }}
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <motion.div variants={slidercontainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>

      <Movie>
        <motion.h2 variants={fade}>The Athlete</motion.h2>
        <motion.div variants={LineAnim} className="line"></motion.div>
        <Link to="/work/the-athlete">
          <Hide>
            <motion.img variants={photoAnim} src={athlete} alt="athlete" />
          </Hide>
        </Link>
      </Movie>
      <Movie>
        <h2>The Racer</h2>
        <div className="line"></div>
        <Link to="/work/the-racer">
          <img src={theracer} alt="theracer" />
        </Link>
      </Movie>
      <Movie>
        <h2>The Good Time</h2>
        <div className="line"></div>
        <Link to="/work/good-times">
          <img src={goodtimes} alt="goodtimes" />
        </Link>
      </Movie>
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  @media (max-width: 1300px) {
    padding: 2rem 2rem;
  }
  h2 {
    padding: 1rem 0rem;
  }
`;
let Movie = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

let Hide = styled.div`
  overflow: hidden;
`;

let Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 0%;
  width: 100%;
  height: 100vh;
  background-color: #fffebf;
  z-index: 2;
`;
let Frame2 = styled(Frame1)`
  background-color: #ff8ebf;
`;

let Frame3 = styled(Frame1)`
  background-color: #8ed2ff;
`;
let Frame4 = styled(Frame1)`
  background-color: #8effa0;
`;
export default OurWork;
