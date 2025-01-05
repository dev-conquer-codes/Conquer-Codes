'use client'
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex items-center justify-between px-8 py-4 shadow-md bg-white relative z-50">
      {/* Logo Section */}
      <div className="text-primary font-bold text-xl italic">
        Conquer Codes
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-primary focus:outline-none focus:ring-2 focus:ring-primary"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Navigation Links for Desktop */}
      <nav className="hidden md:flex space-x-6 text-black font-large">
        <Link href="/" className="hover:text-primary transition-colors">
          Home
        </Link>
        <Link href="/aboutUs" className="hover:text-primary transition-colors">
          AboutUs
        </Link>
        <Link href="/services" className="hover:text-primary transition-colors">
          Our Services
        </Link>
        {/* <Link href="/why-us" className="hover:text-primary transition-colors">
          Why us
        </Link> */}
        {/* <Link href="/about-us" className="hover:text-primary transition-colors">
          About us
        </Link> */}
        {/* <Link href="/career" className="hover:text-primary transition-colors">
          Career
        </Link> */}
        <Link href="/contact" className="hover:text-primary transition-colors">
          Contact
        </Link>
      </nav>

      {/* Sidebar for Mobile */}
      {isOpen && (
        <nav
          className="fixed top-0 left-0 h-screen w-64 bg-white shadow-lg z-50 transform translate-x-0 transition-transform duration-300 ease-in-out md:hidden"
          onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside the sidebar
        >
          <div className="flex flex-col space-y-4 text-black font-medium p-6 gap-6">
            <Link
              href="/"
              className="hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="/aboutUs"
              className="hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              AboutUs
            </Link>
            <Link
              href="/services"
              className="hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Our Services
            </Link>
            {/* <Link
              href="/why-us"
              className="hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Why us
            </Link> */}
            {/* <Link
              href="/about-us"
              className="hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              About us
            </Link> */}
            {/* <Link
              href="/career"
              className="hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Career
            </Link> */}
            <Link
              href="/contact"
              className="hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              ContactUs
            </Link>
          </div>
        </nav>
      )}

      {/* Call to Action */}
      <div className="hidden md:block">
        <Link
          href="/get-in-touch"
          className="bg-primary text-white px-4 py-2 rounded-full font-medium hover:bg-orange-700 transition-colors"
        >
          GET IN TOUCH
        </Link>
      </div>

      {/* Overlay for Sidebar */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleMenu}
        />
      )}
    </header>
  );
};

export default Navbar;
