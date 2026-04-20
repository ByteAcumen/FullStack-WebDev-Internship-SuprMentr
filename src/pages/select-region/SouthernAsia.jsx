import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaShieldAlt, FaLock, FaChevronRight, FaCheck, FaClock, FaUserTie, FaTrophy, FaHandshake, FaGlobe } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
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
  })
};

// Button component with updated styling
const Button = ({ children, primary = false, onClick, className = "", ...props }) => (
  <motion.button
    className={`py-2 px-8 rounded-full transition-all duration-300 ${
      primary 
        ? 'bg-blue-600 text-white shadow-lg border-2 border-blue-600 hover:bg-blue-700' 
        : 'border-2 border-gray-300 text-gray-800 hover:border-blue-400 hover:bg-blue-50'
    } ${className}`}
    whileHover={{ scale: 1.1, rotate: 5 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    {...props}
  >
    {children}
  </motion.button>
);

// Compliance card with updated styling
const ComplianceCard = ({ framework, index }) => (
  <motion.div
    className="flex items-center px-3 py-1.5"
    initial={{ opacity: 0, x: -10 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: 0.2 * index }}
  >
    <motion.span 
      className="w-4 h-4 rounded-full bg-blue-600 mr-2 flex items-center justify-center"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3, delay: 0.2 * index + 0.2 }}
    >
      <FaCheck className="text-white w-3 h-3" />
    </motion.span>
    <span className="text-sm font-medium text-gray-800">{framework.name}</span>
  </motion.div>
);

// Feature card with updated design
const FeatureCard = ({ item, variant }) => (
  <motion.div 
    className="bg-white border border-blue-100 rounded-lg p-6 shadow-sm hover:shadow-xl transition-all duration-300"
    variants={variant}
    whileHover={{ y: -5, scale: 1.02, boxShadow: "0 15px 30px rgba(59, 130, 246, 0.15)" }}
  >
    <motion.div 
      className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mb-4 text-3xl"
      initial={{ rotate: 0 }}
      whileHover={{ rotate: 360 }}
      transition={{ duration: 0.5 }}
    >
      {item.icon}
    </motion.div>
    <h3 className="text-lg font-semibold text-blue-900 mb-2" role="heading" aria-level="3">{item.title}</h3>
    <p className="text-gray-700 text-sm">{item.description}</p>
  </motion.div>
);

