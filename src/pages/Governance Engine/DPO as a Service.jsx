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

const DPO_as_a_Service = () => {
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

  // Benefits data
  const benefits = [
    {
      title: "Gap Analysis & Risk Assessment",
      description: "Comprehensive evaluation of your current data protection practices against regulatory requirements."
    },
    {
      title: "Policy & Procedure Development",
      description: "Customized policies tailored to your organization's specific needs and industry standards."
    },
    {
      title: "Data Subject Request Management",
      description: "End-to-end handling of DSARs with guaranteed response times."
    },
    {
      title: "Staff Training & Awareness",
      description: "Interactive training programs to foster a culture of data protection."
    }
  ];

  // Service packages
  const services = [
    {
      title: "Essential Compliance",
      description: "Basic GDPR compliance framework and documentation."
    },
    {
      title: "Comprehensive Protection",
      description: "Full DPO services including ongoing monitoring and support."
    },
    {
      title: "Enterprise Solution",
      description: "Complete data governance framework with regular audits."
    }
  ];

  // Handle tab click
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

  // Navigation handler
  const handleGetStarted = () => {
    navigate('/get-started', {
      state: {
        service: 'DPO as a Service',
        referral: 'dpo-landing'
      }
    });
  };

  // Background style
  const backgroundStyle = {
    backgroundImage: 'url(/world-map-blue.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed'
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
            <span className="text-gray-500">Governance Engine</span>
            <span className="mx-2 text-gray-500">»</span>
            <span className="text-gray-800 font-medium">DPO as a Service</span>
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
                DPO AS A SERVICE
              </motion.span>
              <motion.h1
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 tracking-tight leading-tight text-blue-600"
                variants={fadeIn(0.2)}
              >
                DPO as a Service
              </motion.h1>
              <motion.p
                className="text-xl sm:text-2xl text-gray-700 mb-6 leading-relaxed"
                variants={fadeIn(0.3)}
              >
                Expert Data Protection Compliance
              </motion.p>
              <motion.p
                className="text-gray-600 max-w-lg leading-relaxed text-lg mb-8"
                variants={fadeIn(0.4)}
              >
                Our Data Protection Officer service provides comprehensive compliance solutions tailored to your organization's needs, ensuring you meet all GDPR and other regulatory requirements.
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
              <span>NAVIGATE THE SEAS OF DATA PRIVACY</span>
              <span className="w-2 h-2 rounded-full bg-blue-700"></span>
            </motion.div>
            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 tracking-tight leading-tight text-blue-600"
              variants={fadeIn(0.3)}
            >
              Navigate the Seas of Data Privacy with Confidence with Codezye Cyber's DPO as a Service
            </motion.h2>
            <motion.p
              className="text-xl text-gray-700 mb-6 leading-relaxed"
              variants={fadeIn(0.4)}
            >
              In today's data-driven world, privacy regulations aren't just bureaucratic hurdles – they're the compass guiding responsible, ethical business practices. But navigating the complex terrain of GDPR, CCPA, and other privacy frameworks can feel like stumbling through a legal jungle. That's where Codezye Cyber's DPO as a Service comes in, your expert Sherpa leading you to a data-powered future with confidence and compliance.
            </motion.p>
            <motion.p
              className="text-gray-600 text-lg leading-relaxed"
              variants={fadeIn(0.5)}
            >
              We're not compliance robots reciting regulations. We're privacy pioneers, with deep expertise in data protection laws and the evolving regulatory landscape. We become your trusted advisor, standing shoulder-to-shoulder with you to build a robust privacy program tailored to your unique needs and industry.
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
              <span className="w-3 h-3 rounded-full bg-blue-600 inline-block"></span>
              <span>HOW WE ILLUMINATE THE PATH TO PRIVACY COMPLIANCE</span>
            </motion.span>
            <motion.h3
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 tracking-tight leading-tight text-blue-600"
              variants={fadeIn(0.3)}
            >
              Here's how we illuminate the path to privacy compliance
            </motion.h3>
            <motion.p
              className="text-gray-700 max-w-2xl mx-auto text-lg leading-relaxed"
              variants={fadeIn(0.4)}
            >
              Our comprehensive approach ensures you meet all requirements while building a robust privacy framework.
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
              DPO as a Service
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
                IN <span className="text-blue-800">DPO AS A SERVICE</span> <br />
                SERVICE
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
              <span className="w-3 h-3 rounded-full bg-blue-600 inline-block"></span>
              <span>WHY CHOOSE US</span>
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
              DPO as a Service?
            </motion.h3>
            <motion.p
              className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed"
              variants={fadeIn(0.4)}
            >
              Our DPO as a Service is designed to help organizations achieve and maintain compliance while building a robust privacy framework.
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
                  "Our DPOs are seasoned experts with a deep understanding of data protection regulations, ensuring that your organization meets compliance requirements and builds a culture of data responsibility."
                )}
                {activeTab === 'tailored' && (
                  "Recognizing that data protection needs vary, our flexible engagement models allow you to access DPO expertise as a service, tailored to the specific requirements of your organization."
                )}
                {activeTab === 'proactive' && (
                  "We go beyond compliance checklists. Our DPOs develop holistic data protection strategies that align with your business goals, ensuring the responsible and ethical use of data."
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
              Investing in DPO as a Service isn't just about checking compliance boxes – it's about building trust, minimizing risk, and unlocking the full potential of your data responsibly and ethically. It's about turning complex regulations into a competitive advantage, attracting customers, and fostering a culture of data privacy within your organization.
            </motion.p>
            <motion.p
              className="text-gray-600 text-lg mb-12 leading-relaxed"
              variants={fadeIn(0.4)}
            >
              Don't get lost in the jungle of data privacy regulations. Partner with Codezye Cyber to navigate the path with confidence and clarity. Contact Codezye Cyber today for a free consultation and discover how our DPO as a Service can transform your data practices and unlock a future of responsible growth.
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

export default DPO_as_a_Service;