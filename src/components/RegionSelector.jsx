import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';

const RegionSelector = ({ regions }) => {
  // Animation variants
  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  // Helper function to get region path
  const getRegionPath = (region) => {
    // Special cases based on existing routing in Header.jsx
    if (region === 'Middle East') {
      return '/select-region/middleeast';
    } else if (region === 'Southern Asia') {
      return '/select-region/SouthernAsia';
    } else if (region === 'Americas') {
      return '/select-region/America';
    } else {
      // Fallback for other regions
      return `/select-region/${region.toLowerCase().replace(/\s+/g, '-')}`;
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-100 overflow-hidden relative">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Select Your Region</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose your region to access tailored cybersecurity solutions and compliance frameworks specific to your location.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {regions.map((region) => (
            <motion.div
              key={region.name}
              variants={itemVariant}
              className="flex flex-col h-full"
            >
              <motion.div
                className="bg-white border border-blue-100 rounded-xl p-6 flex flex-col h-full shadow-sm hover:shadow-lg transition-all duration-300"
                whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(59, 130, 246, 0.1)" }}
              >
                <h3 className="text-xl font-bold text-blue-900 mb-4">{region.name}</h3>
                <div className="mb-4 flex-grow">
                  <p className="text-gray-600">Available in:</p>
                  <ul className="mt-2 space-y-1">
                    {region.countries.map((country) => (
                      <li key={country} className="text-gray-700 flex items-center">
                        <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
                        {country}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link 
                  to={getRegionPath(region.name)} 
                  className="mt-auto"
                >
                  <motion.button
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg inline-flex items-center justify-center transition-colors duration-300"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <span>View Region</span>
                    <FaChevronRight className="ml-2" />
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default RegionSelector;