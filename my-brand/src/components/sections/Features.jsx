import React from "react";
import { FaBroom, FaBug, FaLeaf } from "react-icons/fa";

const Features = () => {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-3xl font-bold text-indigo-700 mb-6">
          Our Services
        </h2>
        <p className="text-gray-700 mb-12">
          We provide a range of professional services to keep your home and
          business clean, safe, and pest-free.
        </p>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Cleaning Service */}
          <div className="bg-indigo-50 p-8 rounded-2xl shadow hover:shadow-lg transition transform hover:-translate-y-1">
            <FaBroom className="text-4xl text-indigo-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Professional Cleaning</h3>
            <p className="text-gray-600">
              Expert cleaning for homes, carpets, and offices. We leave your
              space spotless and refreshed.
            </p>
          </div>

          {/* Fumigation Service */}
          <div className="bg-indigo-50 p-8 rounded-2xl shadow hover:shadow-lg transition transform hover:-translate-y-1">
            <FaBug className="text-4xl text-indigo-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Home Fumigation</h3>
            <p className="text-gray-600">
              Safe and effective pest control solutions for a pest-free
              environment.
            </p>
          </div>

          {/* Eco-friendly Cleaning */}
          <div className="bg-indigo-50 p-8 rounded-2xl shadow hover:shadow-lg transition transform hover:-translate-y-1">
            <FaLeaf className="text-4xl text-indigo-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Eco-friendly Cleaning</h3>
            <p className="text-gray-600">
              We use environmentally safe products that protect your health and
              the planet.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;











