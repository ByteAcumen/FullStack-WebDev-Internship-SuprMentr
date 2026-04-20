import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import codezyeLogo from './assets/Codezye Logo.jpeg';
import { FaAngleDown, FaBars, FaTimes, FaGlobeAmericas, FaShieldAlt, FaBalanceScale, FaEye, FaStar, FaArrowRight } from 'react-icons/fa';
import { useRef } from 'react';

const REGIONS = [
  { name: "Middle East", countries: ["UAE", "KSA", "Qatar", "Bahrain", "Oman"] },
  { name: "Southern Asia", countries: ["India", "Bangladesh", "Nepal", "Sri Lanka", "Maldives"] },
  { name: "Americas", countries: ["North America", "South America"] },
  { name: "South East Asia", countries: [] },
  { name: "Europe", countries: [] }
];

const SERVICE_DROPDOWNS = {
  "Compliance Edge": [
    "PCI DSS", "Facilitated PCI SAQ", "ISA 62443", "PCI PIN", "ISMS-ISO-IEC 27001", "PIMS-ISO-IEC-27701", "BCMS-ISO-IEC-22301", "SOC 1 and SOC 2", "HITRUST", "ISA-62443", "Synergized Compliance Model", "SWIFT CSF", "NIST CSF", "CISA CMMC", "HIPAA", "PCI 3DS", "PCI P2PE", "PCI CP", "PCI SSF"
  ],
  "Smart Governance": [
    "Governance Engine", "Security Architecture Review", "Risk-Assessment-and-Management", "Third-Party-Risk-Management", "Cyber Crisis Simulation Service", "Governance-Framework-Development", "Cybersecurity Forensics and Incident Response Investigations", "Data-Governance", "Cyber Security Insurance Support", "Metrics and Reporting", "Incident Response Planning Service", "Security-Policy-&-Strategy-Development", "Security Program Maturity Assessment & Improvement", "ICS Security Service", "Virtual-or-Shared-CISO-Service", "Cloud Security", "DPO-as-a-Service", "Data-Privacy-Impact-Assessment", "CodezyeCyber 365 | Assurance-as-a-Service"
  ],
  "Threat and Vulnerability Watch": [
    "Network Architecture Review", "Network VAPT", "Advanced Penetration Testing", "DevSecOps", "Attack Surface Analysis", "Configuration Management and Hardening", "Red Team Assessment", "Compliance Focused Assessments", "Vulnerability Remediation Guidance", "Purple Team Assessment", "Wireless Security Assessment", "Social Engineering Testing", "IoT Security Assessment", "Web Application VAPT", "Ransomware Simulation", "Cloud Security Assessment", "Source Code Review", "Threat Modelling"
  ]
};

const NAV_ITEMS = [
  { name: "About Us", href: "/about", hasDropdown: false },
  { name: "Services", href: "/Services", hasDropdown: true, items: Object.keys(SERVICE_DROPDOWNS) },
  { name: "Tools", href: "/tools", hasDropdown: false },
  { name: "Contact", href: "/contact", hasDropdown: false },
];

const CATEGORY_LINKS = {
  "Compliance Edge": "/compliance-compass",
  "Smart Governance": "/governance-engine",
  "Threat and Vulnerability Watch": "/threat-and-vulnerability"
};

const CATEGORY_ICONS = {
  "Compliance Edge": FaShieldAlt,
  "Smart Governance": FaBalanceScale,
  "Threat and Vulnerability Watch": FaEye
};

