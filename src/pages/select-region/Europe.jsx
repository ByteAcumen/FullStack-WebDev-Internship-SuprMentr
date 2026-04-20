import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaShieldAlt, FaLock, FaUsers, FaChevronRight, FaCheck, FaClock, FaUserTie, FaTrophy, FaHandshake, FaGlobe } from 'react-icons/fa';
import { Helmet } from 'react-helmet';

// Animation variants
const animations = {
  fadeIn: (delay = 0) => ({
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, delay, ease: [0.4, 0, 0.2, 1] }
    }
  }),
  scaleIn: (delay = 0) => ({
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.6, delay, ease: "easeOut" }
    }
  }),
  slideInLeft: (delay = 0) => ({
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay, ease: "easeOut" } }
  }),
  slideInRight: (delay = 0) => ({
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay, ease: "easeOut" } }
  }),
  expand: {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
  }
};

// Custom button component
const AnimatedButton = ({ children, className = "", ...props }) => (
  <motion.button
    className={`py-2 px-8 rounded-full transition-all duration-300 ${
      className.includes('bg-') ? className : `bg-blue-600 text-white hover:bg-blue-700 ${className}`
    } ${className}`}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    {...props}
  >
    {children}
  </motion.button>
);

const Europe = () => {
  const navigate = useNavigate();
  const [expandedIndex, setExpandedIndex] = useState(null);
  
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);

  const isInView1 = useInView(ref1, { once: true, threshold: 0.1 });
  const isInView2 = useInView(ref2, { once: true, threshold: 0.1 });
  const isInView3 = useInView(ref3, { once: true, threshold: 0.1 });
  const isInView4 = useInView(ref4, { once: true, threshold: 0.1 });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      title: "GDPR Compliance",
      description: "Comprehensive solutions for General Data Protection Regulation compliance across all EU member states."
    },
    {
      title: "NIS2 Directive",
      description: "Network and Information Security compliance for critical infrastructure and digital service providers."
    },
    {
      title: "ISO 27001",
      description: "Information security management systems implementation and certification support."
    },
    {
      title: "Data Protection Impact Assessment",
      description: "Systematic assessment of data processing activities and their privacy implications."
    },
    {
      title: "Cybersecurity Framework",
      description: "Robust security frameworks tailored to European regulatory requirements."
    },
    {
      title: "Privacy by Design",
      description: "Proactive approach to privacy protection built into system architecture and business processes."
    }
  ];

  const reasons = [
    {
      icon: FaShieldAlt,
      title: "EU Expertise",
      description: "Deep understanding of European cybersecurity regulations and compliance requirements."
    },
    {
      icon: FaUsers,
      title: "Local Presence",
      description: "On-ground teams across major European markets for personalized service delivery."
    },
    {
      icon: FaLock,
      title: "Advanced Security",
      description: "Cutting-edge security technologies and methodologies proven in European markets."
    },
    {
      icon: FaTrophy,
      title: "Proven Track Record",
      description: "Successful implementation of cybersecurity solutions for European enterprises."
    },
    {
      icon: FaHandshake,
      title: "Trusted Partnership",
      description: "Long-term partnerships built on trust, transparency, and consistent delivery."
    }
  ];

  const countries = [
    { name: "United Kingdom", flag: "🇬🇧", regulations: ["UK GDPR", "Data Protection Act 2018", "NIS Regulations"] },
    { name: "Germany", flag: "🇩🇪", regulations: ["GDPR", "BDSG", "IT Security Act"] },
    { name: "France", flag: "🇫🇷", regulations: ["GDPR", "Data Protection Act", "LPM"] },
    { name: "Netherlands", flag: "🇳🇱", regulations: ["GDPR", "Dutch DPA", "Cybersecurity Act"] },
    { name: "Switzerland", flag: "🇨🇭", regulations: ["nDSG", "FINSA", "Banking Act"] },
    { name: "Sweden", flag: "🇸🇪", regulations: ["GDPR", "Patient Data Act", "Security Protection Act"] }
  ];

  const testimonials = [
    {
      quote: "<span className=\"font-bold text-blue-500\"><span className=\"bg-gradient-to-r from-blue-500 to-blue-500 bg-clip-text text-transparent\">Codezye</span> Cyber</span>'s services have been a game-changer for us. Their expertise is unmatched.",
      author: "Legacy Tech",
    },
    {
      quote: "Their proactive approach saved us from a major breach. We look forward to continued support.",
      author: "UBX",
    },
  ];

  const toggleExpanded = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <>
      <Helmet>
        <title>Select Your Region – Codezye Cyber</title>
        <meta
          name="description"
          content="Choose your region to see tailored cybersecurity solutions and compliance services from Codezye Cyber."
        />
      </Helmet>
      <div className="bg-white text-gray-900 min-h-screen overflow-hidden">
        {/* Hero Section */}
        <section className="relative h-[600px] bg-cover bg-center overflow-hidden" style={{ backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.6)), url('https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80')` }}>
          <motion.div
            className="absolute top-1/4 left-0 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-1/4 right-0 w-72 h-72 bg-blue-300/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
          <motion.div 
            className="absolute bottom-0 left-0 right-0 h-1"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
          >
            <div className="h-full bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"></div>
          </motion.div>
          <div className="container mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-center h-full relative z-10">
            <div className="text-center">
              <motion.h2 
                className="text-lg md:text-xl font-semibold text-blue-700 mb-2"
                variants={animations.fadeIn()}
                initial="hidden"
                animate="visible"
                role="heading"
                aria-level="2"
              >
                Your Trusted Cyber Security Partner in
              </motion.h2>
              <motion.h1 
                className="text-5xl md:text-7xl font-extrabold text-blue-700 mb-6 tracking-wider"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                role="heading"
                aria-level="1"
              >
                EUROPE!
              </motion.h1>
              <motion.p 
                className="text-gray-700 max-w-3xl mx-auto mb-8"
                variants={animations.fadeIn(0.4)}
              >
                <span className="font-bold text-blue-500">
                  <span className="bg-gradient-to-r from-blue-500 to-blue-500 bg-clip-text text-transparent">Codezye</span> Cyber
                </span> offers tailored solutions to meet the stringent cybersecurity and compliance needs of European businesses.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Dotted Part Section Below Hero (copied from Middle East) */}
        <section className="py-16 bg-white relative">
          <div className="container mx-auto px-6 sm:px-8 lg:px-12">
            <motion.div 
              className="flex justify-center items-center gap-8"
              variants={animations.fadeIn()}
              initial="hidden"
              animate="visible"
            >
              {[
                {
                  title: "Regional Expertise",
                  description: "Deep understanding of regional regulations like UAE PDP Law, KSA Data Protection Law, and more."
                },
                {
                  title: "Localized Solutions",
                  description: "Tailored services to meet the unique needs of businesses in the Middle East."
                },
                {
                  title: "Global Reach, Local Focus",
                  description: "Leverage our global resources with a team dedicated to the Middle East."
                },
                {
                  title: "Multilingual Support",
                  description: "Seamless communication in Arabic and English for a smooth experience."
                }
              ].map((item, index) => (
                <motion.div 
                  key={item.title}
                  className="text-center relative"
                  variants={animations.scaleIn(0.2 * index)}
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center text-blue-700 text-2xl mx-auto mb-4 shadow-md">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">{item.title}</h3>
                  <p className="text-gray-700 text-sm">{item.description}</p>
                  {index < 3 && (
                    <div className="absolute top-8 left-full w-16 h-1 bg-gradient-to-r from-blue-100 via-blue-300 to-blue-100"></div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Services Grid Section */}
        <section ref={ref1} className="py-24 bg-white relative">
          <motion.div
            className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          <div className="container mx-auto px-6 sm:px-8 lg:px-12">
            <motion.div 
              className="text-center max-w-4xl mx-auto mb-12"
              variants={animations.fadeIn()}
              initial="hidden"
              animate={isInView1 ? "visible" : "hidden"}
            >
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-blue-900 mb-4"
                variants={animations.fadeIn()}
                role="heading"
                aria-level="2"
              >
                European Compliance Solutions
              </motion.h2>
              <motion.p 
                className="text-gray-700"
                variants={animations.fadeIn(0.2)}
              >
                Navigate the complex landscape of European cybersecurity regulations with our expert guidance.
              </motion.p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={animations.scaleIn(0.1 * index)}
                  initial="hidden"
                  animate={isInView1 ? "visible" : "hidden"}
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 15px 30px rgba(59, 130, 246, 0.15)" 
                  }}
                  className="bg-white p-6 rounded-xl border border-blue-100 shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-blue-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section ref={ref3} className="py-24 bg-gray-50 relative">
          <motion.div
            className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          <div className="container mx-auto px-6 sm:px-8 lg:px-12">
            <motion.div
              className="text-center max-w-3xl mx-auto mb-12"
              variants={animations.fadeIn()}
              initial="hidden"
              animate={isInView3 ? "visible" : "hidden"}
            >
              <motion.h2 
                className="text-3xl font-bold text-blue-900 mb-4"
                variants={animations.fadeIn()}
                role="heading"
                aria-level="2"
              >
                Why Choose <span className="font-bold text-blue-500">
                  <span className="bg-gradient-to-r from-blue-500 to-blue-500 bg-clip-text text-transparent">Codezye</span> Cyber
                </span>?
              </motion.h2>
              <motion.p 
                className="text-gray-700"
                variants={animations.fadeIn(0.2)}
              >
                Selecting the ideal cybersecurity partner is critical for your organization's safety. <span className="font-bold text-blue-500">
                  <span className="bg-gradient-to-r from-blue-500 to-blue-500 bg-clip-text text-transparent">Codezye</span> Cyber
                </span> ensures robust protection.
              </motion.p>
            </motion.div>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
              variants={animations.fadeIn(0.4)}
              initial="hidden"
              animate={isInView3 ? "visible" : "hidden"}
            >
              {reasons.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={index}
                    variants={animations.scaleIn(0.1 * index)}
                    whileHover={{ 
                      scale: 1.05, 
                      boxShadow: "0 15px 30px rgba(59, 130, 246, 0.15)" 
                    }}
                    className="bg-white p-6 rounded-xl border border-blue-100 text-center shadow-md hover:shadow-xl transition-all duration-300"
                  >
                    <div className="text-blue-600 text-3xl mb-4 flex justify-center">
                      <IconComponent />
                    </div>
                    <h3 className="text-lg font-bold text-blue-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Countries Section */}
        <section ref={ref2} className="py-24 bg-white relative">
          <motion.div
            className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          <div className="container mx-auto px-6 sm:px-8 lg:px-12">
            <motion.div 
              className="text-center max-w-4xl mx-auto mb-12"
              variants={animations.fadeIn()}
              initial="hidden"
              animate={isInView2 ? "visible" : "hidden"}
            >
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-blue-900 mb-4"
                variants={animations.fadeIn()}
                role="heading"
                aria-level="2"
              >
                European Market Coverage
              </motion.h2>
              <motion.p 
                className="text-gray-700"
                variants={animations.fadeIn(0.2)}
              >
                We serve major European markets with localized expertise and regulatory knowledge.
              </motion.p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {countries.map((country, index) => (
                <motion.div
                  key={index}
                  variants={animations.fadeIn(0.1 * index)}
                  initial="hidden"
                  animate={isInView2 ? "visible" : "hidden"}
                  whileHover={{ scale: 1.02, boxShadow: "0 10px 25px rgba(59, 130, 246, 0.1)" }}
                  className="bg-white p-6 rounded-xl border border-blue-100 shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">{country.flag}</span>
                    <h3 className="text-xl font-bold text-blue-900">{country.name}</h3>
                  </div>
                  <div className="space-y-2">
                    {country.regulations.map((regulation, regIndex) => (
                      <span 
                        key={regIndex}
                        className="inline-block bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm mr-2 mb-2"
                      >
                        {regulation}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section (updated to match other regions) */}
        <section ref={ref4} className="py-24 bg-gray-50 relative">
          <motion.div
            className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          <div className="container mx-auto px-6 sm:px-8 lg:px-12">
            <motion.div 
              className="text-center max-w-4xl mx-auto mb-12"
              variants={animations.fadeIn()}
              initial="hidden"
              animate={isInView4 ? "visible" : "hidden"}
            >
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-blue-900 mb-4"
                variants={animations.fadeIn()}
                role="heading"
                aria-level="2"
              >
                What Our Client's Say About Us
              </motion.h2>
              <motion.p 
                className="text-gray-700"
                variants={animations.fadeIn(0.2)}
              >
                We take immense pride in delivering exceptional experiences and solutions tailored to their needs. But don't just take our word for it. Hear directly from those we've served.
              </motion.p>
            </motion.div>
            <div className="flex flex-col md:flex-row justify-center gap-6 mb-8">
              <div className="bg-white border border-blue-100 rounded-lg p-6 shadow-md max-w-xs mx-auto md:mx-0 text-center flex-1">
                <p className="text-gray-700 text-sm mb-4 italic">
                  "Their expert team provided clear guidance, tailored solutions, and hands-on assistance that made the complex certification process smooth and efficient. Codezye Cyber's deep understanding of information security and compliance requirements, combined with their proactive approach, ensured that our company's data protection practices met the highest standards."
                </p>
                <div className="mt-2">
                  <span className="text-blue-600 font-semibold block">CISO</span>
                  <span className="text-blue-600 font-semibold block">ASQR Technologies</span>
                </div>
              </div>
              <div className="bg-white border border-blue-100 rounded-lg p-6 shadow-md max-w-xs mx-auto md:mx-0 text-center flex-1">
                <p className="text-gray-700 text-sm mb-4 italic">
                  "Their expertise and proactive approach have been instrumental in strengthening our cybersecurity posture and ensuring compliance in a rapidly evolving threat landscape. The team at Codezye Cyber demonstrated exceptional professionalism, deep industry knowledge, and a genuine commitment to our company's security needs."
                </p>
                <div className="mt-2">
                  <span className="text-blue-600 font-semibold block">Technology Head</span>
                  <span className="text-blue-600 font-semibold block">Tequed Labs Pvt Ltd</span>
                </div>
              </div>
            </div>
            <motion.div
              className="flex justify-center mt-6"
              variants={animations.fadeIn(0.6)}
            >
              <div className="flex space-x-2">
                <span className="w-2 h-2 rounded-full bg-blue-300"></span>
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                <span className="w-2 h-2 rounded-full bg-blue-300"></span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-b from-white to-blue-100 text-center relative">
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-blue-100 to-transparent opacity-50"
            animate={{ opacity: [0.4, 0.6, 0.4] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-6"
            variants={animations.fadeIn()}
            initial="hidden"
            animate="visible"
          >
            <motion.h2 
              className="text-3xl font-bold text-blue-900"
              variants={animations.slideInLeft()}
              role="heading"
              aria-level="2"
            >
              Ready to Secure Your European Operations?
            </motion.h2>
            <motion.button
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3 px-10 rounded-full inline-flex items-center shadow-lg transition duration-300"
              whileHover={{ scale: 1.05, boxShadow: "0 8px 25px rgba(59, 130, 246, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              variants={animations.slideInRight()}
              onClick={() => navigate('/get-started')}
              aria-label="Get started with Codezye Cyber"
            >
              <span>Get Started</span>
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </motion.div>
        </section>
      </div>
    </>
  );
};

export default Europe;