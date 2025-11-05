import React from "react";

const Navbar = () => {
  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold text-indigo-600">Softmax Fumigation</h1>
        <nav>
          <ul className="flex space-x-6 text-gray-700 font-medium">
            <li><a href="#home" className="hover:text-indigo-600">Home</a></li>
            <li><a href="#about" className="hover:text-indigo-600">About</a></li>
            <li><a href="#services" className="hover:text-indigo-600">Services</a></li>
            <li><a href="#contact" className="hover:text-indigo-600">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;