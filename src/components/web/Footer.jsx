import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'; 

const Footer = () => {
  return (
    <footer className="bg-black-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Contact Info */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="mb-2">123 Real Estate Ave</p>
            <p className="mb-2">City, State, ZIP</p>
            <p className="mb-2">Phone: (123) 456-7890</p>
            <p className="mb-2">Email: info@realestate.com</p>
          </div>
          
          {/* Quick Links */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
            <ul>
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">Properties</a></li>
              <li><a href="#" className="hover:underline">Agents</a></li>
              <li><a href="#" className="hover:underline">Reports</a></li>
            </ul>
          </div>
          
          {/* Social Media */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaLinkedin size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="text-center mt-8">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Real Estate. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
