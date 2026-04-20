import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const TrustedBy = () => {
  const controls = useAnimation();
  const containerRef = useRef(null);
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const clientLogos = [
    { name: "Pine Labs", src: "https://via.placeholder.com/160x60/1E293B/FFFFFF?text=Pine+Labs" },
    { name: "OLA", src: "https://via.placeholder.com/160x60/1E293B/FFFFFF?text=OLA" },
    { name: "NBO", src: "https://via.placeholder.com/160x60/1E293B/FFFFFF?text=NBO" },
    { name: "Emapta", src: "https://via.placeholder.com/160x60/1E293B/FFFFFF?text=Emapta" },
    { name: "Visaya", src: "https://via.placeholder.com/160x60/1E293B/FFFFFF?text=Visaya" },
    { name: "Microsoft", src: "https://via.placeholder.com/160x60/1E293B/FFFFFF?text=Microsoft" },
    { name: "Google", src: "https://via.placeholder.com/160x60/1E293B/FFFFFF?text=Google" },
    { name: "Amazon", src: "https://via.placeholder.com/160x60/1E293B/FFFFFF?text=Amazon" },
  ];

  // Create triple set of logos for smoother infinite scrolling
  const tripleDuplicatedLogos = [...clientLogos, ...clientLogos, ...clientLogos];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { 
      y: 30,
      opacity: 0,
      scale: 0.9
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
    hover: {
      scale: 1.1,
      y: -5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  // Improved endless scrolling implementation
  useEffect(() => {
    if (!isInView || !scrollRef.current) return;

    const scrollContainer = scrollRef.current;
    const scrollWidth = scrollContainer.scrollWidth;
    const containerWidth = scrollContainer.offsetWidth;
    const logoItemWidth = scrollWidth / tripleDuplicatedLogos.length;
    const middleSectionStart = (scrollWidth - containerWidth) / 2;
    
    // Initial position - start from the middle set of logos
    scrollContainer.scrollLeft = middleSectionStart;
    
    let lastTimestamp = 0;
    const scrollSpeed = 30; // pixels per second
    
    const smoothScroll = (timestamp) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const elapsed = timestamp - lastTimestamp;
      lastTimestamp = timestamp;
      
      if (!isHovered) {
        scrollContainer.scrollLeft += (scrollSpeed * elapsed) / 1000;
        
        // If we've scrolled past the middle section into the last section
        if (scrollContainer.scrollLeft >= middleSectionStart + (scrollWidth / 3)) {
          // Jump back to the first section (visually similar position)
          scrollContainer.scrollLeft -= (scrollWidth / 3);
        }
      }
      
      animationId = requestAnimationFrame(smoothScroll);
    };
    
    let animationId = requestAnimationFrame(smoothScroll);
    
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [isInView, isHovered, tripleDuplicatedLogos.length]);

  return (
    <section 
      ref={containerRef} 
      className="py-20 bg-background-dark relative overflow-hidden"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-[#0A172B]/90 to-[#0A172B] z-0"></div>
      
      {/* Animated background elements */}
      <motion.div
        className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-blue-500 blur-3xl opacity-10"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section header */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={titleVariants}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Trusted By <span className="text-blue-400">2,880+</span> World-Class Organizations
          </h2>
          <p className="text-lg text-blue-200 max-w-3xl mx-auto">
            Partnering with industry leaders and innovators across the globe
          </p>
        </motion.div>

        {/* Logo carousel with improved endless scrolling */}
        <div className="relative overflow-hidden py-6">
          {/* Gradient fade effects */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background-dark to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background-dark to-transparent z-10"></div>
          
          <div 
            className="overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <motion.div
              ref={scrollRef}
              initial="hidden"
              animate={controls}
              variants={containerVariants}
              className="flex items-center space-x-8 overflow-x-auto scrollbar-hide"
              style={{ 
                scrollBehavior: isHovered ? 'auto' : 'smooth', 
                WebkitOverflowScrolling: 'touch'
              }}
            >
              {tripleDuplicatedLogos.map((logo, index) => (
                <motion.div
                  key={`${logo.name}-${index}`}
                  variants={itemVariants}
                  whileHover="hover"
                  className="flex-shrink-0 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-blue-400 transition-all duration-300"
                >
                  <img 
                    src={logo.src} 
                    alt={logo.name} 
                    className="h-12 sm:h-14 object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          {/* Hover indicator */}
          <motion.div 
            className="text-center mt-4 text-sm text-blue-300/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isHovered ? "Hover paused - scroll to explore" : ""}
          </motion.div>
        </div>

        {/* Stats section with enhanced animations */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          {[
            { value: "10+", label: "Years Experience" },
            { value: "2,880+", label: "Clients Worldwide" },
            { value: "98%", label: "Client Retention" },
            { value: "24/7", label: "Support Available" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -5,
                boxShadow: '0 10px 30px rgba(59, 130, 246, 0.2)',
                borderColor: 'rgb(96, 165, 250)',
                transition: { type: "spring", stiffness: 300, damping: 15 }
              }}
              className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-gray-800 text-center"
            >
              <motion.div 
                className="text-3xl font-bold text-blue-400 mb-2"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ 
                  delay: 0.2 + index * 0.1,
                  duration: 0.5,
                  ease: "easeOut"
                }}
              >
                {stat.value}
              </motion.div>
              <div className="text-sm text-gray-300 uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedBy;