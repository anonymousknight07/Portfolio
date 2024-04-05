import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { AuroraBackground } from "./ui/aurora-background";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;

    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);

    setPrevScrollPos(currentScrollPos);
  };

  return (
    <nav className={`w-full fixed top-0 z-50 transition-all duration-300 ${visible ? 'opacity-100' : 'opacity-0 -translate-y-full'}`} >
      <div className="container mx-auto px-4 pt-3 pb-6 flex justify-between items-center">
        <div>
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={50}
            height={50}
          />
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-white font-bold text-lg">Home</a>
          <a href="#Aboutme" className="text-white font-bold text-lg">About</a>
          <a href="#techstack" className="text-white font-bold text-lg">TechStack</a>
          <a href="#experience" className="text-white font-bold text-lg">Experience</a>
          <a href="#projects" className="text-white font-bold text-lg">Projects</a>
          <a href="#gallery" className="text-white font-bold text-lg">Gallery</a>
          <a href="#testimonials" className="text-white font-bold text-lg">Testimonials</a>
          <a href="#contact" className="text-white font-bold text-lg">Contact</a>
          <a href="#social" className="text-white font-bold text-lg">Socials</a>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-black w-full">
          <div className="container mx-auto py-4">
            <a href="#" className="block text-white py-2">Home</a>
            <a href="#" className="block text-white py-2">About</a>
            <a href="#" className="block text-white py-2">Portfolio</a>
            <a href="#" className="block text-white py-2">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
