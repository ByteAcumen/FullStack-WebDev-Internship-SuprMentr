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

const HITRUSTCertificationPage = () => {
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
        service: 'HITRUST Certification',
        referral: 'hitrust-landing'
      }
    });
  };

  const benefits = [
    {
      title: "Healthcare Data Security",
      description: "HITRUST certification ensures that your organization's security measures are specifically tailored to the unique challenges of healthcare data, protecting patient information from potential breaches."
    },
    {
      title: "Regulatory Compliance",
      description: "As the healthcare industry is heavily regulated, HITRUST certification helps your organization meet various compliance requirements, reducing the risk of legal issues and ensuring smooth operations."
    },
    {
      title: "Trust Building",
      description: "Achieving HITRUST certification demonstrates a proactive approach to cybersecurity. It builds trust with patients, partners, and regulators by assuring them that their sensitive health information is in safe hands."
    },
    {
      title: "Industry Recognition",
      description: "HITRUST is widely recognized and accepted in the healthcare industry. Certification not only sets your organization apart but also positions it as a leader in securing health information."
    },
    {
      title: "Comprehensive Security Measures",
      description: "HITRUST covers a broad spectrum of security controls, ensuring that your organization's information security program is holistic, addressing various threats and vulnerabilities."
    }
  ];

  const services = [
    {
      title: "HITRUST Assessment",
      description: "Comprehensive evaluation of your organization's security controls against HITRUST CSF requirements."
    },
    {
      title: "Implementation Support",
      description: "Expert guidance in implementing necessary controls and changes to meet HITRUST requirements."
    },
    {
      title: "Documentation & Evidence",
      description: "Assistance with creating and maintaining required documentation for HITRUST certification."
    },
    {
      title: "Remediation Planning",
      description: "Strategic planning and support for addressing identified gaps and achieving compliance."
    },
    {
      title: "Certification Support",
      description: "End-to-end support throughout the HITRUST certification process, from assessment to final certification."
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
            <span className="text-gray-800 font-medium">HITRUST</span>
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
                HITRUST CERTIFICATION
              </motion.span>
              <motion.h1
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 tracking-tight leading-tight text-blue-600"
                variants={fadeIn(0.2)}
              >
                HITRUST Certification
              </motion.h1>
              <motion.p
                className="text-xl sm:text-2xl text-gray-700 mb-6 leading-relaxed"
                variants={fadeIn(0.3)}
              >
                Achieve HITRUST Certification with Confidence!
              </motion.p>
              <motion.p
                className="text-gray-600 max-w-lg leading-relaxed text-lg mb-8"
                variants={fadeIn(0.4)}
              >
                Achieve industry-leading HITRUST certification and demonstrate your commitment to healthcare data security. Codezye Cyber guides you through the HITRUST CSF framework, helping you build a robust security posture and meet regulatory requirements.
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
              <span>FORTIFY YOUR DEFENSES</span>
              <span className="w-2 h-2 rounded-full bg-blue-700"></span>
            </motion.div>
            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 tracking-tight leading-tight text-blue-600"
              variants={fadeIn(0.3)}
            >
              Fortify Your Defenses: Embark on a Secure Journey with HITRUST Certification
            </motion.h2>
            <motion.p
              className="text-xl text-gray-700 mb-6 leading-relaxed"
              variants={fadeIn(0.4)}
            >
              Our HITRUST certification services are designed to empower your organization with a robust framework for healthcare information security. Gain a competitive edge, assure your stakeholders, and elevate your security standards with a certification that signifies excellence.
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
              <span>BENEFITS</span>
              <span className="w-2 h-2 rounded-full bg-blue-700"></span>
            </motion.span>
            <motion.h3
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 tracking-tight leading-tight text-blue-600"
              variants={fadeIn(0.3)}
            >
              Benefits for Your Organization
            </motion.h3>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
              HITRUST Certification
            </motion.h4>
            <motion.p
              className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed"
              variants={fadeIn(0.4)}
            >
              Comprehensive services designed to guide you through every step of the certification journey.
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
                IN <span className="text-blue-800">HITRUST</span> <br />
                CERTIFICATION
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
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 tracking-tight leading-tight text-blue-600"
              variants={fadeIn(0.3)}
            >
              Why Choose Codezye Cyber for HITRUST Certification?
            </motion.h3>
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
                  "Our team brings extensive experience in HITRUST certification and security assessments, ensuring that your healthcare organization can achieve and maintain compliance effectively."
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
              Investing in HITRUST certification isn't just about meeting requirements – it's about protecting your patients' data, building trust, and enabling quality healthcare delivery. Don't leave your compliance to chance. Partner with Codezye Cyber to develop a robust security framework that safeguards your success. Contact us today for a free consultation and discover how our HITRUST certification services can transform your security posture.
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

export default HITRUSTCertificationPage;