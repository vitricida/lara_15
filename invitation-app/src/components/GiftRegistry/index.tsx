import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./styles.css";

const GiftRegistry = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const titleVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const contentVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.3 } },
  };

  return (
    <div ref={ref} className="gift-registry-container">
      <motion.h2
        className="section-title"
        variants={titleVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        Mesa de Regalos
      </motion.h2>
      <motion.div
        variants={contentVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <p style={{ fontSize: "1.5rem", marginTop: "20px" }}>
          Tu presencia es mi mejor regalo.
          <br />
          Pero si deseas obsequiarme algo, puedes hacerlo en...
        </p>
      </motion.div>
    </div>
  );
};

export default GiftRegistry;
