import React from 'react';
import Navbar from './NavBar';

const HeroPage: React.FC = () => {
  return (
    <div className="relative h-[135vh] bg-cover bg-center" style={{ backgroundImage: "url('/modern.jpg')" }}>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-full text-white bg-black bg-opacity-50">
        {/* Main Text */}
        <h1 className="text-4xl md:text-6xl font-archivo font-extrabold mb-6 text-center">
          Your Trusted Partner in
          <br />
          <span className="italic font-merriweather text-5xl font-medium">Real Estate Management</span>
        </h1>

        {/* Info Cards */}
        <div className="absolute bottom-10 w-11/12 md:w-3/4 lg:w-2/3 bg-white p- rounded-full flex justify-around items-center text-sm space-x-2 h-20">
          {/* Location */}
          <div className="flex items-center space-x-24 bg-gray-100 p-2 rounded-full cursor-pointer">
            <span className="text-black font-light">Location</span>
            <img src="/location.png" alt="Location Logo" className="w-4 h-4" />
          </div>
          {/* Type */}
          <div className="flex items-center space-x-24 bg-gray-100 p-2 rounded-full cursor-pointer">
            <span className="text-black font-light">Type</span>
            <img src="/home.png" alt="Type Logo" className="w-4 h-4" />
          </div>
          {/* Price */}
          <div className="flex items-center space-x-24 bg-gray-100 p-2 rounded-full cursor-pointer">
            <span className="text-black font-light">Price</span>
            <img src="/dollar.png" alt="Price Logo" className="w-5 h-5" />
          </div>
          {/* Search Button */}
          <button className="flex items-center   bg-black text-white px-2 py-3 rounded-full cursor-pointer">
            <input 
              type="text" 
              placeholder="Search Properties" 
              className="bg-transparent  text-white w-28 ml-3 outline-none font-light text-sm placeholder-white"
            />
            <img src="/search.png" alt="Search Logo" className=" w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
