import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
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

const Governance_Framework_Development = () => {
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
        service: 'Governance Framework Development',
        referral: 'governance-landing'
      }
    });
  };

  const benefits = [
    {
      title: "Collaborative Canvas",
      description: "We don't operate in silos. We co-create with your team, drawing on their expertise and perspectives to paint a complete picture of your needs."
    },
    {
      title: "Risk-Tailored Roadmap",
      description: "We identify your specific vulnerabilities and opportunities, crafting a framework that mitigates risks while optimizing performance."
    },
    {
      title: "Transparency & Accountability",
      description: "We build a clear, easy-to-navigate framework that empowers accountability at all levels, fostering a culture of ownership and shared responsibility."
    },
    {
      title: "Scalable & Sustainable",
      description: "We design a framework that isn't just robust, but also adaptable, evolving alongside your business and keeping you ahead of the curve."
    },
  ];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
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
            <span className="text-gray-800 font-medium">Governance Framework Development</span>
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
                GOVERNANCE FRAMEWORK DEVELOPMENT
              </motion.span>
              <motion.h1
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 tracking-tight leading-tight text-blue-600"
                variants={fadeIn(0.2)}
              >
                Governance Framework Development
              </motion.h1>
              <motion.p
                className="text-xl sm:text-2xl text-gray-700 mb-6 leading-relaxed"
                variants={fadeIn(0.3)}
              >
                Align. Govern. Secure.
              </motion.p>
              <motion.p
                className="text-gray-600 max-w-lg leading-relaxed text-lg mb-8"
                variants={fadeIn(0.4)}
              >
                Develop a robust governance framework with Codezye Cyber. Our Governance Framework Development services help you establish robust structures, policies, and procedures for effective data security and regulatory compliance. We empower you to build trust with stakeholders and achieve long-term compliance success.
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
              <span>BEYOND COMPLIANCE</span>
              <span className="w-2 h-2 rounded-full bg-blue-700"></span>
            </motion.div>
            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 tracking-tight leading-tight text-blue-600"
              variants={fadeIn(0.3)}
            >
              Beyond Compliance: Craft Your Compass with Codezye Cyber's Governance Framework Development Services
            </motion.h2>
            <motion.p
              className="text-xl text-gray-700 mb-6 leading-relaxed"
              variants={fadeIn(0.4)}
            >
              In today's turbulent business landscape, simply ticking compliance boxes isn't enough. You need a north star, a guiding framework that aligns your decisions, empowers your people, and propels you toward sustainable success. That's where our Governance Framework Development Services come in.
            </motion.p>
            <motion.p
              className="text-gray-600 text-lg leading-relaxed"
              variants={fadeIn(0.5)}
            >
              We're not template peddlers. We're governance artisans, meticulously crafting bespoke frameworks that resonate with your unique DNA. We delve deep, understanding your culture, aspirations, and challenges to build a structure that seamlessly integrates with your existing architecture.
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
              <span>HOW WE HELP</span>
            </motion.span>
            <motion.h3
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-2 tracking-tight leading-tight text-blue-600"
              variants={fadeIn(0.3)}
            >
              Here's how we navigate the path to good governance
            </motion.h3>
          </motion.div>
          <div className="flex overflow-x-auto pb-6 gap-6 scrollbar-hide">
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
                className="flex-shrink-0 w-80 bg-white p-6 rounded-lg shadow-md border-2 border-blue-600/20 text-center group"
              >
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
              Governance Framework Development?
            </motion.h3>
            <motion.p
              className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed"
              variants={fadeIn(0.4)}
            >
              Our governance framework development services are designed to help organizations establish robust structures, policies, and procedures for effective data security and regulatory compliance.
            </motion.p>
          </motion.div>
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
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="bg-gray-50 rounded-lg p-8 text-center text-blue-900 font-medium text-lg sm:text-xl min-h-[100px] flex items-center justify-center border-2 border-blue-600/20 shadow-md"
          >
            {activeTab === 'expertise' && (
              "Our team brings extensive experience in governance framework development, ensuring that your organization meets compliance requirements and builds a culture of data responsibility."
            )}
            {activeTab === 'tailored' && (
              "We recognize that governance needs vary, and our flexible engagement models allow you to access expert guidance tailored to your organization's specific requirements."
            )}
            {activeTab === 'proactive' && (
              "We go beyond compliance checklists. Our team develops holistic governance strategies that align with your business goals, ensuring responsible and ethical operations."
            )}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
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
              Investing in a well-crafted governance framework isn't a luxury – it's a necessity. It's about unlocking agility, enhancing decision-making, and fostering a culture of trust and compliance. Don't navigate the complex world of governance alone. Partner with Codezye Cyber to build a robust framework that drives your success. Contact us today for a free consultation and discover how our Governance Framework Development services can transform your organization.
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

export default Governance_Framework_Development;