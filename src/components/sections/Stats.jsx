import React from "react";

const Stats = () => {
  const stats = [
    { label: "Projects Completed", value: "120+" },
    { label: "Happy Clients", value: "85+" },
    { label: "Years of Experience", value: "10+" },
    { label: "Team Members", value: "25+" },
  ];

  return (
    <section id="stats" className="py-20 bg-indigo-600 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Our Achievements</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((item, index) => (
            <div key={index}>
              <h3 className="text-4xl font-bold">{item.value}</h3>
              <p className="text-lg mt-2">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
