import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section
      className="relative flex items-center justify-center h-screen bg-cover bg-center bg-white"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-photo/medium-shot-man-wearing-vr-glasses_23-2149126949.jpg?t=st=1736015032~exp=1736018632~hmac=d0cb8273e287b1021118d5a082f8a439f9e634c4bac02c5214ddf5b8059c6ff8&w=996')", // Replace with the direct image URL
      }}
    >
  
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          INNOVATING YOUR DIGITAL FUTURE
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Elevate your business with cutting-edge web development, mobile
          applications, and AI solutions.
        </p>
        <button className="px-6 py-3 bg-primary text-white text-lg rounded-md shadow-md hover:bg-gray-800 transition">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
