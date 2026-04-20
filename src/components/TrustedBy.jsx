import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { FaTrophy, FaGlobe, FaHeart, FaShieldAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const TrustedBy = () => {
  const controls = useAnimation();
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  // Testimonials carousel state (copied from About.jsx)
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Testimonials data (copied exactly from About.jsx)
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
    },
    {
      quote: "Ikontel is proud to partner with Codezye Cyber for their exceptional Virtual CISO services. Their team has provided us with strategic cybersecurity leadership, expert guidance, and continuous support tailored to our unique needs. Their proactive approach and deep industry knowledge have significantly strengthened our security posture and helped us stay ahead of emerging threats. Codezye Cyber's professionalism and commitment have been invaluable in navigating complex security challenges, giving us the confidence to focus on our core business. We highly recommend their Virtual CISO services to any organization seeking trusted and effective cybersecurity leadership. ",
      company: "— The Ikontel Team",
    }
    
  ];

  // Auto-play testimonials - always enabled (copied from About.jsx)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
  };

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { 
      y: 20,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    hover: {
      y: -3,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  // Stats data with React icons instead of emojis
  const statsData = [
    { value: "5+", label: "Years Experience", icon: FaTrophy },
    { value: "600+", label: "Clients Worldwide", icon: FaGlobe },
    { value: "98%", label: "Client Retention", icon: FaHeart },
    { value: "24/7", label: "Support Available", icon: FaShieldAlt }
  ];
  return (
    <section 
      ref={containerRef} 
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/40 overflow-hidden relative"
    >
      {/* Enhanced background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-blue-50/60"></div>
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/3 w-72 h-72 bg-blue-200/40 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-indigo-200/30 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">        {/* Section header with improved typography */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={titleVariants}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <div className="space-y-6">
            <motion.span 
              className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-wider mb-2"
              variants={{
                hidden: { opacity: 0, y: -10 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.5 } 
                }
              }}
            >
              Our Global Reach
            </motion.span>
            
            <div className="inline-block">
              <motion.h2 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 leading-tight"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { duration: 0.6, delay: 0.1 } 
                  }
                }}
              >
                Trusted By{" "}
                <span className="text-blue-700">600+</span>{" "}
                World-Class Organizations
              </motion.h2>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <motion.p 
                className="text-gray-600 text-base sm:text-lg lg:text-xl leading-relaxed px-4 font-medium"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { duration: 0.7, delay: 0.3 } 
                  }
                }}
              >
                Partnering with industry leaders and innovators across the globe to deliver exceptional security solutions
              </motion.p>
            </div>

            {/* Trust indicators */}
            <div className="flex justify-center items-center gap-6 mt-8">
              <div className="flex items-center gap-2 px-4 py-2 bg-blue-100/70 rounded-full border border-blue-200/50">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-blue-800 text-sm font-medium">Global Leaders</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-blue-100/70 rounded-full border border-blue-200/50">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-blue-800 text-sm font-medium">Proven Results</span>
              </div>
            </div>
          </div>
        </motion.div>        {/* Stats section with enhanced animations and design */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 mb-16 sm:mb-20"
        >
          {statsData.map((stat, index) => (            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -3,
                transition: { duration: 0.2, ease: "easeOut" }
              }}
              className="group cursor-pointer transform transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative">
                {/* Subtle shadow for depth */}
                <div className="absolute inset-0 bg-black/5 rounded-xl blur-lg scale-105 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                
                {/* Clean professional card */}
                <div className="relative bg-white rounded-xl border border-gray-200/60 shadow-md hover:shadow-lg p-6 sm:p-8 transition-all duration-300 ease-out group-hover:scale-105 group-hover:border-blue-300/50 group-hover:bg-white/95 text-center h-full">
                  {/* Simple background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 to-white rounded-xl"></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex justify-center mb-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white bg-blue-600 transition-all duration-300 group-hover:scale-110 shadow-lg group-hover:shadow-xl`}>
                        <stat.icon className="w-6 h-6" />
                      </div>
                    </div>
                    
                    <motion.div 
                      className="text-3xl sm:text-4xl font-bold text-gray-700 mb-2 transition-all duration-300 group-hover:text-blue-700"
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ 
                        delay: 0.2 + index * 0.1,
                        duration: 0.4,
                        ease: "easeOut"
                      }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-sm font-semibold text-gray-600 uppercase tracking-wider transition-colors duration-300">
                      {stat.label}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        {/* Testimonial section replaced with slider */}
        <div className="relative max-w-5xl mx-auto mt-8">
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
                type: 'spring', 
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
                  <div className="bg-gradient-to-br from-white to-blue-50/50 rounded-3xl border-2 border-blue-200/40 shadow-2xl shadow-blue-100/10 overflow-hidden relative">
                    {/* Top Gradient Border */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-700 via-blue-300 to-blue-400"></div>
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-5">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200 rounded-full -translate-y-16 translate-x-16"></div>
                      <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-400 rounded-full translate-y-12 -translate-x-12"></div>
                    </div>
                    <div className="relative z-10 p-12 lg:p-16">
                      {/* Testimonial Text */}
                      <motion.p 
                        className="text-gray-700 text-xl lg:text-2xl leading-relaxed mb-12 italic font-light"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                      >
                        {testimonial.quote}
                      </motion.p>
                      {/* Author Information - consistent style, no logo */}
                      <motion.div 
                        className="flex flex-col items-start"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                      >
                        <h4 className="font-bold text-blue-900 text-lg mb-1">
                          {/* Consistent: position/team or fallback */}
                          {index === 2 ? 'HR Team' : testimonial.position || ''}
                        </h4>
                        <p className="text-gray-600 text-sm mb-1">
                          {/* Consistent: company/team name or fallback */}
                          {index === 2 ? 'SuprMentr Technologies' : testimonial.company || ''}
                        </p>
                      </motion.div>
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
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;