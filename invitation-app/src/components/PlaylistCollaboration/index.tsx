import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ScrollChevrons from "../ScrollChevrons";
import "./styles.css";

const PlaylistCollaboration = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
    },
  };

  // SVG de Spotify
  const SpotifyIcon = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.84-.179-.959-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.361 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z" />
    </svg>
  );

  const handlePlaylistClick = () => {
    window.open(
      "https://open.spotify.com/playlist/66IPq0eXGbrEdJYhCmFFEr?si=dxLQtAl6RPS0x_1PgdN-VQ&pt=7be6883e38d44b714dc34cacfddfcfc4",
      "_blank"
    );
  };

  return (
    <section ref={ref} className="playlist-container">
      <ScrollChevrons showUp={true} showDown={true} />
      <motion.div
        className="playlist-content"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
          staggerChildren: 0.2,
        }}
      >
        {/* Iconos musicales animados */}
        <div className="music-icons">
          <motion.div
            className="music-note note-1"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 15, -15, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            🎵
          </motion.div>

          <motion.div
            className="music-note note-2"
            animate={{
              y: [0, -15, 0],
              rotate: [0, -10, 10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          >
            🎶
          </motion.div>

          <motion.div
            className="music-note note-3"
            animate={{
              y: [0, -25, 0],
              rotate: [0, 20, -20, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          >
            🎤
          </motion.div>

          <motion.div
            className="music-note note-4"
            animate={{
              y: [0, -18, 0],
              rotate: [0, -15, 15, 0],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5,
            }}
          >
            🎧
          </motion.div>
        </div>

        <motion.h2
          className="section-title"
          variants={textVariants}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          ¡Armemos la Playlist Juntos!
        </motion.h2>

        <motion.p
          className="playlist-description"
          variants={textVariants}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Ayúdame a crear la banda sonora perfecta para mis XV.
          <br />
          Agrega las canciones que no pueden faltar en la pista de baile.
        </motion.p>

        <motion.button
          className="playlist-button"
          variants={buttonVariants}
          transition={{ duration: 0.6, delay: 0.6 }}
          onClick={handlePlaylistClick}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 10px 30px rgba(29, 185, 84, 0.4)",
          }}
          whileTap={{ scale: 0.95 }}
        >
          <SpotifyIcon />
          <span>Agregar Canciones</span>
          <motion.div
            className="button-pulse"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.7, 0.3, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.button>

        <motion.p
          className="playlist-note"
          variants={textVariants}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          💡 Necesitas tener Spotify para colaborar en la playlist
        </motion.p>
      </motion.div>

      {/* Ondas musicales de fondo - movidas fuera del contenido */}
      <div className="sound-waves">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className={`wave wave-${i + 1}`}
            animate={{
              scaleY: [1, 2, 1, 1.5, 1],
              opacity: [0.3, 0.7, 0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 2 + i * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default PlaylistCollaboration;
