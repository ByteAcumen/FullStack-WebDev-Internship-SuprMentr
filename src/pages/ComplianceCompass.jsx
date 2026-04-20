import React, { useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import businessTeamImage from '../assets/aerial-view-business-team.jpg';
import { useNavigate } from 'react-router-dom';


const complianceSolutions = [
  'PCI DSS', 'Facilitated PCI SAQ', 'ISA 62443',
  'PCI PIN', 'ISMS-ISO/IEC 27001', 'Synergized Compliance Model',
  'PCI 3DS', 'PIMS-ISO/IEC 27701', 'SWIFT CSF',
  'PCI P2PE', 'BCMS-ISO/IEC 22301', 'NIST CSF',
  'PCI CP', 'SOC 1 and SOC 2', 'CISA Cybersecurity Maturity Model Certification (CMMC)',
  'PCI SSF', 'HITRUST', 'HIPAA',
];

const benefitsTabs = [
  {
    label: 'Reduced Risk',
    content: 'Proactive compliance mitigates potential risks and penalties associated with non-compliance.'
  },
  {
    label: 'Enhanced Reputation',
    content: 'Demonstrating adherence to regulations builds trust and fosters a positive reputation.'
  },
  {
    label: 'Improved Efficiency',
    content: 'Streamlined compliance processes save time and resources.'
  },
  {
    label: 'Competitive Advantage',
    content: 'Compliance certifications differentiate your organization from competitors.'
  },
];

const approachCards = [
  {
    title: 'Understand and meet industry-specific requirements',
    desc: 'We offer expertise in a wide range of compliance certifications, including PCI DSS, SOC 1 & 2, ISO 27001, HITRUST, CMMC, framing the approach to your specific needs.'
  },
  {
    title: 'Conduct comprehensive audits and assessments',
    desc: 'Identify potential vulnerabilities and ensure adherence with thorough assessments.'
  },
  {
    title: 'Develop and implement effective compliance programs',
    desc: 'We create customized programs tailored to your specific needs and risk profile.'
  },
  {
    title: 'Stay informed and adapt to evolving regulations',
    desc: 'Receive ongoing support and guidance to stay ahead of changing regulations.'
  },
];

const ComplianceCompass = () => {
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
    'HIPAA': '/services/hipaa',
    'HITRUST': '/services/HITRUST',
    'ISMS-ISO/IEC 27001': '/services/ISMS-ISO-IEC-27001',
    'NIST CSF': '/services/nist-csf',
    'PCI DSS': '/services/PCI-DSS',
    'SOC 1 and SOC 2': '/services/soc-1-and-soc-2',
    // Add more mappings as needed
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-hidden">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative flex items-center justify-center min-h-[70vh] pt-16 pb-44 overflow-hidden bg-white"
        style={{
          backgroundImage: `url(${businessTeamImage})`,
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
                className="inline-block px-6 py-2 bg-blue-600/20 text-blue-700 rounded-full text-base sm:text-lg font-semibold tracking-wider mb-7 border border-blue-600/20"
                variants={fadeIn(0.1)}
              >
                REGULATORY COMPLIANCE
              </motion.span>
              <motion.h1
                className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-8 tracking-tight leading-tight text-blue-800 drop-shadow-lg"
                variants={fadeIn(0.2)}
              >
                Compliance Compass
              </motion.h1>
              <motion.p
                className="text-2xl sm:text-3xl text-gray-900 mb-8 leading-relaxed drop-shadow font-bold"
                variants={fadeIn(0.3)}
              >
                Navigate the complex landscape of regulatory compliance with confidence.
              </motion.p>
              <motion.p
                className="text-gray-800 max-w-2xl mx-auto leading-relaxed text-xl sm:text-2xl drop-shadow"
                variants={fadeIn(0.4)}
              >
                Our comprehensive solutions simplify your journey toward achieving and maintaining compliance, tailored to your organization's unique needs.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Compliance Solutions Grid */}
      <section ref={solutionsRef} className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl">
          <motion.div
            variants={scaleIn()}
            initial="hidden"
            animate={isSolutionsInView ? 'visible' : 'hidden'}
            className="text-center mb-16"
          >
            <motion.span
              className="inline-flex items-center justify-center space-x-2 bg-blue-600/10 px-6 py-2 rounded-full mb-6 text-sm font-semibold tracking-wider text-blue-700 border border-blue-600/20"
              variants={fadeIn(0.2)}
            >
              <span className="w-2 h-2 rounded-full bg-blue-700"></span>
              <span>OUR SOLUTIONS</span>
              <span className="w-2 h-2 rounded-full bg-blue-700"></span>
            </motion.span>
            <motion.h2
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight leading-tight text-blue-600"
              variants={fadeIn(0.3)}
            >
              Comprehensive Compliance Solutions
            </motion.h2>
            <motion.p
              className="text-gray-700 max-w-2xl mx-auto text-lg leading-relaxed"
              variants={fadeIn(0.4)}
            >
              A robust suite of compliance certifications tailored to meet diverse industry standards.
            </motion.p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {complianceSolutions.map((solution, idx) => {
              let routeKey = solution;
              if (solution.includes('ISO/IEC 27001')) routeKey = 'ISMS-ISO/IEC 27001';
              if (solution.includes('HITRUST')) routeKey = 'HITRUST';
              if (solution.includes('HIPAA')) routeKey = 'HIPAA';
              if (solution.includes('NIST CSF')) routeKey = 'NIST CSF';
              if (solution.includes('PCI DSS')) routeKey = 'PCI DSS';
              if (solution.includes('SOC 1 and SOC 2')) routeKey = 'SOC 1 and SOC 2';
              const route = solutionRoutes[routeKey] || '/coming-soon';
              return (
                <motion.div
                  key={solution}
                  variants={fadeIn(0.1 * idx)}
                  initial="hidden"
                  animate={isSolutionsInView ? 'visible' : 'hidden'}
                  whileHover={{
                    backgroundColor: '#2563eb',
                    color: '#fff',
                    boxShadow: '0 10px 20px rgba(37,99,235,0.2)',
                    borderColor: '#1e40af',
                  }}
                  className="relative rounded-lg border-2 border-blue-600/20 p-6 text-center text-blue-700 font-semibold text-lg shadow-md bg-white transition-all duration-300 cursor-pointer select-none"
                  onClick={() => {
                    navigate(route);
                  }}
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
              At <span className="font-bold text-blue-600">Codezye Cyber</span>, we transform compliance from a challenge into a strategic asset. Our Compliance Compass acts as your trusted guide, providing a clear path through the intricate web of regulatory requirements with confidence and precision.
            </motion.p>
            <motion.p
              className="text-gray-600 text-lg leading-relaxed"
              variants={fadeIn(0.4)}
            >
              We tailor our approach to your industry, regulations, and risk profile, ensuring a personalized compliance strategy that drives security and success.
            </motion.p>
            <motion.div
              className="mt-8 h-px w-32 bg-blue-600 mx-auto"
              variants={fadeIn(0.5)}
            />
          </motion.div>
        </div>
      </section>

      {/* Benefits Tabs Section */}
      <section ref={benefitsRef} className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-6xl">
          <motion.div
            variants={scaleIn()}
            initial="hidden"
            animate={isBenefitsInView ? 'visible' : 'hidden'}
            className="text-center mb-16"
          >
            <motion.span
              className="inline-flex items-center justify-center space-x-2 bg-blue-600/10 px-6 py-2 rounded-full mb-6 text-sm font-semibold tracking-wider text-blue-600 border border-blue-600/20"
              variants={fadeIn(0.2)}
            >
              <FaCheckCircle className="text-blue-600 w-4 h-4" />
              <span>BENEFITS</span>
            </motion.span>
            <motion.h3
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight leading-tight text-blue-600"
              variants={fadeIn(0.3)}
            >
              Why Choose Compliance Compass?
            </motion.h3>
            <motion.p
              className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed"
              variants={fadeIn(0.4)}
            >
              Unlock the advantages of a tailored compliance strategy that enhances security and drives business success.
            </motion.p>
          </motion.div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              {benefitsTabs.map((tab, idx) => (
                <motion.button
                  key={tab.label}
                  onClick={() => setActiveTab(idx)}
                  className={`flex-1 py-4 text-center rounded-full ${activeTab === idx ? 'bg-blue-700 text-white' : 'bg-white text-blue-700 border border-blue-700'} font-semibold transition-all duration-300 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400`}
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
                className="bg-white rounded-lg p-8 text-center text-blue-900 font-medium text-lg sm:text-xl min-h-[100px] flex items-center justify-center border-2 border-blue-600/20 shadow-md"
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
              className="inline-flex items-center justify-center space-x-2 bg-blue-600/10 px-6 py-2 rounded-full mb-6 text-sm font-semibold tracking-wider text-blue-600 border border-blue-600/20"
              variants={fadeIn(0.2)}
            >
              <span>OUR APPROACH</span>
            </motion.span>
            <motion.h4
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight leading-tight text-blue-600"
              variants={fadeIn(0.3)}
            >
              Our Streamlined Compliance Approach
            </motion.h4>
            <motion.p
              className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed"
              variants={fadeIn(0.4)}
            >
              A strategic and efficient process to ensure your organization meets regulatory standards with ease.
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
      <div className="flex justify-center py-12 bg-gray-50">
        <a
          href="/get-started"
          className="w-full max-w-3xl flex items-center justify-between rounded-full bg-blue-700 shadow-lg px-6 py-4 md:py-5 md:px-10 transition-all duration-300 hover:bg-blue-800 group"
          style={{ minHeight: '70px' }}
        >
          <span className="bg-white/20 text-white text-base md:text-lg font-semibold rounded-full px-5 py-2 mr-4 tracking-wide">
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

export default ComplianceCompass;