const SouthernAsia = () => {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeCountry, setActiveCountry] = useState('India');

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);
  const ref7 = useRef(null);

  const isInView1 = useInView(ref1, { once: true, threshold: 0.3 });
  const isInView2 = useInView(ref2, { once: true, threshold: 0.3 });
  const isInView3 = useInView(ref3, { once: true, threshold: 0.3 });
  const isInView4 = useInView(ref4, { once: true, threshold: 0.3 });
  const isInView5 = useInView(ref5, { once: true, threshold: 0.3 });
  const isInView6 = useInView(ref6, { once: true, threshold: 0.3 });
  const isInView7 = useInView(ref7, { once: true, threshold: 0.3 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const complianceFrameworks = {
    India: [
      { id: 'dpa', name: 'Digital Personal Data Protection Act' },
      { id: 'rbi', name: 'RBI Payment, Settlement & Localization' },
      { id: 'nca', name: 'NABARD Cybersecurity Audit' },
      { id: 'irda', name: 'IRDA Audit' }
    ],
    Bangladesh: [
      { id: 'dsa', name: 'Digital Security Act' },
      { id: 'btrc', name: 'Bangladesh Telecom Regulatory Commission (BTRC) Guidelines' }
    ],
    Nepal: [
      { id: 'nc', name: 'Nepal Cybersecurity' }
    ],
    'Sri Lanka': [
      { id: 'snk', name: 'Sri Lanka Audit' }
    ],
    Maldives: [
      { id: 'md', name: 'Maldives Data Protection' }
    ]
  };

  const countries = [
    { name: 'India', isActive: true },
    { name: 'Bangladesh', isActive: true },
    { name: 'Nepal', isActive: true },
    { name: 'Sri Lanka', isActive: true },
    { name: 'Maldives', isActive: true }
  ];

  const valuePropositions = [
    {
      title: 'Trusted Partner',
      icon: <FaHandshake className="text-3xl text-blue-600" />,
      description: 'We work together, understanding the unique needs of Southern Asia.'
    },
    {
      title: 'Swift Responses',
      icon: <FaClock className="text-3xl text-blue-600" />,
      description: 'Our team usually responds swiftly to your needs.'
    },
    {
      title: 'Experienced Teams',
      icon: <FaUserTie className="text-3xl text-blue-600" />,
      description: 'Our team of cybersecurity professionals is experienced.'
    },
    {
      title: 'Proven Results',
      icon: <FaTrophy className="text-3xl text-blue-600" />,
      description: 'We have a successful track record of delivering results.'
    },
    {
      title: 'Transparency & Communication',
      icon: <FaGlobe className="text-3xl text-blue-600" />,
      description: 'We maintain clear communication with regular updates.'
    }
  ];

  const approachSteps = [
    { icon: "📋", title: "Plan" },
    { icon: "🔍", title: "Assess" },
    { icon: "🚨", title: "Respond" },
    { icon: "🛠️", title: "Manage" },
    { icon: "🔎", title: "Detect" }
  ];

  const filteredFrameworks = complianceFrameworks[activeCountry] || [];

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
        <section className="relative h-[600px] bg-cover bg-center overflow-hidden" style={{ backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.7)), url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80')` }}>
          <motion.div
            className="absolute top-1/4 left-0 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-1/4 right-0 w-64 h-64 bg-blue-300/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
          <motion.div 
            className="absolute bottom-0 left-0 right-0 h-[1px]"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
          >
            <div className="h-full bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
          </motion.div>
          <div className="container mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-center h-full relative z-10">
            <div className="text-center">
              <motion.h2 
                className="text-lg md:text-xl font-semibold text-blue-600 mb-2"
                variants={animations.fadeIn()}
                initial="hidden"
                animate="visible"
                role="heading"
                aria-level="2"
              >
                Your Trusted Cyber Security Partner in
              </motion.h2>
              <motion.h1 
                className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 mb-6 tracking-wider"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                role="heading"
                aria-level="1"
              >
                SOUTHERN ASIA!
              </motion.h1>
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

        {/* Cybersecurity Solutions Section */}
        <section ref={ref1} className="py-24 bg-white relative">
          <motion.div
            className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"
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
              <motion.div 
                className="inline-block px-6 py-2 border border-blue-500 rounded-full mb-4 bg-blue-50"
                whileHover={{ scale: 1.05, boxShadow: "0 4px 20px rgba(59, 130, 246, 0.2)" }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="font-semibold text-xl text-blue-900" role="heading" aria-level="2">What Cybersecurity Solutions Do We Offer?</h2>
              </motion.div>
              <motion.p 
                className="text-gray-700 mt-4"
                variants={animations.fadeIn(0.2)}
              >
                Codzye Cyber offers a comprehensive approach to defend your business. Our cybersecurity solutions provide a robust defense mechanism, ensuring the integrity, confidentiality, and availability of your critical assets.
              </motion.p>
              <motion.div 
                className="mt-10"
                variants={animations.slideInLeft(0.4)}
              >
                <blockquote className="italic text-xl text-blue-600 font-medium">
                  "Let's explore the tailored solutions that form the backbone of our cybersecurity posture."
                </blockquote>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="flex flex-wrap justify-center gap-4 mb-16"
              variants={animations.fadeIn(0.6)}
              initial="hidden"
              animate={isInView1 ? "visible" : "hidden"}
            >
              {countries.map((country, index) => (
                <Button 
                  key={country.name}
                  primary={activeCountry === country.name}
                  onClick={() => setActiveCountry(country.name)}
                  aria-label={`Select ${country.name} region`}
                >
                  {country.name}
                </Button>
              ))}
            </motion.div>
            
            <motion.div 
              className="max-w-5xl mx-auto"
              initial={{ opacity: 0 }}
              animate={isInView1 ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <svg className="w-full h-auto" viewBox="0 0 1000 200" xmlns="http://www.w3.org/2000/svg" aria-label="Decorative SVG for Southern Asia skyline">
                <motion.path 
                  d="M0,200 L50,200 L50,150 L70,150 L70,120 L90,120 L90,160 L110,160 L110,140 L130,140 L130,170 L150,170 L150,130 L170,90 L190,130 L190,150 L210,150 L210,100 L230,100 L230,150 L250,150 L250,170 L270,170 L270,120 L290,120 L290,160 L310,160 L310,140 L330,140 L330,160 L350,160 L350,120 L370,90 L390,120 L390,150 L410,150 L410,170 L430,170 L430,140 L450,140 L450,160 L470,160 L470,180 L490,180 L490,160 L510,160 L510,180 L530,180 L530,150 L550,150 L550,130 L570,130 L570,100 L590,100 L590,150 L610,150 L610,130 L630,130 L630,100 L650,80 L670,100 L670,150 L690,150 L690,180 L710,180 L710,160 L730,160 L730,140 L750,140 L750,180 L770,180 L770,160 L790,160 L790,140 L810,140 L810,120 L830,120 L830,150 L850,150 L850,130 L870,130 L870,150 L890,150 L890,170 L910,170 L910,150 L930,100 L950,150 L950,180 L970,180 L970,160 L990,160 L1000,160 L1000,200 L0,200 Z" 
                  stroke="#1e3a8a"
                  strokeWidth="1.5"
                  fill="#f8fafc"
                  initial={{ pathLength: 0 }}
                  animate={isInView1 ? { pathLength: 1 } : { pathLength: 0 }}
                  transition={{ duration: 2 }}
                />
                <motion.path 
                  d="M500,30 L510,20 L520,30 L520,200"
                  stroke="#1e3a8a"
                  strokeWidth="2"
                  fill="transparent"
                  initial={{ pathLength: 0 }}
                  animate={isInView1 ? { pathLength: 1 } : { pathLength: 0 }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                />
                <motion.ellipse 
                  cx="180" cy="50" rx="20" ry="10" fill="#f1f5f9"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView1 ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 1, delay: 1 }}
                />
                <motion.ellipse 
                  cx="380" cy="40" rx="25" ry="12" fill="#f1f5f9"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView1 ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 1, delay: 1.2 }}
                />
                <motion.ellipse 
                  cx="600" cy="60" rx="30" ry="15" fill="#f1f5f9"
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView1 ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ duration: 1, delay: 1.4 }}
                />
                <motion.ellipse 
                  cx="800" cy="50" rx="20" ry="10" fill="#f1f5f9"
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView1 ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ duration: 1, delay: 1.6 }}
                />
                <motion.circle 
                  cx="230" cy="80" r="15" fill="#fff" stroke="#dadce0" strokeWidth="1"
                  initial={{ scale: 0 }}
                  animate={isInView1 ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.5, delay: 2 }}
                />
                <motion.path 
                  d="M230,80 L230,75 M230,85 L230,80 M225,80 L230,80 M235,80 L230,80"
                  stroke="#60a5fa"
                  strokeWidth="2"
                  initial={{ opacity: 0 }}
                  animate={isInView1 ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.5, delay: 2.2 }}
                />
                <motion.circle 
                  cx="650" cy="70" r="15" fill="#fff" stroke="#dadce0" strokeWidth="1"
                  initial={{ scale: 0 }}
                  animate={isInView1 ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.5, delay: 2.2 }}
                />
                <motion.path 
                  d="M645,70 L655,70 M650,65 L650,75"
                  stroke="#60a5fa"
                  strokeWidth="2"
                  initial={{ opacity: 0 }}
                  animate={isInView1 ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.5, delay: 2.4 }}
                />
              </svg>
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8"
                variants={animations.fadeIn(0.8)}
                initial="hidden"
                animate={isInView1 ? "visible" : "hidden"}
              >
                <motion.div className="space-y-2">
                  {filteredFrameworks.slice(0, Math.ceil(filteredFrameworks.length / 2)).map((framework, idx) => (
                    <ComplianceCard key={framework.id} framework={framework} index={idx} />
                  ))}
                </motion.div>
                <motion.div className="space-y-2">
                  {filteredFrameworks.slice(Math.ceil(filteredFrameworks.length / 2)).map((framework, idx) => (
                    <ComplianceCard key={framework.id} framework={framework} index={idx + Math.ceil(filteredFrameworks.length / 2)} />
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Value Proposition Section */}
        <section ref={ref3} className="py-24 bg-white relative">
          <motion.div
            className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"
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
                Why Choose Codzye Cyber?
              </motion.h2>
              <motion.p 
                className="text-gray-700"
                variants={animations.fadeIn(0.2)}
              >
                Choosing the right partner is crucial for the success and security of your business. At Codzye Cyber, we are committed to true partnership and excellence.
              </motion.p>
            </motion.div>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6"
              variants={animations.fadeIn(0.4)}
              initial="hidden"
              animate={isInView3 ? "visible" : "hidden"}
            >
              {valuePropositions.map((item, index) => (
                <FeatureCard key={index} item={item} variant={animations.scaleIn(0.2 * index)} />
              ))}
            </motion.div>
          </div>
        </section>

        {/* Approach Section */}
        <section ref={ref4} className="py-24 bg-gradient-to-b from-white to-blue-50 relative">
          <motion.div
            className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          <div className="container mx-auto px-6 sm:px-8 lg:px-12">
            <motion.div 
              className="text-center mb-12"
              variants={animations.fadeIn()}
              initial="hidden"
              animate={isInView4 ? "visible" : "hidden"}
            >
              <motion.h2 
                className="text-3xl font-bold text-blue-900 mb-4"
                variants={animations.fadeIn()}
                role="heading"
                aria-level="2"
              >
                Codzye Cyber's Approach: Strategic Defense, Proactive Protection
              </motion.h2>
              <motion.p 
                className="text-gray-700 max-w-3xl mx-auto"
                variants={animations.fadeIn(0.2)}
              >
                At Codzye Cyber, we don't just meet threats; we anticipate and neutralize them before they impact your business. Codzye Cyber takes a proactive approach to protect your data privacy and get business-integrated standards. Our approach is based on the NIST framework, ensuring we have the right tools, intelligence, and expertise to secure your future.
              </motion.p>
            </motion.div>
            <motion.div 
              className="flex flex-wrap justify-center gap-8 mt-16"
              variants={animations.fadeIn(0.4)}
              initial="hidden"
              animate={isInView4 ? "visible" : "hidden"}
            >
              {approachSteps.map((step, index) => (
                <motion.div 
                  key={step.title}
                  className="text-center"
                  variants={animations.scaleIn(0.2 * index)}
                >
                  <motion.div 
                    className="w-24 h-24 rounded-full bg-white border-2 border-blue-500 flex items-center justify-center text-3xl mx-auto mb-4 shadow-sm"
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
              variants={animations.fadeIn(0.6)}
            >
              <motion.h3 
                className="text-2xl font-bold text-blue-900 mb-4"
                variants={animations.fadeIn()}
                role="heading"
                aria-level="3"
              >
                Discover What Our Client's say About us
              </motion.h3>
              <motion.p 
                className="text-gray-700 max-w-3xl mx-auto mb-8"
                variants={animations.fadeIn(0.2)}
              >
                We take immense pride in delivering the exceptional experiences and solutions tailored to their needs. But don't just take our word for it. Hear directly from those we've served.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section - update to match Middle East page */}
        <section ref={ref6} className="py-24 bg-white relative">
          <div className="container mx-auto px-6 sm:px-8 lg:px-12">
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
            <div className="flex justify-center mt-6">
              <div className="flex space-x-2">
                <span className="w-2 h-2 rounded-full bg-blue-300"></span>
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                <span className="w-2 h-2 rounded-full bg-blue-300"></span>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section ref={ref5} className="py-16 bg-white relative">
          <motion.div
            className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          <div className="container mx-auto px-6 sm:px-8 lg:px-12">
            <motion.div className="text-center mb-8">
              <motion.h2
                className="text-2xl font-bold text-blue-900 mb-4"
                variants={animations.fadeIn()}
                initial="hidden"
                animate={isInView5 ? "visible" : "hidden"}
                role="heading"
                aria-level="2"
              >
                Our Impact in Numbers
              </motion.h2>
            </motion.div>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={animations.fadeIn()}
              initial="hidden"
              animate={isInView5 ? "visible" : "hidden"}
            >
              <motion.div 
                className="text-center bg-white rounded-lg p-6 border border-gray-100 shadow-sm"
                variants={animations.scaleIn()}
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(59, 130, 246, 0.15)" }}
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
                <p className="text-blue-900 font-medium">Business Certified</p>
                <motion.div className="w-12 h-1 bg-blue-200 mx-auto mt-3"/>
              </motion.div>
              <motion.div 
                className="text-center bg-white rounded-lg p-6 border border-gray-100 shadow-sm"
                variants={animations.scaleIn(0.2)}
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(59, 130, 246, 0.15)" }}
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
                <motion.div className="w-12 h-1 bg-blue-200 mx-auto mt-3"/>
              </motion.div>
              <motion.div 
                className="text-center bg-white rounded-lg p-6 border border-gray-100 shadow-sm"
                variants={animations.scaleIn(0.4)}
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(59, 130, 246, 0.15)" }}
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
                <motion.div className="w-12 h-1 bg-blue-200 mx-auto mt-3"/>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-b from-white to-blue-50 text-center relative">
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-blue-50 to-transparent"
            animate={{ opacity: [0.5, 0.8, 0.5] }}
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
              Contact Us
            </motion.h2>
            <motion.button 
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3 px-10 rounded-full inline-flex items-center shadow-lg transition duration-300"
              whileHover={{ scale: 1.05, boxShadow: "0 8px 25px rgba(59, 130, 246, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              variants={animations.slideInRight()}
              onClick={() => navigate('/get-started')}
              aria-label="Get started with Codzye Cyber"
            >
              <span>Get Started</span>
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </motion.div>
          
          {/* Add visual dots indicator matching Middle East page */}
          <motion.div
            className="flex justify-center mt-8"
            variants={animations.fadeIn(0.6)}
            initial="hidden"
            animate="visible"
          >
            <div className="flex space-x-2">
              <span className="w-2 h-2 rounded-full bg-blue-300"></span>
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              <span className="w-2 h-2 rounded-full bg-blue-300"></span>
            </div>
          </motion.div>
        </section>

        {/* Footer accent line - matches Middle East design */}
        <motion.div 
          className="h-1 w-full bg-gradient-to-r from-transparent via-blue-500 to-transparent"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 0.7 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />
      </div>
    </>
  );
};

export default SouthernAsia;