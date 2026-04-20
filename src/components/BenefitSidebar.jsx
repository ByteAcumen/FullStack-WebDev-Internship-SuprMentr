import React from 'react';

/**
 * BenefitSidebar component
 * @param {Object[]} benefits - Array of benefit objects with title and description
 */
const BenefitSidebar = ({ benefits }) => {
  return (
    <aside className="w-full max-w-md bg-white rounded-xl shadow-lg border border-blue-100 p-4">
      <h3 className="text-xl font-bold text-blue-700 mb-4">Key Benefits</h3>
      <ul className="space-y-4">
        {benefits.map((benefit, idx) => (
          <li key={idx} className="flex items-start gap-4 border-b border-blue-50 pb-3 last:border-b-0">
            <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-blue-600" />
            <div>
              <div className="font-semibold text-blue-700 text-base mb-1">{benefit.title}</div>
              <div className="text-gray-600 text-sm leading-snug">{benefit.description}</div>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default BenefitSidebar; 