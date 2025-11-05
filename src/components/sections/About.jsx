import React from "react";
import sprayingImg from "../../assets/images/spraying.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Image Side */}
        <div>
          <img
            src={sprayingImg}
            alt="Fumigation in progress"
            className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
          />
        </div>

        {/* Text Side */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            About Softmax Fumigation & Cleaning
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            At <strong>Softmax Fumigation & Cleaning</strong>, we take pride in
            providing top-quality cleaning and pest control services to homes,
            offices, and commercial spaces. Our goal is to create a safe,
            hygienic, and comfortable environment for all our clients.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            With a team of experienced professionals and eco-friendly products,
            we ensure thorough cleaning and effective fumigation without
            compromising safety or quality.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Whether you need a one-time service or scheduled maintenance,
            Softmax is your trusted partner for all cleaning and pest control
            needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
