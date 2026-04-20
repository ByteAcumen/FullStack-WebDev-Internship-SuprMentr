import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { FaEye, FaBullseye, FaBalanceScale, FaLightbulb, FaStar, FaShieldAlt, FaPuzzlePiece, FaHistory, FaMicrochip, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import businessTeamImage from '../assets/aerial-view-business-team.jpg';
import TeamImage from '../assets/Screenshot 2025-07-07 at 2.56.45 PM (1).png';
import ceoImage from '../assets/WhatsApp Image 2025-07-07 at 2.56.58 PM.jpeg';
import { Helmet } from 'react-helmet';

const About = () => {
  const navigate = useNavigate();
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  
  const isInView1 = useInView(ref1, { once: true, threshold: 0.3 });
  const isInView2 = useInView(ref2, { once: true, threshold: 0.3 });
  const isInView3 = useInView(ref3, { once: true, threshold: 0.3 });
  const isInView4 = useInView(ref4, { once: true, threshold: 0.3 });
  // Testimonials carousel state
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Auto-play testimonials - always enabled
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
  };

  const fadeIn = (delay = 0) => ({
    hidden: { opacity: 0, y: 30 },
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
  
  const slideIn = (direction = "left", delay = 0) => ({
    hidden: { 
      x: direction === "left" ? -60 : 60, 
      opacity: 0 
    },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: {
        duration: 1,
        delay,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  });
  
  const scaleIn = (delay = 0) => ({
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: {
        duration: 0.6,
        delay,
        ease: [0, 0.71, 0.2, 1.01]
      }
    }
  });

  // Subtle animation variants for Company Experience Section
  const subtleScaleIn = (delay = 0) => ({
    hidden: { scale: 0.98, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: {
        duration: 0.4,
        delay,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  });
  const subtleSlideIn = (direction = "left", delay = 0) => ({
    hidden: { 
      x: direction === "left" ? -20 : 20, 
      opacity: 0 
    },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: {
        duration: 0.5,
        delay,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  });

  const testimonials = [
    {
      quote: "I am extremely pleased to share our experience working with Codezye Cyber for their Virtual CISO Services. Their expertise and proactive approach have been instrumental in strengthening our cybersecurity posture and ensuring compliance in a rapidly evolving threat landscape. The team at Codezye Cyber demonstrated exceptional professionalism, deep industry knowledge, and a genuine commitment to our company's security needs.Their strategic guidance, tailored risk management, and continuous support have given us peace of mind and the confidence to focus on growing our business. I highly recommend Codezye Cyber to any organization seeking a trusted partner for comprehensive and effective Virtual CISO services.",
      company: "Tequed Labs Pvt Ltd",
      position: "Technology Head"
    },
    {
      quote: "As the CEO of ASQR Technologies, an IoT-based asset tracking company, I am delighted to commend Codezye Cyber for their outstanding support in our ISO 27001 implementation journey. Their expert team provided clear guidance, tailored solutions, and hands-on assistance that made the complex certification process smooth and efficient.Codezye Cyber's deep understanding of information security and compliance requirements, combined with their proactive approach, ensured that our company's data protection practices met the highest standards. Their professionalism and dedication have been invaluable to us. I highly recommend Codezye Cyber to any organization looking for reliable and effective ISO 27001 implementation support.",
      company: "ASQR Technologies",
      position: "CISO"
    },
    {
      quote: "On behalf of SuprMentr Technologies, a leading career mentorship platform, I want to express our sincere gratitude to Codezye Cyber for their exceptional support during our ISO 27001 implementation. Their team brought deep expertise, clear communication, and practical solutions that helped us navigate the complexities of the certification process smoothly and efficiently. Codezye Cyber's commitment to understanding our unique business needs and ensuring robust information security practices has been invaluable. Thanks to their guidance, we have strengthened our data protection framework and enhanced trust with our users. We highly recommend Codezye Cyber to any organization seeking professional and reliable ISO 27001 implementation services. ",
     
    },
    {
      quote: "Ikontel is proud to partner with Codezye Cyber for their exceptional Virtual CISO services. Their team has provided us with strategic cybersecurity leadership, expert guidance, and continuous support tailored to our unique needs. Their proactive approach and deep industry knowledge have significantly strengthened our security posture and helped us stay ahead of emerging threats. Codezye Cyber's professionalism and commitment have been invaluable in navigating complex security challenges, giving us the confidence to focus on our core business. We highly recommend their Virtual CISO services to any organization seeking trusted and effective cybersecurity leadership. ",
      company: "— The Ikontel Team",
    }
    
  ];

  return (
    <>
      <Helmet>
        <title>About Us – Codezye Cyber</title>
        <meta name="description" content="Codezye Cyber is a trusted global provider of cybersecurity and compliance management solutions, committed to delivering end-to-end protection in an ever-evolving digital landscape. Our mission is to empower organizations with cutting-edge security technologies, expert-driven insights, and proactive compliance strategies to defend against modern cyber threats and ensure alignment with industry regulations and governance standards." />
      </Helmet>
      <div className="bg-white text-text-dark overflow-hidden">      {/* Hero Section */}      
  <section className="relative pt-28 pb-36 overflow-hidden bg-white bg-center bg-cover" style={{ backgroundImage: '' }}>
        {/* Mobile faded image */}
        <div
          className="absolute top-0 left-0 w-full h-full block sm:hidden"
          style={{
            backgroundImage: `url(${businessTeamImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.4
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
        {/* Desktop gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/85 via-blue-50/75 to-white/90 z-10 pointer-events-none hidden sm:block" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-20 max-w-7xl">
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-12">
            <motion.div 
              className="lg:w-3/5"
              variants={slideIn("left")}
              initial="hidden"
              animate="visible"
            >
              <div className="relative">
                <motion.span
                  className="inline-block px-5 py-2 bg-primary-light/10 text-primary-dark rounded-full text-sm font-semibold tracking-wider mb-5"
                  initial={{ opacity: 0, y: -15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.6 }}
                >
                  CYBERSECURITY EXPERTISE
                </motion.span>
                <motion.h1 
                  className="text-4xl sm:text-5xl lg:text-7xl font-extrabold mb-6 tracking-tight leading-tight text-blue-700"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.7 }}
                >
                  Codezye Cyber
                </motion.h1>
                <motion.h2 
                  className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-8 text-gray-900 leading-tight"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  Safeguarding Your Digital Frontier
                </motion.h2>
              </div>
              <motion.p
                className="text-gray-700 mt-8 max-w-2xl leading-relaxed text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.0, duration: 0.7 }}
              >
                Pioneers in next-generation cybersecurity, safeguarding your business in an evolving digital landscape. Our holistic approach combines advanced technology with industry expertise to provide unrivaled protection.
              </motion.p>
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <button
                  className="px-6 py-2 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all duration-300"
                  onClick={() => navigate('/services')}
                >
                  Our Services
                </button>
                <button
                  className="px-6 py-2 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all duration-300"
                  onClick={() => navigate('/get-started')}
                >
                  Contact Us
                </button>
              </div>
            </motion.div>
            <motion.div
              className="bg-white/95 rounded-2xl shadow-xl border border-blue-100 p-8 min-w-[320px] max-w-md w-full self-center lg:self-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              <div className="flex items-center mb-4">
                <span className="text-2xl font-bold text-blue-700 mr-2">About us</span>
                <span className="w-4 h-4 rounded-full bg-blue-200 border-4 border-blue-100 inline-block"></span>
              </div>
              <hr className="border-blue-100 mb-4" />
              <p className="text-gray-900 text-base leading-relaxed mb-6">
                Codezye Cyber is a trusted global provider of cybersecurity and compliance management solutions, committed to delivering end-to-end protection in an ever-evolving digital landscape. Our mission is to empower organizations with cutting-edge security technologies, expert-driven insights, and proactive compliance strategies to defend against modern cyber threats and ensure alignment with industry regulations and governance standards.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
        {/* Vision and Mission Section */}
          <section ref={ref1} className="py-24 bg-white relative">          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10 max-w-7xl">
          <motion.div
            className="text-center mb-20"
            variants={fadeIn(0.1)}
            initial="hidden"
            animate={isInView1 ? "visible" : "hidden"}
          >
            <motion.div
              className="inline-flex items-center justify-center space-x-2 bg-primary-light/10 px-6 py-2 rounded-full mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.5 }}
            >
              <span className="w-2 h-2 rounded-full bg-primary-dark"></span>
              <span className="text-sm font-semibold tracking-wider text-primary-dark">ORGANIZATIONAL DNA</span>
              <span className="w-2 h-2 rounded-full bg-primary-dark"></span>
            </motion.div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-900 via-blue-600 to-blue-400 -mt-4 mb-4 leading-tight [text-shadow:_0_1px_2px_rgb(0_0_0_/_40%)]">Our Guiding Principles</h2>
            
            <div className="relative">
              
            </div>
            
            <p className="text-text-dark/80 max-w-2xl mx-auto text-lg leading-relaxed">
              The foundational philosophies that drive our approach to cybersecurity excellence 
              and shape every client interaction
            </p>
          </motion.div>
          <div className="flex flex-col md:flex-row gap-16">
            {/* Vision */}
            <motion.div
              variants={slideIn("left", 0.3)}
              initial="hidden"
              animate={isInView1 ? "visible" : "hidden"}
              className="relative md:w-1/2"
            >
              <motion.div 
                whileHover={{ 
                  scale: 1.02, 
                  boxShadow: "0 25px 50px rgba(0, 74, 173, 0.2)",
                  borderColor: "rgba(51, 170, 255, 0.5)"
                }}
                className="bg-gradient-to-br from-white via-white to-blue-50/50 p-12 rounded-3xl border-2 border-primary-light/20 shadow-xl relative overflow-hidden h-full"
              >
                <motion.div 
                  className="absolute -bottom-10 -right-10 w-56 h-56 bg-primary-light/10 rounded-full blur-2xl"
                  animate={{ 
                    scale: [1, 1.2, 1], 
                    opacity: [0.1, 0.3, 0.1],
                    rotate: [0, 10, 0] 
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                
                <div className="absolute top-0 left-0 w-full p-1.5">
                  <div className="h-1 w-24 bg-gradient-to-r from-primary-dark to-primary-light rounded-full"></div>
                </div>
                
                <div className="flex items-center space-x-4 mb-10">
                  <motion.div 
                    className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-white to-primary-light/20 border-2 border-primary-light/40 shadow-xl relative"
                    whileHover={{ rotate: [0, 10, -10, 0], scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.div
                      className="absolute -inset-1 rounded-full border-2 border-primary-light/30 opacity-70"
                      animate={{ 
                        scale: [1, 1.15, 1],
                        opacity: [0.7, 0.3, 0.7]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                    <FaEye size={32} className="text-primary-dark" />
                  </motion.div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-primary-dark to-primary-light">Our Vision</h3>
                </div>
                
                <div className="relative z-10">
                  <h4 className="text-3xl font-semibold text-text-dark mb-6 leading-tight">Cyber Resilience for Tomorrow's Challenges</h4>
                  <p className="text-text-dark/80 leading-relaxed tracking-wide">
                    We envision a digital landscape where organizations thrive with confidence, protected by adaptive
                    cybersecurity architecture that anticipates threats before they materialize. Our vision extends beyond 
                    traditional security—creating ecosystems where businesses can innovate fearlessly, knowing their digital 
                    foundations are impenetrable.
                  </p>
                  
                  <div className="mt-8 bg-primary-light/5 border border-primary-light/20 rounded-xl p-5">
                    <p className="text-primary-dark font-medium">
                      "At <span className="font-bold text-blue-500">
                        <span className="bg-gradient-to-r from-blue-500 to-blue-500 bg-clip-text text-transparent">Codezye</span> Cyber
                      </span>, we're pioneering the future of cybersecurity through
                      continuous innovation and strategic foresight."
                    </p>
                  </div>
                  
                  
                </div>
              </motion.div>
            </motion.div>
            
            {/* Mission */}
            <motion.div
              variants={slideIn("right", 0.4)}
              initial="hidden"
              animate={isInView1 ? "visible" : "hidden"}
              className="relative md:w-1/2"
            >
              <motion.div 
                whileHover={{ 
                  scale: 1.02, 
                  boxShadow: "0 25px 50px rgba(0, 74, 173, 0.2)",
                  borderColor: "rgba(51, 170, 255, 0.5)"
                }}
                className="bg-gradient-to-br from-white via-white to-blue-50/50 p-12 rounded-3xl border-2 border-primary-light/20 shadow-xl relative overflow-hidden h-full"
              >
                <motion.div 
                  className="absolute -bottom-10 -left-10 w-56 h-56 bg-primary-dark/5 rounded-full blur-2xl"
                  animate={{ 
                    scale: [1, 1.2, 1], 
                    opacity: [0.1, 0.3, 0.1],
                    rotate: [0, -10, 0] 
                  }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                />
                
                <div className="absolute top-0 left-0 w-full p-1.5">
                  <div className="h-1 w-24 bg-gradient-to-r from-primary-dark to-primary-light rounded-full ml-auto"></div>
                </div>
                
                <div className="flex items-center space-x-4 mb-10">
                  <motion.div 
                    className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-white to-primary-light/20 border-2 border-primary-light/40 shadow-xl relative"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  >
                    <motion.div
                      className="absolute -inset-3 rounded-full border border-primary-light/20 opacity-70"
                      animate={{ rotate: [0, -360] }}
                      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.div
                      className="absolute -inset-1.5 rounded-full border border-primary-light/30 opacity-70"
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    />
                    <FaBullseye size={32} className="text-primary-dark group-hover:text-primary-light transition-colors duration-300" />
                  </motion.div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-primary-dark to-primary-light">Our Mission</h3>
                </div>
                
                <div className="relative z-10">
                  <h4 className="text-3xl font-semibold text-text-dark mb-6 leading-tight">Empowering Through Protection</h4>
                  <p className="text-text-dark/80 leading-relaxed tracking-wide">
                    Our mission at <span className="font-bold text-blue-500">
                      <span className="bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent">Codezye</span> Cyber
                    </span> transcends conventional security approaches—we empower organizations to 
                    transform cybersecurity from a defensive necessity into a strategic advantage. Through tailored solutions, 
                    proactive threat intelligence, and frictionless implementation, we safeguard our clients' most valuable digital assets.
                  </p>
                  
                  <div className="mt-8 bg-primary-light/5 border border-primary-light/20 rounded-xl p-5">
                    <p className="text-primary-dark font-medium">
                      "We're committed to democratizing elite-level cybersecurity, making enterprise-grade protection accessible to organizations of all sizes."
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
              </div>          </div>
      </section>
      {/* Company Experience Section */}
      <section className="py-24 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10 max-w-7xl">
            <motion.div
              variants={subtleScaleIn(0.1)}
              initial="visible"
              animate="visible"
              className="text-center mb-20 px-4"
            >
              <div className="inline-block relative mb-8">
                <motion.div
                  className="absolute -top-10 -left-10 w-20 h-20 opacity-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <svg viewBox="0 0 100 100" className="text-primary-dark">
                    <circle cx="50" cy="50" r="45" fill="currentColor" />
                  </svg>
                </motion.div>
                <motion.div
                  className="absolute -bottom-10 -right-10 w-20 h-20 opacity-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <svg viewBox="0 0 100 100" className="text-primary-light">
                    <rect x="20" y="20" width="60" height="60" fill="currentColor" />
                  </svg>
                </motion.div>
                <motion.div 
                  className="mb-8 inline-flex items-center bg-primary-light/10 px-6 py-3 rounded-full"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <motion.div
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-dark/90 to-primary-light flex items-center justify-center mr-3"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <FaShieldAlt className="text-white w-4 h-4" />
                  </motion.div>
                  <span className="font-semibold text-primary-dark tracking-wide">COMPANY EXPERIENCE</span>
                </motion.div>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-8 relative max-w-5xl mx-auto leading-tight text-blue-900">
                Leadership on the Global Stage
              </h2>
            </motion.div>
            {/* CEO Block with Box Design */}
            <div className="bg-white rounded-2xl shadow-xl border-2 border-primary-light/20 p-6 md:p-10 mb-12">
              <div className="flex flex-col md:flex-row items-center md:items-center gap-12 md:gap-20">
                <motion.div
                  className="md:w-2/3 flex items-center h-full"
                  variants={subtleSlideIn("left", 0.1)}
                  initial="visible"
                  animate="visible"
                >
                  <div className="w-full text-left md:ml-0 ml-0 md:text-left text-center flex flex-col justify-center">
                    <h3 className="text-xl sm:text-2xl font-bold text-primary-dark mb-4">Mr. Supreeth Y S, CEO and Founder</h3>
                    <p className="text-lg text-text-dark/90 leading-relaxed">
                      Mr. Supreeth Y S, CEO and Founder of <span className="font-semibold text-blue-700">Codezye Cyber</span>, had the distinguished opportunity to be a speaker and presenter at <span className="font-semibold">North Star, GISEC Dubai 2025</span>—one of the world's premier platforms for innovation in cybersecurity. He showcased Codezye Cyber's cutting-edge solutions and products to a global audience of key stakeholders, industry leaders, and investors, reinforcing the company's vision of delivering trusted cyber security and compliance solutions at a global scale.
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  className="md:w-1/3 flex items-center justify-center h-full"
                  variants={subtleSlideIn("right", 0.2)}
                  initial="visible"
                  animate="visible"
                >
                  <img
                    src={ceoImage}
                    alt="Mr. Supreeth Y S, CEO of Codezye Cyber"
                    className="rounded-2xl shadow border border-primary-light/30 w-84 h-64 object-contain bg-white"
                  />
                </motion.div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl border-2 border-primary-light/20 p-6 md:p-10 mb-12">
              <div className="flex flex-col md:flex-row items-center md:items-center gap-12 md:gap-20">
                <motion.div
                  className="md:w-2/3 flex items-center h-full"
                  variants={subtleSlideIn("left", 0.1)}
                  initial="visible"
                  animate="visible"
                >
                  <div className="w-full text-left md:ml-0 ml-0 md:text-left text-center flex flex-col justify-center">
                    <h3 className="text-xl sm:text-2xl font-bold text-primary-dark mb-4">Global Cybersecurity conference</h3>
                    <p className="text-lg text-text-dark/90 leading-relaxed">
                      Codezye Cyber recently exhibited at <span className="font-semibold">GISEC Global in Dubai</span>, the Middle East and Africa's largest cybersecurity conference—showcasing its state-of-the-art solutions and reinforcing its international commitment to safeguarding critical digital ecosystems.
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  className="md:w-1/3 flex items-center justify-center h-full"
                  variants={subtleSlideIn("right", 0.2)}
                  initial="visible"
                  animate="visible"
                >
                  <img
                    src={TeamImage}
                    alt="Mr. Supreeth Y S, CEO of Codezye Cyber"
                    className="rounded-2xl shadow border border-primary-light/30 w-84 h-64 object-contain bg-white"
                  />
                </motion.div>
              </div>
            </div>
            {/* GISEC Global Block with Box Design */}
            
          </div>
        </section>
      
      {/* Values Section */}
      <section ref={ref2} className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10 max-w-7xl">
          <motion.div 
            variants={scaleIn()}
            initial="hidden"
            animate={isInView2 ? "visible" : "hidden"}
            className="text-center mb-20 px-4"
          >
            <div className="inline-block relative">
              <motion.div
                className="absolute -top-10 -left-10 w-20 h-20 opacity-10"
                initial={{ opacity: 0 }}
                animate={isInView2 ? { opacity: 0.1 } : { opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <svg viewBox="0 0 100 100" className="text-primary-dark">
                  <path d="M30,15 L70,15 L85,50 L70,85 L30,85 L15,50 L30,15" fill="currentColor"/>
                </svg>
              </motion.div>
              
              <motion.div
                className="absolute -bottom-10 -right-10 w-20 h-20 opacity-10"
                initial={{ opacity: 0 }}
                animate={isInView2 ? { opacity: 0.1 } : { opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <svg viewBox="0 0 100 100" className="text-primary-light">
                  <path d="M30,15 L70,15 L85,50 L70,85 L30,85 L15,50 L30,15" fill="currentColor"/>
                </svg>
              </motion.div>
              
              <motion.div 
                className="mb-8 inline-flex items-center bg-primary-light/10 px-6 py-3 rounded-full"
                initial={{ y: 20, opacity: 0 }}
                animate={isInView2 ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <motion.div
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-dark/90 to-primary-light flex items-center justify-center mr-3"
                  animate={{
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <FaStar className="text-white w-4 h-4" />
                </motion.div>
                <span className="font-semibold text-primary-dark tracking-wide">OUR CORE VALUES</span>
              </motion.div>
            </div>              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-8 relative max-w-5xl mx-auto leading-tight text-blue-900">
              Integrity, Innovation
              <br />
              and Excellence
            </h2>
            <p className="text-gray-900 max-w-3xl mx-auto text-lg sm:text-xl leading-relaxed mt-6">
              The foundational principles that define our approach to cybersecurity excellence 
              and guide every decision we make for our clients' protection
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-10 lg:gap-14">
            {/* Value 1 */}
            <motion.div
              variants={slideIn("left", 0.2)}
              initial="hidden"
              animate={isInView2 ? "visible" : "hidden"}
              whileHover={{ 
                y: -15, 
                boxShadow: "0 25px 50px rgba(0, 74, 173, 0.15)",
                borderColor: "rgba(51, 170, 255, 0.5)"
              }}
              transition={{ duration: 0.5 }}
              className="text-center bg-white p-10 rounded-2xl border-2 border-primary-light/20 shadow-lg group"
            >
              <div className="flex justify-center mb-8">
                <motion.div 
                  className="w-32 h-32 flex items-center justify-center"
                  whileHover={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-full h-full relative">
                    <motion.div
                      animate={{ 
                        boxShadow: [
                          "0 0 0 0 rgba(0, 74, 173, 0)", 
                          "0 0 0 15px rgba(0, 74, 173, 0.1)", 
                          "0 0 0 0 rgba(0, 74, 173, 0)"
                        ] 
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="absolute inset-0 rounded-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/10 to-primary-light/20 rounded-full blur-md opacity-50 group-hover:opacity-80 transition-opacity duration-300"></div>
                    <motion.div 
                      className="absolute inset-0 border-2 border-primary-light/30 rounded-full"
                      animate={{ rotate: [0, 180] }}
                      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <FaBalanceScale size={64} className="text-primary-dark group-hover:text-primary-light transition-colors duration-300" />
                    </div>
                  </div>
                </motion.div>
              </div>
              <h3 className="text-2xl font-bold text-primary-dark group-hover:text-primary-light transition-colors duration-300 mb-4">INTEGRITY</h3>
              <p className="text-text-dark/80 tracking-wide leading-relaxed">
                We uphold the highest ethical standards in every interaction, maintaining transparency and
                honesty with our clients. Our commitment to integrity means that we build trust through
                accountability and consistent delivery on our promises.
              </p>
            </motion.div>
            
            {/* Value 2 */}
            <motion.div
              variants={fadeIn(0.4)}
              initial="hidden"
              animate={isInView2 ? "visible" : "hidden"}
              whileHover={{ 
                y: -15, 
                boxShadow: "0 25px 50px rgba(0, 74, 173, 0.15)",
                borderColor: "rgba(51, 170, 255, 0.5)"
              }}
              transition={{ duration: 0.5 }}
              className="text-center bg-white p-10 rounded-2xl border-2 border-primary-light/20 shadow-lg group"
            >
              <div className="flex justify-center mb-8">
                <motion.div 
                  className="w-32 h-32 flex items-center justify-center relative"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                >
                  <div className="w-full h-full relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/10 to-primary-light/20 rounded-full blur-md opacity-50 group-hover:opacity-80 transition-opacity duration-300"></div>
                    <motion.div
                      animate={{ 
                        boxShadow: ["0 0 0 0 rgba(0, 74, 173, 0)", "0 0 0 15px rgba(0, 74, 173, 0.1)", "0 0 0 0 rgba(0, 74, 173, 0)"] 
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="absolute inset-0 rounded-full"
                    />
                    <motion.div
                      className="absolute inset-2 rounded-full border border-primary-light/40"
                      animate={{ rotate: [360, 0] }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.div
                      className="absolute inset-4 rounded-full border border-primary-light/20"
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <FaLightbulb size={64} className="text-primary-dark group-hover:text-primary-light transition-colors duration-300" />
                    </div>
                  </div>
                </motion.div>
              </div>
              <h3 className="text-2xl font-bold text-primary-dark group-hover:text-primary-light transition-colors duration-300 mb-4">INNOVATION</h3>
              <p className="text-text-dark/80 tracking-wide leading-relaxed">
                We relentlessly pursue cutting-edge security solutions that stay ahead of emerging threats.
                Our culture of innovation drives us to challenge conventional approaches and develop
                creative strategies that address the rapidly evolving cybersecurity landscape.
              </p>
            </motion.div>
            
            {/* Value 3 */}
            <motion.div
              variants={slideIn("right", 0.2)}
              initial="hidden"
              animate={isInView2 ? "visible" : "hidden"}
              whileHover={{ 
                y: -15, 
                boxShadow: "0 25px 50px rgba(0, 74, 173, 0.15)",
                borderColor: "rgba(51, 170, 255, 0.5)" 
              }}
              transition={{ duration: 0.5 }}
              className="text-center bg-white p-10 rounded-2xl border-2 border-primary-light/20 shadow-lg group"
            >
              <div className="flex justify-center mb-8">
                <motion.div 
                  className="w-32 h-32 flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-full h-full relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/10 to-primary-light/20 rounded-full blur-md opacity-50 group-hover:opacity-80 transition-opacity duration-300"></div>
                    <motion.div
                      animate={{ 
                        opacity: [1, 0.6, 1],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="absolute inset-0 rounded-full border-2 border-primary-light/30"
                    />
                    <motion.div
                      className="absolute h-full w-full"
                      animate={{ 
                        background: [
                          "radial-gradient(circle at 30% 30%, rgba(51, 170, 255, 0.1) 0%, rgba(0, 74, 173, 0) 70%)",
                          "radial-gradient(circle at 70% 70%, rgba(51, 170, 255, 0.1) 0%, rgba(0, 74, 173, 0) 70%)",
                          "radial-gradient(circle at 30% 30%, rgba(51, 170, 255, 0.1) 0%, rgba(0, 74, 173, 0) 70%)"
                        ]
                      }}
                      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <FaStar size={64} className="text-primary-dark group-hover:text-primary-light transition-colors duration-300" />
                    </div>
                  </div>
                </motion.div>
              </div>
              <h3 className="text-2xl font-bold text-primary-dark group-hover:text-primary-light transition-colors duration-300 mb-4">EXCELLENCE</h3>
              <p className="text-text-dark/80 tracking-wide leading-relaxed">
                We strive for excellence in every solution we deliver, exceeding expectations through
                meticulous attention to detail and continuous improvement. Our commitment to
                excellence ensures that our clients receive only the highest quality cybersecurity services.
              </p>
            </motion.div>
            </div>          </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section ref={ref3} className="py-24 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10 max-w-7xl">
          <motion.div
            variants={scaleIn(0.1)}
            initial="hidden"
            animate={isInView3 ? "visible" : "hidden"}
            className="text-center mb-20 relative"
          >
            <div className="absolute inset-0 z-0">
              <motion.div
                className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 opacity-5"
                animate={{
                  rotate: [0, 360]
                }}
                transition={{
                  duration: 40,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <path fill="currentColor" d="M50 0 L100 50 L50 100 L0 50 Z" className="text-primary-dark" />
                </svg>
              </motion.div>
              
              <motion.div
                className="absolute top-1/2 right-1/4 transform translate-x-1/2 -translate-y-1/2 w-40 h-40 opacity-5"
                animate={{
                  rotate: [0, -360]
                }}
                transition={{
                  duration: 50,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary-light" />
                </svg>
              </motion.div>
            </div>
            
            <div className="relative z-10">
              <motion.div
                className="flex items-center justify-center mb-6"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={isInView3 ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary-light/50"></div>
                <motion.span 
                  className="inline-block px-6 py-3 bg-primary-light/10 text-primary-dark rounded-full text-sm font-semibold tracking-wider mx-4 border border-primary-light/20"
                  whileHover={{ backgroundColor: "rgba(51, 170, 255, 0.15)" }}
                >
                  <span className="flex items-center space-x-2">
                    <FaShieldAlt className="text-primary-light" />
                    <span>TRUSTED CYBERSECURITY PARTNER</span>
                  </span>
                </motion.span>
                <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary-light/50"></div>
              </motion.div>
                <motion.h2
                  className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-8 relative text-center leading-tight text-blue-900"
                  initial={{ y: 20, opacity: 0 }}
                  animate={isInView3 ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                >
                  Why Choose Codezye Cyber?
                  <motion.div
                    className="absolute -bottom-4 left-0 right-0"
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={isInView3 ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                  >
                    <svg height="8" width="100%" className="text-primary-light/40">
                      <path d="M 0,4 Q 50,8 100,4" stroke="currentColor" fill="none" strokeWidth="2" />
                    </svg>
                  </motion.div>
                </motion.h2>
              
              <motion.p
                className="text-text-dark/80 max-w-2xl mx-auto text-lg leading-relaxed"
                initial={{ opacity: 0 }}
                animate={isInView3 ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.7, delay: 0.8 }}
              >
                We deliver enterprise-grade cybersecurity solutions with a personalized approach,
                backed by industry-leading expertise and innovative technology
              </motion.p>
            </div>
          </motion.div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {[
              {
                icon: FaShieldAlt,
                title: "ELITE EXPERTISE",
                description: "Our team brings decades of specialized experience across all cybersecurity domains, from threat intelligence to vulnerability management and incident response."
              },
              {
                icon: FaPuzzlePiece,
                title: "TAILORED SOLUTIONS",
                description: "We create bespoke security architectures that address your unique organizational needs, risk profile, and compliance requirements for maximum effectiveness."
              },
              {
                icon: FaHistory,
                title: "PROVEN SUCCESS",
                description: "Our track record demonstrates consistent excellence, with successful implementations across financial services, healthcare, technology, and government sectors."
              },
              {
                icon: FaMicrochip,
                title: "ADVANCED TECHNOLOGY",
                description: "We implement cutting-edge security technology and methodologies that anticipate emerging threats while ensuring seamless integration with your existing systems."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeIn(0.15 * (index + 1))}
                initial="hidden"
                animate={isInView3 ? "visible" : "hidden"}
                whileHover={{ 
                  y: -15,
                  scale: 1.02,
                  boxShadow: "0 25px 50px rgba(0, 74, 173, 0.15)",
                  borderColor: "rgba(51, 170, 255, 0.5)"
                }}
                className="bg-gradient-to-b from-white to-blue-50/30 rounded-2xl overflow-hidden border-2 border-primary-light/20 shadow-lg group"
              >
                <div className="p-8 relative h-full flex flex-col">
                  <motion.div 
                    className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-dark/0 via-primary-light/40 to-primary-dark/0"
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileInView={{ scaleX: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 * index }}
                  />
                  
                  <div className="flex justify-center mb-8">
                    <motion.div 
                      className="relative"
                      whileHover={{ scale: 1.1, rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="w-24 h-24 bg-gradient-to-br from-blue-50 to-white rounded-full flex items-center justify-center border-2 border-primary-light/30 shadow-xl group-hover:border-primary-light/70 transition-all duration-300">
                        <item.icon size={42} className="text-primary-dark group-hover:text-primary-light transition-all duration-300" />
                      </div>
                      <motion.div 
                        className="absolute -inset-2 rounded-full border-2 border-primary-light/20 group-hover:border-primary-light/60"
                        animate={{ 
                          scale: [1, 1.2, 1],
                          opacity: [0.7, 0.2, 0.7]
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                      />
                      <motion.div 
                        className="absolute -inset-4 rounded-full border border-primary-light/10 group-hover:border-primary-light/30"
                        animate={{ 
                          rotate: [0, 360],
                          opacity: [0.5, 0.2, 0.5]
                        }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                      />
                    </motion.div>
                  </div>
                  
                  <h3 className="text-center text-xl font-bold text-primary-dark group-hover:text-primary-light mb-4 transition-all duration-300">
                    {item.title}
                  </h3>
                  
                  <p className="text-center text-text-dark/80 tracking-wide leading-relaxed flex-grow">
                    {item.description}
                  </p>
                  
                  <div className="flex justify-center mt-6">
                    <motion.div 
                      className="h-1 w-12 bg-gradient-to-r from-transparent via-primary-light/60 to-transparent rounded-full"
                      animate={{ width: ["40px", "70px", "40px"] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.2 * index }}
                    />
                  </div>
                </div>
              </motion.div>            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section ref={ref4} className="py-24 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10 max-w-7xl">
          <motion.div
            variants={scaleIn(0.1)}
            initial="hidden"
            animate={isInView4 ? "visible" : "hidden"}
            className="text-center mb-16 relative"
          >
            <div className="mb-10">
              <motion.div
                className="flex items-center justify-center mb-6 gap-2"
                initial={{ y: -20, opacity: 0 }}
                animate={isInView4 ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-blue-400">
                    <FaStar className="text-blue-400 w-4 h-4" />
                  </span>
                ))}
                <span className="ml-4 px-6 py-2 bg-blue-100 rounded-full text-blue-900 font-bold tracking-wide text-sm sm:text-base">
                  TRUSTED BY INDUSTRY LEADERS
                </span>
              </motion.div>
            </div>
            
            <motion.div
              className="relative inline-block"
              initial={{ y: 20, opacity: 0 }}
              animate={isInView4 ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-6 text-center leading-tight text-blue-900">
                Client Testimonials
              </h2>
            </motion.div>
            
            <div className="relative">
              
              <motion.div
                className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                animate={{
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary-dark to-primary-light shadow-lg shadow-primary-light/20"></div>
              </motion.div>
            </div>
          </motion.div>
            <motion.p
            variants={fadeIn(0.3)}
            initial="hidden"
            animate={isInView4 ? "visible" : "hidden"}
            className="text-center text-text-dark/80 mb-16 max-w-3xl mx-auto tracking-wide text-lg leading-relaxed"
          >
            We take immense pride in delivering exceptional cybersecurity solutions tailored to each organization's unique needs. 
            Here's what our clients have to say about their experience working with Codezye Cyber.
          </motion.p>
          
          {/* Testimonials Carousel */}
          <div className="relative max-w-5xl mx-auto">
            {/* Navigation Buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 z-20">
              <motion.button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm border border-primary-light/20 shadow-lg hover:shadow-xl flex items-center justify-center text-primary-dark hover:bg-primary-light/10 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaChevronLeft className="w-4 h-4" />
              </motion.button>
            </div>
            
            <div className="absolute top-1/2 -translate-y-1/2 right-0 z-20">
              <motion.button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm border border-primary-light/20 shadow-lg hover:shadow-xl flex items-center justify-center text-primary-dark hover:bg-primary-light/10 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaChevronRight className="w-4 h-4" />
              </motion.button>
            </div>

            {/* Testimonials Container */}
            <div className="overflow-hidden rounded-3xl">
              <motion.div
                className="flex"
                animate={{ x: `-${currentTestimonial * 100}%` }}
                transition={{ 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 30,
                  duration: 0.8
                }}
              >
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    className="w-full flex-shrink-0 px-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="bg-gradient-to-br from-white to-blue-50/50 rounded-3xl border-2 border-primary-light/20 shadow-2xl shadow-primary-light/10 overflow-hidden relative">
                      {/* Top Gradient Border */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-dark via-primary-light to-blue-400"></div>
                      
                      {/* Background Pattern */}
                      <div className="absolute inset-0 opacity-5">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary-light rounded-full -translate-y-16 translate-x-16"></div>
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-400 rounded-full translate-y-12 -translate-x-12"></div>
                      </div>
                      
                      <div className="relative z-10 p-12 lg:p-16">
                       
                        {/* Testimonial Text */}
                        <motion.p 
                          className="text-gray-900 text-xl lg:text-2xl leading-relaxed mb-12 italic font-light"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3, duration: 0.6 }}
                        >
                          {testimonial.quote}
                        </motion.p>
                        
                        {/* Author Information */}
                        <motion.div 
                          className="flex flex-col items-start"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5, duration: 0.6 }}
                        >
                          <h4 className="font-bold text-blue-900 text-lg mb-1">
                            {index === 2 ? 'HR Team' : testimonial.position || ''}
                          </h4>
                          <p className="text-gray-900 text-sm mb-1">
                            {index === 2 ? 'SuprMentr Technologies' : testimonial.company || ''}
                          </p>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
              {/* Pagination Dots */}
            <div className="flex justify-center space-x-3 mt-12">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`relative overflow-hidden rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? 'w-12 h-3 bg-primary-light' 
                      : 'w-3 h-3 bg-primary-light/30 hover:bg-primary-light/50'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {index === currentTestimonial && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary-dark to-primary-light"
                      layoutId="activeDot"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default About;