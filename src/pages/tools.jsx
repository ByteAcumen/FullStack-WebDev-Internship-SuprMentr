import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import {
  FaShieldAlt,
  FaDatabase,
  FaUsers,
  FaChartLine,
  FaClipboardCheck,
  FaLock,
  FaHeadset,
  FaAngleDown,
  FaRegCheckCircle,
  FaChevronRight,
  FaChevronLeft,
  FaExternalLinkAlt,
  FaArrowRight,
  FaTachometerAlt,
  FaUserShield,
  FaLayerGroup,
  FaCloud,
  FaServer,
  FaLaptopCode,
  FaChartBar,
  FaQuestionCircle,
  FaStar
} from 'react-icons/fa';
import socLogo from '../assets/SOC Logo.jpeg';
import isoLogo from '../assets/ISO LOGO.png';
import hipaaLogo from '../assets/HIPAA.jpeg';
import gdprLogo from '../assets/GDPR Logo.png';
import nistLogo from '../assets/NIST LOGO.png';
import heroImage from '../assets/heroimage.jpg';
import platformOverviewImg from '../assets/Platform Overview.jpg';
import riskMonitoringImg from '../assets/Risk Monitor.jpg';
import workflowImg from '../assets/Collaborative workflows.jpg';
import integrationDiagramImg from '../assets/Seamless Integrations.jpg';
import dashboardsImg from '../assets/Dashboards.jpg';
import expertSupportImg from '../assets/Support.jpg';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Tools = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  
  // Testimonials carousel state
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const navigate = useNavigate();

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

  // Refs for each section to track visibility
  const heroRef = useRef(null);
  const clientsRef = useRef(null);
  const platformRef = useRef(null);
  const monitoringRef = useRef(null);
  const workflowRef = useRef(null);
  const integrationsRef = useRef(null);
  const dashboardsRef = useRef(null);
  const supportRef = useRef(null);
  const complianceRef = useRef(null);
  const howItWorksRef = useRef(null);
  const lifecycleRef = useRef(null);
  const testimonialRef = useRef(null);
  const faqRef = useRef(null);

  // Track visibility for each section using Framer Motion's useInView
  const isHeroInView = useInView(heroRef, { once: true, threshold: 0.3 });
  const isClientsInView = useInView(clientsRef, { once: true, threshold: 0.2 });
  const isPlatformInView = useInView(platformRef, { once: true, threshold: 0.2 });
  const isMonitoringInView = useInView(monitoringRef, { once: true, threshold: 0.2 });
  const isWorkflowInView = useInView(workflowRef, { once: true, threshold: 0.2 });
  const isIntegrationsInView = useInView(integrationsRef, { once: true, threshold: 0.2 });
  const isDashboardsInView = useInView(dashboardsRef, { once: true, threshold: 0.2 });
  const isSupportInView = useInView(supportRef, { once: true, threshold: 0.2 });
  const isComplianceInView = useInView(complianceRef, { once: true, threshold: 0.2 });
  const isHowItWorksInView = useInView(howItWorksRef, { once: true, threshold: 0.2 });
  const isLifecycleInView = useInView(lifecycleRef, { once: true, threshold: 0.2 });
  const isTestimonialInView = useInView(testimonialRef, { once: true, threshold: 0.2 });
  const isFaqInView = useInView(faqRef, { once: true, threshold: 0.1 });

  // Animation variants
  const fadeIn = (delay = 0) => ({
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay, ease: 'easeOut' }
    }
  });

  const fadeInRight = (delay = 0) => ({
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, delay, ease: 'easeOut' }
    }
  });

  const fadeInLeft = (delay = 0) => ({
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, delay, ease: 'easeOut' }
    }
  });

  const scaleIn = (delay = 0) => ({
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay, ease: 'easeOut' }
    }
  });

  const bounceIn = (delay = 0) => ({
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, delay, ease: 'easeOut', type: 'spring', bounce: 0.4 }
    }
  });

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const platformCardHover = {
    hover: {
      y: -8,
      scale: 1.03,
      boxShadow: '0 15px 30px rgba(59, 130, 246, 0.3)',
      transition: { duration: 0.3, ease: 'easeOut' }
    }
  };

  const iconBounce = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: { type: 'spring', stiffness: 300, damping: 15 }
    },
    hover: {
      rotate: 15,
      scale: 1.2,
      transition: { duration: 0.3 }
    }
  };

  const iconPulse = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' }
    },
    hover: {
      scale: 1.1,
      transition: { duration: 0.3, repeat: 2, ease: 'easeInOut' }
    }
  };

  const iconShake = {
    hover: {
      rotate: [0, 15, -15, 0],
      transition: { duration: 0.4, ease: 'easeInOut' }
    }
  };

  // Data for FAQ section
  const faqItems = [
    {
      question: 'What are the various compliance frameworks supported by Codezye Cyber?',
      answer:
        'Right out of the box - we support SOC 2, ISO 27001, GDPR, ISO 27701, CCPA, HIPAA, PCI DSS, SOC 1, FedRAMP, and CMMC. That being said, our cyber asset discovery and risk identification goes very deep and lets you create any mitigation control, even outside of the standard frameworks.'
    },
    {
      question: "Are Codezye Cyber's products limited to organizations from specific countries?",
      answer:
        "No, Codezye Cyber's cybersecurity solutions are available globally. We serve organizations across North America, Europe, Asia-Pacific, and other regions with our comprehensive compliance and security tools."
    },
    {
      question: 'How does Codezye Cyber help build a robust infosec program?',
      answer:
        'Codezye Cyber helps build robust infosec programs through comprehensive risk assessment, automated security controls monitoring, continuous compliance verification, and an intuitive dashboard that provides real-time visibility into your security posture.'
    },
    {
      question: 'What kind of companies is Codezye Cyber most suited for?',
      answer:
        'Codezye Cyber is ideally suited for mid-market companies and growing enterprises that need to establish or enhance their security compliance programs. Our platform works especially well for SaaS companies, fintech, healthcare organizations, and any business that handles sensitive data.'
    },
    {
      question: 'Are compliance automation tools like Vanta, Secureframe and Drata still needed along with Codezye Cyber?',
      answer:
        'No, Codezye Cyber provides a complete alternative to these tools with enhanced features. Our platform combines compliance automation, continuous monitoring, risk assessment, and security workflows in one integrated solution, eliminating the need for multiple separate tools.'
    }
  ];

  // Data for platform features
  const platformFeatures = [
    {
      icon: <FaLock />,
      title: 'Compliance Automation',
      description: 'Automate evidence collection and controls monitoring across multiple frameworks'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Risk Management',
      description: 'Identify, assess and mitigate security risks with customizable workflows'
    },
    {
      icon: <FaUsers />,
      title: 'Vendor Security',
      description: 'Streamline vendor assessments and continuously monitor third-party risks'
    },
    {
      icon: <FaDatabase />,
      title: 'Asset Management',
      description: 'Discover and monitor all digital assets across your infrastructure'
    },
    {
      icon: <FaChartLine />,
      title: 'Security Metrics',
      description: 'Track security posture with customizable dashboards and preliminary reports'
    },
    {
      icon: <FaClipboardCheck />,
      title: 'Audit Readiness',
      description: 'Prepare for audits with evidence collection and gap analysis tools'
    }
  ];

  // Data for integrations
  const integrationLogos = [
    { name: 'AWS', logoClass: 'aws', icon: <FaCloud /> },
    { name: 'GitHub', logoClass: 'github', icon: <FaLaptopCode /> },
    { name: 'Google Cloud', logoClass: 'gcloud', icon: <FaCloud /> },
    { name: 'Azure', logoClass: 'azure', icon: <FaServer /> },
    { name: 'Slack', logoClass: 'slack', icon: <FaUsers /> },
    { name: 'Okta', logoClass: 'okta', icon: <FaUserShield /> },
    { name: 'Jira', logoClass: 'jira', icon: <FaClipboardCheck /> },
    { name: 'Datadog', logoClass: 'datadog', icon: <FaChartBar /> }
  ];
  // Data for compliance frameworks
  const complianceFrameworks = [
    { name: 'SOC 2', img: socLogo },
    { name: 'ISO 27001', img: isoLogo },
    { name: 'HIPAA', img: hipaaLogo },
    { name: 'GDPR', img: gdprLogo },
    { name: 'PCI DSS', img: isoLogo },
    { name: 'NIST CSF', img: nistLogo },
    { name: 'SOC 1', img: socLogo }
  ];

  // Testimonials data for carousel
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
      company: "SuprMentr Technologies",
      position: "HR Team"
    },
    {
      quote: "Ikontel is proud to partner with Codezye Cyber for their exceptional Virtual CISO services. Their team has provided us with strategic cybersecurity leadership, expert guidance, and continuous support tailored to our unique needs. Their proactive approach and deep industry knowledge have significantly strengthened our security posture and helped us stay ahead of emerging threats. Codezye Cyber's professionalism and commitment have been invaluable in navigating complex security challenges, giving us the confidence to focus on our core business. We highly recommend their Virtual CISO services to any organization seeking trusted and effective cybersecurity leadership. ",
      company: "— The Ikontel Team"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Cybersecurity Tools – Codezye Cyber</title>
        <meta
          name="description"
          content="Discover the cybersecurity tools and resources provided by Codezye Cyber to help protect your business."
        />
      </Helmet>
      <div className="min-h-screen bg-gray-50 text-gray-900 font-['Inter', 'sans-serif'] antialiased">
        {/* Hero Section */}
        <section ref={heroRef} className="relative py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
            <motion.div
              initial="hidden"
              animate={isHeroInView ? 'visible' : 'hidden'}
              variants={staggerContainer}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <motion.div variants={fadeInRight()}>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight tracking-tight text-white">
                  Stay Aware, Stay Ahead,<br />Stay Compliant.
                </h1>
                <p className="text-lg text-gray-200 mb-8 max-w-lg leading-relaxed">
                  Codezye Cyber is an optimal GRC compliance automation and monitoring tool that helps your project check all the first-time GRC program, effortlessly manage multiple compliance frameworks, monitor your cloud infrastructures real-time and reduce your system audit costs.
                </p>
                <div className="flex gap-4">
                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold text-base rounded-full shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2"
                    onClick={() => navigate('/get-started')}
                    aria-label="Get started with Codezye Cyber"
                  >
                    Get Started <FaArrowRight className="text-sm" />
                  </motion.button>
                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 bg-transparent border-2 border-gray-200 text-gray-200 font-semibold text-base rounded-full hover:bg-gray-200 hover:text-gray-900 hover:shadow-lg transition-all duration-300 flex items-center gap-2"
                    aria-label="Learn more about Codezye Cyber"
                  >
                    Learn More <FaExternalLinkAlt className="text-sm" />
                  </motion.button>
                </div>
                <div className="w-20 h-0.5 bg-blue-400 mt-8 rounded-full"></div>
              </motion.div>

              <motion.div variants={fadeInLeft()} className="relative group">
                <img
                  src={heroImage}
                  alt="Illustration of compliance automation dashboard"
                  className="rounded-2xl shadow-lg w-full max-w-5xl xl:max-w-6xl border border-blue-100 transition-all duration-300 group-hover:scale-105 group-hover:brightness-110 -mt-8 md:-mt-16"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-blue-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            </motion.div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <motion.div
              animate={{
                y: [0, -40, 0],
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-4 left-4 w-56 h-56 bg-blue-500 rounded-full opacity-30 blur-3xl"
            ></motion.div>
            <motion.div
              animate={{
                y: [0, 40, 0],
                scale: [1, 1.25, 1],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute bottom-4 right-4 w-72 h-72 bg-blue-400 rounded-full opacity-20 blur-3xl"
            ></motion.div>
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={`hero-particle-${i}`}
                animate={{
                  y: [0, -100, 0],
                  opacity: [0, 0.5, 0],
                  scale: [0.8, 1, 0.8]
                }}
                transition={{
                  duration: 5 + i * 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: i * 0.5
                }}
                className="absolute w-2 h-2 bg-blue-300 rounded-full"
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${10 + i * 10}%`
                }}
              />
            ))}
          </div>
        </section>

        {/* Platform Features Section */}
        <section ref={platformRef} className="relative py-20 bg-white overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
            <motion.div
              initial="hidden"
              animate={isPlatformInView ? 'visible' : 'hidden'}
              variants={staggerContainer}
              className="text-center mb-12"
            >
              <motion.h2 variants={fadeIn()} className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">
                All-in-One GRC Platform
              </motion.h2>
              <motion.p variants={fadeIn(0.2)} className="text-lg text-gray-600 max-w-xl mx-auto leading-relaxed">
                Streamline your governance, risk, and compliance processes with our integrated platform.
              </motion.p>
              <div className="w-16 h-0.5 bg-blue-500 mx-auto mt-4 rounded-full"></div>
            </motion.div>

            <div className="grid grid-cols-12 gap-6 items-center">
              <motion.div
                initial="hidden"
                animate={isPlatformInView ? 'visible' : 'hidden'}
                variants={staggerContainer}
                className="col-span-12 md:col-span-4 mb-8 md:mb-0 flex items-center justify-center"
              >
                <motion.div variants={fadeInRight(0.2)} className="max-w-sm relative group w-full">
                  <img
                    src={platformOverviewImg}
                    alt="Platform overview dashboard screenshot"
                    className="rounded-2xl shadow-lg border border-blue-100 w-full h-[36rem] object-cover transition-all duration-300 group-hover:scale-105 group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-blue-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
              </motion.div>

              <motion.div
                initial="hidden"
                animate={isPlatformInView ? 'visible' : 'hidden'}
                variants={staggerContainer}
                className="col-span-12 md:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {platformFeatures.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    variants={scaleIn(0.2 * index)}
                    whileHover={platformCardHover.hover}
                    className="relative bg-white p-6 rounded-2xl border border-blue-50 shadow-md transition-all duration-300 overflow-hidden group"
                  >
                    <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-blue-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                    <motion.div
                      variants={iconBounce}
                      whileHover="hover"
                      className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4 text-xl"
                    >
                      {feature.icon}
                    </motion.div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 relative">
                      {feature.title}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                    </h3>
                    <p className="text-base text-gray-600 leading-relaxed">{feature.description}</p>
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.1, 0.2, 0.1]
              }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-16 left-8 w-48 h-48 bg-blue-200 rounded-full opacity-10 blur-2xl"
            />
            <motion.div
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.1, 0.2, 0.1]
              }}
              transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute bottom-16 right-8 w-60 h-60 bg-blue-300 rounded-full opacity-10 blur-2xl"
            />
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={`platform-particle-${i}`}
                animate={{
                  y: [0, -80, 0],
                  opacity: [0, 0.4, 0],
                  scale: [0.7, 1, 0.7]
                }}
                transition={{
                  duration: 4 + i * 1.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: i * 0.3
                }}
                className="absolute w-2 h-2 bg-blue-200 rounded-full"
                style={{
                  left: `${30 + i * 10}%`,
                  top: `${20 + i * 15}%`
                }}
              />
            ))}
          </div>
        </section>

        {/* Real-time Risk Monitoring Section */}
        <section ref={monitoringRef} className="relative py-20 bg-gradient-to-b from-white to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
            <motion.div
              initial="hidden"
              animate={isMonitoringInView ? 'visible' : 'hidden'}
              variants={staggerContainer}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <motion.div variants={fadeInRight()} className="relative group">
                <img
                  src={riskMonitoringImg}
                  alt="Real-time risk monitoring dashboard screenshot"
                  className="rounded-2xl shadow-lg w-full border border-blue-100 transition-all duration-300 group-hover:scale-105 group-hover:brightness-110"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-blue-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>

              <motion.div variants={fadeInLeft()}>
                <h2 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">Real-Time Risk Monitoring</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Monitor critical assets across your cloud environment with comprehensive risk visibility. Get alerted when issues arise, prioritize remediation, and stay compliant effortlessly.
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    'Continuous asset discovery and risk assessment',
                    'Automated alerts for compliance violations',
                    'Detailed risk scoring and prioritization',
                    'Historical tracking for audit preparation'
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      whileHover={{ x: 5, color: '#2563eb' }}
                      transition={{ delay: 0.3 + index * 0.1, duration: 0.3 }}
                      className="flex items-center text-gray-600 text-base"
                    >
                      <span className="w-8 h-8 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mr-3">
                        <FaRegCheckCircle className="text-lg" />
                      </span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold text-base rounded-full shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2"
                  aria-label="Explore real-time risk monitoring features"
                >
                  Explore Features <FaChevronRight className="text-sm" />
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div className="absolute top-12 left-1/3 w-32 h-32 bg-blue-100 rounded-full opacity-15 blur-xl"></div>
            <div className="absolute bottom-12 right-1/3 w-40 h-40 bg-blue-50 rounded-full opacity-15 blur-xl"></div>
          </div>
        </section>

        {/* Collaborative Workflows Section */}
        <section ref={workflowRef} className="relative py-20 bg-gradient-to-r from-white to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
            <motion.div
              initial="hidden"
              animate={isWorkflowInView ? 'visible' : 'hidden'}
              variants={staggerContainer}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <motion.div variants={fadeInRight()}>
                <h2 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">Collaborative Workflows</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Simplify and streamline security tasks. Automate control assignments, track progress, and ensure timely completion with customizable workflows built for security teams.
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    'Assign and track security responsibilities',
                    'Automate reminders and follow-ups',
                    'Centralize communication and evidence collection',
                    'Customize workflows to match your organization'
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      whileHover={{ x: 5, color: '#2563eb' }}
                      transition={{ delay: 0.3 + index * 0.1, duration: 0.3 }}
                      className="flex items-center text-gray-600 text-base"
                    >
                      <span className="w-8 h-8 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mr-3">
                        <FaRegCheckCircle className="text-lg" />
                      </span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold text-base rounded-full shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2"
                  aria-label="Learn more about collaborative workflows"
                >
                  Learn More <FaChevronRight className="text-sm" />
                </motion.button>
              </motion.div>

              <motion.div variants={fadeInLeft()} className="relative group">
                <img
                  src={workflowImg}
                  alt="Collaborative workflows interface screenshot"
                  className="rounded-2xl shadow-lg w-full border border-blue-100 transition-all duration-300 group-hover:scale-105 group-hover:brightness-110"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-blue-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            </motion.div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <motion.div
              animate={{
                rotate: [0, 360],
                opacity: [0.1, 0.2, 0.1]
              }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute top-1/4 left-1/4 w-16 h-16 border-2 border-blue-200 opacity-10"
              style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }}
            />
            <div className="absolute bottom-8 right-1/4 w-36 h-36 bg-blue-100 rounded-full opacity-10 blur-xl"></div>
          </div>
        </section>

        {/* Integrations Section */}
        <section ref={integrationsRef} className="relative py-20 bg-gradient-to-b from-white to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
            <motion.div
              initial="hidden"
              animate={isIntegrationsInView ? 'visible' : 'hidden'}
              variants={staggerContainer}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <motion.div variants={fadeInRight()}>
                <h2 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">Seamless Integrations</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Connects with 100+ integrations across infrastructure, cloud, and collaboration apps to automate compliance evidence collection and monitoring.
                </p>

                <motion.div variants={staggerContainer} className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                  {integrationLogos.slice(0, 8).map((integration, index) => (
                    <motion.div
                      key={integration.name}
                      variants={bounceIn(0.1 * index)}
                      whileHover={{
                        y: -6,
                        scale: 1.05,
                        boxShadow: '0 10px 25px rgba(59, 130, 246, 0.2)'
                      }}
                      className="relative bg-white rounded-2xl border border-blue-50 shadow-md flex flex-col items-center justify-center p-4 aspect-square transition-all duration-300 group overflow-hidden"
                    >
                      <div
                        className="absolute inset-0 border-2 border-transparent rounded-2xl group-hover:border-blue-300 transition-all duration-500"
                        style={{ borderImage: 'linear-gradient(to right, #3b82f6, #60a5fa) 1' }}
                      ></div>
                      <motion.div variants={iconPulse} whileHover="hover" className="text-3xl text-blue-600 mb-3">
                        {integration.icon}
                      </motion.div>
                      <div className="text-sm text-gray-800 font-medium text-center relative">
                        {integration.name}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              <motion.div variants={fadeInLeft()} className="relative group">
                <img
                  src={integrationDiagramImg}
                  alt="Diagram illustrating integrations with various platforms"
                  className="rounded-2xl shadow-lg w-full border border-blue-100 transition-all duration-300 group-hover:scale-105 group-hover:brightness-110"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-blue-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            </motion.div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <motion.div
              animate={{
                rotate: [0, 360],
                opacity: [0.1, 0.2, 0.1]
              }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              className="absolute top-1/3 left-1/5 w-12 h-12 border-2 border-blue-200 opacity-10"
              style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
            />
            <motion.div
              animate={{
                rotate: [360, 0],
                opacity: [0.1, 0.2, 0.1]
              }}
              transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
              className="absolute bottom-1/3 right-1/5 w-16 h-16 border-2 border-blue-200 opacity-10"
              style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }}
            />
            <div className="absolute top-8 left-0 w-72 h-72 bg-blue-200 rounded-full opacity-10 blur-2xl"></div>
          </div>
        </section>

        {/* Intuitive Dashboards Section */}
        <section ref={dashboardsRef} className="relative py-20 bg-gradient-to-r from-white to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
            <motion.div
              initial="hidden"
              animate={isDashboardsInView ? 'visible' : 'hidden'}
              variants={staggerContainer}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <motion.div variants={fadeInRight()} className="relative group">
                <img
                  src={dashboardsImg}
                  alt="Intuitive dashboards interface screenshot"
                  className="rounded-2xl shadow-lg w-full border border-blue-100 transition-all duration-300 group-hover:scale-105 group-hover:brightness-110"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-blue-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>

              <motion.div variants={fadeInLeft()}>
                <h2 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">Intuitive Dashboards</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Get a complete view of your security posture at a glance. Our dashboards provide actionable insights with clear metrics and visualizations for effective decision-making.
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    'Customize views based on roles and responsibilities',
                    'Monitor compliance status across multiple frameworks',
                    'Track remediation progress in real-time',
                    'Generate reports for stakeholders and auditors'
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      whileHover={{ x: 5, color: '#2563eb' }}
                      transition={{ delay: 0.3 + index * 0.1, duration: 0.3 }}
                      className="flex items-center text-gray-600 text-base"
                    >
                      <span className="w-8 h-8 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mr-3">
                        <FaRegCheckCircle className="text-lg" />
                      </span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold text-base rounded-full shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2"
                  aria-label="View intuitive dashboards"
                >
                  See Dashboards <FaChevronRight className="text-sm" />
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <motion.div
              animate={{
                rotate: [0, 360],
                opacity: [0.1, 0.2, 0.1]
              }}
              transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
              className="absolute top-1/4 left-1/3 w-14 h-14 border-2 border-blue-200 opacity-10"
              style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
            />
            <div className="absolute top-12 right-1/4 w-32 h-32 bg-blue-100 rounded-full opacity-10 blur-xl"></div>
          </div>
        </section>

        {/* Support Section */}
        <section ref={supportRef} className="relative py-20 bg-gradient-to-b from-white to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
            <motion.div
              initial="hidden"
              animate={isSupportInView ? 'visible' : 'hidden'}
              variants={staggerContainer}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <motion.div variants={fadeInRight()}>
                <h2 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">Top-Notch Support</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Never navigate compliance alone. Our dedicated team of security and compliance experts provide personalized guidance every step of the way.
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    'Dedicated compliance specialists for your team',
                    'Regular check-ins and progress reviews',
                    'Audit preparation and support',
                    '24/7 technical assistance'
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      whileHover={{ x: 5, color: '#2563eb' }}
                      transition={{ delay: 0.3 + index * 0.1, duration: 0.3 }}
                      className="flex items-center text-gray-600 text-base"
                    >
                      <span className="w-8 h-8 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mr-3">
                        <FaRegCheckCircle className="text-lg" />
                      </span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold text-base rounded-full shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2"
                  onClick={() => navigate('/get-started')}
                  aria-label="Contact Codezye Cyber support"
                >
                  Contact Support <FaChevronRight className="text-sm" />
                </motion.button>
              </motion.div>

              <motion.div variants={fadeInLeft()} className="relative group">
                <img
                  src={expertSupportImg}
                  alt="Expert support team assisting with compliance"
                  className="rounded-2xl shadow-lg w-full border border-blue-100 transition-all duration-300 group-hover:scale-105 group-hover:brightness-110"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-blue-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            </motion.div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <motion.div
              animate={{
                rotate: [360, 0],
                opacity: [0.1, 0.2, 0.1]
              }}
              transition={{ duration: 17, repeat: Infinity, ease: 'linear' }}
              className="absolute top-1/3 right-1/4 w-12 h-12 border-2 border-blue-200 opacity-10"
              style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }}
            />
            <div className="absolute bottom-12 left-1/4 w-40 h-40 bg-blue-50 rounded-full opacity-15 blur-xl"></div>
          </div>
        </section>

        {/* Compliance Frameworks Section */}
        <section ref={complianceRef} className="relative py-20 bg-gradient-to-r from-white to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
            <motion.div
              initial="hidden"
              animate={isComplianceInView ? 'visible' : 'hidden'}
              variants={staggerContainer}
              className="text-center mb-12"
            >
              <motion.h2 variants={fadeIn()} className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">
                Stay Compliant with Multiple Frameworks
              </motion.h2>
              <motion.p variants={fadeIn(0.2)} className="text-lg text-gray-600 max-w-xl mx-auto leading-relaxed">
                Achieve compliance across various industry standards with ease.
              </motion.p>
              <div className="w-16 h-0.5 bg-blue-500 mx-auto mt-4 rounded-full"></div>
            </motion.div>

            <motion.div
              initial="hidden"
              animate={isComplianceInView ? 'visible' : 'hidden'}
              variants={staggerContainer}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6"
            >
              {complianceFrameworks.map((framework, index) => (
                <motion.div
                  key={framework.name}
                  variants={scaleIn(0.1 * index)}
                  whileHover={{
                    y: -6,
                    scale: 1.05,
                    boxShadow: '0 10px 25px rgba(59, 130, 246, 0.2)'
                  }}
                  className="relative flex flex-col items-center bg-white p-4 rounded-2xl border border-blue-50 shadow-md transition-all duration-300 group overflow-hidden"
                >
                  <div
                    className="absolute inset-0 border-2 border-transparent rounded-2xl group-hover:border-blue-300 transition-all duration-500"
                    style={{ borderImage: 'linear-gradient(to right, #3b82f6, #60a5fa) 1' }}
                  ></div>
                  <img
                    src={framework.img}
                    alt={`${framework.name} logo`}
                    className="w-12 h-12 object-contain mb-3 rounded"
                  />
                  <span className="text-base text-gray-800 font-medium relative">
                    {framework.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </motion.div>
              ))}
            </motion.div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.1, 0.2, 0.1]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-0 right-0 w-60 h-60 bg-blue-200 rounded-full opacity-10 blur-2xl"
            />
            <div className="absolute bottom-12 left-1/4 w-36 h-36 bg-blue-100 rounded-full opacity-10 blur-xl"></div>
          </div>
        </section>

        {/* How It Works Section */}
        <section ref={howItWorksRef} className="relative py-20 bg-gradient-to-br from-blue-800 to-blue-800 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
            <motion.div
              initial="hidden"
              animate={isHowItWorksInView ? 'visible' : 'hidden'}
              variants={staggerContainer}
              className="text-center mb-12"
            >
              <motion.h2 variants={fadeIn()} className="text-3xl text-white font-bold mb-4 tracking-tight">
                How It Works
              </motion.h2>
              <motion.p variants={fadeIn(0.2)} className="text-lg text-gray-200 max-w-xl mx-auto leading-relaxed">
                Discover the simple steps to achieve compliance and secure your infrastructure.
              </motion.p>
              <div className="w-16 h-0.5 bg-blue-400 mx-auto mt-4 rounded-full"></div>
            </motion.div>

            <motion.div
              initial="hidden"
              animate={isHowItWorksInView ? 'visible' : 'hidden'}
              variants={staggerContainer}
              className="grid md:grid-cols-3 gap-6"
            >
              {[
                {
                  icon: <FaLayerGroup />,
                  title: 'Complete Visibility into Your Attack Surface',
                  description: 'Map resources and monitor across your entire infrastructure in real-time'
                },
                {
                  icon: <FaTachometerAlt />,
                  title: 'Implement Continuous Control Monitoring',
                  description: 'Automate evidence collection and verification for continuous compliance'
                },
                {
                  icon: <FaUserShield />,
                  title: 'Maintain Compliance with a Single Dashboard',
                  description: 'Track progress, manage tasks, and prepare for audits from one central location'
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn(0.2 * index)}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.2)'
                  }}
                  className="relative text-center bg-gray-800/30 p-6 rounded-2xl border border-blue-700/30 backdrop-blur-md transition-all duration-300 group"
                >
                  <div
                    className="absolute inset-0 border-2 border-transparent rounded-2xl group-hover:border-blue-400 transition-all duration-500"
                    style={{ borderImage: 'linear-gradient(to right, #3b82f6, #60a5fa) 1' }}
                  ></div>
                  <motion.div
                    variants={bounceIn()}
                    whileHover={iconShake}
                    className="w-12 h-12 mx-auto bg-blue-500 text-white rounded-full flex items-center justify-center text-xl mb-4"
                  >
                    {step.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold text-white mb-3 relative">
                    {step.title}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-300 transition-all duration-300 group-hover:w-full"></span>
                  </h3>
                  <p className="text-base text-gray-200">{step.description}</p>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-blue-800/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
              ))}
            </motion.div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-8 left-8 w-48 h-48 bg-blue-500 rounded-full opacity-20 blur-2xl"
            />
            <motion.div
              animate={{
                scale: [1, 1.25, 1],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute bottom-8 right-8 w-60 h-60 bg-blue-400 rounded-full opacity-20 blur-2xl"
            />
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={`how-it-works-particle-${i}`}
                animate={{
                  y: [0, -120, 0],
                  opacity: [0, 0.5, 0],
                  scale: [0.8, 1.2, 0.8]
                }}
                transition={{
                  duration: 6 + i * 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: i * 0.7
                }}
                className="absolute w-2 h-2 bg-blue-300 rounded-full"
                style={{
                  left: `${15 + i * 20}%`,
                  top: `${5 + i * 15}%`
                }}
              />
            ))}
          </div>
        </section>

        {/* Lifecycle Diagram */}
        <section ref={lifecycleRef} className="relative py-16 bg-gradient-to-br from-blue-800 to-blue-800 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
            <motion.div
              initial="hidden"
              animate={isLifecycleInView ? 'visible' : 'hidden'}
              variants={fadeIn()}
              className="text-center mb-8"
            >
              <h4 className="text-2xl font-semibold text-gray-200 mb-3 tracking-wide">Our Key Frameworks</h4>
              <div className="w-12 h-0.5 bg-blue-400 mx-auto rounded-full"></div>
            </motion.div>

            <motion.div
              initial="hidden"
              animate={isLifecycleInView ? 'visible' : 'hidden'}
              variants={fadeIn(0.2)}
              className="flex justify-center relative group"
            >
              <img
                src="https://placehold.co/900x300/111827/3b82f6?text=Security+Framework+Lifecycle"
                alt="Diagram of security framework lifecycle"
                className="max-w-full h-auto rounded-2xl shadow-lg border border-blue-700/50 transition-all duration-300 group-hover:scale-102 group-hover:brightness-110"
              />
            </motion.div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <motion.div
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.2, 0.3, 0.2]
              }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-4 left-1/4 w-40 h-40 bg-blue-500 rounded-full opacity-20 blur-2xl"
            />
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.3, 0.2]
              }}
              transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute bottom-4 right-1/4 w-48 h-48 bg-blue-400 rounded-full opacity-20 blur-2xl"
            />
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={`lifecycle-particle-${i}`}
                animate={{
                  y: [0, -80, 0],
                  opacity: [0, 0.4, 0],
                  scale: [0.7, 1.1, 0.7]
                }}
                transition={{
                  duration: 5 + i * 1.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: i * 0.5
                }}
                className="absolute w-2 h-2 bg-blue-300 rounded-full"
                style={{
                  left: `${25 + i * 15}%`,
                  top: `${15 + i * 10}%`
                }}
              />
            ))}
          </div>
        </section>

        {/* Testimonial Section */}
        <section ref={testimonialRef} className="relative py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/40">
          <div className="container mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
            {/* Testimonials Carousel */}
            <div className="relative max-w-5xl mx-auto">
              {/* Navigation Buttons */}
              <div className="absolute top-1/2 -translate-y-1/2 left-0 z-20">
                <motion.button
                  onClick={prevTestimonial}
                  className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm border border-blue-200/50 shadow-lg hover:shadow-xl flex items-center justify-center text-blue-600 hover:bg-blue-50 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaChevronLeft className="w-4 h-4" />
                </motion.button>
              </div>
              
              <div className="absolute top-1/2 -translate-y-1/2 right-0 z-20">
                <motion.button
                  onClick={nextTestimonial}
                  className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm border border-blue-200/50 shadow-lg hover:shadow-xl flex items-center justify-center text-blue-600 hover:bg-blue-50 transition-all duration-300"
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
                      <div className="bg-gradient-to-br from-white to-blue-50/50 rounded-3xl border-2 border-blue-200/30 shadow-2xl shadow-blue-500/10 overflow-hidden relative">
                        {/* Top Gradient Border */}
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-500"></div>
                        
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-5">
                          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 rounded-full -translate-y-16 translate-x-16"></div>
                          <div className="absolute bottom-0 left-0 w-24 h-24 bg-indigo-500 rounded-full translate-y-12 -translate-x-12"></div>
                        </div>
                        
                        <div className="relative z-10 p-8 lg:p-12">
                          {/* Star Rating */}
                          <div className="flex space-x-2 mb-8">
                            {[...Array(5)].map((_, i) => (
                              <motion.div
                                key={i}
                                initial={{ scale: 0, rotate: -180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ 
                                  delay: i * 0.1,
                                  type: "spring",
                                  stiffness: 300
                                }}
                              >
                                <FaStar className="text-yellow-400 w-6 h-6" />
                              </motion.div>
                            ))}
                          </div>
                          
                          {/* Testimonial Text */}
                          <motion.p 
                            className="text-gray-700 text-xl lg:text-2xl leading-relaxed mb-8 italic font-light"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                          >
                            {testimonial.quote}
                          </motion.p>
                          
                          {/* Author Information */}
                          <div>
                            <h4 className="font-bold text-blue-900 text-lg mb-1">
                              {testimonial.position || ''}
                            </h4>
                            <p className="text-blue-600 font-semibold text-base">
                              {testimonial.company || ''}
                            </p>
                          </div>
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
                        ? 'w-12 h-3 bg-blue-500' 
                        : 'w-3 h-3 bg-blue-500/30 hover:bg-blue-500/50'
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {index === currentTestimonial && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500"
                        layoutId="activeDot"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>

          {/* Background decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div className="absolute top-8 left-1/4 w-36 h-36 bg-blue-100 rounded-full opacity-10 blur-xl"></div>
            <div className="absolute bottom-8 right-1/4 w-40 h-40 bg-blue-50 rounded-full opacity-10 blur-xl"></div>
          </div>
        </section>

        {/* FAQ Section */}
        <section ref={faqRef} className="relative py-20 bg-gradient-to-b from-white to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-10 relative z-10">          <motion.div
              initial="hidden"
              animate={isFaqInView ? 'visible' : 'hidden'}
              variants={staggerContainer}
              className="max-w-3xl mx-auto mb-12 text-center"
            >
              <motion.h2 variants={fadeIn()} className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">
                Frequently Asked Questions
              </motion.h2>
              <motion.p variants={fadeIn(0.2)} className="text-lg text-gray-600 leading-relaxed">
                Find answers to common questions about Codezye Cyber's platform.
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              animate={isFaqInView ? 'visible' : 'hidden'}
              variants={staggerContainer}
              className="max-w-3xl mx-auto space-y-4"
            >            {faqItems.map((faq, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn(0.1 * index)}
                  className="relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                    className="flex justify-between items-center w-full p-6 text-left bg-white hover:bg-blue-50/50 transition-all duration-300 focus:outline-none rounded-xl"
                    aria-expanded={openFaqIndex === index}
                    aria-label={`Toggle answer for ${faq.question}`}
                  >
                    <div className="flex items-center">
                      <FaQuestionCircle className="text-blue-600 mr-3 text-lg flex-shrink-0" />
                      <span className="text-lg font-semibold text-gray-800 leading-tight">
                        {faq.question}
                      </span>
                    </div>
                    <motion.span
                      animate={{ rotate: openFaqIndex === index ? 180 : 0, scale: openFaqIndex === index ? 1.1 : 1 }}
                      transition={{ duration: 0.3, type: 'spring', stiffness: 200 }}
                      className="text-blue-600 text-xl ml-4 flex-shrink-0"
                    >
                      <FaAngleDown />
                    </motion.span>
                  </button>
                  <AnimatePresence>
                    {openFaqIndex === index && (
                      <motion.div
                        key={`faq-answer-${index}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 text-gray-600 text-base leading-relaxed bg-blue-50/30">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div className="absolute top-12 left-1/3 w-32 h-32 bg-blue-100 rounded-full opacity-10 blur-xl"></div>
            <div className="absolute bottom-12 right-1/3 w-36 h-36 bg-blue-50 rounded-full opacity-10 blur-xl"></div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Tools;