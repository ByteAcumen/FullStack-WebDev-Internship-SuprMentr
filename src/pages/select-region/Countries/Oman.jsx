import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Oman = () => {
  const navigate = useNavigate();
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const isInView1 = useInView(ref1, { once: true, threshold: 0.3 });
  const isInView2 = useInView(ref2, { once: true, threshold: 0.3 });
  const isInView3 = useInView(ref3, { once: true, threshold: 0.3 });

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

  return (    <div className="bg-white text-gray-900 overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-28 pb-36 overflow-hidden bg-white bg-center bg-cover" style={{ backgroundImage: '' }}>
        {/* Mobile faded image */}
        <div
          className="absolute top-0 left-0 w-full h-full block sm:hidden"
          style={{
            backgroundImage: `url('https://media.istockphoto.com/id/1084217578/photo/grand-mosue-muscat.jpg?s=612x612&w=0&k=20&c=F4FsUMWqlVJg2XHUp6xEiifdE_I3ait_sCXG6DmRIVc=')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.3
          }}
        />
        {/* Desktop background image */}
        <div
          className="absolute inset-0 hidden sm:block"
          style={{
            backgroundImage: `url('https://media.istockphoto.com/id/1084217578/photo/grand-mosue-muscat.jpg?s=612x612&w=0&k=20&c=F4FsUMWqlVJg2XHUp6xEiifdE_I3ait_sCXG6DmRIVc=')`,
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
              OMAN CYBERSECURITY SOLUTIONS
            </motion.span>            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-7xl font-extrabold mb-6 tracking-tight leading-tight"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              <span className="text-blue-600">Proven Cybersecurity Solutions to</span>
              <br />
              <span className="text-blue-600">Safeguard Your Business in Oman!</span>
            </motion.h1>
            <motion.p
              className="text-gray-700 mt-8 max-w-3xl mx-auto leading-relaxed text-lg mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.7 }}
            >
              Welcome to Codezye Cyber, your premier cybersecurity partner in Oman. We empower Omani businesses through our robust cybersecurity frameworks and comprehensive cybersecurity solutions tailored to the unique needs.
            </motion.p>
            <motion.p
              className="text-gray-700 max-w-4xl mx-auto leading-relaxed text-lg mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.7 }}
            >
              Oman's businesses are thriving business landscape and demands robust cybersecurity solutions. As your IT infrastructure becomes more complex, so do the cyber threats targeting them. At Codezye Cyber, a leading and trusted cybersecurity consulting partner in Oman, we understand the unique challenges faced by businesses in the region and provide cybersecurity solutions tailored to the unique needs of Omani businesses.
            </motion.p>            <motion.div
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
      </section>

      {/* Cybersecurity Solutions Section */}
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
              <span className="text-sm font-semibold tracking-wider text-blue-600">WHAT WE OFFER</span>
              <span className="w-2 h-2 rounded-full bg-blue-600"></span>
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-900 via-blue-600 to-blue-400 mb-4 leading-tight">
              What Cybersecurity Solutions Do We Offer in Oman?
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto text-lg leading-relaxed">
              We offer a comprehensive suite of cybersecurity solutions designed to safeguard your critical IT infrastructure and data, empowering you. Our core business objectives: Our team of experienced and certified professionals combines local expertise with a global perspective, ensuring that we deliver tailored solutions that address your specific needs and comply with relevant regulations.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Oman Data Protection Law",
              "CBO Regulation",
              "Oman National CERT Framework"
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={scaleIn(0.1 * index)}
                initial="hidden"
                animate={isInView1 ? "visible" : "hidden"}
                whileHover={{ 
                  boxShadow: "0 30px 60px -12px rgba(59, 130, 246, 0.25)",
                  y: -5
                }}
                className="bg-white p-8 rounded-3xl border-2 border-blue-500/20 text-center relative overflow-hidden shadow-xl"
              >
                <p className="text-blue-700 font-bold text-base relative z-10 leading-relaxed mt-4">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section ref={ref2} className="py-24 bg-white relative border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10 max-w-7xl">
          <motion.div 
            className="text-center mb-20"
            variants={fadeIn()}
            initial="hidden"
            animate={isInView2 ? "visible" : "hidden"}
          >
            <motion.div
              className="inline-flex items-center justify-center space-x-2 bg-blue-500/10 px-6 py-2 rounded-full mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.5 }}
            >
              <span className="w-2 h-2 rounded-full bg-blue-600"></span>
              <span className="text-sm font-semibold tracking-wider text-blue-600">WHY CHOOSE US</span>
              <span className="w-2 h-2 rounded-full bg-blue-600"></span>
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-900 via-blue-600 to-blue-400 mb-4 leading-tight">
              Why Choose Us for Your Cybersecurity Needs in Oman?
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto text-lg leading-relaxed">
              Benefit from our team of highly qualified cybersecurity professionals, backed by Codezye Cyber's global network of resources.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { 
                title: "Specialized Expertise", 
                desc: "Our team brings years of experience and industry knowledge to every project.",
                icon: "🛡️"
              },
              { 
                title: "Proven Track Record", 
                desc: "We have a history of successful cybersecurity implementations across various sectors in Oman.",
                icon: "🏆"
              },
              { 
                title: "Comprehensive Approach", 
                desc: "We provide end-to-end solutions that cover all aspects of cybersecurity.",
                icon: "🔄"
              },
              { 
                title: "Focus on Compliance", 
                desc: "Ensure adherence to Oman's cybersecurity regulations and standards.",
                icon: "📋"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeIn(0.1 * index)}
                initial="hidden"
                animate={isInView2 ? "visible" : "hidden"}
                whileHover={{ 
                  boxShadow: "0 30px 60px -12px rgba(59, 130, 246, 0.25)",
                  y: -5
                }}
                className="bg-gradient-to-br from-white via-white to-blue-50/50 p-8 rounded-3xl border-2 border-blue-500/20 text-center relative overflow-hidden shadow-xl"
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
      </section>

      {/* Benefits Section */}
      <section ref={ref3} className="py-24 bg-white relative border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10 max-w-7xl">
          <motion.h2 
            className="text-5xl lg:text-6xl font-extrabold text-center mb-8"
            variants={fadeIn()}
            initial="hidden"
            animate={isInView3 ? "visible" : "hidden"}
          >
            <span className="font-bold text-blue-600">Codezye Cyber</span>
          </motion.h2>
          <motion.p
            className="text-2xl text-center text-gray-700 mb-20 font-medium"
            variants={fadeIn(0.2)}
            initial="hidden"
            animate={isInView3 ? "visible" : "hidden"}
          >
            Benefits of Getting Compliance with Codezye Cyber
          </motion.p>
          <div className="grid md:grid-cols-4 gap-10">
            {[
              { 
                title: "Enhanced Security Posture", 
                desc: "By aligning with our cybersecurity frameworks, you strengthen your defenses and mitigate the risk of breaches.",
                icon: "🔒",
                gradient: "from-blue-600 to-blue-700"
              },
              { 
                title: "Regulatory Adherence", 
                desc: "Compliance with Oman's cybersecurity regulations not only protects your business but also ensures legal and regulatory compliance.",
                icon: "📋",
                gradient: "from-blue-400 to-blue-500"
              },
              { 
                title: "Improved Business Continuity", 
                desc: "We ensure there's minimal disruption to your operations in case of a security incident.",
                icon: "🏢",
                gradient: "from-blue-500 to-blue-600"
              },
              { 
                title: "Reduced Operational Costs", 
                desc: "Prevent cyberattacks that can lead to significant financial losses.",
                icon: "💰",
                gradient: "from-blue-400 to-blue-500"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={scaleIn(0.15 * index)}
                initial="hidden"
                animate={isInView3 ? "visible" : "hidden"}
                whileHover={{ 
                  boxShadow: "0 30px 60px -12px rgba(59, 130, 246, 0.25)",
                  y: -5
                }}
                className="bg-gradient-to-br from-white via-white to-blue-50/50 p-10 rounded-3xl border-2 border-blue-500/20 text-center relative overflow-hidden shadow-xl"
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
      </section>

      {/* Call to Action Section */}
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
            >
              <span className="text-3xl font-bold text-blue-400 mr-2 italic">"</span>
              Don't wait for a cyberattack to strike. Partner with <span className="font-bold text-blue-600 bg-blue-100 px-3 py-1 rounded-lg">Codezye Cyber</span> today and create a more secure future for your organization in Oman.
              <span className="text-3xl font-bold text-blue-400 ml-2 italic">"</span>
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
            Contact Us
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

export default Oman;