import MessageFromFounder from "@/app/_components/Message";
import React from "react";

const AboutUs: React.FC = () => {
  return (
    <section className="bg-gray-50 py-12 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
        <p className="text-gray-600 text-lg mb-8">
          At Conquer Codes, we are passionate about delivering cutting-edge technology solutions that empower businesses to thrive in the digital age. With expertise in web development, app development, AI & ML, and blockchain, we are your trusted partner for innovation and success.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md flex justify-center gap-8 flex-col items-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Mission</h3>
            <p className="text-gray-600">
              To enable businesses to leverage technology for achieving greater efficiency, growth, and success in their respective industries.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md flex justify-center gap-8 flex-col items-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Vision</h3>
            <p className="text-gray-600">
              To be a global leader in providing innovative IT solutions that transform the way businesses operate.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md flex justify-center gap-8 flex-col items-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Why Choose Us</h3>
            <p className="text-gray-600">
              We combine technical expertise with a customer-first approach, ensuring that our solutions are tailored to your unique business needs.
            </p>
          </div>
        </div>
      </div>
      <MessageFromFounder/>
    </section>
  );
};

export default AboutUs;
