import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./styles.css";

const RSVP = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div ref={ref} className="rsvp-container">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        Confirmar Asistencia
      </motion.h2>
      <motion.button
        style={buttonStyle}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{
          duration: 0.8,
          delay: 0.3,
          type: "spring",
          stiffness: 120,
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Confirmar
      </motion.button>
    </div>
  );
};

const buttonStyle = {
  padding: "15px 40px",
  fontSize: "1.2rem",
  backgroundColor: "rgba(255, 255, 255, 0.9)",
  color: "#333",
  border: "none",
  borderRadius: "50px",
  cursor: "pointer",
  marginTop: "30px",
  fontWeight: "bold",
  boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
};

export default RSVP;
