import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./styles.css";

const QuinceMessage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const text =
    "Entre todos los días de mi vida, este será especial… porque lo soñado se vuelve realidad y porque voy a compartirlo con personas que quiero. Te invito a ser parte de mis quince, un recuerdo que llevaremos siempre.";

  const words = text.split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.5,
      },
    },
  };

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
    },
  };

  return (
    <section ref={ref} className="quince-message-container">
      <div className="quince-message-content">
        <motion.div
          className="emoji-top"
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
          💫
        </motion.div>

        <motion.p
          className="quince-message-text"
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
          className="emoji-bottom"
          initial={{ opacity: 0, scale: 0, rotate: 180 }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  scale: 1,
                  rotate: 0,
                  transition: { duration: 0.8, delay: 3 },
                }
              : { opacity: 0, scale: 0, rotate: 180 }
          }
        >
          💫
        </motion.div>
      </div>
    </section>
  );
};

export default QuinceMessage;
