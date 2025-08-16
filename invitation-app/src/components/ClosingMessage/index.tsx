import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ScrollChevrons from "../ScrollChevrons";
import FrameOverlay from "../FrameOverlay";
import Sparkles from "../Sparkles";
import "./styles.css";

const ClosingMessage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  const messageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section ref={ref} className="closing-message-container">
      <ScrollChevrons showUp={true} showDown={false} />
      <motion.h2
        className="section-title"
        variants={titleVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        ¡Te espero!
      </motion.h2>

      <motion.p
        className="closing-message-text"
        variants={messageVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{
          delay: 0.5,
          duration: 0.8,
          type: "spring",
          stiffness: 100,
        }}
      >
        No te pierdas esta noche mágica, tu presencia es muy importante para mí.
      </motion.p>
      <Sparkles count={50} color="pink" size={10} zIndex={5} />
      <FrameOverlay />
    </section>
  );
};

export default ClosingMessage;
