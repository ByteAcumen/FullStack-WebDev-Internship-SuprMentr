import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const UAE = () => {
  const navigate = useNavigate();
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);

  const isInView1 = useInView(ref1, { once: true, threshold: 0.3 });
  const isInView2 = useInView(ref2, { once: true, threshold: 0.3 });
  const isInView3 = useInView(ref3, { once: true, threshold: 0.3 });
  const isInView4 = useInView(ref4, { once: true, threshold: 0.3 });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeIn = (delay = 0) => ({
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, delay, ease: [0.4, 0, 0.2, 1] }
    }
  });

  const scaleIn = (delay = 0) => ({
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.6, delay, ease: "easeOut" }
    }
  });
  return (
    <div className="bg-white text-gray-900 overflow-hidden">      {/* Hero Section */}
      <section className="relative pt-28 pb-36 overflow-hidden bg-white bg-center bg-cover" style={{ backgroundImage: '' }}>
        {/* Mobile faded image */}
        <div
          className="absolute top-0 left-0 w-full h-full block sm:hidden"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.3
          }}
        />
        {/* Desktop background image */}
        <div
          className="absolute inset-0 hidden sm:block"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        {/* Desktop gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/85 via-blue-50/75 to-white/90 z-10 pointer-events-none hidden sm:block" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-20 max-w-7xl">
          <div className="text-center max-w-4xl mx-auto">
            <motion.span
              className="inline-block px-5 py-2 bg-blue-500/10 text-blue-600 rounded-full text-sm font-semibold tracking-wider mb-5"
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              UAE CYBERSECURITY SOLUTIONS
            </motion.span>            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-7xl font-extrabold mb-6 tracking-tight leading-tight"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              <span className="text-blue-600">Level Up Your Cyber Defenses.</span>
              <br />
              <span className="text-blue-600">We've Got You Covered.</span>
            </motion.h1>
            
            <motion.p
              className="text-gray-700 mt-8 max-w-3xl mx-auto leading-relaxed text-lg mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.7 }}
            >
              Your Trusted Partner for Cybersecurity Solutions in the UAE. We empower businesses with advanced cybersecurity solutions to safeguard your digital assets, prevent costly cyberattacks, and ensure business continuity.
            </motion.p>

            <motion.p
              className="text-gray-700 max-w-4xl mx-auto leading-relaxed text-lg mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.7 }}
            >              The UAE's digital landscape thrives on innovation and connection. But with opportunity comes high risks, and cyber-attacks are a constant threat. At <span className="font-bold text-blue-600">
                Codezye Cyber
              </span>, we provide comprehensive cybersecurity measures to protect your critical data, systems, and infrastructure. Stop worrying about data breaches and focus on growth!
            </motion.p>
              <motion.div
              className="flex items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.6 }}
            >
              <motion.button 
                className="px-8 py-3.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/get-started')}
              >
                Get Started
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>      {/* How We Secure Your Business Section */}
      <section ref={ref1} className="py-24 bg-white relative border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10 max-w-7xl">
          <motion.div 
            className="text-center mb-20"
            variants={fadeIn()}
            initial="hidden"
            animate={isInView1 ? "visible" : "hidden"}
          >
            <motion.div
              className="inline-flex items-center justify-center space-x-2 bg-blue-500/10 px-6 py-2 rounded-full mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.5 }}
            >
              <span className="w-2 h-2 rounded-full bg-blue-600"></span>
              <span className="text-sm font-semibold tracking-wider text-blue-600">HOW WE SECURE YOUR BUSINESS</span>
              <span className="w-2 h-2 rounded-full bg-blue-600"></span>
            </motion.div>
              <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-900 via-blue-600 to-blue-400 mb-4 leading-tight">How <span className="font-bold text-blue-600">
              Codezye Cyber
            </span> Secures Your Business in the UAE?</h2>
            
            <p className="text-gray-700 max-w-2xl mx-auto text-lg leading-relaxed">
              Our UAE-based cybersecurity experts are well-versed in the unique threats and regulations in the UAE. We leverage advanced technology and proven methodologies to create a holistic system that proactively identifies solutions to cyber threats.
            </p>
          </motion.div>          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Personal Data Protection Law",
              "Smart Dubai Data Regulation Framework",
              "Dubai Data Law",
              "UAE Information Assurance (NESA)",
              "Abu Dhabi Smart City Framework",
              "Network and Information Security (NIS) Directive",
              "Abu Dhabi Information Security Standards & Controls",
              "Abu Dhabi Regulation for Data Protection in the Emirate of Abu Dhabi",
              "Abu Dhabi Healthcare Information And Cyber Security Standard (ADHICS)"
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={scaleIn(0.1 * index)}
                initial="hidden"
                animate={isInView1 ? "visible" : "hidden"}
                whileHover={{ 
                  boxShadow: "0 30px 60px -12px rgba(59, 130, 246, 0.25)",
                  y: -5
                }}                className="bg-white p-8 rounded-3xl border-2 border-blue-500/20 text-center relative overflow-hidden shadow-xl"
              >
                <p className="text-blue-700 font-bold text-base relative z-10 leading-relaxed mt-4">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>      {/* Testimonial Section */}
      <section ref={ref2} className="py-24 bg-white relative border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10 max-w-7xl">
          <motion.div 
            className="text-center max-w-5xl mx-auto bg-gradient-to-br from-white via-white to-blue-50/50 p-12 rounded-3xl border-2 border-blue-500/20 shadow-xl relative overflow-hidden"
            variants={fadeIn()}
            initial="hidden"
            animate={isInView2 ? "visible" : "hidden"}
            whileHover={{ boxShadow: "0 30px 60px -12px rgba(59, 130, 246, 0.25)" }}
            transition={{ duration: 0.4 }}
          >
            
            <div className="flex items-center space-x-4 mb-10 justify-center">
              <motion.div 
                className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-white to-blue-500/20 border-2 border-blue-500/40 shadow-xl relative"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              >
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14,17H7L12,12L7,7H14L19,12L14,17Z" />
                </svg>
              </motion.div>
              <h3 className="text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-blue-500">Our Approach</h3>
            </div>
            
            <motion.p 
              className="text-gray-700 leading-relaxed text-xl mb-8 relative z-10"
              initial={{ opacity: 0 }}
              animate={isInView2 ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >              At <span className="font-bold text-blue-600 bg-blue-100 px-3 py-1 rounded-lg">
                Codezye Cyber
              </span>, we understand the complexities of compliance and its impact on your organization's success. Think of it as a trusty map and compass. Our comprehensive solutions ensure you're on a clear path to navigate the intricate web of compliance requirements, ensuring your organization operates with confidence and security.
            </motion.p>
            <motion.div
              className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full mx-auto mb-8"
              initial={{ scaleX: 0 }}
              animate={isInView2 ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
            <motion.p 
              className="text-gray-700 leading-relaxed text-xl relative z-10"
              initial={{ opacity: 0 }}
              animate={isInView2 ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              We understand that every organization's compliance needs are unique—that's why we offer a customized approach that goes beyond simply listing compliance certifications. We begin with a deep understanding of your specific industry and unique compliance needs.
            </motion.p>
          </motion.div>
        </div>
      </section>      {/* Why Choose Us Section */}
      <section ref={ref3} className="py-24 bg-white relative border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10 max-w-7xl">
          <motion.div 
            className="text-center mb-20"
            variants={fadeIn()}
            initial="hidden"
            animate={isInView3 ? "visible" : "hidden"}
          >
            <motion.div
              className="inline-flex items-center justify-center space-x-2 bg-blue-500/10 px-6 py-2 rounded-full mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.5 }}
            >
              <span className="w-2 h-2 rounded-full bg-blue-600"></span>
              <span className="text-sm font-semibold tracking-wider text-blue-600">WHY CHOOSE US</span>
              <span className="w-2 h-2 rounded-full bg-blue-600"></span>
            </motion.div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-900 via-blue-600 to-blue-400 mb-4 leading-tight">Why Choose <span className="font-bold">
              Codezye Cyber
            </span> for Your UAE Cybersecurity Needs?</h2>
            
            <p className="text-gray-700 max-w-2xl mx-auto text-lg leading-relaxed">
              The foundational reasons that make us the trusted cybersecurity partner for businesses across the UAE
            </p>
          </motion.div>          <div className="grid md:grid-cols-5 gap-8">
            {[
              { 
                title: "Industry Expertise", 
                desc: "Our team of seasoned cybersecurity professionals possess a deep understanding of the unique threats and regulations within the UAE.",
                icon: "🛡️"
              },
              { 
                title: "Tailored Solutions", 
                desc: "Customized cybersecurity strategies designed to meet your specific business needs and compliance requirements.",
                icon: "🎯"
              },
              { 
                title: "Advanced Technology", 
                desc: "We leverage cutting-edge tools and techniques to stay ahead of emerging cyber threats.",
                icon: "🚀"
              },
              { 
                title: "Proactive Approach", 
                desc: "We identify and mitigate risks before they become costly incidents, ensuring your peace of mind.",
                icon: "⚡"
              },
              { 
                title: "24/7 Support", 
                desc: "Our dedicated team is available around the clock to address your cybersecurity concerns.",
                icon: "🌟"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeIn(0.1 * index)}
                initial="hidden"
                animate={isInView3 ? "visible" : "hidden"}
                whileHover={{ 
                  boxShadow: "0 30px 60px -12px rgba(59, 130, 246, 0.25)",
                  y: -5
                }}                className="bg-gradient-to-br from-white via-white to-blue-50/50 p-8 rounded-3xl border-2 border-blue-500/20 text-center relative overflow-hidden shadow-xl"
              >
                <div className="flex items-center space-x-4 mb-6 justify-center">
                  <motion.div 
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-white to-blue-500/20 border-2 border-blue-500/40 shadow-xl relative"
                  >
                    <span className="text-2xl">{item.icon}</span>
                  </motion.div>
                </div>
                
                <h3 className="text-blue-700 font-bold mb-4 text-xl relative z-10">{item.title}</h3>
                <p className="text-gray-600 text-sm relative z-10 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>      {/* Benefits Section */}
      <section ref={ref4} className="py-24 bg-white relative border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10 max-w-7xl">          <motion.h2 
            className="text-5xl lg:text-6xl font-extrabold text-center mb-8"
            variants={fadeIn()}
            initial="hidden"
            animate={isInView4 ? "visible" : "hidden"}
          >
            <span className="font-bold text-blue-600">
              Codezye Cyber
            </span>
          </motion.h2>
          <motion.p
            className="text-2xl text-center text-gray-700 mb-20 font-medium"
            variants={fadeIn(0.2)}
            initial="hidden"
            animate={isInView4 ? "visible" : "hidden"}
          >
            Empowers Businesses in the UAE to:
          </motion.p>          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { 
                title: "Protect Critical Assets", 
                desc: "Safeguard sensitive information, financial data, and intellectual property with enterprise-grade security.",
                icon: "🔒",
                gradient: "from-blue-600 to-blue-700"
              },
              { 
                title: "Ensure Business Continuity", 
                desc: "Minimize downtime and disruption caused by cyber incidents with proactive monitoring.",
                icon: "🏢",
                gradient: "from-blue-500 to-blue-600"
              },
              { 
                title: "Comply with Regulations", 
                desc: "Meet industry and government cybersecurity data mandates with confidence and expertise.",
                icon: "📋",
                gradient: "from-blue-400 to-blue-500"
              },
              { 
                title: "Build Trust and Confidence", 
                desc: "Build trust with your customers by demonstrating a commitment to cybersecurity practices.",
                icon: "🤝",
                gradient: "from-blue-600 to-blue-500"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={scaleIn(0.15 * index)}
                initial="hidden"
                animate={isInView4 ? "visible" : "hidden"}
                whileHover={{ 
                  boxShadow: "0 30px 60px -12px rgba(59, 130, 246, 0.25)",
                  y: -5
                }}                className="bg-gradient-to-br from-white via-white to-blue-50/50 p-10 rounded-3xl border-2 border-blue-500/20 text-center relative overflow-hidden shadow-xl"
              >
                <div className="flex items-center space-x-4 mb-6 justify-center">
                  <motion.div 
                    className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-white to-blue-500/20 border-2 border-blue-500/40 shadow-xl relative"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  >
                    <span className="text-3xl">{item.icon}</span>
                  </motion.div>
                </div>
                
                <h3 className="text-blue-700 font-bold mb-4 text-xl relative z-10">{item.title}</h3>
                <p className="text-gray-600 text-base relative z-10 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>      {/* Call to Action Section */}
      <section className="py-24 bg-white text-center relative border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10 max-w-7xl">
          <motion.div
            className="max-w-4xl mx-auto bg-gradient-to-br from-white via-white to-blue-50/50 p-12 rounded-3xl border-2 border-blue-500/20 shadow-xl mb-12 relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            whileHover={{ 
              boxShadow: "0 30px 60px -12px rgba(59, 130, 246, 0.25)"
            }}
          >
              <motion.p 
              className="text-gray-700 text-xl lg:text-2xl font-medium leading-relaxed relative z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >              Don't wait for a cyberattack to disrupt your business in the UAE. Protect your business—partner with <span className="font-bold text-blue-600 bg-blue-100 px-3 py-1 rounded-lg">
                Codezye Cyber
              </span>, the leading cybersecurity company in the UAE.
            </motion.p>
          </motion.div>
          <motion.button 
            className="px-8 py-3.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 flex items-center mx-auto relative z-10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/get-started')}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Contact Us Today
            <motion.svg 
              className="ml-3 w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </motion.svg>
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default UAE;