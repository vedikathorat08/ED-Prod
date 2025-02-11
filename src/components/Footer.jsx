import React from 'react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import logo from "../assests/edclogo.png"

const Footer = () => {
  return (
    <footer className="text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <img
            src={logo} 
            alt="Logo"
            className="w-full h-[50px] mr-2"
          />
          <span className="font-bold text-lg"></span>
        </div>
        <div className="flex space-x-4">
          <a
            href="https://www.instagram.com/edc_pvg/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://www.linkedin.com/company/pvgedc/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={24} />
          </a>
          <a href="mailto:edcpvg@gmail.com">
            <span className="text-lg">pvgedc@gmail.com</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
