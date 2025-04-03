import React from 'react';

const KeyFeatures: React.FC = () => {
  return (
    <div className="flex flex-col items-center bg-slate-100 justify-center p-16">
      {/* Header */}
      <div className="w-full text-left mb-8">
        <h2 className="text-5xl font-bold text-gray-800">
          Our Key <span className="italic font-merriweather font-light">Features</span>
        </h2>
      </div>

      {/* Features Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        {/* Left Column */}
        <div className="w-full md:w-1/3 text-left space-y-4">
          <div>
            <h4 className="text-lg font-semibold">Property Management</h4>
            <p className="text-gray-600 text-sm font-roboto">We take the complexity out of property ownership. From tenant screening to maintenance, our comprehensive management services ensure your investment remains profitable and stress-free.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold">Real Estate Consulting</h4>
            <p className="text-gray-600 text-sm font-roboto">Navigate the dynamic real estate landscape with confidence. Our expert consultants provide data-driven insights, market analysis, and strategic advice tailored to your unique goals.</p>
          </div>
        </div>

        {/* Image in the Center */}
        <div className="w-full md:w-1/3 flex justify-center items-center">
          <img src="/Frame 36.png" alt="Key Features" className="w-80 h-80 object-cover" />
        </div>

        {/* Right Column */}
        <div className="w-full md:w-1/3 text-left space-y-4">
          <div>
            <h4 className="text-xl font-semibold">Investment Solutions</h4>
            <p className="text-gray-600 text-sm font-roboto">Maximize your real estate potential. We identify high-yield properties, manage investment portfolios, and provide end-to-end support for both seasoned investors and first-time property owners.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold">Specialized Services</h4>
            <p className="text-gray-600 text-sm font-roboto">Maximize your real estate potential. We identify high-yield properties, manage investment portfolios, and provide end-to-end support for both seasoned investors and first-time property owners.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;
