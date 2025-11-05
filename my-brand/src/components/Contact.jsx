import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="bg-indigo-50 py-16">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-3xl font-bold text-indigo-700 mb-6">Contact Us</h2>
        <p className="text-gray-700 mb-10">
          Ready to start your journey with <strong>Softmax Fumigation</strong>?
          Reach out today and let’s keep your environment clean and pest-free.
        </p>

        <div className="space-y-4 text-lg text-gray-800">
          <p>
            <strong>📞 Phone:</strong> +254 793 880 496
          </p>
          <p>
            <strong>📧 Email:</strong>{" "}
            <a
              href="mailto:info@softmaxfumigation.com"
              className="text-indigo-600 hover:underline"
            >
              info@softmaxfumigation.com
            </a>
          </p>
          <p>
            <strong>📍 Location:</strong> Nairobi, Kenya
          </p>
        </div>

        {/* Social Media Icons */}

        <div className="flex justify-center gap-6 mt-8 text-indigo-600 text-2xl">
          <a
            href="https://whatsapp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-800 transition"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-800 transition"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-800 transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-800 transition"
          >
            <FaYoutube />
          </a>
        </div>

        <footer className="mt-12 text-gray-500 text-sm">
          © 2025 Softmax Fumigation. All rights reserved.
        </footer>
        </div>
    </section>
    );
    };


export default Contact;





