import React from "react";

const purposeDetails = [
  {
    title: "Empowering Businesses",
    description:
      "We aim to empower businesses with innovative solutions that drive growth and efficiency.",
    image: "https://img.freepik.com/free-vector/business-solution-concept-illustration_114360-863.jpg",
  },
  {
    title: "Driving Innovation",
    description:
      "Innovation is at the core of everything we do, helping you stay ahead in a competitive landscape.",
    image: "https://img.freepik.com/free-vector/creative-idea-concept-illustration_114360-3914.jpg",
  },
  {
    title: "Sustainable Solutions",
    description:
      "Our focus is on delivering sustainable and scalable solutions that grow with your needs.",
    image: "https://img.freepik.com/free-vector/sustainability-concept-illustration_114360-5293.jpg",
  },
];

const OurPurpose: React.FC = () => {
  return (
    <section className="bg-white py-12 px-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Our Purpose</h2>
        <p className="text-gray-600 mt-2">
          Our purpose is to make a lasting impact through technology and innovation.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {purposeDetails.map((item, index) => (
          <div
            key={index}
            className="flex items-center bg-gray-50 p-6 rounded-lg shadow-md"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-24 h-24 mr-6"
            />
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurPurpose;
