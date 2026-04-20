import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaShieldAlt, 
  FaUserShield, 
  FaLock, 
  FaCertificate, 
  FaCloudUploadAlt, 
  FaChartLine 
} from 'react-icons/fa';

const ValueProposition = () => {
  // Setup for animation controls
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);  // Motion variants - simplified but with enhanced hover
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.5,
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  // Enhanced hover variants for professional light blue effect
  const cardHoverVariants = {
    rest: { 
      scale: 1,
      y: 0
    },
    hover: { 
      scale: 1.02, 
      y: -3,
      transition: { duration: 0.2, ease: "easeOut" }
    }
  };
  // Value proposition data with circular colored backgrounds like Services
  const valueProps = [
    {
      icon: FaShieldAlt,
      title: "360° Security",
      description: "Comprehensive cybersecurity solutions that protect every aspect of your digital ecosystem.",
      color: "bg-blue-500",
      hoverColor: "hover:bg-blue-500/10"
    },
    {
      icon: FaUserShield,
      title: "Expert Team",
      description: "Certified security professionals with experience in handling complex cyber threats.",
      color: "bg-indigo-500",
      hoverColor: "hover:bg-indigo-500/10"
    },
    {
      icon: FaLock,
      title: "Data Protection",
      description: "Advanced encryption and data security measures to keep your information safe.",
      color: "bg-teal-500",
      hoverColor: "hover:bg-teal-500/10"
    },
    {
      icon: FaCertificate,
      title: "Compliance",
      description: "Stay compliant with global security standards and regulatory requirements.",
      color: "bg-green-500",
      hoverColor: "hover:bg-green-500/10"
    },
    {
      icon: FaCloudUploadAlt,
      title: "Cloud Security",
      description: "Secure your cloud environment with our specialized cloud security services.",
      color: "bg-purple-500",
      hoverColor: "hover:bg-purple-500/10"
    },
    {
      icon: FaChartLine,
      title: "Continuous Monitoring",
      description: "24/7 real-time threat detection and monitoring for your peace of mind.",
      color: "bg-orange-500",
      hoverColor: "hover:bg-orange-500/10"
    }
  ];
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/40 overflow-hidden relative">
      {/* Enhanced Top separator with blue effect matching Services */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-60"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-300/80 to-transparent"></div>
      
      {/* Top Blue Gradient Fade */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-blue-500/10 via-blue-500/5 to-transparent pointer-events-none"></div>
      
      {/* Enhanced background layers matching Services */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-blue-50/60"></div>
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-blue-200/40 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-200/30 rounded-full filter blur-3xl"></div>
      </div>
      
      {/* Bottom Blue Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-blue-500/10 via-blue-500/5 to-transparent pointer-events-none"></div>      
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Enhanced Section header matching Services design */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <div className="space-y-6">
            <div className="inline-block">
              <motion.h2 
                custom={0}
                variants={itemVariants}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 leading-tight"
              >
                Why Choose Codezye Cyber
              </motion.h2>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <motion.p 
                custom={2}
                variants={itemVariants}
                className="text-gray-600 text-base sm:text-lg lg:text-xl leading-relaxed px-4 font-medium"
              >
                We deliver innovative cybersecurity solutions tailored to your unique business needs, ensuring your digital assets are protected at every level.
              </motion.p>
            </div>

            {/* Trust indicators matching Services section */}
            <motion.div 
              custom={3}
              variants={itemVariants}
              className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 mt-8"
            >
              <motion.div 
                className="flex items-center gap-2 px-4 py-2 bg-blue-100/70 rounded-full border border-blue-200/50"
                whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(59, 130, 246, 0.15)" }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="text-blue-800 text-sm font-medium">360° Protection</span>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-2 px-4 py-2 bg-blue-100/70 rounded-full border border-blue-200/50"
                whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(59, 130, 246, 0.15)" }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                <span className="text-blue-800 text-sm font-medium">Expert Team</span>
              </motion.div>

              <motion.div 
                className="flex items-center gap-2 px-4 py-2 bg-blue-100/70 rounded-full border border-blue-200/50"
                whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(59, 130, 246, 0.15)" }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                <span className="text-blue-800 text-sm font-medium">24/7 Monitoring</span>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>        {/* Cards Grid matching Services section exactly */}
        <motion.div 
          variants={containerVariants} 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {valueProps.map((prop, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={itemVariants}
              whileHover="hover"
              initial="rest"
              animate={inView ? "rest" : "hidden"}
              className="group cursor-pointer transform transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative">
                {/* Subtle shadow for depth */}
                <div className="absolute inset-0 bg-black/5 rounded-xl blur-lg scale-105 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                
                {/* Clean professional card matching Services */}
                <div className="relative bg-white rounded-xl border border-gray-200/60 shadow-md hover:shadow-lg p-6 transition-all duration-300 ease-out group-hover:scale-105 group-hover:border-blue-300/50 group-hover:bg-white/95 h-[320px] flex flex-col">
                  {/* Simple background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 to-white rounded-xl"></div>
                  
                  <div className="flex flex-col items-center text-center h-full relative z-10">
                    {/* Colored circular icon at top - exactly like Services */}
                    <div className={`${prop.color} w-16 h-16 rounded-full flex items-center justify-center mb-6 text-white text-2xl transition-all duration-300 group-hover:scale-110 shadow-lg group-hover:shadow-xl`}>
                      <prop.icon className="w-8 h-8" />
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-700 mb-4 transition-all duration-300 group-hover:text-blue-700">
                      {prop.title}
                    </h3>
                    
                    {/* Description */}
                    <div className="flex-1 flex items-center mb-6">
                      <p className="text-gray-600 text-sm leading-relaxed transition-colors duration-300">
                        {prop.description}
                      </p>
                    </div>
                    
                    {/* Learn more button - exactly like Services */}
                    <button className="px-6 py-2 text-sm font-semibold text-blue-700 bg-blue-50 rounded-lg hover:bg-blue-100 hover:text-blue-800 transition-all duration-300 border border-blue-200/50 hover:border-blue-300 mt-auto">
                      Learn more
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ValueProposition;