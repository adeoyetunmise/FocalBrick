import React, { useState } from "react";

const ReviewsFromClients: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      image: "/Frame 40.png",
      header: "Robert & Maria Gonzalez | Multi-Property Owners",
      text: "After struggling with self-management for years, turning our rental properties over to FocalBrick was the best decision we ever made. Their tenant screening process is thorough, maintenance issues are resolved promptly, and our rental income has become truly passive.",
    },
    {
      image: "/Frame 37.png",
      header: "Robert & Maria Gonzalez | Multi-Property Owners",
      text: "After struggling with self-management for years, turning our rental properties over to FocalBrick was the best decision we ever made. Their tenant screening process is thorough, maintenance issues are resolved promptly, and our rental income has become truly passive.",
    },
    {
      image: "/Frame 38.png",
      header: "The Keller Family | Long-term Residents",
      text: "After struggling with self-management for years, turning our rental properties over to FocalBrick was the best decision we ever made. Their tenant screening process is thorough, maintenance issues are resolved promptly, and our rental income has become truly passive.",
    },
    {
      image: "/Frame 41.png",
      header: "Marcus Johnson | Corporate Executive",
      text: "After struggling with self-management for years, turning our rental properties over to FocalBrick was the best decision we ever made. Their tenant screening process is thorough, maintenance issues are resolved promptly, and our rental income has become truly passive.",
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 flex flex-col items-center justify-center">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between w-full items-center mb-4 sm:mb-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-center sm:text-left sm:ml-0 md:ml-4 lg:ml-20 font-bold text-[#292E4B] mb-4 sm:mb-0">
          Reviews from <br className="hidden sm:block" />
          <span className="italic font-light">Clients</span>
        </h2>
        <div className="flex space-x-4">
          <button
            onClick={handlePrev}
            className="p-2 sm:p-3 bg-white text-black rounded-full border border-black"
          >
            ←
          </button>
          <button
            onClick={handleNext}
            className="p-2 sm:p-3 bg-white text-black rounded-full border border-black"
          >
            →
          </button>
        </div>
      </div>

      {/* Mobile View - Current Review */}
      <div className="block sm:hidden w-full mt-6">
        <div className="flex flex-col items-center">
          <div className="w-full max-w-xs h-80 mb-4">
            <img
              src={reviews[currentIndex].image}
              alt="Client"
              className="w-full h-full object-cover object-top rounded-md"
            />
          </div>
          <div className="text-center px-4">
            <h4 className="text-lg text-[#292E4B] font-semibold mb-1">
              {reviews[currentIndex].header}
            </h4>
            <p className="text-gray-600 text-base leading-snug">
              {reviews[currentIndex].text}
            </p>
          </div>
        </div>

        {/* Mobile Navigation Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full ${
                currentIndex === index ? "bg-[#292E4B]" : "bg-gray-300"
              }`}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden sm:flex flex-wrap justify-center gap-2 md:gap-4 relative mt-8 md:mt-16 lg:mt-32">
        {reviews.map((review, index) => (
          <div key={index} className="flex items-center">
            {/* Text that shows beside the selected image */}
            {currentIndex === index && (
              <div
                className="absolute top-[-110px] left-0 right-0 w-full max-w-md md:max-w-lg lg:max-w-xl px-4 mx-auto text-left
                lg:left-1/2 lg:transform lg:-translate-x-1/2"
              >
                <h4 className="text-lg text-[#292E4B] font-semibold mb-1">
                  {review.header}
                </h4>
                <p className="text-gray-600 text-base md:text-lg leading-snug">
                  {review.text}
                </p>
              </div>
            )}
            {/* Thumbnails */}
            <div
              className={`transition-all duration-500 relative 
                ${
                  currentIndex === index
                    ? "w-40 h-60 md:w-48 md:h-72 lg:w-64 lg:h-96"
                    : "w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64"
                }`}
            >
              <img
                src={review.image}
                alt="Client"
                className="w-full h-full object-cover object-top rounded-md cursor-pointer"
                onClick={() => setCurrentIndex(index)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewsFromClients;
