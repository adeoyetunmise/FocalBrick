import React from "react";
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="w-full p-8">
      {/* Logo and Social Media */}
      <div className="flex flex-col items-center">
        {/* Logo and Name */}
        <div className="flex items-center gap-2 mb-4">
          <img src="/logo.png" alt="Logo" className="w-10 h-10 " />
          <h1 className="text-4xl text-[#292E4B] font-playfair font-semibold">
            FocalBrick Limited
          </h1>
        </div>

        {/* Social Media Icons */}
        <div className="flex text-[#292E4B] gap-6 mb-4">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size={28} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={28} />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size={28} />
          </a>
        </div>

        {/* Divider Line */}
        <hr className="border-t border-gray-300 w-full max-w-full mb-4" />

        {/* Links Row - Responsive Layout */}
        <div className="flex flex-col md:flex-row text-[#292E4B] w-full max-w-7xl text-lg">
          {/* Policy Links - always on same line */}
          <div className="flex justify-center md:justify-start gap-8 mb-3 md:mb-0 md:flex-1">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Terms and Conditions
            </a>
          </div>

          {/* Copyright - below on mobile, inline on desktop */}
          <span className="text-center md:text-right md:flex-1">
            © {new Date().getFullYear()} FocalBrick. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
