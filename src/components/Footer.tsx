import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 text-gray-300 py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">ZeroOne Works LTD</h3>
          <p>Providing cutting-edge software, immersive games, and stunning websites.</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul>
            <li className="mb-2"><a href="#home" className="hover:text-blue-400 transition-colors duration-300">Home</a></li>
            <li className="mb-2"><a href="#services" className="hover:text-blue-400 transition-colors duration-300">Services</a></li>
            <li className="mb-2"><a href="#projects" className="hover:text-blue-400 transition-colors duration-300">Projects</a></li>
            <li className="mb-2"><a href="#contact" className="hover:text-blue-400 transition-colors duration-300">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <p>Email: info@zerooneworks.com</p>
          <p>Phone: +123 456 7890</p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-2xl hover:text-blue-400 transition-colors duration-300"><FaFacebookF /></a>
            <a href="#" className="text-2xl hover:text-blue-400 transition-colors duration-300"><FaTwitter /></a>
            <a href="#" className="text-2xl hover:text-blue-400 transition-colors duration-300"><FaLinkedinIn /></a>
            <a href="#" className="text-2xl hover:text-blue-400 transition-colors duration-300"><FaInstagram /></a>
          </div>
        </div>
      </div>
      <div className="text-center mt-8 text-gray-500">
        <p>&copy; {new Date().getFullYear()} ZeroOne Works LTD. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
