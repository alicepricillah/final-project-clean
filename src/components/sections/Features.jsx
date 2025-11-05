import React from "react";
import { Sparkles, SprayCan, Home } from "lucide-react";
import cleaningImg from "../../assets/images/cleaning.jpg";
import sprayingImg from "../../assets/images/spraying.jpg";

const Features = () => {
  const services = [
    {
      title: "House & Office Cleaning",
      description:
        "Thorough cleaning for homes, offices, and commercial spaces — ensuring spotless and fresh environments every time.",
      icon: <Home className="w-8 h-8 text-indigo-600" />,
      image: cleaningImg,
    },
    {
      title: "Fumigation & Pest Control",
      description:
        "Safe and effective fumigation services to eliminate pests, protect your property, and maintain hygiene.",
      icon: <SprayCan className="w-8 h-8 text-indigo-600" />,
      image: sprayingImg,
    },
    {
      title: "Carpet & Upholstery Care",
      description:
        "Deep cleaning for carpets, sofas, and upholstery — removing stains, odors, and allergens for a healthier home.",
      icon: <Sparkles className="w-8 h-8 text-indigo-600" />,
      image: cleaningImg,
    },
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
          Our Key Services
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-left">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;