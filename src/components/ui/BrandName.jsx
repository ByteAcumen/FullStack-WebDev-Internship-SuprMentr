import React from 'react';

const BrandName = ({ 
  className = "", 
  size = "base", 
  showCyber = true, 
  animated = false,
  gradient = true 
}) => {
  const sizeClasses = {
    sm: "text-sm",
    base: "text-base sm:text-lg md:text-xl",
    lg: "text-lg sm:text-xl md:text-2xl",
    xl: "text-xl sm:text-2xl md:text-3xl",
    "2xl": "text-2xl sm:text-3xl md:text-4xl",
    "3xl": "text-3xl sm:text-4xl md:text-5xl"
  };

  const baseClasses = `font-bold tracking-wide whitespace-nowrap transition-colors duration-300 ${sizeClasses[size]}`;
  
  const gradientClasses = gradient 
    ? "text-blue-500 group-hover:text-blue-700" 
    : "text-blue-500";

  const animationClasses = animated 
    ? "group-hover:scale-105 transform transition-transform duration-300" 
    : "";

  return (
    <span className={`${baseClasses} ${gradientClasses} ${animationClasses} ${className}`}>
      <span className="bg-gradient-to-r from-blue-500 to-blue-500 bg-clip-text text-transparent">
        Codezye
      </span>
      {showCyber && "Cyber"}
    </span>
  );
};

export default BrandName;
