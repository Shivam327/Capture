/* eslint-disable no-unused-vars */
import React from "react";
import home1 from "../image/home1.png";

//Framer Motion

import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../Animatiom";
import { About, Description, Hide, Image } from "../styles";
const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div className="title">
          <Hide>
            <motion.h2 variants={titleAnim}>We Work to Make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              your <span>Dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>True</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact Us for any Photography or Videography ideas that you Have. We
          have Professinals with amazing Skills
        </motion.p>
        <motion.button variants={fade}>Contact US</motion.button>
      </Description>
      <Image>
        <motion.img variants={photoAnim} src={home1} alt="Guy with Camera" />
      </Image>
    </About>
  );
};

//Styled Component

export default AboutSection;
