import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
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

  const scrollDownVariants: Variants = {
    wobble: {
      // Usamos una clave personalizada
      y: [0, 10, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
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

      <motion.div
        className="spotify-player-container"
        initial={{ opacity: 0, x: "100%" }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: "100%" }}
        transition={{ duration: 1, delay: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <iframe
          src="https://open.spotify.com/embed/track/6nek1Nin9q48AVZcWs9e9D?utm_source=generator"
          width="100%"
          height="152"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          title="Spotify Player"
        ></iframe>
      </motion.div>

      <motion.div
        className="scroll-down-icon"
        variants={scrollDownVariants}
        animate="wobble" // Y la llamamos aquí
      >
        <svg
          width="30"
          height="18"
          viewBox="0 0 30 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 2L15 15L28 2"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>
    </div>
  );
};

export default Hero;
