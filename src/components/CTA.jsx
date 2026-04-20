import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaArrowRight, FaShieldAlt, FaLock, FaHeadset, FaUserShield } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const CTA = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: 0.2,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };
  const arrowVariants = {
    hover: {
      x: 5,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  const floatingParticleVariants = {
    animate: (i) => ({
      y: [0, -10, 0],
      opacity: [0.3, 0.7, 0.3],
      transition: {
        duration: 2 + (i * 0.5),
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop"
      }
    })
  };
  const handleGetStarted = () => {
    navigate('/get-started');
  };
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/40 overflow-hidden relative">
      {/* Enhanced Top separator with blue effect matching other sections */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-60"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-300/80 to-transparent"></div>
      
      {/* Top Blue Gradient Fade */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-blue-500/10 via-blue-500/5 to-transparent pointer-events-none"></div>

      {/* Enhanced background layers matching other sections */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-blue-50/60"></div>
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-blue-200/40 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-200/30 rounded-full filter blur-3xl"></div>
      </div>

      {/* Enhanced floating elements with better positioning */}
      <motion.div 
        className="absolute inset-0 opacity-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-blue-400/20 to-indigo-400/10 backdrop-blur-sm border border-blue-200/20"
            style={{
              width: 12 + (i * 8),
              height: 12 + (i * 8),
              left: `${8 + (i * 12)}%`,
              top: `${10 + ((i % 4) * 20)}%`,
            }}
            animate={{ 
              y: [0, -15, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 3 + (i * 0.5),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2
            }}
          />
        ))}
      </motion.div>      {/* Enhanced Security icons floating in the background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <motion.div
          className="absolute left-[12%] top-[15%] text-blue-400/40 text-5xl"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 15, 0],
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <FaLock />
        </motion.div>
        <motion.div
          className="absolute right-[15%] top-[25%] text-blue-400/30 text-6xl"
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -10, 0],
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <FaShieldAlt />
        </motion.div>
        <motion.div
          className="absolute left-[20%] bottom-[20%] text-indigo-400/30 text-5xl"
          animate={{ 
            y: [0, 15, 0],
            rotate: [0, -12, 0],
            opacity: [0.25, 0.5, 0.25],
            scale: [1, 1.15, 1]
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
        >
          <FaHeadset />
        </motion.div>
        <motion.div
          className="absolute right-[10%] bottom-[15%] text-blue-400/35 text-5xl"
          animate={{ 
            y: [0, -18, 0],
            rotate: [0, 8, 0],
            opacity: [0.2, 0.45, 0.2],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        >
          <FaUserShield />
        </motion.div>
      </div>      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="flex flex-col items-center text-center max-w-5xl mx-auto"
        >
          {/* Enhanced Header Section */}
          <motion.div
            variants={containerVariants}
            className="mb-12 sm:mb-16"
          >
            {/* Animated Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100/80 to-indigo-100/60 rounded-full border border-blue-200/50 mb-6"
              variants={{
                hidden: { opacity: 0, y: -20, scale: 0.9 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
              }}
            >
              <motion.div 
                className="w-2 h-2 bg-blue-500 rounded-full"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              ></motion.div>
              <span className="text-blue-700 font-semibold text-sm uppercase tracking-wider">
                Protect Your Business Today
              </span>
            </motion.div>
            
            <motion.h2 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight text-blue-900"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
              }}
            >
              Ready to <span className="text-blue-700">secure</span> your digital assets?
            </motion.h2>
            
            <motion.p
              className="text-gray-600 text-base sm:text-lg lg:text-xl leading-relaxed max-w-4xl mx-auto mt-6 font-medium"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.3 } }
              }}
            >
              Take the first step toward <span className="text-blue-700">comprehensive cybersecurity protection</span> for your organization. Our experts are ready to help you navigate today's <span className="text-blue-700">complex threat landscape.</span>
            </motion.p>
          </motion.div>          {/* Enhanced Action Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-16"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.5 } }
            }}
          >
            <motion.button
              onClick={handleGetStarted}
              className="group relative bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white text-lg font-bold px-10 py-4 rounded-full flex items-center space-x-3 shadow-xl shadow-blue-500/25 transition-all duration-300 w-full sm:w-auto justify-center overflow-hidden"
              variants={buttonVariants}
              whileHover="hover"
              whileTap={{ scale: 0.98 }}
            >
              <FaShieldAlt className="text-white/90 mr-2 relative z-10" />
              <span className="relative z-10">Get Started</span>
              <motion.div variants={arrowVariants} className="ml-2 relative z-10">
                <FaArrowRight />
              </motion.div>
              
              {/* Enhanced button glow effect */}
              <motion.div 
                className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/50 to-blue-600/50 opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-300"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0, 0.3, 0]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              
              {/* Shine effect */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out rounded-full"
                style={{ transform: 'skewX(-20deg)' }}
              />
            </motion.button>
            
            <motion.button
              onClick={handleGetStarted}
              className="group relative border-2 border-blue-500/50 hover:border-blue-600 text-blue-700 hover:text-blue-800 bg-white/90 hover:bg-white text-lg font-medium px-10 py-3.5 rounded-full flex items-center space-x-3 transition-all duration-300 w-full sm:w-auto justify-center shadow-lg hover:shadow-xl backdrop-blur-sm"
              variants={buttonVariants}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0, transition: { delay: 0.7, duration: 0.6 } }}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaHeadset className="text-blue-600 mr-2" />
              <span>Contact Us</span>
              
              {/* Subtle background effect */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-blue-50/0 to-indigo-50/0 group-hover:from-blue-50/50 group-hover:to-indigo-50/30 transition-all duration-300 rounded-full"
              />
            </motion.button>
          </motion.div>
            {/* Enhanced Trust badges */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 sm:gap-6 items-center"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { delay: 0.9, duration: 0.6 } }
            }}
          >
            {/* 24/7 Support */}
            <motion.div 
              className="flex items-center gap-2 px-4 py-2 bg-blue-50/60 rounded-full border border-blue-200/40"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                <FaShieldAlt className="text-blue-500 text-base" />
              </div>
              <div className="flex flex-col items-start">
                <span className="text-blue-800 text-sm font-bold leading-tight">24/7 Support</span>
                <span className="text-blue-500 text-xs">Always Available</span>
              </div>
            </motion.div>

            {/* Enterprise Grade */}
            <motion.div 
              className="flex items-center gap-2 px-4 py-2 bg-blue-50/60 rounded-full border border-blue-200/40"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                <FaLock className="text-blue-500 text-base" />
              </div>
              <div className="flex flex-col items-start">
                <span className="text-blue-800 text-sm font-bold leading-tight">Enterprise Grade</span>
                <span className="text-blue-500 text-xs">Secure & Reliable</span>
              </div>
            </motion.div>

            {/* Expert Team */}
            <motion.div 
              className="flex items-center gap-2 px-4 py-2 bg-blue-50/60 rounded-full border border-blue-200/40"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                <FaUserShield className="text-blue-500 text-base" />
              </div>
              <div className="flex flex-col items-start">
                <span className="text-blue-800 text-sm font-bold leading-tight">Expert Team</span>
                <span className="text-blue-500 text-xs">Certified Professionals</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>      {/* Enhanced animated decorative elements */}
      <motion.div
        className="absolute top-1/2 left-4 sm:left-8 w-20 sm:w-24 h-20 sm:h-24 border-2 border-blue-300/30 rounded-full backdrop-blur-sm"
        animate={{ 
          scale: [1, 1.2, 1], 
          opacity: [0.3, 0.6, 0.3],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/4 right-6 sm:right-12 w-12 sm:w-16 h-12 sm:h-16 border-2 border-indigo-300/40 rounded-full hidden md:block backdrop-blur-sm"
        animate={{ 
          scale: [1, 1.3, 1], 
          opacity: [0.2, 0.5, 0.2],
          rotate: [0, -90, 0]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="absolute bottom-8 sm:bottom-10 right-4 sm:right-8 w-16 sm:w-20 h-16 sm:h-20 border-2 border-blue-300/25 rounded-full backdrop-blur-sm"
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.1, 1],
          opacity: [0.25, 0.5, 0.25]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-1/4 left-6 sm:left-12 w-14 sm:w-18 h-14 sm:h-18 border-2 border-emerald-300/30 rounded-full hidden lg:block backdrop-blur-sm"
        animate={{ 
          y: [0, -20, 0],
          opacity: [0.2, 0.4, 0.2],
          scale: [1, 1.15, 1]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      
      {/* Bottom Blue Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-blue-500/10 via-blue-500/5 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default CTA;