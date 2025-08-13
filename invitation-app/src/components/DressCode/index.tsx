import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ScrollChevrons from "../ScrollChevrons";
import "./styles.css";

const DressCode = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const text =
    "Se aconseja dejar de lado los siguientes colores: Rosa y Plata, ya que los reservamos para la princesa de la noche";
  const words = text.split(" ");

  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.5,
      },
    },
  };

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(8px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
    },
  };

  return (
    <section ref={ref} className="dress-code-container">
      <ScrollChevrons />

      <motion.h2
        className="section-title"
        variants={titleVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        Código de Vestimenta
      </motion.h2>

      <div className="dress-code-content">
        <motion.div
          className="dress-icon"
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  scale: 1,
                  rotate: 0,
                  transition: { duration: 0.8, delay: 0.2 },
                }
              : { opacity: 0, scale: 0, rotate: -180 }
          }
        >
          👗✨
        </motion.div>

        <motion.p
          className="dress-code-text"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {words.map((word, index) => (
            <motion.span
              key={index}
              variants={wordVariants}
              style={{ display: "inline-block", marginRight: "0.3em" }}
            >
              {word}
            </motion.span>
          ))}
        </motion.p>

        <motion.div
          className="crown-icon"
          initial={{ opacity: 0, scale: 0, rotate: 180 }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  scale: 1,
                  rotate: 0,
                  transition: { duration: 0.8, delay: 2.5 },
                }
              : { opacity: 0, scale: 0, rotate: 180 }
          }
        >
          👑💖
        </motion.div>
      </div>
    </section>
  );
};

export default DressCode;
