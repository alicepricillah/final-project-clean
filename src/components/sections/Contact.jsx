import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Get in Touch
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Ready to start your journey with us? Reach out today and let’s create something amazing together.
        </p>

        {/* Contact Buttons */}
        <div className="flex flex-col md:flex-row justify-center gap-6 mb-10">
          <a
            href="https://wa.me/254793880496"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-6 py-3 rounded-full flex items-center justify-center gap-2 hover:bg-green-600 transition"
          >
            <FaWhatsapp /> WhatsApp
          </a>
          <a
            href="https://facebook.com/alicepricillah"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-6 py-3 rounded-full flex items-center justify-center gap-2 hover:bg-blue-700 transition"
          >
            <FaFacebook /> Facebook
          </a>
          <a
            href="https://instagram.com/alicepricillah"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink-500 text-white px-6 py-3 rounded-full flex items-center justify-center gap-2 hover:bg-pink-600 transition"
          >
            <FaInstagram /> Instagram
          </a>
          <a
            href="https://youtube.com/@alicepricillah"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 text-white px-6 py-3 rounded-full flex items-center justify-center gap-2 hover:bg-red-700 transition"
          >
            <FaYoutube /> YouTube
          </a>
        </div>

        {/* Footer Message */}
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} My Brand. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Contact;
