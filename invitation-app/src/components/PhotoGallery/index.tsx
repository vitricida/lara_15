import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./styles.css";

const PhotoGallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div ref={ref} className="gallery-container">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        Galería
      </motion.h2>
      <motion.div
        className="photos"
        style={{ display: "flex", gap: "20px", marginTop: "40px" }}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div style={photoStyle} variants={itemVariants}>
          {/* Placeholder Foto 1 */}
        </motion.div>
        <motion.div style={photoStyle} variants={itemVariants}>
          {/* Placeholder Foto 2 */}
        </motion.div>
        <motion.div style={photoStyle} variants={itemVariants}>
          {/* Placeholder Foto 3 */}
        </motion.div>
      </motion.div>
    </div>
  );
};

const photoStyle = {
  width: "200px",
  height: "300px",
  backgroundColor: "rgba(255,255,255,0.2)",
  borderRadius: "10px",
};

export default PhotoGallery;
