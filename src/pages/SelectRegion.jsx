import React from 'react';
import { motion } from 'framer-motion';
import { FaGlobeAmericas } from 'react-icons/fa';
import RegionSelector from '../components/RegionSelector';
import { Helmet } from 'react-helmet';

const SelectRegion = () => {
  // Region data with countries
  const regions = [
    { 
      name: "Middle East",
      countries: ["UAE", "KSA", "Qatar", "Bahrain", "Oman"]
    },
    { 
      name: "Southern Asia",
      countries: ["India", "Bangladesh", "Nepal", "Sri Lanka", "Maldives"]
    },
    { 
      name: "Americas",
      countries: ["North America", "South America"]
    },
    { 
      name: "North America",
      countries: ["USA", "Canada", "Mexico"]
    },
    { 
      name: "South East Asia",
      countries: ["Singapore", "Malaysia", "Indonesia", "Thailand", "Vietnam", "Philippines"]
    },
    { 
      name: "Europe",
      countries: ["UK", "Germany", "France", "Spain", "Italy", "Netherlands"]
    },
    { 
      name: "South America",
      countries: ["Brazil", "Argentina", "Chile", "Colombia", "Peru"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Select Your Region – Codezye Cyber</title>
        <meta
          name="description"
          content="Choose your region to see tailored cybersecurity solutions and compliance services from Codezye Cyber."
        />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-to-r from-blue-900 to-blue-700 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute w-full h-full bg-grid-pattern"></div>
          </div>
          
          <motion.div
            className="absolute top-1/4 left-10 w-40 h-40 bg-blue-400/30 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
          
          <motion.div
            className="absolute bottom-1/4 right-10 w-40 h-40 bg-blue-500/30 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center">
              <motion.div
                className="inline-flex items-center justify-center mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <FaGlobeAmericas className="text-4xl text-blue-200 mr-3" />
                <span className="text-white text-lg font-semibold bg-blue-600/50 px-4 py-1 rounded-full">Global Presence</span>
              </motion.div>
              
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                Select Your Region
              </motion.h1>
              
              <motion.p
                className="text-blue-100 max-w-2xl mx-auto text-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                Our cybersecurity expertise spans across the globe with localized solutions tailored to regional compliance requirements and challenges.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Region Selector Component */}
        <RegionSelector regions={regions} />
        
        {/* Additional Info Section */}
        <section className="py-16 bg-white border-t border-gray-100">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h2
                className="text-2xl font-bold text-blue-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                Why Regional Expertise Matters
              </motion.h2>
              
              <motion.p
                className="text-gray-600 mb-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                Cybersecurity requirements vary greatly across regions, with different compliance frameworks, regulations, and threat landscapes. Our regional experts understand the nuances of local cybersecurity environments and provide tailored solutions to meet your specific needs.
              </motion.p>
              
              <motion.div
                className="grid md:grid-cols-3 gap-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                <div className="bg-blue-50 p-5 rounded-xl">
                  <h3 className="font-bold text-blue-800 mb-2">Local Compliance</h3>
                  <p className="text-gray-600 text-sm">Navigate region-specific regulatory frameworks with confidence</p>
                </div>
                
                <div className="bg-blue-50 p-5 rounded-xl">
                  <h3 className="font-bold text-blue-800 mb-2">Regional Support</h3>
                  <p className="text-gray-600 text-sm">Get support from teams that understand your local business context</p>
                </div>
                
                <div className="bg-blue-50 p-5 rounded-xl">
                  <h3 className="font-bold text-blue-800 mb-2">Tailored Strategy</h3>
                  <p className="text-gray-600 text-sm">Security solutions customized for your region's threat landscape</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SelectRegion;