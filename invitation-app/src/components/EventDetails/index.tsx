import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./styles.css";

const EventDetails = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3 } },
  };

  return (
    <div ref={ref} className="event-details-container">
      <motion.h2
        className="section-title"
        variants={titleVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        Detalles del Evento
      </motion.h2>
      <motion.div
        variants={contentVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Aquí irán la fecha, hora y lugar */}
        <p style={{ fontSize: "1.5rem", marginTop: "20px" }}>
          Fecha: Sábado 23 de Noviembre, 2024
          <br />
          Hora: 21:00 hs
          <br />
          Lugar: Salón "The Grand Palace"
        </p>
      </motion.div>
    </div>
  );
};

export default EventDetails;
