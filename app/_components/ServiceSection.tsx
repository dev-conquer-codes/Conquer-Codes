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
  {
    title: "Comprehensive Data Services",
    description: "Delivering data analytics and management solutions for informed decision-making.",
    image: "https://img.freepik.com/free-vector/data-analysis-isometric-illustration-concept_52683-72421.jpg?w=740&t=st=1736014591~exp=1736018191~hmac=a5e0860a6ff664f2fc6ae06d722df57ec09cd409ee9a43993e4ab8ebf19837cc",
  },
  {
    title: "Custom Softwares",
    description: "Creating tailored software solutions to meet your unique business requirements.",
    image: "https://img.freepik.com/free-photo/realistic-software-development-composition-with-view-coding-software-screen-realistic-background_1284-62553.jpg?w=740&t=st=1736014645~exp=1736018245~hmac=9c11deff1b58f7a97f943e93c741260fb0301db8b96cfb4a3162192a1516b015",
  },
  {
    title: "Automation Systems",
    description: "Streamlining processes with intelligent automation solutions.",
    image: "https://img.freepik.com/free-vector/isometric-smart-industry-industrial-automation_107791-14855.jpg?w=740&t=st=1736014693~exp=1736018293~hmac=41a22016ae116567495aee4195cbf05601ff3b9ad464c92c1140c55c368a3f48",
  },
  {
    title: "Graphic Designs",
    description: "Crafting stunning and visually appealing designs for your brand.",
    image: "https://plus.unsplash.com/premium_photo-1661284886711-4eaee4fa7771?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-lg shadow-md overflow-hidden flex flex-col"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-40 object-cover" // Image takes full width and fixed height
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600 mt-2">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;
