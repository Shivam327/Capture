import React from "react";
import AboutSectionComponent from "../Components/AboutSectionComponent";
import ServicesSection from "../Components/ServicesSection";
import FaqSection from "../Components/FaqSection";
//Animation
import { motion } from "framer-motion";
import { pageAnimation } from "../Animatiom";

const AboutUs = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <AboutSectionComponent />
      <ServicesSection />
      <FaqSection />
    </motion.div>
  );
};

export default AboutUs;
