import React from 'react';

const LatestProperties: React.FC = () => {
  return (
    <section className="w-full px-4 sm:px-6 md:px-8 lg:px-16 py-10 sm:py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-8 md:gap-12 lg:gap-16">
        {/* Big Text */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-[#292E4B] leading-tight">
            Explore our latest
            <span className="block italic font-merriweather font-light mt-1">properties</span>
          </h2>
        </div>
        
        {/* Paragraph and Button */}
        <div className="w-full md:w-1/2">
          <p className="text-sm sm:text-lg text-gray-600 mb-6 max-w-lg">
            Discover a new era of property management with FocalBrick
            Limited. We don't just manage properties; we create thriving
            living and investment ecosystems. With over a decade of
            expertise, we turn real estate challenges into opportunities for
            growth, comfort, and financial success.
          </p>
          <button className="bg-[#292E4B] text-white text-sm sm:text-base px-5 sm:px-6 py-2 sm:py-2.5 rounded-full hover:bg-gray-800 transition-colors">
            View All Properties
          </button>
        </div>
      </div>
    </section>
  );
};

export default LatestProperties;
