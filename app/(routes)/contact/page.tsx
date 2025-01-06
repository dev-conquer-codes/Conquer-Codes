'use client'
import React, { useState } from "react";

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Submitting...");
    try {
        const response = await fetch("/api/contact", {

        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.status === "success") {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send the message. Please try again.");
      }
    } catch (error) {
      setStatus("An error occurred. Please try again later.");
    }
  };

  return (
    <section className="bg-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Section: Company Contact Info */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Contact Information</h3>
          <p className="text-gray-600 mb-4">
            You can reach out to us via the following contact details:
          </p>
          <div className="mb-4">
            <h4 className="text-lg font-semibold text-gray-700">Mobile Number:</h4>
            <p className="text-gray-600">+91 7082690722</p>
          </div>
          <div className="mb-4">
            <h4 className="text-lg font-semibold text-gray-700">Emails:</h4>
            <p className="text-gray-600">
              <a href="mailto:sonukhairwal@conquercodes.com" className="text-blue-500 hover:underline">
                sonukhairwal@conquercodes.com
              </a>
            </p>
            <p className="text-gray-600">
              <a href="mailto:sonuiiitian@gmail.com" className="text-blue-500 hover:underline">
                sonuiiitian@gmail.com
              </a>
            </p>
          </div>
          <div className="mb-4">
            <h4 className="text-lg font-semibold text-gray-700">Address:</h4>
            <p className="text-gray-600">Akashneem Marg, DLF Phase-2,</p>
            <p className="text-gray-600">Gurgaon, Haryana</p>
          </div>
        </div>

        {/* Right Section: Get in Touch Form */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Get in Touch</h2>
          <p className="text-gray-600 text-lg mb-8">
            Have questions or need assistance? Reach out to us, and we’ll be happy to help.
          </p>
          <form onSubmit={handleSubmit} className="bg-gray-50 p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                placeholder="Enter your message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white py-2 px-4 rounded-lg font-medium hover:bg-orange-700 transition-colors"
            >
              Submit
            </button>
          </form>
          {status && <p className="text-center mt-4 text-gray-700">{status}</p>}
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
