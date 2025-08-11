import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./styles.css";

const Countdown = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const titleVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const countdownVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.3 } },
  };

  return (
    <div ref={ref} className="countdown-container">
      <motion.h2
        className="section-title"
        variants={titleVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        Cuenta Regresiva
      </motion.h2>
      <motion.div
        variants={countdownVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Lógica del contador irá aquí */}
        <p style={{ fontSize: "2rem", marginTop: "20px" }}>Próximamente...</p>
      </motion.div>
    </div>
  );
};

export default Countdown;
