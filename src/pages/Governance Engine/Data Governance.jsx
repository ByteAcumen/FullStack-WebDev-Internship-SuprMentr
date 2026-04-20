import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
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

const DataGovernance = () => {
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
      title: "Data Inventory and Classification",
      description: "We shine a light on your data's hiding places, understanding its volume, velocity, and value, ensuring informed decision-making and resource allocation."
    },
    {
      title: "Policy and Procedure Development",
      description: "We don't believe in one-size-fits-all approaches. We work with you to craft tailored policies and procedures that fit your culture, industry, and regulatory landscape."
    },
    {
      title: "Access and Control Management",
      description: "We build a secure fortress around your data, implementing granular access controls and robust monitoring systems to prevent unauthorized access and potential breaches."
    },
    {
      title: "Data Lifecycle Management",
      description: "We ensure your data lives a healthy life, from its creation to secure disposal, with effective retention policies and automated processes that maximize efficiency and minimize risk."
    }
  ];

  const handleGetStarted = () => {
    navigate('/get-started', {
      state: {
        service: 'Data Governance',
        referral: 'data-governance-landing'
      }
    });
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // Background image style
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
            <span className="text-gray-800 font-medium">Data Governance</span>
          </div>
        </div>
      </nav>

      {/* Hero Section with Background Image */}
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
                DATA GOVERNANCE
              </motion.span>
              <motion.h1
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 tracking-tight leading-tight text-blue-600"
                variants={fadeIn(0.2)}
              >
                Data Governance
              </motion.h1>
              <motion.p
                className="text-xl sm:text-2xl text-gray-700 mb-6 leading-relaxed"
                variants={fadeIn(0.3)}
              >
                Govern Your Data with Data Governance Services
              </motion.p>
              <motion.p
                className="text-gray-600 max-w-lg leading-relaxed text-lg mb-8"
                variants={fadeIn(0.4)}
              >
                Codezye Cyber's Data Governance services help you establish a structured framework for data management, ensuring data privacy, security, and compliance. We empower you to gain control, build trust with stakeholders, and derive valuable insights from your data assets.
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
                <h2 className="text-2xl font-bold mb-6 text-blue-600">Your Path to Compliance Success - Start Here!</h2>
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
              <span>UNTANGLE THE DATA DELUGE</span>
              <span className="w-2 h-2 rounded-full bg-blue-700"></span>
            </motion.div>
            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 tracking-tight leading-tight text-blue-600"
              variants={fadeIn(0.3)}
            >
              Untangle the Data Deluge: Tame Your Chaos with Codezye Cyber's Data Governance Services
            </motion.h2>
            <motion.p
              className="text-xl text-gray-700 mb-6 leading-relaxed"
              variants={fadeIn(0.4)}
            >
              In today's data-driven world, information is power. But without proper governance, it can quickly become a chaotic tsunami, drowning your business in compliance headaches and missed opportunities. That's where Codezye Cyber steps in, your experienced data wranglers, transforming your data deluge into a predictable, manageable, and valuable asset with our Data Governance Services.
            </motion.p>
            <motion.p
              className="text-gray-600 text-lg leading-relaxed"
              variants={fadeIn(0.5)}
            >
              We're not data disciplinarians. We're data architects, collaborating with you to understand your unique data landscape, identify vulnerabilities, and craft a customized roadmap for success. We translate complex regulations into simple solutions, empowering you to unlock the true potential of your data while ensuring robust compliance and trust.
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
              Here's how we navigate the data storm with you
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
                <div className="text-blue-600 text-2xl font-bold mb-2">{idx + 1}.</div>
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
              Why choose Codezye Cyber?
            </motion.h3>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            {[
              { key: 'expertise', label: 'Industry Expertise' },
              { key: 'tailored', label: 'Business-Focused' },
              { key: 'regulatory', label: 'Regulatory Compliance' }
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
              "Crafting a comprehensive data governance framework that aligns with your business goals, ensures compliance, and maximizes data value."
            )}
            {activeTab === 'tailored' && (
              "Implementing strategies and processes to maintain data accuracy, consistency, and integrity throughout its lifecycle."
            )}
            {activeTab === 'regulatory' && (
              "Embedding security and compliance measures into the core of your data governance strategy to protect sensitive information and ensure regulatory adherence."
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
              Investing in Data Governance isn't a technical chore - it's a strategic imperative. It's about unlocking the true value of your data, minimizing compliance burdens, and building a culture of data responsibility and trust. Ready to transform your data deluge into a powerful and compliant asset? Contact Codezye Cyber today for a free consultation and discover how we can tame your data chaos and unleash its full potential.
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

export default DataGovernance;