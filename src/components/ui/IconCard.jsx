import React from 'react';
import { motion } from 'framer-motion';

const IconCard = ({ icon: Icon, title }) => {
  // Enhanced card animation variants
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] // Custom cubic-bezier for smoother animation
      }
    },
    hover: {
      scale: 1.05,
      borderColor: '#33aaff', // primary-light
      backgroundColor: 'rgba(0, 74, 173, 0.15)', // primary-dark with subtle opacity
      boxShadow: '0 8px 30px rgba(51, 170, 255, 0.2), 0 0 0 1px rgba(51, 170, 255, 0.1)', // Glowing effect
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  // Enhanced icon animation
  const iconVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.1,
        duration: 0.4,
        ease: "easeOut"
      }
    },
    hover: {
      y: -5,
      scale: 1.1,
      color: '#f8fafc', // soft-white
      filter: "drop-shadow(0 0 8px rgba(51, 170, 255, 0.5))", // Subtle glow effect
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  // Enhanced text animation
  const textVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.4,
        ease: "easeOut"
      }
    },
    hover: {
      color: '#f8fafc', // soft-white
      y: 3,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  // Add a subtle background glow animation
  const glowVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: [0.2, 0.4, 0.2],
      scale: [0.8, 1, 0.8],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div
      className="bg-transparent border-2 border-primary-dark rounded-xl p-8 text-center flex flex-col items-center justify-center aspect-square cursor-pointer relative overflow-hidden"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      whileTap={{ scale: 0.98 }} // Add subtle feedback on click
    >
      {/* Subtle background glow effect */}
      <motion.div
        className="absolute w-full h-full rounded-full bg-primary-dark/10 -z-10"
        variants={glowVariants}
        initial="initial"
        animate="animate"
      />

      <motion.div variants={iconVariants} initial="hidden" animate="visible">
        <Icon className="text-primary-light text-5xl sm:text-6xl mb-5" />
      </motion.div>
      
      <motion.h3
        className="text-lg sm:text-xl font-semibold text-text-light transition-colors duration-300"
        variants={textVariants}
        initial="hidden"
        animate="visible"
      >
        {title}
      </motion.h3>
    </motion.div>
  );
};

export default IconCard;