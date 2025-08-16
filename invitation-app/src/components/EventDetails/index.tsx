import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ScrollChevrons from "../ScrollChevrons";
import "./styles.css";

// SVG Icons
const CalendarIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 2V6M16 2V6M3 10H21M5 4H19C20.1046 4 21 4.89543 21 6V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V6C3 4.89543 3.89543 4 5 4Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ClockIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
    <polyline
      points="12,6 12,12 16,14"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const LocationIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21 10C21 17 12 23 12 23S3 17 3 10C3 5.02944 7.02944 1 12 1C16.9706 1 21 5.02944 21 10Z"
      stroke="currentColor"
      strokeWidth="2"
    />
    <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const EventDetails = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50, scale: 0.9 },
    visible: { opacity: 1, x: 0, scale: 1 },
  };

  return (
    <section ref={ref} className="event-details-container">
      <ScrollChevrons showUp={true} showDown={true} />
      {/* Iconos animados flotantes */}
      <div className="floating-icons">
        <motion.div
          className="floating-icon icon-1"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        ></motion.div>
        <motion.div
          className="floating-icon icon-2"
          animate={{
            y: [0, -15, 0],
            rotate: [0, -15, 15, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        ></motion.div>
        <motion.div
          className="floating-icon icon-3"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 5, -5, 0],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 2.8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
        ></motion.div>
        <motion.div
          className="floating-icon icon-4"
          animate={{
            x: [0, 15, 0],
            rotate: [0, 8, -8, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 3.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        ></motion.div>
        <motion.div
          className="floating-icon icon-5"
          animate={{
            y: [0, -25, 0],
            rotate: [0, 12, -12, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.8,
          }}
        ></motion.div>
        <motion.div
          className="floating-icon icon-6"
          animate={{
            x: [0, -12, 0],
            y: [0, -8, 0],
            rotate: [0, -10, 10, 0],
          }}
          transition={{
            duration: 2.7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.8,
          }}
        ></motion.div>
      </div>

      <motion.h2
        className="section-title"
        variants={titleVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        Detalles del Evento
      </motion.h2>

      <motion.div
        className="event-details-content"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div className="event-detail-item" variants={itemVariants}>
          <motion.div
            className="detail-icon"
            whileHover={{
              scale: 1.1,
              rotate: 360,
              transition: { duration: 0.6 },
            }}
          >
            <CalendarIcon />
          </motion.div>
          <div className="detail-info">
            <h3 className="detail-title">Fecha</h3>
            <p className="detail-text">13 de Septiembre, 2025</p>
          </div>
        </motion.div>

        <motion.div className="event-detail-item" variants={itemVariants}>
          <motion.div
            className="detail-icon"
            whileHover={{
              scale: 1.1,
              rotate: 360,
              transition: { duration: 0.6 },
            }}
          >
            <ClockIcon />
          </motion.div>
          <div className="detail-info">
            <h3 className="detail-title">Hora</h3>
            <p className="detail-text">21:00 horas</p>
          </div>
        </motion.div>

        <motion.div className="event-detail-item" variants={itemVariants}>
          <motion.div
            className="detail-icon"
            whileHover={{
              scale: 1.1,
              rotate: 360,
              transition: { duration: 0.6 },
            }}
          >
            <LocationIcon />
          </motion.div>
          <div className="detail-info">
            <h3 className="detail-title">Lugar</h3>
            <p className="detail-text">Glorieta - Comando</p>
            <p className="detail-address">Av. Bulevard Artigas 2555</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default EventDetails;
