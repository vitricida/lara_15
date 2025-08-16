import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import ScrollChevrons from "../ScrollChevrons";
import Sparkles from "../Sparkles";
import "./styles.css";

// Animated number component
const AnimatedNumber = ({ value }: { value: number }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={value}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="countdown-number"
      >
        {value.toString().padStart(2, "0")}
      </motion.div>
    </AnimatePresence>
  );
};

const Countdown = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const calculateTimeLeft = useCallback(() => {
    // Create the event date directly in Uruguay timezone (UTC-3)
    const eventDate = new Date("2025-09-13T21:00:00-03:00"); // September 13, 2025, 21:00 Uruguay time
    const now = new Date();

    // Calculate the difference in milliseconds
    const diffInMs = eventDate.getTime() - now.getTime();

    // If the event has passed, return zeros
    if (diffInMs <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    // Calculate days, hours, minutes, seconds manually
    const days = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (diffInMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((diffInMs % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diffInMs % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }, []);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  const titleVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const countdownVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
  };

  return (
    <div ref={ref} className="countdown-container">
      <ScrollChevrons showUp={true} showDown={true} />
      <Sparkles count={40} color="#FFD700" size={10} zIndex={5} />
      {/* Iconos de relojes flotantes */}

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
        className="countdown-wrapper"
      >
        {timeLeft.days > 0 ||
        timeLeft.hours > 0 ||
        timeLeft.minutes > 0 ||
        timeLeft.seconds > 0 ? (
          <motion.div
            className="countdown-grid"
            variants={countdownVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div
              className="countdown-card"
              variants={cardVariants}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              transition={{
                type: "spring",
                stiffness: 300,
                duration: 0.6,
              }}
            >
              <AnimatedNumber value={timeLeft.days} />
              <div className="countdown-label">Días</div>
            </motion.div>

            <motion.div
              className="countdown-card"
              variants={cardVariants}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              transition={{
                type: "spring",
                stiffness: 300,
                duration: 0.6,
                delay: 0.1,
              }}
            >
              <AnimatedNumber value={timeLeft.hours} />
              <div className="countdown-label">Horas</div>
            </motion.div>

            <motion.div
              className="countdown-card"
              variants={cardVariants}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              transition={{
                type: "spring",
                stiffness: 300,
                duration: 0.6,
                delay: 0.2,
              }}
            >
              <AnimatedNumber value={timeLeft.minutes} />
              <div className="countdown-label">Minutos</div>
            </motion.div>

            <motion.div
              className="countdown-card"
              variants={cardVariants}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              transition={{
                type: "spring",
                stiffness: 300,
                duration: 0.6,
                delay: 0.3,
              }}
            >
              <AnimatedNumber value={timeLeft.seconds} />
              <div className="countdown-label">Segundos</div>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            className="event-started"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            <div className="celebration-text">¡El evento ha comenzado!</div>
            <div className="celebration-emoji"></div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Countdown;
