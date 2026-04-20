import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const SouthAmerica = () => {
  const navigate = useNavigate();
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);

  const isInView1 = useInView(ref1, { once: true, threshold: 0.3 });
  const isInView2 = useInView(ref2, { once: true, threshold: 0.3 });
  const isInView3 = useInView(ref3, { once: true, threshold: 0.3 });
  const isInView4 = useInView(ref4, { once: true, threshold: 0.3 });

  const [openDropdowns, setOpenDropdowns] = useState({
    private: { Brazil: false, Argentina: false, Chile: false, Colombia: false, Peru: false }
  });

  const toggleDropdown = (category, region) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [category]: {
        ...prev[category],
        [region]: !prev[category][region]
      }
    }));
  };

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

  const dropdownContent = {
    private: {
      Brazil: ["General Data Protection Law"],
      Argentina: ["Personal Data Protection Law"],
      Chile: ["Law No. 19,628 on the Protection of Private Life"],
      Colombia: ["Personal Data Protection Law"],
      Peru: ["Personal Data Protection Law"]
    }
  };

  return (    <div className="bg-white text-gray-900 overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-28 pb-36 overflow-hidden bg-white bg-center bg-cover" style={{ backgroundImage: '' }}>
        {/* Mobile faded image */}
        <div
          className="absolute top-0 left-0 w-full h-full block sm:hidden"
          style={{
            backgroundImage: `url('https://c4.wallpaperflare.com/wallpaper/837/205/104/stream-argentina-south-america-fitz-roy-wallpaper-preview.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.3
          }}
        />
        {/* Desktop background image */}
        <div
          className="absolute inset-0 hidden sm:block"
          style={{
            backgroundImage: `url('https://c4.wallpaperflare.com/wallpaper/837/205/104/stream-argentina-south-america-fitz-roy-wallpaper-preview.jpg')`,
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
              SOUTH AMERICA CYBERSECURITY SOLUTIONS
            </motion.span>            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-7xl font-extrabold mb-6 tracking-tight leading-tight"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              <span className="text-blue-600">Empowering Businesses with Cybersecurity</span>
              <br />
              <span className="text-blue-600">and Compliance in South America!</span>
            </motion.h1>
            <motion.p
              className="text-gray-700 mt-8 max-w-3xl mx-auto leading-relaxed text-lg mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.7 }}
            >
              Codezye Cyber, a leading cybersecurity consulting partner, empowers businesses in South America achieve robust security and compliance.
            </motion.p>
            <motion.div
              className="max-w-4xl mx-auto bg-gradient-to-br from-white via-white to-blue-50/50 p-12 rounded-3xl border-2 border-blue-500/20 shadow-xl mb-12"
              variants={fadeIn(0.5)}
              initial="hidden"
              animate="visible"
              whileHover={{ boxShadow: "0 30px 60px -12px rgba(59, 130, 246, 0.25)" }}
            >
              <h2 className="text-2xl font-semibold text-blue-600 mb-4">Businesses in South America Face Unique Cybersecurity Challenges</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                South American businesses are prime targets for cyberattacks. From data breaches and ransomware attacks to phishing scams and malware infections, a poor cybersecurity posture leaves companies vulnerable to operational disruptions, reputational damage, and hefty fines. At Codezye Cyber, we understand the critical importance of robust cybersecurity measures in safeguarding businesses across South America. We are a leading cybersecurity consulting partner, providing comprehensive solutions to secure your IT infrastructure, achieve compliance, and mitigate cyber threats. Our tailored cybersecurity solutions are designed to address the unique challenges faced by businesses in South America. Leveraging our expertise and innovative technologies, we offer comprehensive security and compliance services to ensure the resilience of your IT infrastructure.
              </p>
            </motion.div>            <motion.div
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
              What Cybersecurity Solutions Do We Offer?
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto text-lg leading-relaxed">
              Codezye Cyber offers a comprehensive suite of cybersecurity solutions and compliance expertise to mitigate these risks and help secure your IT infrastructure, achieve compliance, and protect valuable assets.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-1 gap-8 max-w-2xl mx-auto">
            <motion.div
              variants={scaleIn()}
              initial="hidden"
              animate={isInView1 ? "visible" : "hidden"}
              whileHover={{ 
                boxShadow: "0 30px 60px -12px rgba(59, 130, 246, 0.25)",
                y: -5
              }}
              className="bg-white p-8 rounded-3xl border-2 border-blue-500/20 relative overflow-hidden shadow-xl"
            >
              <h3 className="text-blue-700 font-bold mb-4 text-xl relative z-10">Private Sector</h3>
              <div className="space-y-2 relative z-10">
                {[
                  { name: "Brazil", label: "Brazil" },
                  { name: "Argentina", label: "Argentina" },
                  { name: "Chile", label: "Chile" },
                  { name: "Colombia", label: "Colombia" },
                  { name: "Peru", label: "Peru" }
                ].map((region, idx) => (
                  <div key={idx}>
                    <motion.button
                      onClick={() => toggleDropdown("private", region.name)}
                      className="w-full flex justify-between items-center p-3 bg-blue-500/10 rounded-lg hover:bg-blue-500/20 transition-all duration-300"
                      whileHover={{ backgroundColor: "rgba(59, 130, 246, 0.15)" }}
                    >
                      <span className="text-gray-700 font-medium">{region.label}</span>
                      <motion.svg
                        className="w-5 h-5 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        animate={{ rotate: openDropdowns.private[region.name] ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </motion.svg>
                    </motion.button>
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: openDropdowns.private[region.name] ? "auto" : 0,
                        opacity: openDropdowns.private[region.name] ? 1 : 0
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <ul className="text-gray-600 text-sm mt-2 space-y-2 pl-4">
                        {dropdownContent.private[region.name].length > 0 ? (
                          dropdownContent.private[region.name].map((item, i) => (
                            <li key={i} className="flex items-start">
                              <svg className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                              </svg>
                              {item}
                            </li>
                          ))
                        ) : (
                          <li className="text-gray-500 italic">No specific regulations listed.</li>
                        )}
                      </ul>
                    </motion.div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Compliance Importance Section */}
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
              <span className="text-sm font-semibold tracking-wider text-blue-600">COMPLIANCE IMPACT</span>
              <span className="w-2 h-2 rounded-full bg-blue-600"></span>
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-900 via-blue-600 to-blue-400 mb-4 leading-tight">
              <span className="text-3xl font-bold text-blue-400 mr-2 italic">"</span>
              Compliance and Its Impact on Your Organization's Success
              <span className="text-3xl font-bold text-blue-400 ml-2 italic">"</span>
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto text-lg leading-relaxed mb-6">
              At Codezye Cyber, we understand the complexities of compliance and its impact on your organization's success. Think of it as your trusty map and compass: This comprehensive solution provides a clear pathway to navigate the intricate web of compliance requirements, ensuring your organization operates with confidence and security.
            </p>
            <p className="text-gray-700 max-w-2xl mx-auto text-lg leading-relaxed font-semibold">
              We understand that every organization's compliance needs are unique. That's why we offer a customized approach that goes beyond simply listing compliance certifications. It begins with a deep understanding of your specific industry and risk profile.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
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
            <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-900 via-blue-600 to-blue-400 mb-4 leading-tight">
              Why Choose Codezye Cyber for Cybersecurity Solutions in South America?
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto text-lg leading-relaxed">
              We don't offer a one-size-fits-all approach. Our solutions are customized to your specific needs and industry regulations.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-6 gap-8">
            {[
              { 
                title: "Tailored Solutions", 
                desc: "We provide customized cybersecurity solutions that address the specific needs and challenges of your business.",
                icon: "🎯"
              },
              { 
                title: "Deep Expertise", 
                desc: "Our team comprises seasoned cybersecurity professionals with extensive experience in protecting organizations.",
                icon: "🛡️"
              },
              { 
                title: "Innovation Focused", 
                desc: "We leverage the latest technologies to ensure your business stays ahead of emerging threats.",
                icon: "💡"
              },
              { 
                title: "Compliance Expertise", 
                desc: "We help you navigate complex compliance frameworks to meet regulatory requirements.",
                icon: "📜"
              },
              { 
                title: "Proven Results", 
                desc: "Our track record speaks for itself, with successful implementations across South America.",
                icon: "🏆"
              },
              { 
                title: "24/7 Support", 
                desc: "Our dedicated support team is available around the clock to assist with any cybersecurity concerns.",
                icon: "🕒"
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
      <section ref={ref4} className="py-24 bg-white relative border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10 max-w-7xl">
          <motion.h2 
            className="text-5xl lg:text-6xl font-extrabold text-center mb-8"
            variants={fadeIn()}
            initial="hidden"
            animate={isInView4 ? "visible" : "hidden"}
          >
            <span className="font-bold text-blue-600">Codezye Cyber</span>
          </motion.h2>
          <motion.p
            className="text-2xl text-center text-gray-700 mb-20 font-medium"
            variants={fadeIn(0.2)}
            initial="hidden"
            animate={isInView4 ? "visible" : "hidden"}
          >
            Benefits of Getting Compliant with Codezye Cyber
          </motion.p>
          <div className="grid md:grid-cols-4 gap-10">
            {[
              { 
                title: "Reduced Risk of Cyberattacks", 
                desc: "A strong cybersecurity posture helps mitigate the risk of data breaches and other cyber threats.",
                icon: "🔒",
                gradient: "from-blue-600 to-blue-700"
              },
              { 
                title: "Business Continuity", 
                desc: "Minimize the risk of disruptions caused by security incidents, ensuring seamless operations and productivity.",
                icon: "⚙️",
                gradient: "from-blue-400 to-blue-500"
              },
              { 
                title: "Enhanced Brand Reputation", 
                desc: "Demonstrating your commitment to cybersecurity and data protection enhances trust among customers and stakeholders.",
                icon: "🌟",
                gradient: "from-blue-500 to-blue-600"
              },
              { 
                title: "Reduced Compliance Costs", 
                desc: "Avoid hefty fines and penalties associated with data breaches and non-compliance.",
                icon: "💸",
                gradient: "from-blue-400 to-blue-500"
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
          <motion.div 
            className="text-center mt-16"
            variants={fadeIn(0.2)}
            initial="hidden"
            animate={isInView4 ? "visible" : "hidden"}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-900 via-blue-600 to-blue-400 mb-4 leading-tight"
              variants={fadeIn()}
            >
              <span className="text-3xl font-bold text-blue-400 mr-2 italic">"</span>
              Partner with Codezye Cyber Today!
              <span className="text-3xl font-bold text-blue-400 ml-2 italic">"</span>
            </motion.h2>
            <motion.p 
              className="text-center text-gray-700 max-w-2xl mx-auto mt-6 leading-relaxed text-lg"
              variants={fadeIn(0.4)}
            >
              We differentiate ourselves by offering a comprehensive suite of cybersecurity solutions tailored to the specific needs of your business. Our team of experienced professionals guides you to a deep understanding of cybersecurity frameworks and regulations, enabling us to help you achieve compliance and mitigate risks.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 bg-white text-center relative border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10 max-w-7xl">
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

export default SouthAmerica;