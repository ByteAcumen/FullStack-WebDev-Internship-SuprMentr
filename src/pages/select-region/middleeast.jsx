import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const MiddleEast = () => {
  const navigate = useNavigate();
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);

  const isInView1 = useInView(ref1, { once: true, threshold: 0.3 });
  const isInView2 = useInView(ref2, { once: true, threshold: 0.3 });
  const isInView3 = useInView(ref3, { once: true, threshold: 0.3 });
  const isInView4 = useInView(ref4, { once: true, threshold: 0.3 });

  const [selectedCountry, setSelectedCountry] = useState('UAE');
  const [counters, setCounters] = useState({ businesses: 0, projects: 0, presence: 0 });

  useEffect(() => {
    window.scrollTo(0, 0);
    try {
      const storedCountry = localStorage.getItem('selectedCountry');
      const country = storedCountry && ['UAE', 'KSA', 'Qatar', 'Bahrain', 'Oman'].includes(storedCountry) 
        ? storedCountry 
        : 'UAE';
      localStorage.setItem('selectedRegion', 'Middle East');
      localStorage.setItem('selectedCountry', country);
      setSelectedCountry(country);
    } catch (error) {
      console.error('Error accessing localStorage:', error);
    }

    const animateCounters = () => {
      const duration = 2000;
      const steps = 60;
      const increment = {
        businesses: 100 / steps,
        projects: 150 / steps,
        presence: 18 / steps,
      };

      let current = { businesses: 0, projects: 0, presence: 0 };
      const interval = setInterval(() => {
        current = {
          businesses: Math.min(current.businesses + increment.businesses, 100),
          projects: Math.min(current.projects + increment.projects, 150),
          presence: Math.min(current.presence + increment.presence, 18),
        };
        setCounters({
          businesses: Math.round(current.businesses),
          projects: Math.round(current.projects),
          presence: Math.round(current.presence),
        });

        if (current.businesses >= 100 && current.projects >= 150 && current.presence >= 18) {
          clearInterval(interval);
        }
      }, duration / steps);
    };

    if (isInView3) {
      animateCounters();
    }
  }, [isInView3]);

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    try {
      localStorage.setItem('selectedRegion', 'Middle East');
      localStorage.setItem('selectedCountry', country);
    } catch (error) {
      console.error('Error setting localStorage:', error);
    }
  };

  const fadeIn = (delay = 0) => ({
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, delay, ease: [0.4, 0, 0.2, 1] }
    }
  });

  const scaleIn = (delay = 0) => ({
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.6, delay, ease: "easeOut" }
    }
  });

  const slideInLeft = (delay = 0) => ({
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay, ease: "easeOut" } }
  });

  const slideInRight = (delay = 0) => ({
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay, ease: "easeOut" } }
  });

  const complianceFrameworks = {
    UAE: [
      "Personal Data Protection Law",
      "UAE Information Assurance (NESA)",
      "Dubai Cybersecurity Law",
      "Smart Dubai Data Regulation",
      "Network and Information Security (NIS) Directive",
      "Abu Dhabi Regulation for Data Protection",
      "Abu Dhabi Information Security Standards & Controls",
      "Abu Dhabi Smart City Framework",
      "Abu Dhabi Healthcare Information and Cyber Security Standard (ADHICS)"
    ],
    KSA: [
      "Personal Data Protection Law",
      "SAMA CSF",
      "Network and Information Security (NIS) Directive",
      "Communications and Information Technology Commission (CITC)",
      "National Information Assurance Program (NIAP)"
    ],
    Qatar: [
      "Personal Data Privacy and Protection Law",
      "Qatar National Information Assurance Policy",
      "Qatar National Cyber Security Strategy",
      "Qatar Central Bank (QCB) Regulations",
      "Qatar Cybersecurity Framework"
    ],
    Bahrain: [
      "Personal Data Protection Law",
      "Bahrain Cloud Computing Framework",
      "National Information Assurance Framework (NIAF)"
    ],
    Oman: [
      "Oman Data Protection Law",
      "CBO Regulation",
      "Oman National CERT Framework"
    ]
  };

  const countries = [
    { name: 'UAE', isActive: true },
    { name: 'KSA', isActive: true },
    { name: 'Qatar', isActive: true },
    { name: 'Bahrain', isActive: true },
    { name: 'Oman', isActive: true }
  ];

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
        <section className="relative h-[600px] bg-cover bg-center overflow-hidden" style={{ backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.6)), url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80')` }}>
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
                variants={fadeIn()}
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
                MIDDLE EAST!
              </motion.h1>
            </div>
          </div>
        </section>

        {/* Dotted Part Section Below Hero */}
        <section className="py-16 bg-white relative">
          <div className="container mx-auto px-6 sm:px-8 lg:px-12">
            <motion.div 
              className="flex justify-center items-center gap-8"
              variants={fadeIn()}
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
                  variants={scaleIn(0.2 * index)}
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

        {/* Regulatory Landscape Section */}
        <section ref={ref1} className="py-24 bg-gray-50 relative">
          <motion.div
            className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          <div className="container mx-auto px-6 sm:px-8 lg:px-12">
            <motion.div 
              className="text-center max-w-4xl mx-auto mb-12"
              variants={fadeIn()}
              initial="hidden"
              animate={isInView1 ? "visible" : "hidden"}
            >
              <motion.div 
                className="inline-block px-6 py-2 bg-gradient-to-r from-blue-100 to-blue-200 rounded-full mb-4 shadow-md"
                whileHover={{ scale: 1.05, boxShadow: "0 4px 20px rgba(59, 130, 246, 0.2)" }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="font-semibold text-xl text-blue-900" role="heading" aria-level="2">Cybersecurity Solutions are Vital to Navigate the Regulatory Landscape</h2>
              </motion.div>
              <motion.p 
                className="text-gray-700 mt-4"
                variants={fadeIn(0.2)}
              >
                Codzye Cyber offers a comprehensive suite of compliance and privacy solutions designed to address regional challenges across the Middle East, ensuring your business is always compliant and protected.
              </motion.p>
              <motion.div 
                className="mt-10"
                variants={slideInLeft(0.4)}
              >
                <blockquote className="italic text-xl text-blue-600 font-medium">
                  "Let's explore tailored solutions that form the backbone of our cybersecurity posture."
                </blockquote>
              </motion.div>
            </motion.div>
            <motion.div 
              className="flex flex-wrap justify-center gap-4 mb-8"
              variants={fadeIn(0.6)}
              initial="hidden"
              animate={isInView1 ? "visible" : "hidden"}
            >
              {countries.map((country, index) => (
                <motion.button
                  key={country.name}
                  className={`py-2 px-6 rounded-full transition-all duration-300 ${
                    selectedCountry === country.name 
                      ? 'bg-blue-600 text-white shadow-md' 
                      : 'bg-white text-blue-600 border-2 border-blue-200 hover:bg-blue-50 hover:shadow-md'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleCountrySelect(country.name)}
                  aria-label={`Select ${country.name} region`}
                >
                  {country.name}
                </motion.button>
              ))}
            </motion.div>
            <motion.div 
              className="relative max-w-5xl mx-auto"
              initial={{ opacity: 0 }}
              animate={isInView1 ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <svg className="w-full h-auto" viewBox="0 0 1000 200" xmlns="http://www.w3.org/2000/svg" aria-label="Middle East Skyline Illustration">
                <motion.g 
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  <path d="M50,200 L50,120 L40,120 L40,110 L60,110 L60,120 L50,120 L50,90 L70,90 L70,200 Z" fill="none" stroke="#1e3a8a" strokeWidth="2"/>
                  <path d="M20,200 L20,180 M15,180 L20,175 M25,180 L20,175" fill="none" stroke="#1e3a8a" strokeWidth="2"/>
                  <path d="M100,200 Q150,150 200,200" fill="none" stroke="#1e3a8a" strokeWidth="2"/>
                  <path d="M120,60 Q130,40 140,60 Q130,80 120,60 M130,80 L130,100" fill="none" stroke="#1e3a8a" strokeWidth="2"/>
                  <path d="M300,200 L300,40 L290,40 L310,20 L320,40 L310,40 L310,200 Z" fill="none" stroke="#1e3a8a" strokeWidth="2"/>
                  <circle cx="350" cy="30" r="10" fill="none" stroke="#1e3a8a" strokeWidth="2"/>
                  <path d="M350,20 L350,10 M350,40 L350,50 M340,30 L330,30 M360,30 L370,30" fill="none" stroke="#1e3a8a" strokeWidth="2"/>
                  <path d="M380,50 Q390,40 400,50 Q390,60 380,50 M400,50 Q410,40 420,50 Q410,60 400,50" fill="none" stroke="#1e3a8a" strokeWidth="2"/>
                  <path d="M900,40 Q910,30 920,40 Q910,50 900,40 M920,40 Q930,30 940,40 Q930,50 920,40" fill="none" stroke="#1e3a8a" strokeWidth="2"/>
                  <path d="M450,200 L450,80 L420,80 L420,60 L480,60 L480,80 L450,80 L450,200 Z" fill="none" stroke="#1e3a8a" strokeWidth="2"/>
                  <path d="M600,200 L600,120 L580,120 Q590,100 600,120 Q610,100 620,120 L620,200 Z" fill="none" stroke="#1e3a8a" strokeWidth="2"/>
                  <path d="M800,200 L800,100 Q850,80 800,60 L800,40 L820,40 L820,200 Z" fill="none" stroke="#1e3a8a" strokeWidth="2"/>
                  <path d="M850,200 L850,180 M845,180 L850,175 M855,180 L850,175" fill="none" stroke="#1e3a8a" strokeWidth="2"/>
                </motion.g>
              </svg>
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 text-gray-700"
                variants={fadeIn(0.8)}
                initial="hidden"
                animate={isInView1 ? "visible" : "hidden"}
              >
                <motion.div className="space-y-2">
                  {complianceFrameworks[selectedCountry].slice(0, Math.ceil(complianceFrameworks[selectedCountry].length / 2)).map((framework, idx) => (
                    <motion.div
                      key={`${selectedCountry}-${idx}`}
                      className="flex items-center"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 * idx }}
                    >
                      <span className="w-4 h-4 rounded-full bg-blue-500 mr-2 flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-sm font-medium">{framework}</span>
                    </motion.div>
                  ))}
                </motion.div>
                <motion.div className="space-y-2">
                  {complianceFrameworks[selectedCountry].slice(Math.ceil(complianceFrameworks[selectedCountry].length / 2)).map((framework, idx) => (
                    <motion.div
                      key={`${selectedCountry}-${idx + Math.ceil(complianceFrameworks[selectedCountry].length / 2)}`}
                      className="flex items-center"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 * (idx + Math.ceil(complianceFrameworks[selectedCountry].length / 2)) }}
                    >
                      <span className="w-4 h-4 rounded-full bg-blue-500 mr-2 flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-sm font-medium">{framework}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Codzye Cyber Section */}
        <section ref={ref2} className="py-24 bg-white relative">
          <motion.div
            className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          <div className="container mx-auto px-6 sm:px-8 lg:px-12">
            <motion.div
              className="text-center max-w-3xl mx-auto mb-12"
              variants={fadeIn()}
              initial="hidden"
              animate={isInView2 ? "visible" : "hidden"}
            >
              <motion.h2 
                className="text-3xl font-bold text-blue-900 mb-4"
                variants={fadeIn()}
                role="heading"
                aria-level="2"
              >
                Why Choose Codzye Cyber?
              </motion.h2>
              <motion.p 
                className="text-gray-700"
                variants={fadeIn(0.2)}
              >
                With extensive experience navigating the complexities of Middle Eastern regulations, Codzye Cyber is your one-stop shop for all compliance and privacy needs. Our team of regional experts understands the nuances of every legal framework, ensuring a tailored approach that meets your specific requirements.
              </motion.p>
            </motion.div>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              variants={fadeIn(0.4)}
              initial="hidden"
              animate={isInView2 ? "visible" : "hidden"}
            >
              {[
                {
                  title: "Client-Centric Approach",
                  icon: "👥",
                  description: "We work closely with you to understand your unique needs and design a tailored strategy."
                },
                {
                  title: "Quality Assurance",
                  icon: "✅",
                  description: "We ensure consistency in quality and delivery for your cybersecurity needs."
                },
                {
                  title: "Effective Communication",
                  icon: "🤝",
                  description: "We maintain a clear channel providing regular updates on your compliance journey."
                },
                {
                  title: "Swift Response",
                  icon: "⏩",
                  description: "Our response times exceed industry standards with a commitment to meeting your deadlines."
                }
              ].map((item, index) => (
                <motion.div 
                  key={item.title}
                  className="bg-white border border-blue-100 rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300"
                  variants={scaleIn(0.2 * index)}
                  whileHover={{ y: -5, scale: 1.02, boxShadow: "0 15px 30px rgba(59, 130, 246, 0.15)" }}
                >
                  <motion.div 
                    className="bg-gradient-to-br from-blue-50 to-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 text-3xl shadow-md"
                    initial={{ rotate: 0 }}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {item.icon}
                  </motion.div>
                  <h3 className="text-lg font-semibold text-blue-900 mb-2" role="heading" aria-level="3">{item.title}</h3>
                  <p className="text-gray-700 text-sm">{item.description}</p>
                  <motion.div 
                    className="mt-4 pt-4 border-t border-blue-100 flex space-x-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                    <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                    <span className="w-2 h-2 rounded-full bg-blue-300"></span>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Approach Section */}
        <section ref={ref3} className="py-24 bg-gray-50 relative">
          <motion.div
            className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          <div className="container mx-auto px-6 sm:px-8 lg:px-12">
            <motion.div 
              className="text-center mb-12"
              variants={fadeIn()}
              initial="hidden"
              animate={isInView3 ? "visible" : "hidden"}
            >
              <motion.h2 
                className="text-3xl font-bold text-blue-900 mb-4"
                variants={fadeIn()}
                role="heading"
                aria-level="2"
              >
                Codzye Cyber's Approach – Building a Secure Future in the Middle East…
              </motion.h2>
              <motion.p 
                className="text-gray-700 max-w-3xl mx-auto"
                variants={fadeIn(0.2)}
              >
                At Codzye Cyber, we take a collaborative approach, working closely with your team to understand your unique business needs and compliance challenges.
              </motion.p>
            </motion.div>
            <motion.div 
              className="flex flex-wrap justify-center gap-8 mt-16"
              variants={fadeIn(0.4)}
              initial="hidden"
              animate={isInView3 ? "visible" : "hidden"}
            >
              {[
                { icon: "🔍", title: "Assess" },
                { icon: "🎯", title: "Plan" },
                { icon: "🚀", title: "Implement" },
                { icon: "⚙️", title: "Operate" },
                { icon: "📈", title: "Optimize" }
              ].map((step, index) => (
                <motion.div 
                  key={step.title}
                  className="text-center"
                  variants={scaleIn(0.2 * index)}
                >
                  <motion.div 
                    className="w-24 h-24 rounded-full bg-white border-2 border-blue-500 flex items-center justify-center text-3xl mx-auto mb-4 shadow-md"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 360,
                      boxShadow: "0 10px 25px rgba(59, 130, 246, 0.4)"
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {step.icon}
                  </motion.div>
                  <motion.h3 
                    className="font-semibold text-blue-900"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    role="heading"
                    aria-level="3"
                  >
                    {step.title}
                  </motion.h3>
                </motion.div>
              ))}
            </motion.div>
            <motion.div 
              className="mt-16 text-center"
              variants={fadeIn(0.6)}
            >
              <motion.h3 
                className="text-2xl font-bold text-blue-700 mb-4"
                variants={fadeIn()}
                role="heading"
                aria-level="3"
              >
                Discover What Our Client's say About us
              </motion.h3>
              <motion.p 
                className="text-gray-700 max-w-3xl mx-auto mb-8"
                variants={fadeIn(0.2)}
              >
                We take immense pride in delivering exceptional experiences and solutions tailored to their needs. But don't just take our word for it. Hear directly from those we've served.
              </motion.p>
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
                variants={fadeIn(0.6)}
              >
                <div className="flex space-x-2">
                  <span className="w-2 h-2 rounded-full bg-blue-300"></span>
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  <span className="w-2 h-2 rounded-full bg-blue-300"></span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section ref={ref4} className="py-16 bg-gray-50 relative">
          <motion.div
            className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          <div className="container mx-auto px-6 sm:px-8 lg:px-12">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={fadeIn()}
              initial="hidden"
              animate={isInView4 ? "visible" : "hidden"}
            >
              <motion.div 
                className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                variants={scaleIn()}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <motion.h3 
                  className="text-4xl font-bold text-blue-600"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, type: "spring" }}
                  role="heading"
                  aria-level="3"
                >
                  85+
                </motion.h3>
                <p className="text-blue-900 font-medium">Businesses Certified</p>
              </motion.div>
              <motion.div 
                className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                variants={scaleIn(0.2)}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <motion.h3 
                  className="text-4xl font-bold text-blue-600"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, type: "spring", delay: 0.2 }}
                  role="heading"
                  aria-level="3"
                >
                  120+
                </motion.h3>
                <p className="text-blue-900 font-medium">Projects Completed</p>
              </motion.div>
              <motion.div 
                className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                variants={scaleIn(0.4)}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <motion.h3 
                  className="text-4xl font-bold text-blue-600"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, type: "spring", delay: 0.4 }}
                  role="heading"
                  aria-level="3"
                >
                  12+
                </motion.h3>
                <p className="text-blue-900 font-medium">Global Presence</p>
              </motion.div>
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
            variants={fadeIn()}
            initial="hidden"
            animate="visible"
          >
            <motion.h2 
              className="text-3xl font-bold text-blue-900"
              variants={slideInLeft()}
              role="heading"
              aria-level="2"
            >
              Contact Us
            </motion.h2>            <motion.button 
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3 px-10 rounded-full inline-flex items-center shadow-lg transition duration-300"
              whileHover={{ scale: 1.05, boxShadow: "0 8px 25px rgba(59, 130, 246, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              variants={slideInRight()}
              onClick={() => navigate('/get-started')}
              aria-label="Get started with Codzye Cyber"
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

export default MiddleEast;