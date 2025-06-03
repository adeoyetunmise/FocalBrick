import React from "react";

const Founders: React.FC = () => {
  return (
    <section className="w-full px-4 sm:px-6 md:px-8 lg:px-16 py-10 sm:py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-6 md:gap-12 lg:gap-16">
        {/* Big Text on the Left */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-[#292E4B] leading-tight">
            What is{" "}
            <span className="italic font-merriweather font-light">
              FocalBrick?
            </span>
          </h2>
        </div>

        {/* Paragraph and Button on the Right */}
        <div className="w-full md:w-1/2 text-left">
          <p className="text-sm sm:text-lg text-gray-600 mb-6 max-w-lg font-roboto">
            FOCALBRICK Limited is a full-service real estate management company
            committed to delivering excellence in property development, property
            management, advisory services, and equipment leasing. With a passion
            for real estate and a focus on long-term value, we serve
            individuals, businesses, and institutional clients across Nigeria.
          </p>
          <button className="bg-[#292E4B] text-white text-sm sm:text-base px-5 sm:px-6 py-2 sm:py-2.5 rounded-full hover:bg-gray-800 transition-colors">
            Read Our Story
          </button>
        </div>
      </div>
    </section>
  );
};

export default Founders;
