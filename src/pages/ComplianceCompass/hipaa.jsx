import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import HubspotForm from '../../components/HubspotForm';

// Animation helpers (from ComplianceCompass)
const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.4, 0, 0.2, 1] }
  }
});
const slideIn = (direction = 'left', delay = 0) => ({
  hidden: { x: direction === 'left' ? -60 : 60, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1] }
  }
});
const scaleIn = (delay = 0) => ({
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.6, delay, ease: [0, 0.71, 0.2, 1.01] }
  }
});

const HIPAA = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('expertise');
  const [activeSlide, setActiveSlide] = useState(0);

  // Refs for scroll animations
  const heroRef = useRef(null);
  const benefitsRef = useRef(null);
  const servicesRef = useRef(null);
  const whyChooseRef = useRef(null);
  const ctaRef = useRef(null);

  // useInView hooks
  const isHeroInView = useInView(heroRef, { once: true, threshold: 0.3 });
  const isBenefitsInView = useInView(benefitsRef, { once: true, threshold: 0.3 });
  const isServicesInView = useInView(servicesRef, { once: true, threshold: 0.3 });
  const isWhyChooseInView = useInView(whyChooseRef, { once: true, threshold: 0.3 });
  const isCtaInView = useInView(ctaRef, { once: true, threshold: 0.3 });

  // Background style
  const backgroundStyle = {
    backgroundImage: 'url(/world-map-blue.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed'
  };

  // Navigation handler
  const handleGetStarted = () => {
    navigate('/get-started', {
      state: {
        service: 'HIPAA Compliance',
        referral: 'hipaa-landing'
      }
    });
  };

  const benefits = [
    {
      title: "Expert HIPAA Compliance Team",
      description: "Our certified professionals bring extensive experience in conducting thorough HIPAA assessments and guiding organizations through the compliance process."
    },
    {
      title: "Comprehensive Implementation Support",
      description: "We provide end-to-end support in implementing necessary controls and changes to meet HIPAA requirements effectively."
    },
    {
      title: "Documentation Excellence",
      description: "Our team helps you create and maintain the required documentation for HIPAA compliance and audits, ensuring nothing is overlooked."
    },
    {
      title: "Proactive Security Measures",
      description: "We go beyond compliance to help you build a robust security framework that protects PHI and prevents security breaches."
    }
  ];

  const services = [
    {
      title: "HIPAA Risk Assessment",
      description: "Comprehensive evaluation of your organization's compliance with HIPAA Privacy, Security, and Breach Notification Rules."
    },
    {
      title: "Implementation Guidance",
      description: "Expert guidance on implementing necessary controls and safeguards to protect PHI and meet HIPAA requirements."
    },
    {
      title: "Documentation Support",
      description: "Assistance with creating and maintaining required HIPAA documentation including policies, procedures, and Business Associate Agreements."
    },
    {
      title: "PHI Protection & Security",
      description: "Technical and physical safeguards implementation to secure Protected Health Information throughout your organization."
    },
    {
      title: "Staff Training Programs",
      description: "Comprehensive HIPAA training for your entire team to ensure everyone understands their role in maintaining compliance."
    }
  ];
  
  const testimonials = [
    {
      text: "We are extremely impressed with the thoroughness of Codezye Cyber's HIPAA compliance services. Their team guided us through the entire assessment process and helped us implement proper safeguards for our patients' data. The comprehensive documentation they provided was instrumental during our audit.",
      company: "MedCare Health"
    },
    {
      text: "As a growing healthcare provider, navigating HIPAA requirements was overwhelming until we partnered with Codezye Cyber. Their team simplified the compliance process while ensuring we met all regulatory requirements. Their ongoing support has been invaluable to maintaining our compliance posture.",
      company: "LifeWell Clinic"
    }
  ];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // Carousel navigation
  const nextSlide = () => {
    setActiveSlide((prev) => (prev === services.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-hidden">
      {/* Navigation */}
      <nav className="p-4 bg-white shadow-sm">
        <div className="container mx-auto">
          <div className="breadcrumbs text-sm">
            <span className="text-gray-800">Home</span>
            <span className="mx-2 text-gray-500">»</span>
            <span className="text-gray-500">Services</span>
            <span className="mx-2 text-gray-500">»</span>
            <span className="text-gray-500">Compliance Edge</span>
            <span className="mx-2 text-gray-500">»</span>
            <span className="text-gray-800 font-medium">HIPAA</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-28 pb-36 overflow-hidden bg-white" style={backgroundStyle}>
        <div className="bg-white bg-opacity-70 w-full h-full absolute inset-0 z-10 pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-20 max-w-7xl">
          <div className="flex flex-col lg:flex-row lg:items-start lg:gap-16">
            <motion.div
              variants={slideIn('left')}
              initial="hidden"
              animate={isHeroInView ? 'visible' : 'hidden'}
              className="lg:w-1/2 min-w-[320px]"
            >
              <motion.span
                className="inline-block px-6 py-2 bg-blue-600/10 text-blue-600 rounded-full text-sm font-semibold tracking-wider mb-6 border border-blue-600/20"
                variants={fadeIn(0.1)}
              >
                HIPAA COMPLIANCE
              </motion.span>
              <motion.h1
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 tracking-tight leading-tight text-blue-600"
                variants={fadeIn(0.2)}
              >
                HIPAA Compliance
              </motion.h1>
              <motion.p
                className="text-xl sm:text-2xl text-gray-700 mb-6 leading-relaxed"
                variants={fadeIn(0.3)}
              >
                Achieve HIPAA Certification with Ease! Safeguard Patient Data.
              </motion.p>
              <motion.p
                className="text-gray-600 max-w-lg leading-relaxed text-lg mb-8"
                variants={fadeIn(0.4)}
              >
                Protect patient data and ensure regulatory compliance with our comprehensive HIPAA services. Codezye Cyber guides healthcare organizations through HIPAA compliance requirements, securing protected health information (PHI) and building patient trust through robust security practices.
              </motion.p>
              <motion.button
                onClick={handleGetStarted}
                className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                variants={fadeIn(0.5)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started Today
              </motion.button>
            </motion.div>
            <motion.div
              variants={slideIn('right', 0.3)}
              initial="hidden"
              animate={isHeroInView ? 'visible' : 'hidden'}
              className="lg:w-1/2 flex justify-center lg:justify-start mt-12 lg:mt-0"
            >
              <motion.div
                className="bg-gray-50 rounded-2xl p-6 sm:p-8 shadow-xl border-2 border-blue-600/20 w-full"
                style={{ maxWidth: 560 }}
                whileHover={{ scale: 1.02, boxShadow: '0 15px 30px rgba(37,99,235,0.2)' }}
              >
                <h2 className="text-2xl font-bold mb-6 text-blue-600">Request Consultation</h2>
                <HubspotForm />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl text-center">
          <motion.div
            variants={scaleIn()}
            initial="hidden"
            animate={isHeroInView ? 'visible' : 'hidden'}
          >
            <motion.div
              className="inline-flex items-center justify-center space-x-2 bg-blue-600/10 px-6 py-2 rounded-full mb-6 text-sm font-semibold tracking-wider text-blue-700 border border-blue-600/20"
              variants={fadeIn(0.2)}
            >
              <span className="w-2 h-2 rounded-full bg-blue-700"></span>
              <span>SECURE YOUR HEALTHCARE DATA</span>
              <span className="w-2 h-2 rounded-full bg-blue-700"></span>
            </motion.div>
            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 tracking-tight leading-tight text-blue-600"
              variants={fadeIn(0.3)}
            >
              Secure Your Healthcare Data with HIPAA Compliance
            </motion.h2>
            <motion.p
              className="text-xl text-gray-700 mb-6 leading-relaxed"
              variants={fadeIn(0.4)}
            >
              In today's healthcare landscape, HIPAA compliance isn't just a requirement – it's a critical component of your security strategy. But navigating the complex requirements and maintaining compliance can be challenging.
            </motion.p>
            <motion.p
              className="text-gray-600 text-lg leading-relaxed"
              variants={fadeIn(0.5)}
            >
              We're not just compliance consultants. We're security partners who understand that HIPAA compliance must be practical, sustainable, and aligned with your healthcare objectives. We work with you to develop a comprehensive security framework that protects patient data while enabling quality care delivery.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section ref={benefitsRef} className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl">
          <motion.div
            variants={scaleIn()}
            initial="hidden"
            animate={isBenefitsInView ? 'visible' : 'hidden'}
            className="text-center mb-16"
          >
            <motion.span
              className="inline-flex items-center justify-center space-x-2 bg-blue-600/10 px-6 py-2 rounded-full mb-6 text-sm font-semibold tracking-wider text-blue-700 border border-blue-600/20"
              variants={fadeIn(0.2)}
            >
              <span className="w-2 h-2 rounded-full bg-blue-700"></span>
              <span>HOW WE HELP</span>
              <span className="w-2 h-2 rounded-full bg-blue-700"></span>
            </motion.span>
            <motion.h3
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-2 tracking-tight leading-tight text-blue-600"
              variants={fadeIn(0.3)}
            >
              Here's how we help you achieve
            </motion.h3>
            <motion.h3
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 tracking-tight leading-tight text-blue-600"
              variants={fadeIn(0.32)}
            >
              HIPAA compliance
            </motion.h3>
            <motion.p
              className="text-gray-700 max-w-2xl mx-auto text-lg leading-relaxed"
              variants={fadeIn(0.4)}
            >
              Our comprehensive approach ensures you meet all requirements while building a robust security framework.
            </motion.p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={benefit.title}
                variants={fadeIn(0.1 * idx)}
                initial="hidden"
                animate={isBenefitsInView ? 'visible' : 'hidden'}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: '0 10px 20px rgba(37,99,235,0.2)',
                  borderColor: 'rgba(37,99,235,0.5)'
                }}
                className="relative bg-white rounded-lg border-2 border-blue-600/20 p-8 text-center shadow-md group"
              >
                <motion.div
                  className="absolute top-0 left-0 right-0 h-1 bg-blue-600"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.1 * idx }}
                />
                <h4 className="font-bold text-blue-600 text-lg sm:text-xl mb-4">{benefit.title}</h4>
                <p className="text-gray-600 text-base leading-relaxed">{benefit.description}</p>
                <motion.div
                  className="absolute bottom-4 right-4 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="text-white w-3 h-3">→</span>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-24 bg-gray-50 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl">
          <motion.div
            variants={scaleIn()}
            initial="hidden"
            animate={isServicesInView ? 'visible' : 'hidden'}
            className="text-center mb-16"
          >
            <motion.span
              className="inline-flex items-center justify-center space-x-2 bg-blue-600/10 px-6 py-2 rounded-full mb-6 text-sm font-semibold tracking-wider text-blue-600 border border-blue-600/20"
              variants={fadeIn(0.2)}
            >
              <span>OUR SERVICES</span>
            </motion.span>
            <motion.h4
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-2 tracking-tight leading-tight text-blue-600"
              variants={fadeIn(0.3)}
            >
              What We Offer in
            </motion.h4>
            <motion.h4
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 tracking-tight leading-tight text-blue-600"
              variants={fadeIn(0.32)}
            >
              HIPAA Compliance
            </motion.h4>
            <motion.p
              className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed"
              variants={fadeIn(0.4)}
            >
              Comprehensive services designed to guide you through every step of the compliance journey.
            </motion.p>
          </motion.div>
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <motion.div
              variants={slideIn('left')}
              initial="hidden"
              animate={isServicesInView ? 'visible' : 'hidden'}
              className="lg:w-2/5 text-center lg:text-left"
            >
              <h2 className="text-4xl font-bold mb-4 text-blue-600 text-right pr-5">
                WHAT <br />
                WE OFFER <br />
                IN <span className="text-blue-800">HIPAA</span> <br />
                COMPLIANCE
              </h2>
              <div className="text-8xl text-gray-300 opacity-80 text-right pr-5">?</div>
            </motion.div>
            
            <motion.div
              variants={slideIn('right', 0.3)}
              initial="hidden"
              animate={isServicesInView ? 'visible' : 'hidden'}
              className="lg:w-3/5 relative bg-white rounded-3xl p-8 shadow-lg border-2 border-blue-600/20"
            >
              <motion.button 
                onClick={prevSlide} 
                className="absolute left-2 top-1/2 transform -translate-y-1/2 text-blue-600 z-10 hover:text-blue-700"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft size={36} />
              </motion.button>
              
              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeSlide}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-center px-4"
                >
                  <h3 className="text-xl font-bold text-blue-600 mb-4">{services[activeSlide].title}</h3>
                  <p className="text-lg text-gray-700">{services[activeSlide].description}</p>
                </motion.div>
              </AnimatePresence>
              
              <motion.button 
                onClick={nextSlide} 
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-600 z-10 hover:text-blue-700"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight size={36} />
              </motion.button>
              
              <div className="flex justify-center mt-6 gap-2">
                {services.map((_, index) => (
                  <motion.div 
                    key={index}
                    className={`h-2 w-2 rounded-full ${index === activeSlide ? 'bg-blue-600' : 'bg-gray-300'}`}
                    whileHover={{ scale: 1.5 }}
                    transition={{ duration: 0.2 }}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section ref={whyChooseRef} className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-6xl">
          <motion.div
            variants={scaleIn()}
            initial="hidden"
            animate={isWhyChooseInView ? 'visible' : 'hidden'}
            className="text-center mb-16"
          >
            <motion.span
              className="inline-flex items-center justify-center space-x-2 bg-blue-600/10 px-6 py-2 rounded-full mb-6 text-sm font-semibold tracking-wider text-blue-600 border border-blue-600/20"
              variants={fadeIn(0.2)}
            >
              <span className="w-2 h-2 rounded-full bg-blue-700"></span>
              <span>WHY CHOOSE US</span>
              <span className="w-2 h-2 rounded-full bg-blue-700"></span>
            </motion.span>
            <motion.h3
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-2 tracking-tight leading-tight text-blue-600"
              variants={fadeIn(0.3)}
            >
              Why Choose Codezye Cyber for
            </motion.h3>
            <motion.h3
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 tracking-tight leading-tight text-blue-600"
              variants={fadeIn(0.32)}
            >
              HIPAA Compliance?
            </motion.h3>
            <motion.p
              className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed"
              variants={fadeIn(0.4)}
            >
              Our HIPAA compliance services are designed to help healthcare organizations achieve and maintain compliance while building a robust security framework that protects patient data.
            </motion.p>
          </motion.div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              {[
                { key: 'expertise', label: 'Expertise You Can Trust' },
                { key: 'tailored', label: 'Tailored Solutions' },
                { key: 'proactive', label: 'Proactive Security' }
              ].map((tab, idx) => (
                <motion.button
                  key={tab.key}
                  onClick={() => handleTabClick(tab.key)}
                  className={`flex-1 py-4 text-center rounded-full ${activeTab === tab.key ? 'bg-blue-700 text-white' : 'bg-white text-blue-700 border border-blue-700'} font-semibold transition-all duration-300 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {tab.label}
                </motion.button>
              ))}
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-gray-50 rounded-lg p-8 text-center text-blue-900 font-medium text-lg sm:text-xl min-h-[100px] flex items-center justify-center border-2 border-blue-600/20 shadow-md"
              >
                {activeTab === 'expertise' && (
                  "Our team brings extensive experience in HIPAA compliance and security assessments, ensuring that your healthcare organization can achieve and maintain compliance effectively."
                )}
                {activeTab === 'tailored' && (
                  "We recognize that each healthcare organization has unique security needs, and our flexible approach allows us to develop compliance solutions that address your specific requirements."
                )}
                {activeTab === 'proactive' && (
                  "We go beyond basic compliance. Our team helps you implement proactive security measures and continuously improve your security posture through regular reviews and updates."
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Contact Us CTA */}
      <section ref={ctaRef} className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl text-center">
          <motion.div
            variants={scaleIn()}
            initial="hidden"
            animate={isCtaInView ? 'visible' : 'hidden'}
          >
            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-2 tracking-tight leading-tight text-blue-600"
              variants={fadeIn(0.2)}
            >
              Connect with Us
            </motion.h2>
            <motion.p
              className="text-xl text-gray-700 mb-8 leading-relaxed"
              variants={fadeIn(0.3)}
            >
              Investing in HIPAA compliance isn't just about meeting requirements – it's about protecting your patients' data, building trust, and enabling quality healthcare delivery. Don't leave your compliance to chance. Partner with Codezye Cyber to develop a robust security framework that safeguards your success. Contact us today for a free consultation and discover how our HIPAA compliance services can transform your security posture.
            </motion.p>
            <motion.div
              variants={fadeIn(0.5)}
              className="flex justify-center"
            >
              <motion.button 
                onClick={handleGetStarted}
                className="w-full max-w-3xl flex items-center justify-between rounded-full bg-blue-700 shadow-lg px-6 py-4 md:py-5 md:px-10 transition-all duration-300 hover:bg-blue-800 group"
                style={{ minHeight: '70px' }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="bg-white/20 text-white text-base md:text-lg font-semibold rounded-full px-5 py-2 mr-4 tracking-wide">
                  HEARD ENOUGH?
                </span>
                <span className="flex-1 text-center text-white font-extrabold text-2xl md:text-3xl tracking-tight">
                  Contact Us
                </span>
                <span className="text-white text-2xl md:text-3xl font-bold ml-4 group-hover:translate-x-1 transition-transform">»</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HIPAA;