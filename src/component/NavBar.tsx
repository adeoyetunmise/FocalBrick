import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [activeLink, setActiveLink] = useState('Home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    setIsMenuOpen(false); // Close menu when a link is clicked
  };

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  return (
    <nav className="absolute top-0 w-full z-50 bg-transparent px-4 sm:px-6 md:px-10 lg:px-24 py-12 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src="/FBSIG1.jpg" alt="Logo" className="w-8 h-8 rounded-full" />
        <span className="text-lg sm:text-xl font-semibold font-playfair text-white">FocalBrick Limited</span>
      </div>

      {/* Desktop Links */}
      <ul className="hidden md:flex space-x-3 text-lg text-white font-light font-roboto">
        {['Home', 'Properties', 'Services', 'About Us', 'Contact'].map((link) => (
          <li
            key={link}
            className={`cursor-pointer px-3 py-1 rounded-3xl transition ${
              activeLink === link ? 'bg-white text-black' : 'hover:text-blue-300'
            }`}
            onClick={() => handleLinkClick(link)}
          >
            {link}
          </li>
        ))}
      </ul>

      {/* Desktop Button */}
      <button className="hidden md:block bg-white text-black font-bold px-4 py-2 rounded-3xl hover:bg-black hover:text-white transition">
        View Properties
      </button>

      {/* Hamburger Menu - Mobile */}
      <button
        className="md:hidden z-50 text-white"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Mobile Menu Slide-In */}
<div
  className={`fixed top-0 left-0 h-full w-full bg-white z-40 shadow-2xl transform transition-transform duration-300 ease-in-out ${
    isMenuOpen ? 'translate-x-0' : '-translate-x-full'
  } md:hidden`}
>

        {/* Header */}
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img src="/FBSIG1.jpg" alt="Logo" className="w-8 h-8 rounded-full" />
            <span className="text-lg font-semibold font-playfair text-black">FocalBrick</span>
          </div>
          {/* Close Menu */}
          <button onClick={() => setIsMenuOpen(false)} className="text-black">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Mobile Nav Links */}
        <ul className="flex flex-col py-8 px-6 space-y-4 font-roboto text-black">
          {['Home', 'Properties', 'Services', 'About Us', 'Contact'].map((link) => (
            <li
              key={link}
              className={`cursor-pointer text-base ${
                activeLink === link ? 'text-blue-600 font-semibold' : ''
              }`}
              onClick={() => handleLinkClick(link)}
            >
              {link}
            </li>
          ))}
          <li>
            <button className="mt-6 w-36 bg-black text-white py-3 rounded-md font-semibold hover:bg-gray-800 transition">
              View Properties
            </button>
          </li>
        </ul>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;
