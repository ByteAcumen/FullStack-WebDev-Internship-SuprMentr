import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaShieldAlt, FaLock, FaCheckCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import backgroundVideo from '../assets/WhatsApp Video 2025-06-19 at 12.51.11_9cdcd23a.mp4';
import fallbackImage from '../assets/6985678.jpg'; // You need to add this image to your assets folder

const Hero = () => {
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const [videoError, setVideoError] = useState(false);
  const [isVideoReady, setIsVideoReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.playsInline = true;
      video.setAttribute('playsinline', 'true');
      video.setAttribute('webkit-playsinline', 'true');

      const handleCanPlay = () => {
        setIsVideoReady(true);
        video.play().catch(() => {
          setVideoError(true);
        });
      };

      const handleError = () => {
        setVideoError(true);
      };

      video.addEventListener('canplay', handleCanPlay);
      video.addEventListener('error', handleError);

      video.load();

      return () => {
        video.removeEventListener('canplay', handleCanPlay);
        video.removeEventListener('error', handleError);
      };
    }
  }, []);

  const handleGetStarted = () => {
    navigate('/get-started');
  };

  return (
    <section className="relative w-full min-h-screen overflow-hidden text-center flex items-center justify-center">
      {/* Fallback Static Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${fallbackImage})`,
          zIndex: 0
        }}
      ></div>

      {/* Decorative Gradient and Patterns */}
      <div 
        className="absolute inset-0"
        style={{
          zIndex: 1,
          background: `
            linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #1e40af 100%),
            radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(96, 165, 250, 0.2) 0%, transparent 50%)
          `,
          backgroundSize: '100% 100%, 200px 200px, 300px 300px, 150px 150px'
        }}
      >
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        ></div>
      </div>

      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          zIndex: isVideoReady && !videoError ? 2 : -1,
          opacity: isVideoReady && !videoError ? 1 : 0,
          transition: 'opacity 1s ease-in-out'
        }}
        onError={() => setVideoError(true)}
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>

      {/* Dark Overlay for readability */}
      <div 
        className="absolute inset-0 bg-black/40" 
        style={{ zIndex: 3 }}
      ></div>

      {/* Main Content */}
      <div className="relative px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto py-16 sm:py-20" style={{ zIndex: 4 }}>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-block bg-blue-100/95 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-blue-200 shadow-lg"
        >
          <span className="text-blue-700 text-sm font-semibold flex items-center justify-center">
            <FaShieldAlt className="mr-2 text-sm" />
            <span className="hidden sm:inline">Next-Gen Cybersecurity Solutions</span>
            <span className="sm:hidden">Cybersecurity Solutions</span>
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white drop-shadow-lg"
        >
          <span className="block sm:inline">Agile Cyber Defense.</span>{" "}
          <span className="block sm:inline">Future-Ready Compliance</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl text-white mb-8 max-w-3xl mx-auto drop-shadow-md"
        >
          <span className="hidden sm:inline">Your Cyber Security Partner for Consulting, Compliance and Technical Services</span>
          <span className="sm:hidden">Expert Cybersecurity Solutions & Compliance Services</span>
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="flex items-center bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30 shadow-lg">
            <FaCheckCircle className="text-blue-300 mr-2 text-sm" />
            <span className="text-white text-sm font-medium">Global Compliance</span>
          </div>
          <div className="flex items-center bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30 shadow-lg">
            <FaLock className="text-blue-300 mr-2 text-sm" />
            <span className="text-white text-sm font-medium">Enterprise Security</span>
          </div>
          <div className="flex items-center bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30 shadow-lg">
            <FaShieldAlt className="text-blue-300 mr-2 text-sm" />
            <span className="text-white text-sm font-medium">24/7 Protection</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleGetStarted}
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl border border-blue-500"
          >
            <span className="mr-2">
              <span className="sm:hidden">Get Started</span>
              <span className="hidden sm:inline">Get Started Today</span>
            </span>
            <FaArrowRight className="text-sm" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
