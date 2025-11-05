import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Features from "./components/sections/Features"; // This is your Services section
import Contact from "./components/Contact";

const App = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section id="home">
        <Hero />
      </section>

      {/* About Section */}
      <section id="about">
        <About />
      </section>

      {/* Services Section */}
      <section id="services">
        <Features />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>
    </>
  );
};

export default App;































  
