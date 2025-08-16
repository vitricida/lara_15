import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ScrollChevrons from "../ScrollChevrons";
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

        <motion.div
          className="youtube-player-container"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, delay: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <iframe
            src="https://www.youtube.com/embed/1G4isv_Fylg?si=dxLQtAl6RPS0x_1PgdN-VQ"
            height="152"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title="YouTube Music Player"
          ></iframe>
        </motion.div>
      </div>
      <ScrollChevrons showUp={false} showDown={true} />
    </div>
  );
};

export default Hero;
