import React from "react";
import sprayingImg from "../../assets/images/spraying.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative bg-gray-50 py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 px-6">
        <img
          src={sprayingImg}
          alt="Spraying service"
          className="w-full md:w-1/2 rounded-2xl shadow-lg object-cover"
        />
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-indigo-700 mb-4">
            Welcome to Softmax Fumigation
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            We provide professional cleaning and fumigation services for homes
            and offices — ensuring a pest-free, clean, and healthy environment.
          </p>
          <a
            href="#contact"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg shadow hover:bg-indigo-700 transition"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
