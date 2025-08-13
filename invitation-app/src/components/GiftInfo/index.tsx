import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ScrollChevrons from "../ScrollChevrons";
import "./styles.css";

const GiftIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="gift-svg"
  >
    <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-2 .89-2 2v4c0 1.11.89 2 2 2h1v6c0 1.11.89 2 2 2h10c1.11 0 2-.89 2-2v-6h1c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm6 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 16H7v-6h10v6zm2-8H5V8h14v4z" />
  </svg>
);

const GiftInfo = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const handleCopyAccount = () => {
    navigator.clipboard.writeText("325426");
    // Aquí podrías agregar una notificación de "copiado"
  };

  return (
    <section ref={ref} className="gift-info-container">
      <ScrollChevrons showDown={false} />

      {/* Iconos animados flotantes */}
      <div className="floating-gift-icons">
        <motion.div
          className="floating-gift-icon icon-1"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 12, -12, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 3.8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.3,
          }}
        >
          🎁
        </motion.div>
        <motion.div
          className="floating-gift-icon icon-2"
          animate={{
            y: [0, -25, 0],
            x: [0, 15, 0],
            rotate: [0, -18, 18, 0],
          }}
          transition={{
            duration: 4.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.2,
          }}
        >
          💝
        </motion.div>
        <motion.div
          className="floating-gift-icon icon-3"
          animate={{
            scale: [1, 1.25, 1],
            rotate: [0, 8, -8, 0],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        >
          💰
        </motion.div>
        <motion.div
          className="floating-gift-icon icon-4"
          animate={{
            x: [0, -20, 0],
            rotate: [0, 20, -20, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.8,
          }}
        >
          💳
        </motion.div>
        <motion.div
          className="floating-gift-icon icon-5"
          animate={{
            y: [0, -30, 0],
            rotate: [0, -25, 25, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.8,
          }}
        >
          💎
        </motion.div>
        <motion.div
          className="floating-gift-icon icon-6"
          animate={{
            x: [0, 18, 0],
            y: [0, -12, 0],
            rotate: [0, 15, -15, 0],
          }}
          transition={{
            duration: 3.6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
        >
          🎀
        </motion.div>
      </div>

      <motion.div
        className="gift-content"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
          staggerChildren: 0.1,
          delayChildren: 0.3,
        }}
      >
        <motion.h2 className="section-title" variants={itemVariants}>
          Un Detalle Especial
        </motion.h2>

        <motion.div className="gift-message" variants={itemVariants}>
          <motion.p className="main-message">
            Tu presencia es el regalo más valioso que puedes darme.
            <br />
            Sin embargo, si deseas obsequiarme algo...
          </motion.p>
        </motion.div>

        <motion.div className="prex-info" variants={itemVariants}>
          <div className="prex-card">
            <div className="prex-header">
              <GiftIcon />
              <h3>Cuenta Prex</h3>
            </div>
            <div className="account-number">
              <span className="number">325426</span>
              <motion.button
                className="copy-button"
                onClick={handleCopyAccount}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                📋
              </motion.button>
            </div>
            <p className="prex-note">Haz clic en 📋 para copiar el número</p>
          </div>
        </motion.div>

        <motion.p className="gratitude-message" variants={itemVariants}>
          💕 Lo más importante es que compartas conmigo esta noche tan especial
          💕
        </motion.p>
      </motion.div>

      {/* Brillos flotantes */}
      <div className="sparkles">
        <motion.div
          className="sparkle sparkle-1"
          animate={{
            scale: [0, 1, 0],
            rotate: [0, 180, 360],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
        <motion.div
          className="sparkle sparkle-2"
          animate={{
            scale: [0, 1, 0],
            rotate: [0, -180, -360],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.2,
          }}
        />
        <motion.div
          className="sparkle sparkle-3"
          animate={{
            scale: [0, 1, 0],
            rotate: [0, 180, 360],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2.8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div
          className="sparkle sparkle-4"
          animate={{
            scale: [0, 1, 0],
            rotate: [0, -180, -360],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.8,
          }}
        />
      </div>
    </section>
  );
};

export default GiftInfo;
