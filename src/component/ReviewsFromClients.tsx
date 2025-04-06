import React, { useState } from 'react';

const ReviewsFromClients: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      image: '/Frame 40.png',
      header: 'Robert & Maria Gonzalez | Multi-Property Owners',
      text: 'After struggling with self-management for years, turning our rental properties over to FocalBrick was the best decision we ever made. Their tenant screening process is thorough, maintenance issues are resolved promptly, and our rental income has become truly passive.',
    },
    {
      image: '/Frame 37.png',
      header: 'Robert & Maria Gonzalez | Multi-Property Owners',
      text: 'After struggling with self-management for years, turning our rental properties over to FocalBrick was the best decision we ever made. Their tenant screening process is thorough, maintenance issues are resolved promptly, and our rental income has become truly passive.',
    },
    {
      image: '/Frame 38.png',
      header: 'The Keller Family | Long-term Residents',
      text: 'After struggling with self-management for years, turning our rental properties over to FocalBrick was the best decision we ever made. Their tenant screening process is thorough, maintenance issues are resolved promptly, and our rental income has become truly passive.',
    },
    {
      image: '/Frame 41.png',
      header: 'Marcus Johnson | Corporate Executive',
      text: 'After struggling with self-management for years, turning our rental properties over to FocalBrick was the best decision we ever made. Their tenant screening process is thorough, maintenance issues are resolved promptly, and our rental income has become truly passive.',
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
    <div className="p-8 flex flex-col items-center justify-center">
      {/* Header */}
      <div className="flex justify-between w-full items-center mb-8">
        <h2 className="text-5xl ml-8 font-bold text-gray-800">
          Reviews from <br />
          <span className="italic font-light">Clients</span>
        </h2>
        <div className="flex space-x-4">
          <button
            onClick={handlePrev}
            className="p-3 bg-white text-black rounded-full border border-black"
          >
            ←
          </button>
          <button
            onClick={handleNext}
            className="p-3 bg-white text-black rounded-full border border-black"
          >
            →
          </button>
        </div>
      </div>

      {/* Thumbnails Row with text beside the selected image */}
      <div className="flex justify-center gap-4 relative mt-24">
        {reviews.map((review, index) => (
          <div key={index} className="flex items-center">
            {/* Text that shows beside the selected image */}
            {currentIndex === index && (
              <div
                className={`absolute top-[-110px] ${
                  index < 2 ? 'left-72' : 'right-72'
                } w-[500px] text-left`} // Increased width to accommodate text
              >
                <h4 className="text-sm font-semibold mb-1">{review.header}</h4>
                <p className="text-gray-600 text-sm ">{review.text}</p>
              </div>
            )}
            {/* Thumbnails */}
            <div
              className={`transition-all duration-500 ${
                currentIndex === index ? 'w-64 h-72' : 'w-32 h-48 opacity-70'
              }`}
            >
              <img
                src={review.image}
                alt="Client"
                className="w-full h-full object-cover rounded-md cursor-pointer"
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
