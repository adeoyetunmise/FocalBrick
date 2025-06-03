import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";

    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMenuOpen]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Properties", path: "/properties" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  // Check if we're seeing duplicated navbars - add unique ID for debugging
  console.log("Navbar component rendering", new Date().getTime());

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 w-full z-50 transition-all duration-300 px-4 sm:px-6 md:px-10 lg:px-24 py-6 flex justify-between items-center ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src="/logo.png" alt="Logo" className="w-8 h-8 rounded-full" />
        <span
          className={`text-lg sm:text-xl font-semibold font-playfair ${
            scrolled ? "text-black" : "text-white"
          }`}
        >
          FocalBrick Limited
        </span>
      </div>

      {/* Desktop Links */}
      <ul
        className={`hidden md:flex space-x-3 text-lg font-light font-roboto ${
          scrolled ? "text-black" : "text-white"
        }`}
      >
        {navItems.map((item) => (
          <li key={item.name}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `px-3 py-1 rounded-3xl transition block ${
                  isActive
                    ? scrolled
                      ? "bg-[#EC3237] text-white font-semibold"
                      : "bg-white text-black font-semibold"
                    : scrolled
                    ? "hover:text-[#EC3237]"
                    : "hover:text-blue-300"
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Desktop Button */}
      <Link to="/properties">
        <button className="hidden md:block bg-[#EC3237] text-white font-bold px-4 py-2 rounded-3xl hover:bg-[#EC3237] hover:text-white transition">
          View Properties
        </button>
      </Link>

      {/* Hamburger Menu - Mobile */}
      <button
        className={`md:hidden z-50 ${scrolled ? "text-black" : "text-white"}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>

      {/* Mobile Menu Slide-In */}
      <div
        className={`fixed top-0 left-0 h-full w-full bg-white z-40 shadow-2xl transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        {/* Header */}
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img src="/logo.png" alt="Logo" className="w-8 h-8 rounded-full" />
            <span className="text-lg font-semibold font-playfair text-black">
              FocalBrick
            </span>
          </div>
          {/* Close Menu */}
          <button onClick={() => setIsMenuOpen(false)} className="text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Nav Links */}
        <ul className="flex flex-col py-8 px-6 space-y-4 font-roboto text-black">
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `text-base block ${
                    isActive ? "text-blue-600 font-semibold" : "text-black"
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
          <li>
            <Link to="/properties">
              <button className="mt-6 w-36 bg-[#EC3237] text-white py-3 rounded-md font-semibold hover:bg-[#EC3237] transition">
                View Properties
              </button>
            </Link>
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
