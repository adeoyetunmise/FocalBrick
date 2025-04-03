import React from 'react';

const Founders: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row ml-20 p-16 text-center">
      {/* Big Text on the Left */}
      <div className="w-full md:w-1/2 mb-4 md:mb-0 justify-center items-center">
        <h2 className="text-4xl -ml-20 md:text-5xl font-bold text-gray-800 mt-16 text-left">
          What is <span className="italic font-merriweather font-light">FocalBrick?</span>
        </h2>
      </div>
      {/* Paragraph and Button on the Right */}
      <div className="w-full md:w-1/2 text-left">
        <p className="text-sm font-roboto text-gray-600 mb-4">
        Founded in 2012, FocalBrick Limited emerged from a vision to revolutionize property management. Our founders, Sarah <br />
        Thompson and Michael Rodriguez, recognized a critical gap <br />
        in the real estate market – the need for a holistic, client-centric <br />
        approach to property management and investment.
        </p>
        <button className="bg-black text-sm text-white px-6 py-2 rounded-full">Read Our Story</button>
      </div>
    </div>
  );
};

export default Founders;
