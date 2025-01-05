import React from "react";

const uniqueFeatures = [
  {
    title: "Innovation",
    description: "We continuously adopt and implement cutting-edge technologies.",
    image: "https://img.freepik.com/free-vector/innovation-concept-illustration_114360-5123.jpg",
  },
  {
    title: "Expert Team",
    description: "Our team consists of skilled professionals with extensive experience.",
    image: "https://img.freepik.com/free-vector/teamwork-concept-illustration_114360-1296.jpg",
  },
  {
    title: "Customer Focus",
    description: "Your needs and satisfaction are at the heart of everything we do.",
    image: "https://img.freepik.com/free-vector/customer-support-concept-illustration_114360-3874.jpg",
  },
  {
    title: "Proven Results",
    description: "We have a track record of successful projects delivered on time.",
    image: "https://img.freepik.com/free-vector/success-concept-illustration_114360-1044.jpg",
  },
  {
    title: "Quality Assurance",
    description: "We ensure high-quality outcomes through rigorous testing.",
    image: "https://img.freepik.com/free-vector/quality-assurance-concept-illustration_114360-5128.jpg",
  },
  {
    title: "Scalability",
    description: "Our solutions grow with your business needs.",
    image: "https://img.freepik.com/free-vector/scalable-technology-concept-illustration_114360-2987.jpg",
  },
];

const WhatSetsUsApart: React.FC = () => {
  return (
    <section className="bg-gray-50 py-12 px-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">What Sets Us Apart</h2>
        <p className="text-gray-600 mt-2">
          Discover the qualities that make us stand out in the industry.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {uniqueFeatures.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md"
          >
            <img
              src={feature.image}
              alt={feature.title}
              className="w-24 h-24 mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-center">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatSetsUsApart;