// Animation variants
const menuVariants = {
  closed: { opacity: 0, x: 40, transition: { duration: 0.3, ease: 'easeInOut' } },
  open: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeInOut' } }
};
const navItemVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeInOut' } },
  exit: { opacity: 0, y: 10, transition: { duration: 0.2, ease: 'easeInOut' } }
};
const buttonTap = { scale: 0.95 };
const buttonHover = { scale: 1.05 };

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [showRegionDropdown, setShowRegionDropdown] = useState(false);
  const [activeRegion, setActiveRegion] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Arrow animation variants for Contact button
  const arrowVariants = {
    initial: { x: 0 },
    hover: { x: 5 },
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
    setShowRegionDropdown(false);
    setActiveRegion(null);
    if (location.pathname === '/' || (!location.pathname.includes('/select-region') && !location.pathname.includes('/countries'))) {
      setSelectedRegion(null);
      setSelectedCountry(null);
      localStorage.removeItem('selectedRegion');
      localStorage.removeItem('selectedCountry');
    }
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [isMobileMenuOpen]);

  // Remove the auto-loading of region selection on initial mount
  useEffect(() => {
    // Keep this empty to ensure the button shows "Select Region" initially
    // We'll only set regions when user explicitly selects them
  }, []);

  // Check if the current path matches the nav item
  const isActive = (path) => location.pathname === path;

  // Handle dropdown hover for Services category items
  const handleServiceCategoryHover = (category) => setActiveItem(category);

  // Handle region hover
  const handleRegionHover = (region) => setActiveRegion(region);

  // Handle region selection and optionally navigate to region-specific page
  const handleRegionSelect = (region, country = null, noNavigate = false) => {
    setSelectedRegion(region);
    setSelectedCountry(country);
    setShowRegionDropdown(false);
    setActiveDropdown(null);
    localStorage.setItem('selectedRegion', region);
    if (country) localStorage.setItem('selectedCountry', country);
    if (noNavigate) return;
    try {
      if (country) {
        const countryPath = country.toLowerCase().replace(/\s+/g, '-');
        if (region === 'Middle East') {
          if (["UAE", "KSA", "Qatar", "Bahrain", "Oman"].includes(country)) {
            navigate(`/select-region/countries/${countryPath}`);
          } else {
            navigate('/select-region/middleeast');
          }
          return;
        } else if (region === 'Southern Asia') {
          if (["India", "Bangladesh", "Nepal", "Sri Lanka", "Maldives"].includes(country)) {
            navigate(`/select-region/countries/${countryPath}`);
          } else {
            navigate('/select-region/SouthernAsia');
          }
          return;
        } else if (region === 'Americas') {
          if (["North America", "South America"].includes(country)) {
            navigate(`/select-region/countries/${countryPath}`);
          } else {
            navigate('/select-region/America');
          }
          return;
        }
      }
      const regionRouteMappings = {
        'Middle East': '/select-region/middleeast',
        'Southern Asia': '/select-region/SouthernAsia',
        'Americas': '/select-region/America',
        'South East Asia': '/select-region/SouthEastAsia',
        'Europe': '/select-region/Europe'
      };
      if (regionRouteMappings[region]) {
        navigate(regionRouteMappings[region]);
      } else {
        const regionPath = region.toLowerCase().replace(/\s+/g, '-');
        navigate(`/select-region/${regionPath}`);
      }
    } catch (error) {
      console.error('Navigation error:', error);
    }
  };

  // Format service path for navigation
  const getServicePath = (serviceName) => `/services/${encodeURIComponent(serviceName.toLowerCase().replace(/\s+/g, '-') )}`;

  // Find the active region object for the right column
  const activeRegionObj = REGIONS.find(r => r.name === activeRegion);

  // --- Render Functions ---
  const renderCategory = (category, idx) => {
    const isActiveCat = activeItem === category;
    const link = CATEGORY_LINKS[category];
    const Icon = CATEGORY_ICONS[category];
    const className = `px-3 py-2.5 cursor-pointer transition-all duration-200 text-xs md:text-sm flex items-center ${
      isActiveCat ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium' : 'text-blue-900 hover:bg-blue-200'
    } ${idx === 0 ? 'rounded-tl-lg' : ''} ${idx === Object.keys(SERVICE_DROPDOWNS).length - 1 ? 'rounded-bl-lg' : ''}`;
    if (link) {
      return (
        <Link
          key={category}
          to={link}
          onMouseEnter={() => handleServiceCategoryHover(category)}
          className={`${className} no-underline header-nav-link border border-transparent ${
            isActive(link) || activeDropdown === category ? 'bg-blue-100 shadow-md border border-blue-300 rounded-lg text-blue-900' : 'hover:text-blue-900 hover:bg-blue-200 hover:shadow-md hover:border hover:border-blue-200 rounded-lg'
          }`}
          style={{ textDecoration: 'none' }}
          aria-current={isActiveCat ? "page" : undefined}
        >
          {Icon && <Icon className={`mr-2 ${isActiveCat ? 'text-white' : 'text-blue-500'}`} size={12} />}
          {category}
        </Link>
      );
    }
    return (
      <div
        key={category}
        onMouseEnter={() => handleServiceCategoryHover(category)}
        className={`${className} no-underline header-nav-link border border-transparent ${
          isActiveCat ? 'bg-blue-100 shadow-md border border-blue-300 rounded-lg text-blue-900' : 'hover:text-blue-900 hover:bg-blue-200 hover:shadow-md hover:border hover:border-blue-200 rounded-lg'
        }`}
      >
        {Icon && <Icon className={`mr-2 ${isActiveCat ? 'text-white' : 'text-blue-500'}`} size={12} />}
        {category}
      </div>
    );
  };

  // --- Mobile Dropdown Helper ---
  const renderMobileDropdown = (item) => {
    if (item.name === "Services") {
      return (
        <AnimatePresence>
          {activeDropdown === "Services" && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="bg-white rounded-lg shadow-sm border border-blue-100 mt-2">
                {Object.keys(SERVICE_DROPDOWNS).map((category, catIndex) => {
                  const Icon = CATEGORY_ICONS[category];
                  const link = CATEGORY_LINKS[category];
                  return (
                    <motion.div
                      key={category}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: catIndex * 0.05, duration: 0.2 }}
                      className="border-b border-blue-100 last:border-b-0"
                    >
                      <div className="flex items-center px-4 py-3 bg-blue-50 text-blue-800 font-semibold text-base rounded-t-lg hover:bg-blue-200 transition-colors duration-200 gap-2"
                        style={{ cursor: 'pointer', userSelect: 'none' }}>
                        <span
                          onClick={e => {
                            e.stopPropagation();
                            setActiveItem(activeItem === category ? null : category);
                          }}
                          style={{ display: 'flex', alignItems: 'center' }}
                        >
                          {Icon && <Icon className="mr-2 text-blue-500" size={18} onClick={e => e.stopPropagation()} />}
                        </span>
                        <span
                          style={{ flex: 1 }}
                          onClick={e => {
                            e.stopPropagation();
                            setIsMobileMenuOpen(false);
                            setActiveDropdown(null);
                            navigate(link);
                          }}
                        >
                          {category}
                        </span>
                        <button
                          className={`px-2 py-3 bg-blue-50 text-blue-800 rounded-tr-lg hover:bg-blue-200 transition-colors duration-200 focus:outline-none ${activeItem === category ? 'bg-blue-100' : ''}`}
                          onClick={e => {
                            e.stopPropagation();
                            setActiveItem(activeItem === category ? null : category);
                          }}
                          aria-label={`Toggle ${category} dropdown`}
                        >
                          <motion.div
                            animate={{ rotate: activeItem === category ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <FaAngleDown size={16} />
                          </motion.div>
                        </button>
                      </div>
                      <AnimatePresence>
                        {activeItem === category && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                            className="bg-white overflow-hidden"
                          >
                            {SERVICE_DROPDOWNS[category].map((service, serviceIndex) => (
                              <motion.div
                                key={service}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: serviceIndex * 0.03, duration: 0.2 }}
                              >
                                <Link
                                  to={service === "Governance Engine" ? "/governance-engine" : getServicePath(service)}
                                  className="block px-7 py-2 text-sm text-blue-800 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 border-t border-blue-50 first:border-t-0 no-underline hover:no-underline hover:translate-x-1"
                                  onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    setActiveDropdown(null);
                                  }}
                                >
                                  {service}
                                </Link>
                              </motion.div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      );
    }
    return null;
  };

  const renderMobileRegionDropdown = () => (
    <AnimatePresence>
      {activeDropdown === "MobileRegion" && (
        <motion.div
          initial={{ opacity: 0, height: 0, y: -10 }}
          animate={{ opacity: 1, height: "auto", y: 0 }}
          exit={{ opacity: 0, height: 0, y: -10 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-hidden mt-2"
        >
          <div id="mobile-region-dropdown" className="bg-white rounded-lg border border-blue-100 shadow-sm overflow-hidden">
            <div className="max-h-60 overflow-y-auto">
              {REGIONS.map((region, regionIndex) => {
                const regionRouteMappings = {
                  'Middle East': '/select-region/middleeast',
                  'Southern Asia': '/select-region/SouthernAsia',
                  'Americas': '/select-region/America',
                  'South East Asia': '/select-region/SouthEastAsia',
                  'Europe': '/select-region/Europe'
                };
                const regionLink = regionRouteMappings[region.name] || `/select-region/${region.name.toLowerCase().replace(/\s+/g, '-')}`;
                return (
                  <motion.div
                    key={region.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: regionIndex * 0.05, duration: 0.2 }}
                    className="border-b border-blue-100 last:border-b-0"
                  >
                    <div className="flex items-center px-4 py-3 bg-blue-50 text-blue-800 font-semibold text-base rounded-t-lg hover:bg-blue-200 transition-colors duration-200 gap-2"
                      style={{ cursor: 'pointer', userSelect: 'none' }}>
                      <span
                        onClick={e => {
                          e.stopPropagation();
                          setActiveItem(activeItem === region.name ? null : region.name);
                        }}
                        style={{ display: 'flex', alignItems: 'center' }}
                      >
                        <FaGlobeAmericas className="mr-2 text-blue-500" size={18} onClick={e => e.stopPropagation()} />
                      </span>
                      <span
                        style={{ flex: 1 }}
                        onClick={e => {
                          e.stopPropagation();
                          setIsMobileMenuOpen(false);
                          setActiveDropdown(null);
                          navigate(regionLink);
                        }}
                      >
                        {region.name}
                      </span>
                      {region.countries && region.countries.length > 0 && (
                        <button
                          className={`px-2 py-3 bg-blue-50 text-blue-800 rounded-tr-lg hover:bg-blue-200 transition-colors duration-200 focus:outline-none ${activeItem === region.name ? 'bg-blue-100' : ''}`}
                          onClick={e => {
                            e.stopPropagation();
                            setActiveItem(activeItem === region.name ? null : region.name);
                          }}
                          aria-label={`Toggle ${region.name} dropdown`}
                        >
                          <motion.div
                            animate={{ rotate: activeItem === region.name ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <FaAngleDown size={16} />
                          </motion.div>
                        </button>
                      )}
                    </div>
                    <AnimatePresence>
                      {activeItem === region.name && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          className="overflow-hidden bg-white"
                        >
                          {region.countries.map((country, countryIndex) => (
                            <motion.button
                              key={country}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: countryIndex * 0.03, duration: 0.2 }}
                              className="w-full text-left px-8 py-2.5 text-sm text-blue-700 hover:bg-blue-50 hover:text-blue-900 transition-all duration-200 border-t border-blue-50 first:border-t-0 hover:translate-x-1 font-medium"
                              onClick={() => {
                                handleRegionSelect(region.name, country);
                                setIsMobileMenuOpen(false);
                                setActiveDropdown(null);
                              }}
                            >
                              {country}
                            </motion.button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-200 ${
        isScrolled 
          ? 'bg-white shadow-lg' 
          : 'bg-white bg-opacity-95'
      }`}
    >
      {/* Enhanced animated border bottom */}
      <div 
        className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-300 via-blue-600 to-blue-300 transform origin-left transition-transform duration-500 ease-out ${
          isScrolled ? 'scale-x-100' : 'scale-x-0'
        }`}
      ></div>
      
      {/* Subtle top glow when scrolled */}
      <div 
        className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-400/0 via-blue-500/20 to-blue-400/0 transition-opacity duration-500 ${
          isScrolled ? 'opacity-100' : 'opacity-0'
        }`}
      ></div>

      <nav className="container mx-auto flex justify-between items-center px-4 sm:px-6 py-3">        {/* Logo and Company Name */}
        <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
          <Link to="/" className="flex items-center group no-underline hover:no-underline">
            <img 
              src={codezyeLogo} 
              alt="CodezyeCyber Logo" 
              className="h-8 sm:h-10 md:h-12 object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>
          <Link to="/" className="group no-underline hover:no-underline">
            <span className={`inline-block font-bold text-base sm:text-lg md:text-2xl tracking-wide text-blue-500 whitespace-nowrap transform transition-transform group-hover:scale-110`}>
              <span className="bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent">Codezye Cyber</span>
            </span>
          </Link>
        </div>
        {/* Hamburger button for mobile/tablet */}
        <div className="flex lg:hidden">
          <motion.button
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            className={`p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 ${isMobileMenuOpen ? 'text-blue-600' : 'text-blue-900'}`}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
            whileTap={buttonTap}
            whileHover={buttonHover}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            {isMobileMenuOpen ? (
              <FaTimes size={24} className="transition-all duration-150" />
            ) : (
              <FaBars size={24} className="transition-all duration-150" />
            )}
          </motion.button>
        </div>
        {/* Main nav links (hidden on mobile/tablet) */}
        <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          {NAV_ITEMS.filter(item => item.name !== "Contact").map((item, i) => (
            <div
              key={item.name}
              onMouseEnter={() => {
                setActiveItem(item.name);
                if (item.hasDropdown && item.name !== "Tools") {
                  setActiveDropdown(item.name);
                } else {
                  setActiveDropdown(null);
                  setShowRegionDropdown(false);
                }
              }}
              onMouseLeave={() => {
                setActiveItem(null);
                setActiveDropdown(null);
                setShowRegionDropdown(false);
              }}
              className="relative group"
            >
              {/* Regular navigation items */}
              <Link
                to={item.href}
                className={`font-medium transition-colors transition-bg transition-shadow duration-300 text-sm lg:text-base tracking-wide py-3 px-2 flex items-center whitespace-nowrap no-underline header-nav-link border border-transparent ${
                  isActive(item.href) || activeDropdown === item.name 
                    ? 'bg-blue-100 shadow-md border border-blue-300 rounded-lg text-blue-900' 
                    : 'text-blue-900 hover:text-blue-900 hover:bg-blue-200 hover:shadow-md hover:border hover:border-blue-200 rounded-lg'
                }`}
              >
                {item.name}
                {item.hasDropdown && (
                  <span 
                    className={`ml-2 transition-transform duration-200 transform ${activeDropdown === item.name ? 'rotate-180 translate-y-[2px]' : ''}`}
                  >
                    <FaAngleDown size={12} />
                  </span>
                )}
              </Link>
              {item.name === "Services" && (
                <AnimatePresence>
                  {activeDropdown === "Services" && (
                    <div 
                      className="absolute left-0 mt-1 z-50 max-w-[90vw] md:max-w-[600px]"
                      onMouseEnter={() => setActiveDropdown("Services")}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="flex bg-white border border-blue-100 shadow-xl rounded-lg overflow-hidden"
                      >
                        {/* Left column - Service Categories */}
                        <div className="w-48 md:w-56 bg-gradient-to-br from-blue-50 to-white rounded-l-lg">
                          {Object.keys(SERVICE_DROPDOWNS).map((category, idx) => renderCategory(category, idx))}
                        </div>
                        {/* Separator line */}
                        <div className="w-px bg-blue-200"></div>
                        {/* Only render right column if a category is active */}
                        {activeItem && SERVICE_DROPDOWNS[activeItem] && (
                          <div className="w-60 md:w-72 bg-white rounded-r-lg p-0">
                            <div className="px-3 py-2 border-b border-blue-100 bg-blue-50/30 rounded-tr-lg">
                              <h3 className="text-sm font-medium text-blue-800">{activeItem}</h3>
                            </div>
                            <div className="max-h-[40vh] overflow-y-auto">
                              <AnimatePresence mode="wait">
                                <motion.div
                                  key={activeItem}
                                  initial={{ opacity: 0, x: 5 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  exit={{ opacity: 0, x: -5 }}
                                  transition={{ duration: 0.15 }}
                                >
                                  {SERVICE_DROPDOWNS[activeItem].map((service, idx) => (
                                    <Link
                                      key={service}
                                      to={service === "Governance Engine" ? "/governance-engine" : getServicePath(service)}
                                      className="block px-3 py-1.5 text-xs md:text-sm text-gray-800 hover:text-blue-900 hover:bg-blue-200 transition-colors duration-150 group no-underline header-nav-link border border-transparent"
                                      onClick={() => setActiveDropdown(null)}
                                    >
                                      <span className="w-1 h-1 rounded-full bg-blue-400 mr-2 group-hover:bg-blue-600 group-hover:scale-125 transition-all inline-block"></span>
                                      {service}
                                    </Link>
                                  ))}
                                </motion.div>
                              </AnimatePresence>
                            </div>
                          </div>
                        )}
                      </motion.div>
                    </div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
          
          {/* Desktop Select Region Component */}
          <div
            onMouseEnter={() => {
              setActiveItem("Select Region");
              setActiveDropdown("Select Region");
              setShowRegionDropdown(true);
            }}
            onMouseLeave={() => {
              setActiveItem(null);
              setActiveDropdown(null);
              setShowRegionDropdown(false);
            }}
            className="relative group"
          >
            <button
              className={`font-medium transition-colors transition-bg transition-shadow duration-300 text-sm lg:text-base tracking-wide py-3 px-2 flex items-center whitespace-nowrap header-nav-link border border-transparent rounded-lg no-underline hover:no-underline ${
                activeDropdown === "Select Region" || (selectedRegion && (location.pathname.includes('/select-region') || location.pathname.includes('/countries')))
                  ? 'bg-blue-100 shadow-md border border-blue-300 text-blue-900'
                  : 'text-blue-900 hover:text-blue-900 hover:bg-blue-200 hover:shadow-md hover:border hover:border-blue-200'
              }`}
            >
              <FaGlobeAmericas className="mr-2" size={16} />
              <span className="truncate">
                {selectedRegion && selectedCountry && (location.pathname.includes('/select-region') || location.pathname.includes('/countries')) 
                  ? `${selectedRegion} - ${selectedCountry}` 
                  : 'Select Region'}
              </span>
              <span className="ml-2">
                <FaAngleDown size={12} className={`transition-transform duration-200 transform ${activeDropdown === "Select Region" ? 'rotate-180 translate-y-[2px]' : ''}`} />
              </span>
            </button>
            {/* Select Region Dropdown Menu */}
            <AnimatePresence>
              {activeDropdown === "Select Region" && (
                <div 
                  className="absolute right-0 mt-1 z-50 max-w-[90vw] md:max-w-[480px]"
                  onMouseEnter={() => {
                    setActiveDropdown("Select Region");
                    setShowRegionDropdown(true);
                  }}
                  onMouseLeave={() => {
                    setActiveDropdown(null);
                    setShowRegionDropdown(false);
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="flex bg-white border border-blue-100 shadow-xl rounded-lg overflow-hidden max-h-[60vh]"
                  >
                    {/* Left column - Regions */}
                    <div className="w-48 md:w-56 bg-gradient-to-br from-blue-50 to-white border-r border-blue-100 overflow-y-auto max-h-[60vh] rounded-l-lg">
                      {REGIONS.map((region, idx) => (
                        <div
                          key={region.name}
                          onMouseEnter={() => handleRegionHover(region.name)}
                          onClick={() => {
                            handleRegionSelect(region.name);
                            setActiveDropdown(null);
                            setShowRegionDropdown(false);
                          }}
                          className={`px-3 py-2.5 cursor-pointer transition-all duration-200 text-xs md:text-sm flex items-center ${
                            activeRegion === region.name ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium' : 'text-blue-900 hover:bg-blue-100'
                          } ${idx === 0 ? 'rounded-tl-lg' : ''}`}
                        >
                          <FaGlobeAmericas className={`mr-2 ${activeRegion === region.name ? 'text-white' : 'text-blue-500'}`} size={12} />
                          {region.name}
                        </div>
                      ))}
                    </div>
                    {/* Only render right column if a region is active */}
                    {activeRegionObj && (
                      <div className="w-48 md:w-56 bg-white p-1 overflow-y-auto max-h-[60vh] rounded-r-lg">
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={activeRegionObj.name}
                            initial={{ opacity: 0, x: 5 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -5 }}
                            transition={{ duration: 0.15 }}
                            className="flex flex-col"
                          >
                            {activeRegionObj.countries && activeRegionObj.countries.length > 0 ? (
                              activeRegionObj.countries.map((country, idx) => (
                                <button
                                  key={country}
                                  className="px-3 py-1.5 text-xs md:text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors duration-150 group flex items-center text-left"
                                  onClick={() => {
                                    handleRegionSelect(activeRegionObj.name, country);
                                    setActiveDropdown(null);
                                    setShowRegionDropdown(false);
                                  }}
                                >
                                  <span className="w-1 h-1 rounded-full bg-blue-400 mr-2 group-hover:bg-blue-600 group-hover:scale-125 transition-all"></span>
                                  {country}
                                </button>
                              ))
                            ) : (
                              <div className="px-4 py-3 text-center text-sm text-gray-700">
                                <button
                                  className="w-full py-2 px-3 bg-blue-50 hover:bg-blue-100 rounded-md text-blue-700 transition-colors duration-150"
                                  onClick={() => {
                                    handleRegionSelect(activeRegionObj.name);
                                    setActiveDropdown(null);
                                    setShowRegionDropdown(false);
                                  }}
                                >
                                  View {activeRegionObj.name} Region
                                </button>
                                <p className="mt-2 text-xs text-gray-500 italic">
                                  Country selection coming soon
                                </p>
                              </div>
                            )}
                          </motion.div>
                        </AnimatePresence>
                      </div>
                    )}
                  </motion.div>
                </div>
              )}
            </AnimatePresence>
          </div>
          
          {/* Contact Button - positioned at the far right */}
          <motion.div
            initial="initial"
            whileHover="hover"
            className="relative"
          >
            <Link
              to="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all duration-300 ease-in-out text-sm lg:text-base tracking-wide py-3 px-6 flex items-center whitespace-nowrap rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 no-underline header-nav-link border border-transparent hover:text-white focus:text-white"
            >
              <span className="relative z-10 flex items-center justify-center">
                Contact
                <motion.span variants={arrowVariants} className="ml-3 inline-block">
                  <FaArrowRight />
                </motion.span>
              </span>
            </Link>
          </motion.div>
        </div>
        
        {/* Mobile Menu - Fixed position */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              key="mobile-menu"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="fixed inset-0 bg-white lg:hidden z-40 overflow-y-auto transition-opacity duration-200"
              style={{ willChange: 'opacity, transform' }}
            >
              {/* Close button */}
              <motion.button
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute top-4 right-4 z-50 p-2 rounded-full bg-blue-100 hover:bg-blue-200 text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                aria-label="Close mobile menu"
                whileTap={buttonTap}
                whileHover={buttonHover}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <FaTimes size={28} />
              </motion.button>
              <div className="absolute inset-0 overflow-hidden bg-blue-50/30"></div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeInOut' } }}
                exit={{ opacity: 0, y: 30, transition: { duration: 0.2, ease: 'easeInOut' } }}
                className="flex flex-col items-center justify-start space-y-4 min-h-screen px-4 py-20 relative"
              >
                {/* Selected region indicator - only show on region-specific pages */}
                {selectedRegion && selectedCountry && 
                 (location.pathname.includes('/select-region') || location.pathname.includes('/countries')) && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1, duration: 0.3 }}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg text-center w-full max-w-[300px] mb-2 shadow-sm"
                  >
                    <span className="font-medium text-sm">Region: {selectedRegion} - {selectedCountry}</span>
                  </motion.div>
                )}          {/* Mobile Navigation Items */}
                {NAV_ITEMS.map((item, i) => (
                  <motion.div 
                    key={item.name} 
                    variants={navItemVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="w-full max-w-[400px]"
                  >
                    <div className="relative w-full mb-1">
                      {item.name === 'Services' ? (
                        <div className="flex items-center bg-blue-100 rounded-lg px-4 py-3">
                          <span
                            className="text-lg font-medium text-blue-900 flex-1"
                            style={{ cursor: 'pointer' }}
                            onClick={e => {
                              e.stopPropagation();
                              setIsMobileMenuOpen(false);
                              setActiveDropdown(null);
                              navigate(item.href);
                            }}
                          >
                            {item.name}
                          </span>
                          <button
                            className="px-2 py-3 bg-blue-100 text-blue-900 rounded-tr-lg hover:bg-blue-200 transition-colors duration-200 focus:outline-none"
                            onClick={e => {
                              e.stopPropagation();
                              setActiveDropdown(activeDropdown === item.name ? null : item.name);
                            }}
                            aria-label={`Toggle ${item.name} dropdown`}
                          >
                            <motion.span
                              animate={{ rotate: activeDropdown === item.name ? 180 : 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <FaAngleDown size={16} />
                            </motion.span>
                          </button>
                        </div>
                      ) : (
                        <button
                          className={`text-lg font-medium px-4 py-3 relative flex justify-between items-center w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 transform hover:scale-[1.02] shadow-sm hover:shadow-md ${
                            isActive(item.href) || activeDropdown === item.name 
                              ? 'bg-blue-100 text-blue-900' 
                              : 'bg-white text-blue-900 hover:bg-blue-200'
                          }`}
                          onClick={() => {
                            if (item.hasDropdown && item.name !== "Tools") {
                              setActiveDropdown(activeDropdown === item.name ? null : item.name);
                            } else {
                              setIsMobileMenuOpen(false);
                              navigate(item.href);
                            }
                          }}
                          aria-expanded={item.hasDropdown && activeDropdown === item.name}
                          aria-controls={item.hasDropdown ? `${item.name}-dropdown` : undefined}
                          type="button"
                        >
                          <span className="flex-grow text-left">{item.name}</span>
                          {item.hasDropdown && item.name !== "Tools" && (
                            <motion.span
                              animate={{ rotate: activeDropdown === item.name ? 180 : 0 }}
                              transition={{ duration: 0.3 }}
                              className="ml-2"
                            >
                              <FaAngleDown size={16} />
                            </motion.span>
                          )}
                        </button>
                      )}
                    </div>
                    {renderMobileDropdown(item)}
                  </motion.div>
                ))}

                {/* Mobile Region Selector - moved before Contact button */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.3 }}
                  className="w-full max-w-[400px] mt-4"
                >
                  <div className="relative w-full">
                    <button
                      className={`w-full font-medium py-3 px-6 flex items-center justify-center transition-all duration-300 text-base rounded-lg border-2 shadow-sm hover:shadow-md transform hover:scale-[1.02] ${
                        activeDropdown === "MobileRegion" || (selectedRegion && (location.pathname.includes('/select-region') || location.pathname.includes('/countries')))
                          ? 'border-blue-600 text-blue-600 bg-blue-50' 
                          : 'border-blue-200 text-blue-900 hover:border-blue-600 bg-white'
                      }`}
                      onClick={() => setActiveDropdown(activeDropdown === "MobileRegion" ? null : "MobileRegion")}
                      aria-expanded={activeDropdown === "MobileRegion"}
                      aria-controls="mobile-region-dropdown"
                    >
                      <span className="flex items-center">
                        <FaGlobeAmericas className="mr-2" size={16} />
                        {selectedRegion && selectedCountry && (location.pathname.includes('/select-region') || location.pathname.includes('/countries'))
                          ? `${selectedRegion} - ${selectedCountry}` 
                          : 'Select Region'}
                      </span>
                      <motion.div
                        animate={{ rotate: activeDropdown === "MobileRegion" ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="ml-2"
                      >
                        <FaAngleDown size={16} />
                      </motion.div>
                    </button>
                  </div>
                  {renderMobileRegionDropdown()}
                </motion.div>

                {/* Contact Button - moved to the end */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.4, type: "spring", stiffness: 100 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative w-full max-w-[400px] mt-6"
                >
                  <Link
                    to="/contact"
                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium transition-all duration-300 ease-in-out text-lg px-8 py-4 relative flex justify-center items-center w-full rounded-full shadow-lg hover:shadow-xl transform no-underline header-nav-link border border-transparent hover:text-white focus:text-white"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      Get Started
                      <motion.span 
                        variants={arrowVariants} 
                        className="ml-3 inline-block"
                        initial="initial"
                        whileHover="hover"
                      >
                        <FaArrowRight />
                      </motion.span>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;