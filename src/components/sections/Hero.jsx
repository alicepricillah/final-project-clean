import React from "react";
import cleaningImg from "../../assets/images/cleaning.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative bg-gray-50 flex items-center justify-center py-20 md:py-32"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={cleaningImg}
          alt="Professional cleaning"
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Hero text */}
      <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Professional Cleaning Services You Can Trust
        </h1>

        <p className="text-lg md:text-xl text-gray-100 mb-8">
          We specialize in cleaning houses, carpets, and offices with a
          commitment to quality, hygiene, and your satisfaction.
        </p>

        <a
          href="#contact"
          className="bg-indigo-600 text-white px-8 py-3 rounded-lg text-lg font-medium shadow hover:bg-indigo-700 transition"
        >
          Get a Free Quote
        </a>
      </div>
    </section>
  );
};

export default Hero;
