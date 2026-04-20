import React from 'react';
import worldMap from '../assets/global-globalization-world-map-environmental-concservation-concept.jpg';

// Define the locations with SVG coordinates (0-1000 x, 0-600 y for a 1000x600 SVG)
const locations = [
  { name: "USA", x: 180, y: 200, labelPosition: 'right' },
  { name: "MEXICO", x: 190, y: 280, labelPosition: 'right' },
  { name: "NETHERLANDS", x: 480, y: 170, labelPosition: 'right' },
  { name: "DUBAI", x: 625, y: 260, labelPosition: 'bottom' },
  { name: "SOUTH AFRICA", x: 530, y: 450, labelPosition: 'right' },
  { name: "INDIA", x: 690, y: 270, labelPosition: 'right' },
  { name: "BANGLADESH", x: 720, y: 250, labelPosition: 'right' },
  { name: "MALAYSIA", x: 800, y: 340, labelPosition: 'right' },
  { name: "SINGAPORE", x: 750, y: 330, labelPosition: 'bottom' },
];

const MapSection = () => {
  return (
    <section className="relative py-12 md:py-16 lg:py-24 bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/20 overflow-hidden">
      <div className="container mx-auto px-2 sm:px-3 md:px-6 lg:px-8 relative z-10">
        <div className="mb-8 md:mb-12 lg:mb-16 text-center max-w-5xl mx-auto">
          <div className="space-y-4 md:space-y-6">
            <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-gradient-to-r from-blue-100/80 to-indigo-100/60 rounded-full border border-blue-200/50 mb-3 md:mb-4">
              <div className="w-1.5 md:w-2 h-1.5 md:h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-blue-700 font-semibold text-xs md:text-sm uppercase tracking-wider">
                Global Network
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight text-blue-900">
              Our Global Presence
            </h2>
            <div className="max-w-4xl mx-auto px-2">
              <p className="text-sm md:text-base lg:text-lg xl:text-xl text-gray-700 leading-relaxed font-medium">
                Codezye Cyber operates across the globe, delivering cutting-edge cybersecurity solutions to clients in multiple regions, ensuring a secure digital future for all.
              </p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 lg:gap-6 mt-6 md:mt-8">
              <div className="flex items-center gap-2 md:gap-3 px-3 md:px-4 py-1.5 md:py-2 bg-blue-50/60 rounded-full border border-blue-200/40">
                <div className="w-2 md:w-2.5 h-2 md:h-2.5 bg-blue-500 rounded-full animate-pulse shadow-sm"></div>
                <span className="text-blue-800 text-xs md:text-sm font-semibold">11+ Countries</span>
              </div>
              <div className="flex items-center gap-2 md:gap-3 px-3 md:px-4 py-1.5 md:py-2 bg-blue-50/60 rounded-full border border-blue-200/40">
                <div className="w-2 md:w-2.5 h-2 md:h-2.5 bg-blue-500 rounded-full animate-pulse shadow-sm" style={{animationDelay: '0.5s'}}></div>
                <span className="text-blue-800 text-xs md:text-sm font-semibold">24/7 Support</span>
              </div>
              <div className="flex items-center gap-2 md:gap-3 px-3 md:px-4 py-1.5 md:py-2 bg-blue-50/60 rounded-full border border-blue-200/40">
                <div className="w-2 md:w-2.5 h-2 md:h-2.5 bg-blue-500 rounded-full animate-pulse shadow-sm" style={{animationDelay: '1s'}}></div>
                <span className="text-blue-800 text-xs md:text-sm font-semibold">Enterprise Grade</span>
              </div>
            </div>
          </div>
        </div>
        {/* SVG Map Section */}
        <div className="w-full max-w-6xl mx-auto aspect-[16/9] bg-white rounded-lg shadow-lg overflow-hidden relative">
          <svg viewBox="0 0 1000 600" width="100%" height="100%" className="w-full h-full">
            {/* Map image as SVG background */}
            <image
              href={worldMap}
              x="0"
              y="0"
              width="1000"
              height="600"
              preserveAspectRatio="xMidYMid meet"
            />
            {/* Markers */}
            {locations.map(({ name, x, y, labelPosition }, idx) => (
              <g key={idx}>
                {/* Marker dot */}
                <circle cx={x} cy={y} r="12" fill="#2563eb" stroke="#fff" strokeWidth="3" />
                {/* Label */}
                <text
                  x={labelPosition === 'right' ? x + 24 : x}
                  y={labelPosition === 'top' ? y - 20 : labelPosition === 'bottom' ? y + 28 : y}
                  textAnchor={labelPosition === 'right' ? 'start' : 'middle'}
                  fontSize="22"
                  fontWeight="bold"
                  fill="#1e3a8a"
                  style={{
                    dominantBaseline: labelPosition === 'top' ? 'auto' : 'hanging',
                    filter: 'drop-shadow(0 2px 6px #fff8)'
                  }}
                >
                  {name}
                </text>
              </g>
            ))}
          </svg>
        </div>
      </div>
    </section>
  );
};

export default MapSection;