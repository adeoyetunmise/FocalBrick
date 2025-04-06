import React from 'react';

const KeyFeatures: React.FC = () => {
  return (
    <section className="w-full bg-slate-100 px-4 sm:px-6 md:px-10 lg:px-16 py-10 sm:py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="w-full text-left mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
            Our Key <span className="italic font-merriweather font-light">Features</span>
          </h2>
        </div>

        {/* Features Section - Mobile: Vertical, Tablet: 2 columns, Desktop: 3 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {/* First Column */}
          <div className="text-left space-y-6 sm:space-y-8">
            <div className="p-6 ">
              <h4 className="text-lg sm:text-xl font-semibold mb-2">Property Management</h4>
              <p className="text-gray-600 text-sm sm:text-base font-roboto">
                We take the complexity out of property ownership. From tenant screening to maintenance, 
                our comprehensive management services ensure your investment remains profitable and stress-free.
              </p>
            </div>
            
            <div className="p-6 ">
              <h4 className="text-lg sm:text-xl font-semibold mb-2">Real Estate Consulting</h4>
              <p className="text-gray-600 text-sm sm:text-base font-roboto">
                Navigate the dynamic real estate landscape with confidence. Our expert consultants provide 
                data-driven insights, market analysis, and strategic advice tailored to your unique goals.
              </p>
            </div>
          </div>

          {/* Center Image - Visible on all screens but repositioned */}
          <div className="flex justify-center items-center row-start-1 sm:row-start-auto sm:col-span-2 lg:col-span-1">
            <img 
              src="/Frame 36.png" 
              alt="Key Features" 
              className="w-full max-w-xs sm:max-w-sm lg:max-w-md h-auto object-contain my-4"
            />
          </div>

          {/* Third Column */}
          <div className="text-left space-y-6 sm:space-y-8">
            <div className="p-6">
              <h4 className="text-lg sm:text-xl font-semibold mb-2">Investment Solutions</h4>
              <p className="text-gray-600 text-sm sm:text-base font-roboto">
                Maximize your real estate potential. We identify high-yield properties, manage investment portfolios, 
                and provide end-to-end support for both seasoned investors and first-time property owners.
              </p>
            </div>
            
            <div className=" p-6">
              <h4 className="text-lg sm:text-xl font-semibold mb-2">Specialized Services</h4>
              <p className="text-gray-600 text-sm sm:text-base font-roboto">
                Maximize your real estate potential. We identify high-yield properties, manage investment portfolios, 
                and provide end-to-end support for both seasoned investors and first-time property owners.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
