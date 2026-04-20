import React, { useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import IconCard from './ui/IconCard';
import { FaChalkboardTeacher, FaSearch, FaClipboardCheck, FaShieldAlt, FaFileContract } from 'react-icons/fa';

const services = [
  { 
    title: "TRAIN", 
    icon: FaChalkboardTeacher,
    description: "Comprehensive training programs for your team",
    color: "bg-indigo-500",
    hoverColor: "hover:bg-indigo-500/10"
  },
  { 
    title: "SCOPE", 
    icon: FaSearch,
    description: "In-depth analysis of your security needs",
    color: "bg-blue-500",
    hoverColor: "hover:bg-blue-500/10"
  },
  { 
    title: "ASSESS", 
    icon: FaClipboardCheck,
    description: "Thorough evaluation of your current systems",
    color: "bg-teal-500",
    hoverColor: "hover:bg-teal-500/10"
  },
  { 
    title: "MITIGATE", 
    icon: FaShieldAlt,
    description: "Effective risk reduction strategies",
    color: "bg-green-500",
    hoverColor: "hover:bg-green-500/10"
  },
  { 
    title: "AUDIT", 
    icon: FaFileContract,
    description: "Compliance verification and reporting",
    color: "bg-purple-500",
    hoverColor: "hover:bg-purple-500/10"
  },
];

const Services = () => {
  const controls = useAnimation();
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.1 });
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { 
      y: 30,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    hover: {
      y: -5,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };
  return (    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/40 overflow-hidden relative">
      {/* Enhanced background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-blue-50/60"></div>
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-blue-200/40 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-200/30 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">        {/* Section header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={titleVariants}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <div className="space-y-6">            <div className="inline-block">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 leading-tight">
                Our{" "}
                <span className="text-blue-900">Services</span>
              </h2>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-600 text-base sm:text-lg lg:text-xl leading-relaxed px-4 font-medium">
                Comprehensive security solutions tailored to your organization's needs
              </p>
            </div>

            {/* Trust indicators */}
            <div className="flex justify-center items-center gap-6 mt-8">
              <div className="flex items-center gap-2 px-4 py-2 bg-blue-100/70 rounded-full border border-blue-200/50">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-blue-800 text-sm font-medium">Comprehensive Solutions</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-blue-100/70 rounded-full border border-blue-200/50">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-blue-800 text-sm font-medium">Tailored Approach</span>
              </div>
            </div>
          </div>
        </motion.div>        {/* Services grid */}
        <motion.div
          ref={containerRef}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8"
        >
          {services.map((service, index) => (            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              className="group cursor-pointer transform transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative">
                {/* Subtle shadow for depth */}
                <div className="absolute inset-0 bg-black/5 rounded-xl blur-lg scale-105 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>                {/* Clean professional card */}
                <div className="relative bg-white rounded-xl border border-gray-200/60 shadow-md hover:shadow-lg p-6 transition-all duration-300 ease-out group-hover:scale-105 group-hover:border-blue-300/50 group-hover:bg-white/95 h-[320px] flex flex-col">
                  {/* Simple background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 to-white rounded-xl"></div>
                  
                  <div className="flex flex-col items-center text-center h-full relative z-10">
                    <div className={`${service.color} w-16 h-16 rounded-full flex items-center justify-center mb-6 text-white text-2xl transition-all duration-300 group-hover:scale-110 shadow-lg group-hover:shadow-xl`}>
                      <service.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-700 mb-4 transition-all duration-300 group-hover:text-blue-700">
                      {service.title}
                    </h3>
                    <div className="flex-1 flex items-center mb-6">
                      <p className="text-gray-600 text-sm leading-relaxed transition-colors duration-300">
                        {service.description}
                      </p>
                    </div>
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

export default Services;