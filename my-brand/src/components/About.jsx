import React from "react";
import cleaningImg from "../../assets/images/cleaning.jpg";

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 px-6">
        <div className="md:w-1/2">
          <img
            src={cleaningImg}
            alt="Cleaning service"
            className="rounded-2xl shadow-lg object-cover"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-indigo-700 mb-4">About Us</h2>
          <p className="text-gray-700 mb-4">
            At <strong>Softmax Fumigation</strong>, we are a team of dedicated
            cleaning and pest control professionals committed to providing safe,
            eco-friendly solutions for homes and businesses.
          </p>
          <p className="text-gray-700 mb-6">
            Our goal is simple — to help you enjoy a clean, comfortable, and
            pest-free space through reliable, professional service.
          </p>
          <a
            href="#services"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;






