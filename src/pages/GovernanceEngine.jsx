import React, { useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import governanceImage from '../assets/aerial-view-business-team.jpg';
import { useNavigate } from 'react-router-dom';

const governanceSolutions = [
  'GRC Framework', 'Risk Assessment', 'Policy Management',
  'Compliance Monitoring', 'Audit Readiness', 'Data Governance',
  'Regulatory Reporting', 'Incident Management', 'Vendor Governance',
  'Training Programs', 'Access Control', 'Continuous Improvement',
];

const benefitsTabs = [
  {
    label: 'Risk Mitigation',
    content: 'Proactive governance reduces risks and ensures regulatory alignment.'
  },
  {
    label: 'Operational Efficiency',
    content: 'Streamlined processes enhance productivity and resource use.'
  },
  {
    label: 'Regulatory Confidence',
    content: 'Robust governance builds trust with regulators and stakeholders.'
  },
  {
    label: 'Strategic Insight',
    content: 'Data-driven governance informs strategic decision-making.'
  },
];

const approachCards = [
  {
    title: 'Establish governance frameworks',
    desc: 'We design tailored GRC frameworks to align with your organizational goals.'
  },
  {
    title: 'Assess and prioritize risks',
    desc: 'Identify and mitigate risks with comprehensive risk assessments.'
  },
  {
    title: 'Implement policy controls',
    desc: 'Deploy effective policies to ensure compliance and security.'
  },
  {
    title: 'Monitor and optimize',
    desc: 'Provide ongoing support to adapt to evolving governance needs.'
  },
];

const GovernanceEngine = () => {
  const [activeTab, setActiveTab] = useState(0);
  const heroRef = React.useRef(null);
  const solutionsRef = React.useRef(null);
  const quoteRef = React.useRef(null);
  const benefitsRef = React.useRef(null);
  const approachRef = React.useRef(null);
  const navigate = useNavigate();

  const isHeroInView = useInView(heroRef, { once: true, threshold: 0.3 });
  const isSolutionsInView = useInView(solutionsRef, { once: true, threshold: 0.3 });
  const isQuoteInView = useInView(quoteRef, { once: true, threshold: 0.3 });
  const isBenefitsInView = useInView(benefitsRef, { once: true, threshold: 0.3 });
  const isApproachInView = useInView(approachRef, { once: true, threshold: 0.3 });

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

  // Map solution names to their routes (add more as needed)
  const solutionRoutes = {
    'Risk Assessment': '/services/Risk-Assessment-and-Management',
    'Data Governance': '/services/Data-Governance',
    'Policy Management': '/services/Security-Policy-&-Strategy-Development',
    'Vendor Governance': '/services/Third-Party-Risk-Management',
    'GRC Framework': '/services/Governance-Framework-Development',
    'DPO as a Service': '/services/DPO-as-a-Service',
    'Continuous Improvement': '/services/Security-Program-Maturity-Assessment-&-Improvement',
    'Incident Management': '/services/Incident-Response-Planning-Service',
    // Add more mappings as needed
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-hidden">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative flex items-center justify-center min-h-[70vh] pt-16 pb-44 overflow-hidden bg-white"
        style={{
          backgroundImage: `url(${governanceImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="bg-white bg-opacity-85 w-full h-full absolute inset-0 z-10 pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-20 max-w-7xl">
          <div className="flex flex-col items-center justify-center text-center min-h-[50vh]">
            <motion.div
              variants={slideIn('left')}
              initial="hidden"
              animate={isHeroInView ? 'visible' : 'hidden'}
              className="w-full"
            >
              <motion.span
                className="inline-block px-5 py-2 bg-blue-600/20 text-blue-700 rounded-full text-base sm:text-lg font-semibold tracking-wider mb-7"
                variants={fadeIn(0.1)}
              >
                GOVERNANCE SOLUTIONS
              </motion.span>
              <motion.h1
                className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-8 tracking-tight leading-tight text-blue-800 drop-shadow-lg"
                variants={fadeIn(0.2)}
              >
                Governance Engine
              </motion.h1>
              <motion.p
                className="text-2xl sm:text-3xl text-gray-900 mb-8 leading-relaxed drop-shadow font-bold"
                variants={fadeIn(0.3)}
              >
                Drive your organization with a robust governance framework.
              </motion.p>
              <motion.p
                className="text-gray-800 max-w-2xl mx-auto leading-relaxed text-xl sm:text-2xl drop-shadow"
                variants={fadeIn(0.4)}
              >
                Our Governance Engine empowers you to manage risks, ensure compliance, and optimize operations with tailored solutions.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Governance Solutions Grid */}
      <section ref={solutionsRef} className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl">
          <motion.div
            variants={scaleIn()}
            initial="hidden"
            animate={isSolutionsInView ? 'visible' : 'hidden'}
            className="text-center mb-16"
          >
            <motion.span
              className="inline-flex items-center justify-center space-x-2 bg-blue-600/10 px-6 py-2 rounded-full mb-6 text-sm font-semibold tracking-wider text-blue-600"
              variants={fadeIn(0.2)}
            >
              <span className="w-2 h-2 rounded-full bg-blue-600"></span>
              <span>OUR SOLUTIONS</span>
              <span className="w-2 h-2 rounded-full bg-blue-600"></span>
            </motion.span>
            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-blue-600 mb-6"
              variants={fadeIn(0.3)}
            >
              Comprehensive Governance Solutions
            </motion.h2>
            <motion.p
              className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed"
              variants={fadeIn(0.4)}
            >
              A wide range of tools and services to strengthen your governance practices.
            </motion.p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {governanceSolutions.map((solution, idx) => {
              const route = solutionRoutes[solution] || '/coming-soon';
              return (
                <motion.div
                  key={solution}
                  variants={fadeIn(0.1 * idx)}
                  initial="hidden"
                  animate={isSolutionsInView ? 'visible' : 'hidden'}
                  whileHover={{
                    backgroundColor: '#1d4ed8',
                    color: '#fff',
                    boxShadow: '0 12px 24px rgba(37,99,235,0.15)',
                    borderColor: '#1e40af',
                  }}
                  className="relative rounded-xl border-2 border-blue-600/20 p-6 text-center text-blue-600 font-semibold text-lg shadow-md bg-white transition-all duration-300 cursor-pointer"
                  onClick={() => navigate(route)}
                  style={{ cursor: 'pointer' }}
                >
                  {solution}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quotation/Description Section */}
      <section ref={quoteRef} className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl text-center">
          <motion.div
            variants={scaleIn()}
            initial="hidden"
            animate={isQuoteInView ? 'visible' : 'hidden'}
          >
            <motion.div
              className="flex justify-center mb-6"
              variants={fadeIn(0.2)}
            >
              <svg width="60" height="60" fill="none" viewBox="0 0 60 60">
                <text x="0" y="50" fontSize="60" fill="#2563EB">“</text>
              </svg>
            </motion.div>
            <motion.p
              className="text-xl sm:text-2xl text-blue-900 font-medium mb-6 leading-relaxed"
              variants={fadeIn(0.3)}
            >
              At <span className="font-bold text-blue-600">Codezye Cyber</span>, we empower organizations with the Governance Engine, a strategic tool to navigate complex regulatory landscapes and drive operational excellence.
            </motion.p>
            <motion.p
              className="text-gray-600 text-lg leading-relaxed"
              variants={fadeIn(0.4)}
            >
              Our customized approach ensures your governance aligns with business objectives and regulatory demands.
            </motion.p>
            <motion.div
              className="mt-8 h-px w-32 bg-blue-600 mx-auto"
              variants={fadeIn(0.5)}
            />
          </motion.div>
        </div>
      </section>

      {/* Benefits Tabs Section */}
      <section ref={benefitsRef} className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-6xl">
          <motion.div
            variants={scaleIn()}
            initial="hidden"
            animate={isBenefitsInView ? 'visible' : 'hidden'}
            className="text-center mb-16"
          >
            <motion.span
              className="inline-flex items-center justify-center space-x-2 bg-blue-600/10 px-6 py-2 rounded-full mb-6 text-sm font-semibold tracking-wider text-blue-600"
              variants={fadeIn(0.2)}
            >
              <FaCheckCircle className="text-blue-600 w-4 h-4" />
              <span>BENEFITS</span>
            </motion.span>
            <motion.h3
              className="text-3xl sm:text-4xl font-extrabold text-blue-600 mb-6"
              variants={fadeIn(0.3)}
            >
              Why Choose Governance Engine?
            </motion.h3>
            <motion.p
              className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed"
              variants={fadeIn(0.4)}
            >
              Discover the value of a governance strategy that enhances control and drives success.
            </motion.p>
          </motion.div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              {benefitsTabs.map((tab, idx) => (
                <motion.button
                  key={tab.label}
                  onClick={() => setActiveTab(idx)}
                  className={`px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 ${
                    activeTab === idx
                      ? 'bg-blue-600 text-white shadow-lg border-blue-600'
                      : 'bg-white text-blue-600 border-2 border-blue-600/20 hover:bg-blue-600/5 hover:border-blue-600/40'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
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
                className="bg-blue-600/5 rounded-2xl p-8 text-center text-blue-900 font-medium text-lg sm:text-xl min-h-[100px] flex items-center justify-center border-2 border-blue-600/20 shadow-md"
              >
                {benefitsTabs[activeTab].content}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Streamlined Approach Section */}
      <section ref={approachRef} className="py-24 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl">
          <motion.div
            variants={scaleIn()}
            initial="hidden"
            animate={isApproachInView ? 'visible' : 'hidden'}
            className="text-center mb-16"
          >
            <motion.span
              className="inline-flex items-center justify-center space-x-2 bg-blue-600/10 px-6 py-2 rounded-full mb-6 text-sm font-semibold tracking-wider text-blue-600"
              variants={fadeIn(0.2)}
            >
              <span>OUR APPROACH</span>
            </motion.span>
            <motion.h4
              className="text-3xl sm:text-4xl font-extrabold text-blue-600 mb-6"
              variants={fadeIn(0.3)}
            >
              Our Streamlined Governance Approach
            </motion.h4>
            <motion.p
              className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed"
              variants={fadeIn(0.4)}
            >
              A structured process to build and maintain effective governance practices.
            </motion.p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {approachCards.map((card, idx) => (
              <motion.div
                key={card.title}
                variants={fadeIn(0.1 * idx)}
                initial="hidden"
                animate={isApproachInView ? 'visible' : 'hidden'}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: '0 12px 24px rgba(37,99,235,0.15)',
                  borderColor: 'rgba(37,99,235,0.5)'
                }}
                className="relative bg-white rounded-2xl border-2 border-blue-600/20 p-8 text-center shadow-lg group"
              >
                <motion.div
                  className="absolute top-0 left-0 right-0 h-1 bg-blue-600"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.1 * idx }}
                />
                <h5 className="font-bold text-blue-600 text-lg sm:text-xl mb-4">{card.title}</h5>
                <p className="text-gray-600 text-base leading-relaxed">{card.desc}</p>
                <motion.div
                  className="absolute bottom-4 right-4 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <FaArrowRight className="text-white w-3 h-3" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Us CTA */}
      <div className="flex justify-center py-12 bg-white">
        <a
          href="/get-started"
          className="w-full max-w-3xl flex items-center justify-between rounded-full bg-blue-600 shadow-lg px-6 py-4 md:py-5 md:px-10 transition-all duration-300 hover:bg-blue-700 group"
          style={{ minHeight: '70px' }}
        >
          <span className="bg-blue-500/60 text-white text-base md:text-lg font-semibold rounded-full px-5 py-2 mr-4 tracking-wide">
            HEARD ENOUGH?
          </span>
          <span className="flex-1 text-center text-white font-extrabold text-2xl md:text-3xl tracking-tight">
            Contact Us
          </span>
          <span className="text-white text-2xl md:text-3xl font-bold ml-4 group-hover:translate-x-1 transition-transform">»</span>
        </a>
      </div>
    </div>
  );
};

export default GovernanceEngine;