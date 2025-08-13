import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import "./styles.css";

// Your beautiful quinceañera photos!
const images = [
  {
    src: "/gallery/photo1.jpeg",
    alt: "Celebrando los 15",
  },
  {
    src: "/gallery/photo2.jpeg",
    alt: "Vestido rosa elegante",
  },
  {
    src: "/gallery/photo3.jpeg",
    alt: "Momento especial",
  },
  {
    src: "/gallery/photo4.jpeg",
    alt: "Números luminosos 15",
  },
];

const PhotoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Auto-rotate images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: {
      opacity: 1,
      scale: 1,
    },
    exit: {
      opacity: 0,
      scale: 0.95,
    },
  };

  return (
    <section ref={ref} className="photo-carousel-container">
      {/* Background rotating images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="background-image"
          style={{
            backgroundImage: `url(${images[currentIndex].src})`,
          }}
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{
            duration: 1.2,
            ease: "easeInOut",
          }}
        />
      </AnimatePresence>

      {/* Dark overlay for content readability */}
      <div className="background-overlay" />

      <motion.div
        className="photo-carousel-content"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
          staggerChildren: 0.2,
        }}
      >
        <motion.p
          className="gallery-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Momentos especiales que llevaremos siempre en el corazón
        </motion.p>
        {/* Camera icon */}
        <motion.div
          className="camera-icon-static"
          initial={{ opacity: 0, scale: 0 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
          }
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          📸
        </motion.div>
      </motion.div>
    </section>
  );
};

export default PhotoCarousel;
