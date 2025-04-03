import React from 'react';
import { FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="w-full p-8">
      {/* Logo and Social Media */}
      <div className="flex flex-col items-center">
        {/* Logo and Name */}
        <div className="flex items-center gap-2 mb-4">
          <img src="/FBSIG1.jpg" alt="Logo" className="w-10 h-10 rounded-full" />
          <h1 className="text-4xl font-playfair font-semibold">FocalBrick Limited</h1>
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-6 mb-4">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={28} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={28} />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={28} />
          </a>
        </div>

        {/* Divider Line */}
        <hr className="border-t border-gray-300 w-full max-w-7xl mb-4" />

        {/* Links Row */}
        <div className="flex justify-between w-full max-w-7xl text-sm">
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Terms and Conditions
          </a>
          <span>© {new Date().getFullYear()} FocalBrick. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
