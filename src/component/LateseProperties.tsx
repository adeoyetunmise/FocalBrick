import React from 'react';

const LatestProperties: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row ml-20 p-16 text-center">
      {/* Big Text on the Left */}
      <div className="w-full md:w-1/2 mb-4 md:mb-0 justify-center items-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 text-left">
          Explore our latest<br /><span className="italic font-merriweather font-light">properties</span>
        </h2>
      </div>
      {/* Paragraph and Button on the Right */}
      <div className="w-full md:w-1/2 text-left">
        <p className="text-sm font-roboto text-gray-600 mb-4">
          Discover a new era of property management with FocalBrick <br />
          Limited. We don't just manage properties; we create thriving <br />
          living and investment ecosystems. With over a decade of <br />
          expertise, we turn real estate challenges into opportunities for <br /> 
          growth, comfort, and financial success.
        </p>
        <button className="bg-black text-sm text-white px-6 py-2 rounded-full">View All Properties</button>
      </div>
    </div>
  );
};

export default LatestProperties;
