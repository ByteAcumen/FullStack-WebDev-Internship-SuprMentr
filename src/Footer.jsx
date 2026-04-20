import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaLinkedin, FaFacebook, FaYoutube, FaTwitter, 
  FaEnvelope, FaMapMarkerAlt, FaPhone, FaChevronRight 
} from 'react-icons/fa';

const Footer = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Services: [
      { name: "Compliance Edge", href: "/compliance-compass" },
      { name: "Smart Governance", href: "/governance-engine" },
      { name: "Threat and Vulnerability Watch", href: "/threat-and-vulnerability" },
    ],
    Resources: [
      { name: "Blogs", href: "/coming-soon" },
      { name: "Knowledge Hub", href: "/coming-soon" },
      { name: "Case Studies", href: "/coming-soon" },
      { name: "Infographics", href: "/coming-soon" },
      { name: "Whitepapers", href: "/coming-soon" },
      { name: "Checklist/Specialist", href: "/coming-soon" },
      { name: "Cheat Sheet", href: "/coming-soon" },
    ],
    Company: [
      { name: "About Us", href: "/about" },
      { name: "Careers", href: "/coming-soon" },
      { name: "Contact Us", href: "/get-started" },
    ],
  };

  const socialLinks = [
    { Icon: FaLinkedin, href: "https://www.linkedin.com/company/codezyecyber", label: "LinkedIn" },
  ];

  const contactInfo = [
    { Icon: FaEnvelope, text: "Sales@CodezyeCyber.com", href: "mailto:Sales@CodezyeCyber.com" },
    { Icon: FaPhone, text: "+91 8660939587", href: "tel:+91 8660939587" },
    { Icon: FaMapMarkerAlt, text: "No 40, 1st Floor, Garuda BHIVE Workspace Campus, BTM 2nd Stage, Bengaluru, Karnataka 560068", href: "https://maps.app.goo.gl/GNC86KHLNXuxo3sx6" },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.1, ease: "easeOut" }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" }
    })
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: 0.2 + (i * 0.05), duration: 0.4, ease: "easeOut" }
    }),
    hover: {
      x: 5,
      color: "#1E88E5",
      transition: { duration: 0.2 }
    }
  };

  const floatingPatternVariants = {
    initial: { backgroundPositionX: "0%", backgroundPositionY: "0%" },
    animate: {
      backgroundPositionX: ["0%", "100%"],
      backgroundPositionY: ["0%", "100%"],
      transition: { duration: 30, ease: "linear", repeat: Infinity, repeatType: "reverse" }
    }
  };

  const shimmerVariants = {
    initial: { opacity: 0.3 },
    animate: {
      opacity: [0.3, 0.7, 0.3],
      transition: { duration: 3.5, repeat: Infinity, ease: "easeInOut" }
    }
  };

  return (
    <footer className="bg-white overflow-hidden relative pt-16 pb-10 text-gray-700">
      <motion.div 
        className="absolute inset-0 opacity-10"
        variants={floatingPatternVariants}
        initial="initial"
        animate="animate"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231E88E5' fill-opacity='0.4'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 60c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/70 to-blue-50/40 z-0"></div>
      <motion.div
        className="absolute top-10 right-10 w-32 h-32 border-2 border-blue-400/20 rounded-full"
        animate={{ rotate: 360, boxShadow: ["0 0 0 rgba(30, 136, 229, 0)", "0 0 20px rgba(30, 136, 229, 0.2)", "0 0 0 rgba(30, 136, 229, 0)"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-24 h-24 border-2 border-blue-300/10 rounded-full hidden lg:block"
        variants={shimmerVariants}
        initial="initial"
        animate="animate"
      />
      <motion.div 
        className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-blue-500/10 blur-xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full bg-blue-400/10 blur-xl"
        animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.15, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="absolute top-0 left-0 right-0 overflow-hidden h-12 -translate-y-full">
          <svg className="absolute bottom-0 fill-white" viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,64L60,80C120,96,240,128,360,122.7C480,117,600,75,720,58.7C840,43,960,53,1080,58.7C1200,64,1320,64,1380,64L1440,64L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"></path>
          </svg>
        </div>
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12"
        >
          <motion.div custom={0} variants={itemVariants} className="lg:col-span-1">
            <motion.div 
              className="mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="h-14 mb-1 flex items-center">
                <span className="text-2xl font-bold text-blue-600">Codezye Cyber</span>
              </div>
            </motion.div>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              <span className="font-bold text-blue-500">
                <span className="bg-gradient-to-r from-blue-500 to-blue-500 bg-clip-text text-transparent">Codezye</span> Cyber
              </span> is a leading cybersecurity firm providing comprehensive solutions including VAPT, compliance audits, cyber advisory, and more. We help businesses navigate the complex cyber landscape with confidence.
            </p>
            <h4 className="text-blue-600 text-lg font-medium mb-4 flex items-center">
              <motion.span 
                animate={{ x: [0, 3, 0] }} 
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-block"
              >
                <FaEnvelope className="mr-2 inline-block" />
              </motion.span>
              Contact Us
            </h4>
            <nav>
              <ul className="space-y-3">
                {contactInfo.map((item, i) => (
                  <motion.li 
                    key={i} 
                    custom={i}
                    variants={linkVariants}
                    whileHover="hover"
                    className="flex items-center text-sm text-gray-600"
                  >
                    <item.Icon className="mr-3 text-blue-500" />
                    <a href={item.href} className="hover:text-blue-600 transition-colors duration-300">
                      {item.text}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
          {Object.entries(footerLinks).map(([title, links], index) => (
            <motion.div key={title} custom={index + 1} variants={itemVariants} className="lg:col-span-1">
              <h4 className="text-lg font-semibold text-gray-800 mb-6 flex items-center">
                <motion.div
                  className="h-6 w-1 bg-blue-500 mr-3 rounded-full"
                  animate={{ height: [24, 28, 24] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                {title}
              </h4>
              <nav>
                <ul className="space-y-3">
                  {links.map((link, linkIndex) => (
                    <motion.li 
                      key={link.name} 
                      custom={linkIndex}
                      variants={linkVariants}
                    >
                      <motion.a 
                        href={link.href} 
                        className="text-gray-600 hover:text-blue-600 text-sm transition-all duration-300 flex items-center group"
                        whileHover="hover"
                      >
                        <FaChevronRight className="mr-2 text-xs opacity-0 group-hover:opacity-100 transition-all duration-300 text-blue-500" />
                        {link.name}
                      </motion.a>
                    </motion.li>
                  ))}
                </ul>
              </nav>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          custom={4}
          variants={itemVariants}
          className="mt-12 mb-10 bg-blue-50 border border-blue-100 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h4 className="text-lg font-semibold text-gray-800 mb-1">Stay Updated with Cyber Threats</h4>
              <p className="text-sm text-gray-600">Subscribe to our newsletter for the latest news and insights.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-2 bg-white border border-blue-200 text-gray-700 placeholder:text-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400/50 shadow-sm"
              />
              <motion.button 
                className="px-5 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-500 transition-all shadow-sm hover:shadow"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>
        <motion.div
          custom={5}
          variants={itemVariants}
          className="border-t border-blue-100 pt-6 mt-10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500"
        >
          <div className="mb-4 md:mb-0">
            © {currentYear} <span className="font-bold text-blue-600">Codezye Cyber</span>. All Rights Reserved.
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <a href="#" className="hover:text-blue-600 transition duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-blue-600 transition duration-300">Terms of Use</a>
            <a href="#" className="hover:text-blue-600 transition duration-300">Cookie Policy</a>
            <div className="flex space-x-4 ml-4">
              {socialLinks.map(({ Icon, href, label }, index) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-gray-500 hover:text-blue-600 transition duration-300"
                  whileHover={{ y: -3, scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;