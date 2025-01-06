import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Contact Details */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="grid grid-cols-3 gap-2">
              <div>Emails:</div>
              <div className="col-span-2">
                <p>
                  <a
                    href="mailto:sonukhairwal@conquercodes.com"
                    className="text-white hover:underline"
                  >
                    sonukhairwal@conquercodes.com
                  </a>
                </p>
                <p>
                  <a
                    href="mailto:sonuiiitian@gmail.com"
                    className="text-white hover:underline"
                  >
                    sonuiiitian@gmail.com
                  </a>
                </p>
              </div>

              <div>Mobile:</div>
              <div className="col-span-2">
                <p>+91 7082690722</p>
              </div>

              <div>Address:</div>
              <div className="col-span-2">
                <p>Akashneem Marg, DLF Phase-2, Gurgaon, Haryana</p>
              </div>
            </div>
          </div>

          {/* Social Media Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition-colors"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500 transition-colors"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://www.linkedin.com/company/conquer-codes/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-colors"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

          {/* About Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">About Conquer Codes</h4>
            <p>
              We are a team of passionate developers committed to delivering
              innovative IT solutions to empower your business.
            </p>
          </div>
        </div>

        <div className="text-center mt-6 border-t border-gray-700 pt-4">
          <p className="text-sm">&copy; {new Date().getFullYear()} Conquer Codes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
