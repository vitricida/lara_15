import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ScrollChevrons from "../ScrollChevrons";
import "./styles.css";

const WhatsAppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="whatsapp-svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488" />
  </svg>
);

const RSVPConfirmation = () => {
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

  const handleWhatsAppClick = () => {
    const phoneNumber = "59897281034";
    const message = "¡Hola! Confirmo mi asistencia a los XV de Lara";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section ref={ref} className="rsvp-confirmation-container">
      <ScrollChevrons />

      {/* Iconos animados flotantes */}
      <div className="floating-rsvp-icons">
        <motion.div
          className="floating-rsvp-icon icon-1"
          animate={{
            y: [0, -25, 0],
            rotate: [0, 15, -15, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        >
          💌
        </motion.div>
        <motion.div
          className="floating-rsvp-icon icon-2"
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            rotate: [0, -20, 20, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          📱
        </motion.div>
        <motion.div
          className="floating-rsvp-icon icon-3"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 10, -10, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 3.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
        >
          💬
        </motion.div>
        <motion.div
          className="floating-rsvp-icon icon-4"
          animate={{
            x: [0, -25, 0],
            rotate: [0, 25, -25, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 3.8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.8,
          }}
        >
          ✉️
        </motion.div>
        <motion.div
          className="floating-rsvp-icon icon-5"
          animate={{
            y: [0, -35, 0],
            rotate: [0, -30, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        >
          💕
        </motion.div>
      </div>

      <motion.div
        className="rsvp-content"
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
          ¡Confirma tu Asistencia!
        </motion.h2>
        <motion.p className="rsvp-description" variants={itemVariants}>
          Tu presencia es el regalo más importante para mí. Por favor, confirma
          si podrás acompañarme en esta noche tan especial.
        </motion.p>

        <motion.div className="rsvp-button-wrapper" variants={itemVariants}>
          <motion.button
            className="whatsapp-button"
            onClick={handleWhatsAppClick}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(37, 211, 102, 0.8)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <WhatsAppIcon />
            <span>Confirmar por WhatsApp</span>
            <motion.div
              className="button-pulse"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.7, 0.2, 0.7],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.button>
        </motion.div>

        <motion.p className="phone-number" variants={itemVariants}>
          📞 +598 97 281 034
        </motion.p>

        <motion.p className="rsvp-note" variants={itemVariants}>
          💡 Al hacer clic, se abrirá WhatsApp con un mensaje pre-escrito
        </motion.p>
      </motion.div>

      {/* Ondas de mensaje */}
      <div className="message-waves">
        <motion.div
          className="wave wave-1"
          animate={{ scaleX: [0.8, 1.5, 0.9, 1.2] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.1,
          }}
        />
        <motion.div
          className="wave wave-2"
          animate={{ scaleX: [1, 1.8, 0.7, 1.4] }}
          transition={{
            duration: 2.3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.2,
          }}
        />
        <motion.div
          className="wave wave-3"
          animate={{ scaleX: [0.9, 1.6, 0.8, 1.3] }}
          transition={{
            duration: 2.1,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.3,
          }}
        />
      </div>
    </section>
  );
};

export default RSVPConfirmation;
