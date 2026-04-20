import React, { useRef, useEffect } from 'react';
import isoLogo from '../assets/ISO LOGO.png';
import hipaaLogo from '../assets/HIPAA.jpeg';
import gdprLogo from '../assets/GDPR Logo.png';
import socLogo from '../assets/SOC Logo.jpeg';
import nistLogo from '../assets/NIST LOGO.png';
import cmmcLogo from '../assets/CMMC LOGO.png';
import hitrustLogo from '../assets/HITRUST LOGO.png';

const Accreditation = () => {
  const accreditations = [
    { id: 1, name: "ISO 27001", logo: isoLogo },
    { id: 2, name: "HIPAA", logo: hipaaLogo },
    { id: 3, name: "GDPR", logo: gdprLogo },
    { id: 4, name: "SOC 2", logo: socLogo },
    { id: 5, name: "NIST", logo: nistLogo },
    { id: 6, name: "CMMC", logo: cmmcLogo },
    { id: 7, name: "HITRUST", logo: hitrustLogo },
  ];

  // Create duplicated array for infinite scroll
  const duplicatedAccreditations = [...accreditations, ...accreditations];

  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId;
    const scrollSpeed = 0.5; // Adjust speed as needed

    const animate = () => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += scrollSpeed;
        
        // Reset to beginning when we've scrolled through the first set
        const maxScroll = scrollContainer.scrollWidth / 2;
        if (scrollContainer.scrollLeft >= maxScroll) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    // Pause on hover
    const handleMouseEnter = () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };

    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(animate);
    };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      if (scrollContainer) {
        scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
        scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/40 overflow-hidden relative">
      {/* Enhanced background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-blue-50/60"></div>
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-200/40 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-200/30 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">        <div className="mb-12 sm:mb-16 lg:mb-20">
          <div className="text-center space-y-6">            <div className="inline-block">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 leading-tight">
                Industry Accreditations
              </h2>
            </div>

            <div className="max-w-3xl mx-auto">
              <p className="text-gray-600 text-base sm:text-lg lg:text-xl leading-relaxed px-4 font-medium">
                Our expertise is recognized by leading industry authorities, ensuring we deliver services that meet global standards of excellence
              </p>
            </div>

            {/* Trust indicators */}
            <div className="flex justify-center items-center gap-6 mt-8">
              <div className="flex items-center gap-2 px-4 py-2 bg-blue-100/70 rounded-full border border-blue-200/50">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-blue-800 text-sm font-medium">Globally Recognized</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-blue-100/70 rounded-full border border-blue-200/50">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                <span className="text-blue-800 text-sm font-medium">Industry Leading</span>
              </div>
            </div>
          </div>
        </div>        <div className="relative overflow-hidden">
          {/* Professional gradient overlays for smooth edge effect */}
          <div className="absolute left-0 top-0 w-16 sm:w-24 lg:w-32 h-full bg-gradient-to-r from-slate-50 via-blue-50/60 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-16 sm:w-24 lg:w-32 h-full bg-gradient-to-l from-slate-50 via-blue-50/60 to-transparent z-10 pointer-events-none"></div>
          
          <div
            className="flex items-center gap-8 sm:gap-10 lg:gap-14 py-6 sm:py-8 lg:py-10 scrollbar-hide"
            ref={scrollRef}
            style={{ 
              overflow: 'hidden',
              whiteSpace: 'nowrap'
            }}
          >
            {duplicatedAccreditations.map((accreditation, index) => (
              <div
                key={`${accreditation.id}-${index}`}
                className="flex-shrink-0 group cursor-pointer transform transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative">
                  {/* Subtle shadow for depth */}
                  <div className="absolute inset-0 bg-black/5 rounded-xl blur-lg scale-105 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  
                  {/* Clean professional card */}
                  <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-xl bg-white border border-gray-200/60 shadow-md hover:shadow-lg flex items-center justify-center p-4 sm:p-5 transition-all duration-300 ease-out group-hover:scale-105 group-hover:border-blue-300/50 group-hover:bg-white/95">
                    <img 
                      src={accreditation.logo} 
                      alt={`${accreditation.name} Accreditation`} 
                      className="max-w-full max-h-full object-contain transition-all duration-300 ease-out filter group-hover:brightness-105"
                      style={{ mixBlendMode: 'multiply' }}
                    />
                  </div>
                </div>
                
                <div className="text-center mt-3 sm:mt-4">
                  <p className="font-semibold text-gray-700 text-sm sm:text-base lg:text-lg transition-all duration-300 group-hover:text-blue-700">
                    {accreditation.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accreditation;