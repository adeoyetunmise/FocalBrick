import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string>('Home');

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  return (
    <nav className="absolute top-0 left-0 w-full bg-transparent py-6 px-24 flex justify-between items-center">
      {/* Logo and Name */}
      <div className="flex items-center space-x-2">
        <img src="/FBSIG1.jpg" alt="Logo" className="w-8 h-8 rounded-full" />
        <span className="text-xl font-semibold font-playfair text-white">FocalBrick Limited</span>
      </div>

      {/* Navigation Links */}
      <ul className="hidden md:flex space-x-2 text-sm text-white font-roboto font-light">
        {['Home', 'Properties', 'Services', 'About Us', 'Contact'].map((link) => (
          <li
            key={link}
            className={`cursor-pointer px-3 py-1 rounded-3xl ${activeLink === link ? 'bg-white text-black' : 'hover:text-blue-300 '}`}
            onClick={() => handleLinkClick(link)}
          >
            {link}
          </li>
        ))}
      </ul>

      {/* Button */}
      <button className="bg-white text-black font-bold px-2 py-1 text-sm rounded-3xl hover:bg-black hover:text-white">
        View Properties
      </button>
    </nav>
  );
};

export default Navbar;
