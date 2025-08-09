import React from 'react';

const NavigationBar = () => {
  return (
    <nav className="w-full p-6 flex justify-between items-center">
      <a href="#home" className="text-2xl font-bold hover:text-blue-400 transition-colors duration-300">ZeroOne Works LTD</a>
      <div className="flex gap-8">
        <a href="#home" className="hover:text-blue-400 transition-colors duration-300">Home</a>
        <a href="#services" className="hover:text-blue-400 transition-colors duration-300">Services</a>
        <a href="#projects" className="hover:text-blue-400 transition-colors duration-300">Projects</a>
        <a href="#contact" className="hover:text-blue-400 transition-colors duration-300">Contact</a>
      </div>
    </nav>
  );
};

export default NavigationBar;
