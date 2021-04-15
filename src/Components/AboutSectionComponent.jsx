/* eslint-disable no-unused-vars */
import React from "react";
import home1 from "../image/home1.png";

//Framer Motion

import { motion } from "framer-motion";

import { About, Description, Hide, Image } from "../styles";
const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div className="title">
          <Hide>
            <motion.h2>We Work to Make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2>
              your <span>Dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2>True</motion.h2>
          </Hide>
        </motion.div>
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
