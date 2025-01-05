import React from "react";

const services = [
  {
    title: "Web Development",
    description: "Building responsive and modern websites tailored to your needs.",
    image: "https://img.freepik.com/free-vector/front-end-concept-illustration_114360-22213.jpg?t=st=1736014230~exp=1736017830~hmac=bf5c0bdd3dd62d9fdb646b88aff117bf1c6c7cc35df679b8f47cc215679529da&w=740",
  },
  {
    title: "App Development",
    description: "Creating seamless and feature-rich mobile applications.",
    image: "https://img.freepik.com/free-photo/smartphone-with-user-interface-concept_52683-104212.jpg?t=st=1736014277~exp=1736017877~hmac=58af2b151b27ace4b5ecd0d8812b9a4824d3bee388a8f324b1c97d12717050fd&w=740",
  },
  {
    title: "Machine Learning & AI",
    description: "Leveraging AI and ML to unlock smarter solutions for your business.",
    image: "https://img.freepik.com/free-vector/ai-technology-microchip-background-vector-digital-transformation-concept_53876-112222.jpg?t=st=1736014319~exp=1736017919~hmac=45d8f867285ec501b8ea08c5665e9a1cc28e55f7a3921f6942e8cdd35cdd136c&w=740",
  },
  {
    title: "Blockchain",
    description: "Implementing secure and transparent blockchain solutions.",
    image: "https://img.freepik.com/free-vector/server-room-rack-blockchain-technology-token-api-access-data-center_39422-442.jpg?t=st=1736014357~exp=1736017957~hmac=5f818b76db0dce465f231af3b27b522c95936d1892c1fdbeb536304d30c905a2&w=826",
  },
];

const ServiceSection: React.FC = () => {
  return (
    <section className="bg-white py-12 px-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Our Services</h2>
        <p className="text-gray-600 mt-2">
          Explore the wide range of IT solutions we offer to help your business grow.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-md"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-20 h-20 mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800">
              {service.title}
            </h3>
            <p className="text-gray-600 text-center mt-2">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;