import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./styles.css";
import BackgroundImage from "/src/assets/hero-background.jpg";

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3 } },
  };

  return (
    <div
      ref={ref}
      className="hero-container"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <motion.h1
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          Lara
        </motion.h1>
        <motion.h2
          variants={subtitleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          Mis 15 Años
        </motion.h2>
      </div>
    </div>
  );
};

export default Hero;
