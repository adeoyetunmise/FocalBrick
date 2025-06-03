import React from "react";
import Navbar from "./NavBar";

const HeroPage: React.FC = () => {
  return (
    <div
      className="relative min-h-screen pb-24 md:min-h-[100vh] lg:min-h-[120vh] bg-cover bg-center"
      style={{ backgroundImage: "url('/modern.jpg')" }}
    >
      {/* Full image overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content positioned above overlay */}
      <div className="relative z-10">
        <Navbar />
        <div className="flex flex-col items-center justify-start h-[90vh] md:h-[100vh] pt-20 md:pt-40 lg:pt-48 px-4 text-white">
          {/* Main Text - Adjusted for small screens */}
          <div className="text-center mt-32 sm:mt-12 md:mt-8 lg:mt-16">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-archivo font-extrabold mb-4 md:mb-6 text-center">
              Your Trusted Partner in
              <br />
              <span className="italic font-merriweather text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium">
                Real Estate Management
              </span>
            </h1>
          </div>

          {/* Info Cards */}
          <div className="absolute bottom-5 md:bottom-10 w-11/12 md:w-3/4 lg:w-2/3 bg-white rounded-lg md:rounded-full p-3 md:p-4 flex flex-col md:flex-row justify-around items-center text-sm gap-3 md:space-x-2 md:h-20">
            {/* Location */}
            <div className="flex items-center justify-between w-full md:w-auto bg-gray-100 p-2 rounded-full cursor-pointer">
              <span className="text-black font-light mx-3">Location</span>
              <img
                src="/location.png"
                alt="Location Logo"
                className="w-4 h-4 mr-3"
              />
            </div>
            {/* Type */}
            <div className="flex items-center justify-between w-full md:w-auto bg-gray-100 p-2 rounded-full cursor-pointer">
              <span className="text-black font-light mx-3">Type</span>
              <img src="/home.png" alt="Type Logo" className="w-4 h-4 mr-3" />
            </div>
            {/* Price */}
            <div className="flex items-center justify-between w-full md:w-auto bg-gray-100 p-2 rounded-full cursor-pointer">
              <span className="text-black font-light mx-3">Price</span>
              <img
                src="/dollar.png"
                alt="Price Logo"
                className="w-5 h-5 mr-3"
              />
            </div>
            {/* Search Button */}
            <button
              className="flex items-center justify-between text-white p-2 w-full md:w-auto rounded-full cursor-pointer"
              style={{ backgroundColor: "#292E4B" }}
            >
              <input
                type="text"
                placeholder="Search Properties"
                className="bg-transparent text-white w-full md:w-28 ml-3 outline-none font-light text-sm placeholder-white"
              />
              <img
                src="/search.png"
                alt="Search Logo"
                className="w-4 h-4 mr-3"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
