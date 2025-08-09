import React from 'react';

const Header = () => {
  return (
    <header className="flex flex-col items-center justify-center text-center h-screen -mt-20">
      <h2 className="text-7xl font-extrabold leading-tight">
        Engineering the Future
      </h2>
      <p className="mt-4 text-xl text-gray-400 max-w-2xl">
        We develop cutting-edge software, immersive games, and stunning websites to help your business thrive in the digital age.
      </p>
      <button className="mt-8 px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-full text-lg font-semibold transition">
        Get in Touch
      </button>
    </header>
  );
};

export default Header;
