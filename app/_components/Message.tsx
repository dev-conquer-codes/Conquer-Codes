import React from "react";

const MessageFromFounder: React.FC = () => {
  return (
    <section className="bg-gray-50 py-12 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Message from the Founder</h2>
        <p className="text-gray-600 text-lg mb-8">
          "At Conquer Codes, our mission is to harness the power of technology to drive innovation and success. Join us on this journey of transformation and excellence."
        </p>
        <div className="relative w-full h-0 pb-[56.25%] mb-4">
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-lg shadow-md"
            src="https://www.youtube.com/embed/Y9Pkv29qxUw"
            title="Message from the Founder"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default MessageFromFounder;
