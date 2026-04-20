import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion for animations
import worldMapBlue from '../assets/world-map-blue.jpg';
import bgVideo from '../assets/917-141887976.mp4';
import HubspotForm from '../components/HubspotForm';
import { Helmet } from 'react-helmet';

function ContactPage() {
  // Animation variants for sections
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  // Animation for cards in the Global Locations section
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: index * 0.1,
      },
    }),
  };
  // State for selected location
  const [selectedLocation, setSelectedLocation] = useState(0);
  const [showPopup, setShowPopup] = useState(true);
  const locations = [
    {
      country: 'India',
      address: 'No 40, 1st Floor, Garuda BHIVE Workspace Campus, BTM 2nd Stage, Bengaluru, Karnataka 560068',
      phone: '+91 8618994178',
      email: 'Sales@Codezye Cyber.com',
      mapUrl: 'https://www.google.com/maps?q=Garuda+BHIVE+Workspace+BTM+Layout+Campus&ll=12.9160004,77.6159078&z=17&output=embed'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us – Codezye Cyber</title>
        <meta
          name="description"
          content="Get in touch with Codezye Cyber for expert cybersecurity solutions, support, and inquiries."
        />
      </Helmet>
      <div style={{
        background: '#ffffff',
        color: '#2d3748',
        minHeight: '100vh',
        width: '100%',
        position: 'relative',
        overflow: 'hidden', // Prevent overflow issues
      }}>
        {/* Contact Section with Full Width Background */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          style={{
            width: '100%',
            position: 'relative',
            minHeight: '80vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0',
            overflow: 'hidden',
          }}
        >
          {/* Background Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            src={bgVideo}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              zIndex: 0,
              minHeight: '100%',
              minWidth: '100%',
              maxHeight: 'none',
              maxWidth: 'none',
            }}
          />
          {/* Content Container */}
          <div style={{ position: 'relative', zIndex: 2, width: '100%' }}>
            {/* Centered Title and Description at the Top */}
            <div style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '32px',
              marginTop: '32px',
              maxWidth: '800px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}>
              <h1
                style={{
                  fontSize: '2.8rem',
                  color: '#fff',
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 900,
                  lineHeight: 1.13,
                  textShadow: '0 4px 24px rgba(0,0,0,0.18)',
                  letterSpacing: '0.5px',
                  textAlign: 'center',
                  margin: 0,
                  padding: 0,
                  marginBottom: '10px',
                }}
                className="contact-heading"
              >
                Get in Touch with Codezye Cyber
              </h1>
              <p
                style={{
                  fontSize: '1.25rem',
                  lineHeight: 1.8,
                  margin: '18px 0 0 0',
                  color: '#e3e8f0',
                  fontFamily: "'Open Sans', sans-serif",
                  opacity: 0.98,
                  letterSpacing: '0.3px',
                  fontWeight: 500,
                  textAlign: 'center',
                  maxWidth: '700px',
                  textShadow: '0 2px 8px rgba(0,0,0,0.10)',
                }}
                className="contact-desc"
              >
                Whether you're exploring our services, need assistance, or want to talk through your cybersecurity and compliance goals, we're here for you. Connect with our team using the contact options below — we'll respond promptly and support you every step of the way.
              </p>
            </div>
            {/* Centered Form Only */}
            <div
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '0 24px 48px 24px',
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{
                  width: '700px',
                  maxWidth: '98vw',
                  padding: '48px',
                  background: 'rgba(255, 255, 255, 0.97)',
                  borderRadius: '20px',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
                  backdropFilter: 'blur(8px)',
                  minHeight: '540px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  zIndex: 1,
                }}
                className="contact-form"
              >
                <h2 style={{ fontSize: '2.2rem', marginBottom: '18px', color: 'black', fontWeight: 700, fontFamily: "'Montserrat', sans-serif", textAlign: 'center' }}>Contact Us</h2>
                <div style={{ width: '100%' }}>
                  <HubspotForm twoColumn={true} />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
        
        {/* Global Locations */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          style={{
            width: '100%',
            padding: '80px 20px',
            textAlign: 'center',
            backgroundColor: '#ffffff',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Background Pattern */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: '#ffffff',
            zIndex: 0,
          }}></div>

          <div style={{
            maxWidth: '1000px',
            margin: '0 auto',
            position: 'relative',
            zIndex: 1,
          }}> 
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              style={{
                fontSize: '3rem',
                marginBottom: '40px',
                color: '#0062ff',
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
                textAlign: 'center',
                letterSpacing: '0.5px',
                textShadow: '0 2px 4px rgba(0,0,0,0.1)',
              }}
            >
              Our Location
            </motion.h2>
            <div className="map-section-flex" style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'flex-start',
              gap: '40px',
              maxWidth: '1000px',
              margin: '0 auto',
              width: '100%',
            }}>
              {/* Left: Scrollable Locations List */}
              <div style={{
                width: '320px',
                maxHeight: '600px',
                overflowY: 'auto',
                padding: '20px',
                background: '#f8f9fa',
                borderRadius: '16px',
                boxShadow: '0 6px 25px rgba(0, 0, 0, 0.05)',
              }} className="locations-scroll-container">
                {locations.map((location, index) => (
                  <div
                    key={index}
                    onClick={() => { setSelectedLocation(index); setShowPopup(true); }}
                    style={{
                      background: selectedLocation === index ? '#e6f0ff' : '#fff',
                      border: selectedLocation === index ? '2px solid #0062ff' : '1px solid #e0e0e0',
                      borderRadius: '12px',
                      padding: '18px 15px',
                      marginBottom: '18px',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      boxShadow: selectedLocation === index ? '0 4px 16px rgba(0,98,255,0.08)' : 'none',
                    }}
                  >
                    <h3 style={{
                      color: '#0062ff',
                      fontSize: '1.2rem',
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: 600,
                      margin: 0,
                    }}>{location.country}</h3>
                    <p style={{
                      color: '#333',
                      fontSize: '0.95rem',
                      fontFamily: "'Open Sans', sans-serif",
                      margin: '8px 0 0 0',
                    }}>{location.address}</p>
                  </div>
                ))}
              </div>
              {/* Right: Selected Location Details */}
              <div style={{
                flex: 1,
                maxHeight: '600px',
                minWidth: '0',
                background: '#fff',
                borderRadius: '16px',
                boxShadow: '0 6px 25px rgba(0, 0, 0, 0.05)',
                padding: '0', // Remove padding for full map
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                position: 'relative',
                overflow: 'hidden',
              }}>
                {/* Map Embed */}
                <div className="responsive-map" style={{ width: '100%', height: '600px', position: 'relative', borderRadius: '12px', marginTop: '16px', background: '#e5eaf2', minWidth: 0, minHeight: 0, boxSizing: 'border-box', border: 'none' }}>
                  <iframe
                    src={locations[selectedLocation].mapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0, borderRadius: '12px', width: '100%', height: '100%', background: '#e5eaf2', minWidth: 0, minHeight: 0, display: 'block' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Map of ${locations[selectedLocation].country}`}
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Footer */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          style={{
            width: '100%',
            backgroundColor: '#ffffff',
            color: '#333',
            textAlign: 'center',
            padding: '60px 20px',
            borderTop: '1px solid #eee',
          }}
        >
          <div style={{
            maxWidth: '800px',
            margin: '0 auto',
          }}>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              style={{
                fontSize: '2rem',
                marginBottom: '15px',
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
                lineHeight: 1.2,
                letterSpacing: '0.5px',
              }}
            >
              Innovative Cybersecurity Solutions
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{
                fontSize: '1.4rem',
                marginBottom: '25px',
                color: '#0062ff',
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 600,
                lineHeight: 1.2,
                letterSpacing: '0.5px',
              }}
            >
              Tailored for Your Business
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{
                maxWidth: '800px',
                margin: '0 auto',
                lineHeight: 1.8,
                fontFamily: "'Open Sans', sans-serif",
                color: '#666',
                fontSize: '1.1rem',
                letterSpacing: '0.3px',
              }}
            >
              Whether you're looking to enhance your current security measures, ensure compliance with industry 
              regulations, or mitigate potential risks, we're here to help. Our team of skilled cybersecurity 
              professionals is dedicated to delivering True Security through a personalized approach tailored to your 
              specific needs.
            </motion.p>
          </div>
        </motion.div>
        
        {/* Global styles */}
        <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Open+Sans:wght@300;400;600&display=swap');
            
            .locations-scroll-container {
              scrollbar-width: thin;
              scrollbar-color: #0062ff #f0f0f0;
            }

            .locations-scroll-container::-webkit-scrollbar {
              width: 8px;
            }

            .locations-scroll-container::-webkit-scrollbar-track {
              background: #f0f0f0;
              border-radius: 10px;
            }

            .locations-scroll-container::-webkit-scrollbar-thumb {
              background: #0062ff;
              border-radius: 10px;
            }

            .locations-scroll-container::-webkit-scrollbar-thumb:hover {
              background: #0052cc;
            }

            @keyframes fadeIn {
              from { opacity: 0; transform: translateY(20px); }
              to { opacity: 1; transform: translateY(0); }
            }

            @keyframes slideUp {
              from { opacity: 0; transform: translateY(30px); }
              to { opacity: 1; transform: translateY(0); }
            }

            @keyframes pulse {
              0% { transform: scale(1); }
              50% { transform: scale(1.05); }
              100% { transform: scale(1); }
            }
            
            input:focus, select:focus, textarea:focus {
              outline: none;
              border-color: #0062ff;
              box-shadow: 0 0 0 3px rgba(0, 98, 255, 0.15);
              transform: translateY(-2px);
              background-color: rgba(255, 255, 255, 0.2);
            }
            
            input:hover, select:hover, textarea:hover {
              border-color: #0062ff;
              transform: translateY(-2px);
              box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
              background-color: rgba(255, 255, 255, 0.2);
            }
            
            button[type="submit"]:hover {
              transform: translateY(-3px);
              box-shadow: 0 10px 25px rgba(0,98,255,0.4);
              background: #0052cc;
            }

            button[type="submit"]:active {
              transform: translateY(-1px);
            }

            button[type="submit"]::after {
              content: '';
              position: absolute;
              top: 50%;
              left: 50%;
              width: 5px;
              height: 5px;
              background: rgba(255, 255, 255, 0.5);
              opacity: 0;
              border-radius: 100%;
              transform: scale(1, 1) translate(-50%);
              transform-origin: 50% 50%;
            }

            button[type="submit"]:focus:not(:active)::after {
              animation: ripple 1s ease-out;
            }

            @keyframes ripple {
              0% {
                transform: scale(0, 0);
                opacity: 0.5;
              }
              100% {
                transform: scale(20, 20);
                opacity: 0;
              }
            }
            
            a:hover {
              background-color: #f0f0f0 !important;
              transform: scale(1.05) !important;
              transition: all 0.3s ease !important;
            }

            .location-card {
              transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            }

            .location-card:hover {
              transform: translateY(-8px);
              box-shadow: 0 12px 30px rgba(0, 98, 255, 0.15);
            }

            .location-card:hover > div {
              opacity: 1 !important;
            }

            @keyframes fadeInUp {
              from {
                opacity: 0;
                transform: translateY(20px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }

            .responsive-map {
              min-height: 600px !important;
              height: 600px !important;
              max-height: 900px !important;
              width: 100% !important;
              border-radius: 12px !important;
              overflow: hidden !important;
              display: block !important;
              margin-top: 16px !important;
            }
            @media (max-width: 600px) {
              .responsive-map {
                flex-direction: column !important;
                gap: 24px !important;
                align-items: stretch !important;
                width: 100% !important;
                max-width: 100% !important;
                height: 260px !important;
                min-height: 0 !important;
                max-height: 260px !important;
                padding: 0 !important;
              }
              .responsive-map iframe {
                height: 260px !important;
                width: 100% !important;
                border-radius: 12px !important;
                background: #e5eaf2 !important;
                display: block !important;
                border: none !important;
                min-width: 0 !important;
                min-height: 0 !important;
                max-height: 260px !important;
              }
            }
            .contact-form input,
            .contact-form select,
            .contact-form textarea {
              font-size: 1.15rem !important;
              padding: 12px 14px !important;
              border-radius: 8px !important;
            }
            .contact-form label {
              font-size: 1.15rem !important;
              font-family: 'Montserrat', sans-serif !important;
              font-weight: 500 !important;
              margin-bottom: 6px !important;
            }
            .contact-form button[type="submit"] {
              font-size: 1.15rem !important;
              padding: 12px 24px !important;
              border-radius: 8px !important;
            }
            .contact-form form {
              display: flex;
              flex-wrap: wrap;
              gap: 24px 32px;
              justify-content: space-between;
            }
            .contact-form form > div {
              flex: 1 1 45%;
              min-width: 220px;
              max-width: 48%;
              margin-bottom: 0 !important;
            }
            .contact-form form > div.full-width {
              flex: 1 1 100%;
              max-width: 100%;
            }
            .map-section-flex {
              display: flex;
              flex-direction: row;
              justify-content: center;
              align-items: flex-start;
              gap: 40px;
              max-width: 1000px;
              margin: 0 auto;
              width: 100%;
            }
            @media (max-width: 600px) {
              .map-section-flex {
                flex-direction: column !important;
                gap: 24px !important;
                align-items: stretch !important;
                width: 100% !important;
                max-width: 100% !important;
              }
              .locations-scroll-container {
                width: 100% !important;
                max-width: 100% !important;
                margin-bottom: 0 !important;
              }
              .responsive-map {
                width: 100% !important;
                min-width: 0 !important;
                margin-top: 0 !important;
                height: 260px !important;
                min-height: 0 !important;
                max-height: 260px !important;
                padding: 0 !important;
              }
              .responsive-map iframe {
                height: 260px !important;
                width: 100% !important;
                border-radius: 12px !important;
                background: #e5eaf2 !important;
                display: block !important;
                border: none !important;
                min-width: 0 !important;
                min-height: 0 !important;
                max-height: 260px !important;
              }
            }
          `}
        </style>
      </div>
    </>
  );
}

export default ContactPage;