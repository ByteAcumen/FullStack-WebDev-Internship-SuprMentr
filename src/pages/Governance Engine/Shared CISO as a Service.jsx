import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import HubspotForm from '../../components/HubspotForm';

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

const SharedCISOAsAService = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('expertise');

  // Refs for scroll animations
  const heroRef = useRef(null);
  const benefitsRef = useRef(null);
  const whyChooseRef = useRef(null);
  const ctaRef = useRef(null);

  // useInView hooks
  const isHeroInView = useInView(heroRef, { once: true, threshold: 0.3 });
  const isBenefitsInView = useInView(benefitsRef, { once: true, threshold: 0.3 });
  const isWhyChooseInView = useInView(whyChooseRef, { once: true, threshold: 0.3 });
  const isCtaInView = useInView(ctaRef, { once: true, threshold: 0.3 });

  const benefits = [
    {
      title: "Strategic Vision & Roadmap Development",
      description: "We collaborate with your leadership to define your security goals, assess your current posture, and craft a bespoke roadmap for achieving optimal cyber resilience."
    },
    {
      title: "Risk Management & Prioritization",
      description: "We don't waste your resources on chasing shadows. We analyze your unique vulnerabilities and prioritize risks based on likelihood and potential impact, ensuring your defenses are focused where they matter most."
    },
    {
      title: "Security Policy & Program Development",
      description: "We don't believe in one-size-fits-all policies. We tailor your security controls, incident response plans, and access management protocols to fit your specific needs and industry regulations."
    },
    {
      title: "Vendor Management & Technology Selection",
      description: "We navigate the complex world of cybersecurity solutions, helping you identify the right tools and vendors to build a robust and cost-effective defense ecosystem."
    },
    {
      title: "Board & Stakeholder Communication",
      description: "We bridge the gap between technical jargon and business language, keeping your board and stakeholders informed with clear, concise reports and actionable insights on your cyber health."
    }
  ];

  const handleGetStarted = () => {
    navigate('/get-started', {
      state: {
        service: 'Shared CISO as a Service',
        referral: 'shared-ciso-landing'
      }
    });
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

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
            <span className="text-gray-800 font-medium">Shared CISO as a Service</span>
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
                SHARED CISO AS A SERVICE
              </motion.span>
              <motion.h1
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 tracking-tight leading-tight text-blue-600"
                variants={fadeIn(0.2)}
              >
                Virtual/Shared CISO as a Service
              </motion.h1>
              <motion.p
                className="text-xl sm:text-2xl text-gray-700 mb-6 leading-relaxed"
                variants={fadeIn(0.3)}
              >
                Expert Security Leadership. On-Demand.
              </motion.p>
              <motion.p
                className="text-gray-600 max-w-lg leading-relaxed text-lg mb-8"
                variants={fadeIn(0.4)}
              >
                Codezye Cyber's Virtual/Shared CISO as a Service provides you with access to seasoned cybersecurity leadership, tailored to your needs. We deliver strategic guidance, manage risk proactively, and empower you to build a robust security posture.
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
              <span>EMPOWER YOUR CYBERSECURITY LEADERSHIP</span>
              <span className="w-2 h-2 rounded-full bg-blue-700"></span>
            </motion.div>
            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 tracking-tight leading-tight text-blue-600"
              variants={fadeIn(0.3)}
            >
              Empower Your Cybersecurity Leadership: Virtual/Shared CISO As A Service by Codezye Cyber
            </motion.h2>
            <motion.p
              className="text-xl text-gray-700 mb-6 leading-relaxed"
              variants={fadeIn(0.4)}
            >
              In today's digital landscape, a Chief Information Security Officer (CISO) is no longer a luxury – it's a necessity. But for many organizations, the cost and complexity of hiring a full-time CISO can be a daunting hurdle. That's where Codezye Cyber's Virtual/Shared CISO as a Service comes in, your bridge to expert cyber leadership without the hefty price tag.
            </motion.p>
            <motion.p
              className="text-gray-600 text-lg leading-relaxed"
              variants={fadeIn(0.5)}
            >
              We're not budget-friendly imposters. We're cybersecurity veterans, seasoned security leaders with extensive experience across industries and threat landscapes. We become your virtual partners, seamlessly integrating into your team and providing the strategic guidance, technical expertise, and leadership you need to navigate the ever-evolving cyber battlefield.
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
              <span>HOW WE HELP</span>
            </motion.span>
            <motion.h3
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 tracking-tight leading-tight text-blue-600"
              variants={fadeIn(0.3)}
            >
              Here's how we bridge the gap to exceptional cybersecurity
            </motion.h3>
            <motion.p
              className="text-gray-700 max-w-2xl mx-auto text-lg leading-relaxed"
              variants={fadeIn(0.4)}
            >
              Our comprehensive approach ensures you meet all requirements while building a robust security leadership framework.
            </motion.p>
          </motion.div>
          <div className="flex gap-8 overflow-x-auto pb-4 scrollbar-hide">
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
                className="min-w-[260px] max-w-xs flex-shrink-0 relative bg-white rounded-lg border-2 border-blue-600/20 p-8 text-center shadow-md group"
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
              Shared CISO as a Service?
            </motion.h3>
            <motion.p
              className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed"
              variants={fadeIn(0.4)}
            >
              Our Virtual/Shared CISO as a Service is designed to help organizations achieve and maintain security leadership while building a robust security framework.
            </motion.p>
          </motion.div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              {[
                { key: 'expertise', label: 'Industry Expertise' },
                { key: 'cost', label: 'Cost-Effective' },
                { key: 'tailored', label: 'Business-Focused' }
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
                  "Our Virtual/Shared CISOs are seasoned cybersecurity leaders with a wealth of experience in developing and executing robust cybersecurity strategies tailored to your business goals."
                )}
                {activeTab === 'cost' && (
                  "Obtain top-tier cybersecurity leadership without the overhead costs. Our Virtual/Shared CISO service provides a cost-effective solution for organizations of all sizes."
                )}
                {activeTab === 'tailored' && (
                  "We understand that every organization is unique. Our flexible engagement models allow you to access CISO expertise on a virtual or shared basis, aligning with your specific requirements."
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
              Investing in Virtual/Shared CISO as a Service isn't just about filling a vacancy – it's about unlocking transformative value. It's about gaining immediate access to top-tier cyber leadership, optimizing your security investments, and achieving peace of mind knowing your organization is shielded by the best.
            </motion.p>
            <motion.p
              className="text-gray-600 text-lg mb-12 leading-relaxed"
              variants={fadeIn(0.4)}
            >
              Don't settle for a cybersecurity gap. Partner with Codezye Cyber to bridge the path to exceptional security with our Virtual/Shared CISO as a Service. Contact Codezye Cyber today for a free consultation and discover how we can empower your cyber resilience.
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

export default SharedCISOAsAService;