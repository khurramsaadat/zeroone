import React from 'react';

const NavigationBar = () => {
  return (
    <nav className="w-full p-6 flex justify-between items-center">
      <h1 className="text-2xl font-bold">ZeroOne Works LTD</h1>
      <div className="flex gap-8">
        <a href="#services" className="hover:text-gray-400">Services</a>
        <a href="#projects" className="hover:text-gray-400">Projects</a>
        <a href="#contact" className="hover:text-gray-400">Contact</a>
      </div>
    </nav>
  );
};

export default NavigationBar;
