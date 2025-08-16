import { motion } from "framer-motion";
import { useMemo } from "react";
import "./styles.css";

interface SparklesProps {
  count?: number;
  color?: string;
  size?: number;
  zIndex?: number;
}

const Sparkles = ({
  count = 15,
  color = "#FFD700",
  size = 12,
  zIndex = 2,
}: SparklesProps) => {
  // Generar valores aleatorios solo una vez usando useMemo
  const sparkleData = useMemo(() => {
    return [...Array(count)].map((_, i) => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      duration: 2.5 + Math.random() * 1.5,
      delay: i * 0.1 + Math.random() * 1,
    }));
  }, [count]);

  return (
    <div className="sparkles" style={{ zIndex }}>
      {sparkleData.map((sparkle, i) => (
        <motion.div
          key={i}
          className="sparkle"
          style={{
            top: `${sparkle.top}%`,
            left: `${sparkle.left}%`,
            x: "-50%", // Centrar el sparkle
            y: "-50%", // Centrar el sparkle
            width: `${size}px`,
            height: `${size}px`,
            background: `radial-gradient(circle, ${color}, transparent)`,
            filter: `drop-shadow(0 0 5px ${color}80)`,
          }}
          animate={{
            scale: [0, 1, 0],
            rotate: [
              0,
              (i % 2 === 0 ? 1 : -1) * 180,
              (i % 2 === 0 ? 1 : -1) * 360,
            ],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: sparkle.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: sparkle.delay,
          }}
        />
      ))}
    </div>
  );
};

export default Sparkles;
