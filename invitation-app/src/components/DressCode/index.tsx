import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./styles.css";

const DressCode = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
  };

  return (
    <motion.div
      ref={ref}
      className="dress-code-container"
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <h2 className="section-title">Código de Vestimenta</h2>
      <p style={{ fontSize: "2rem", marginTop: "20px" }}>Elegante Sport</p>
    </motion.div>
  );
};

export default DressCode;
