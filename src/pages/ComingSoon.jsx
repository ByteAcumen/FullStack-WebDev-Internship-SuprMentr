import React from 'react';
import { motion } from 'framer-motion';

const ComingSoon = ({ page }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-white text-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="bg-white p-10 rounded-3xl shadow-xl border-2 border-blue-100 max-w-lg w-full"
      >
        <h1 className="text-4xl font-bold text-blue-600 mb-4">{page ? `${page} Page Coming Soon!` : 'Coming Soon!'}</h1>
        <p className="text-lg text-gray-700 mb-6">
          This page is under construction.<br />
          Stay tuned for exciting updates and resources from <span className="font-bold text-blue-500">Codezye Cyber</span>.
        </p>
        <motion.div
          className="w-24 h-24 mx-auto mb-4"
          initial={{ scale: 0.8, opacity: 0.5 }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="40" stroke="#1E88E5" strokeWidth="8" fill="#E3F2FD" />
            <path d="M50 20v20l14 14" stroke="#1E88E5" strokeWidth="6" strokeLinecap="round" />
          </svg>
        </motion.div>
        <div className="text-sm text-gray-400">Thank you for your patience!</div>
      </motion.div>
    </div>
  );
};

export default ComingSoon; 