import React, { useState } from 'react';

const ReviewsFromClients: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      image: '/Frame 40.png',
      header: 'Robert & Maria Gonzalez | Multi-Property Owners',
      text: 'After struggling with self-management for years, turning our rental properties over to FocalBrick was the best decision we ever made. Their tenant screening process is thorough, maintenance issues are resolved promptly, and our rental income has become truly passive. ',
    },
    {
      image: '/Frame 41.png',
      header: 'Highly Recommended!',
      text: 'They exceeded all my expectations. Their attention to detail is unmatched.',
    },
    {
      image: '/Frame 38.png',
      header: 'Amazing Experience!',
      text: 'I found my dream property through them. The team was amazing throughout.',
    },
    {
      image: '/Frame 37.png',
      header: 'Fantastic Team!',
      text: 'The FocalBrick team was incredible. They were responsive and proactive.',
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
    <div className="p-8 flex flex-col items-center  justify-center">
      {/* Header */}
      <div className="flex justify-between w-full items-center mb-8">
        <h2 className="text-5xl ml-8 font-bold text-gray-800">
          Reviews from <br />
          <span className="italic font-light">Clients</span>
        </h2>
        <div className="flex space-x-4">
          <button
            onClick={handlePrev}
            className="p-3  bg-white text-black rounded-full  border border-black"
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

      {/* Review Text */}
      <div className="flex justify-center space-x-4 w-3/4 mb-8">
        <div className="w-1/2 pl-8">
          <h4 className="text-sm font-semibold mb-2">{reviews[currentIndex].header}</h4>
          <p className="text-gray-600 text-sm">{reviews[currentIndex].text}</p>
        </div>
      </div>

      {/* Small Images Row */}
      <div className="flex justify-center gap-4 mt-8">
        {reviews.map((review, index) => (
          <div
            key={index}
            className={`transition-all duration-500 ${
              currentIndex === index ? 'w-64 h-64' : 'w-32 h-32'
            }`}
          >
            <img
              src={review.image}
              alt="Client"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewsFromClients;
