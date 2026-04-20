import React, { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';
import businessTeamImage from '../assets/aerial-view-business-team.jpg';
import { Helmet } from 'react-helmet';

const Services = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const isInView1 = useInView(ref1, { once: true, threshold: 0.2 });
  const isInView2 = useInView(ref2, { once: true, threshold: 0.2 });
  const isInView3 = useInView(ref3, { once: true, threshold: 0.1 });
  
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();

  useEffect(() => {
    if (isInView1) controls1.start("visible");
    if (isInView2) controls2.start("visible");
    if (isInView3) controls3.start("visible");
  }, [isInView1, isInView2, isInView3, controls1, controls2, controls3]);

  const fadeIn = (delay = 0) => ({
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        delay,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  });

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const fadeInScale = (delay = 0) => ({
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.7,
        delay,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  });

  const slideIn = (direction = "left", delay = 0) => ({
    hidden: { x: direction === "left" ? -60 : 60, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.9, delay, ease: [0.25, 0.1, 0.25, 1] } }
  });

  const services = [
    {
      title: "Compliance Edge",
      description: "Simplify your journey towards achieving and maintaining regulatory compliance with our comprehensive Compliance Edge solution.",
      icon: "compass",
      color: "from-blue-100 to-blue-200"
    },
    {
      title: "Governance Engine",
      description: "Maintain control over your digital environment to uphold sustained cybersecurity. Our Governance Engine optimizes security policies, processes, and procedures.",
      icon: "cogs",
      color: "from-blue-100 to-blue-200"
    },
    {
      title: "Threat Vulnerability Radar",
      description: "Your Proactive Defender Against Cyber Threats. A comprehensive solution designed to proactively identify and prioritize potential risks in your digital terrain.",
      icon: "radar",
      color: "from-blue-100 to-blue-200"
    },
    {
      title: "Technology Arsenal",
      description: "A powerful suite of security tools and solutions designed to fortify your organization and help build a robust security posture.",
      icon: "tools",
      color: "from-blue-100 to-blue-200"
    },    {
      title: "Cyber Defense",
      description: "Comprehensive 24/7 monitoring, proactive threat detection, and swift incident response.",
      icon: "shield",
      color: "from-blue-100 to-blue-200"
    },
    {
      title: "Security Consultation",
      description: "Expert advisory services to develop strategic cybersecurity roadmaps tailored to your business objectives and risk profile.",
      icon: "consulting",
      color: "from-blue-100 to-blue-200"
    }
  ];

  const tsamaSteps = [
    { step: "Train", icon: "👥", desc: "Team Training" },
    { step: "Scan", icon: "🔍", desc: "Environment Scan" },
    { step: "Assess", icon: "📊", desc: "Risk Assessment" },
    { step: "Mitigate", icon: "🛡️", desc: "Security Implementation" },
    { step: "Audit", icon: "📝", desc: "Regular Reviews" }
  ];

  const getServiceIcon = (icon) => {
    switch (icon) {
      case 'compass':
        return (
          <svg className="w-16 h-16 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
          </svg>
        );
      case 'cogs':
        return (
          <svg className="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
          </svg>
        );
      case 'radar':
        return (
          <svg className="w-16 h-16 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
          </svg>
        );
      case 'tools':
        return (
          <svg className="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"></path>
          </svg>
        );      case 'shield':
        return (
          <svg className="w-16 h-16 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
          </svg>
        );
      case 'consulting':
        return (
          <svg className="w-16 h-16 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Helmet>
        <title>Our Services – Codezye Cyber</title>
        <meta
          name="description"
          content="Explore the comprehensive cybersecurity services offered by Codezye Cyber, including VAPT, compliance audits, advisory, and more."
        />
      </Helmet>
      <div className="min-h-screen bg-white text-text-dark overflow-hidden">      {/* Enhanced Hero Section */}
        <section className="relative pt-32 pb-40 overflow-hidden bg-white bg-center bg-cover" style={{ backgroundImage: '' }}>
          {/* Mobile faded image */}
          <div
            className="absolute top-0 left-0 w-full h-full block sm:hidden"
            style={{
              backgroundImage: `url(${businessTeamImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: 0.3
            }}
          />
          {/* Desktop background image */}
          <div
            className="absolute inset-0 hidden sm:block"
            style={{
              backgroundImage: `url(${businessTeamImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-blue-50/80 to-white/95 z-10 pointer-events-none"></div>
          <motion.div
            className="absolute top-1/3 -left-20 w-80 h-80 bg-primary-light/20 rounded-full blur-2xl"
            animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-1/3 -right-20 w-80 h-80 bg-primary-dark/20 rounded-full blur-2xl"
            animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
          
          <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 relative z-20 max-w-7xl text-center">
            <motion.div
              variants={slideIn("left")}
              initial="hidden"
              animate="visible"
            >
              <motion.span
                className="inline-block px-6 py-2 bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 rounded-full text-sm font-semibold tracking-wider mb-6 shadow-md"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                CYBERSECURITY SOLUTIONS
              </motion.span>              <motion.h1
                variants={fadeIn(0.3)}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight leading-tight text-blue-600"
              >
                Protecting Your Digital World
                <br />One Solution at a Time.
              </motion.h1>
              <motion.p
                variants={fadeIn(0.5)}
                className="text-gray-900 sm:text-gray-600 max-w-3xl mx-auto text-lg sm:text-xl leading-relaxed"
              >
                At <span className="font-bold text-blue-600">Codezye Cyber</span>, we deliver tailored, cutting-edge cybersecurity solutions to safeguard your business against evolving threats. Trust our expert team to provide comprehensive protection, from assessment to incident response.
              </motion.p>
              <motion.div
                variants={fadeIn(0.7)}
              >                <Link to="/get-started">
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)" }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full font-medium shadow-lg mt-10 transition duration-300"
                  >
                    Get Started
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section ref={ref1} className="py-24 bg-white relative overflow-hidden">
          <motion.div
            className="absolute top-40 left-0 w-96 h-96 bg-primary-light/10 rounded-full blur-2xl"
            animate={{ x: [0, 30, 0], opacity: [0.05, 0.1, 0.05] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-20 right-0 w-96 h-96 bg-primary-dark/10 rounded-full blur-2xl"
            animate={{ x: [-30, 0, -30], opacity: [0.05, 0.1, 0.05] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10 max-w-7xl">
            <motion.div
              variants={fadeIn()}
              initial="hidden"
              animate={controls1}
              className="text-center mb-16"
            >
              <motion.span
                className="inline-block px-6 py-3 bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 rounded-full text-sm font-semibold tracking-wider mb-4 shadow-md"
                transition={{ duration: 0.5 }}
              >
                OUR SERVICES
              </motion.span>              <motion.h2
                variants={fadeIn(0.3)}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight leading-tight text-blue-600"
              >
                Comprehensive Cybersecurity Solutions
              </motion.h2>
              <motion.p
                variants={fadeIn(0.5)}
                className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed"
              >
                Explore our tailored services designed to fortify your organization against cyber threats with cutting-edge technology.
              </motion.p>
            </motion.div>
            
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={controls1}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={fadeInScale(index * 0.2)}                  whileHover={{ 
                    y: -8,
                    boxShadow: "0 25px 50px rgba(59, 130, 246, 0.15)",
                    borderColor: "rgba(59, 130, 246, 0.2)"
                  }}
                  className="bg-white rounded-3xl border border-gray-100 p-8 shadow-lg hover:shadow-xl transition-all duration-500 relative overflow-hidden group"
                >
                  {/* Clean background decoration */}
                  <motion.div
                    className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50/50 to-transparent rounded-full -translate-y-8 translate-x-8"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  />
                  
                  <div className="flex flex-col items-center text-center relative z-10">
                    {/* Icon with modern styling */}
                    <motion.div
                      className="w-20 h-20 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center border border-blue-200/50 shadow-sm mb-6 group-hover:shadow-md transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      {getServiceIcon(service.icon)}
                    </motion.div>
                    
                    {/* Clean typography */}
                    <h3 className="text-xl font-bold text-blue-500 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Subtle accent line */}
                    <motion.div
                      className="w-12 h-0.5 bg-gradient-to-r from-transparent via-blue-300 to-transparent rounded-full mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* TSAMA Approach Section */}
        <section ref={ref2} className="py-24 bg-blue-50 relative overflow-hidden">
          <motion.div
            className="absolute bottom-20 right-0 w-96 h-96 bg-primary-dark/10 rounded-full blur-2xl"
            animate={{ x: [-30, 0, -30], opacity: [0.05, 0.1, 0.05] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-20 left-0 w-96 h-96 bg-primary-light/10 rounded-full blur-2xl"
            animate={{ x: [30, 0, 30], opacity: [0.05, 0.1, 0.05] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
          
          <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 relative z-10 max-w-7xl">
            <motion.div
              variants={fadeIn()}
              initial="hidden"
              animate={controls2}
              className="text-center mb-16"
            >
              <motion.div
                className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-100 to-blue-200 px-6 py-3 rounded-full mb-6 border border-blue-100 shadow-md"
                transition={{ duration: 0.5 }}
              >
                <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                <span className="text-sm font-semibold tracking-wider text-blue-800">TSAMA APPROACH</span>
                <span className="w-2 h-2 rounded-full bg-blue-600"></span>
              </motion.div>              <motion.h2
                variants={fadeIn(0.3)}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight leading-tight text-blue-600"
              >
                Our Proven Methodology
              </motion.h2>
              <motion.p
                variants={fadeIn(0.5)}
                className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed"
              >
                A comprehensive framework that ensures complete security coverage and continuous improvement for your organization.
              </motion.p>
            </motion.div>
            
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={controls2}
              className="flex flex-wrap justify-center gap-8 md:gap-12"
            >
              {tsamaSteps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={fadeInScale(index * 0.2)}
                  whileHover={{ scale: 1.1, boxShadow: "0 15px 35px rgba(0, 74, 173, 0.2)" }}
                  className="bg-white rounded-2xl p-6 border-2 border-blue-100 shadow-md hover:shadow-xl transition-all duration-400 flex flex-col items-center max-w-[160px]"
                >
                  <motion.div
                    className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center border-2 border-blue-100 mb-4 relative shadow-md"
                    whileHover={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className="text-3xl">{step.icon}</span>
                    <motion.div
                      className="absolute -top-2 -right-2 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-xs font-bold text-white"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      {index + 1}
                    </motion.div>
                  </motion.div>
                  <h4 className="text-xl font-semibold text-blue-600 mb-2">{step.step}</h4>
                  <p className="text-text-dark/80 text-center text-sm">{step.desc}</p>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div
              variants={fadeIn(0.8)}
              initial="hidden"
              animate={controls2}
              className="mt-16 text-center"
            >
              <Link to="/process">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0, 74, 173, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-gradient-to-r from-primary-dark to-primary-light text-white rounded-full font-medium shadow-md transition duration-300"
                >
                  Learn More About Our Process
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Contact Us Section */}
        <section ref={ref3} className="py-24 bg-white relative overflow-hidden">
          <motion.div
            className="absolute top-20 left-0 w-80 h-80 bg-primary-light/20 rounded-full blur-2xl"
            animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 relative z-10 max-w-7xl text-center">
            <motion.div
              variants={fadeIn()}
              initial="hidden"
              animate={controls3}
            >
              <motion.div
                className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-100 to-blue-200 px-6 py-3 rounded-full mb-6 border border-blue-100 shadow-md"
                transition={{ duration: 0.5 }}
              >
                <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                <span className="text-sm font-semibold tracking-wider text-blue-800">GET STARTED</span>
                <span className="w-2 h-2 rounded-full bg-blue-600"></span>
              </motion.div>              <motion.h3
                variants={fadeIn(0.3)}
                className="text-3xl sm:text-4xl font-bold text-blue-900 mb-6"
              >
                Ready to Secure Your Business?
              </motion.h3>
              <motion.p
                variants={fadeIn(0.5)}
                className="text-gray-600 mb-10 max-w-2xl mx-auto text-lg leading-relaxed"
              >
                Get in touch with our cybersecurity experts for a personalized consultation.
              </motion.p>
              <Link to="/get-started">
                <motion.button
                  variants={fadeIn(0.7)}
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full font-medium shadow-md flex items-center justify-center mx-auto transition duration-300"
                >
                  Contact Us
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Custom Styles */}
        <style>
          {`
            .bg-grid-pattern {
              background-image: radial-gradient(rgba(0, 74, 173, 0.1) 1px, transparent 1px);
              background-size: 30px 30px;
            }
          `}
        </style>
      </div>
    </>
  );
};

export default Services;