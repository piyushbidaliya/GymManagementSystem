import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white py-16">
      <div className="container mx-auto max-w-[1440px] px-6 lg:px-20">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h4 className="text-xl font-semibold mb-6 relative pb-2 border-b-2 border-blue-500 w-fit">
              Company
            </h4>
            <ul>
              <li className="mb-2 hover:pl-2 transition-all"><a href="/">Home</a></li>
              <li className="mb-2 hover:pl-2 transition-all"><a href="/about">About Us</a></li>
              <li className="mb-2 hover:pl-2 transition-all"><a href="/contact">Contact Us</a></li>
              <li className="mb-2 hover:pl-2 transition-all"><a href="/bill">Bill Receipts</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h4 className="text-xl font-semibold mb-6 relative pb-2 border-b-2 border-blue-500 w-fit">
              Get Help
            </h4>
            <ul>
              <li className="mb-2"><i className="fas fa-phone-alt"></i> <span>Phone Number</span></li>
              <li className="mb-2"><a href="#"><i className="fas fa-envelope"></i> <span>Email Address</span></a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h4 className="text-xl font-semibold mb-6 relative pb-2 border-b-2 border-blue-500 w-fit">
              Join Us
            </h4>
            <div className="flex space-x-4">
              <a href="#eh" target='_blank' rel='noopener noreferrer' className="bg-blue-600 hover:bg-white hover:text-gray-800 text-white rounded-full p-3 transition-all">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#wh" target='_blank' rel='noopener noreferrer' className="bg-pink-500 hover:bg-white hover:text-gray-800 text-white rounded-full p-3 transition-all">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#wh" target='_blank' rel='noopener noreferrer' className="bg-red-600 hover:bg-white hover:text-gray-800 text-white rounded-full p-3 transition-all">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="#wh" target='_blank' rel='noopener noreferrer' className="bg-green-500 hover:bg-white hover:text-gray-800 text-white rounded-full p-3 transition-all">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/4">
            <h4 className="text-xl font-semibold mb-6 relative pb-2 border-b-2 border-blue-500 w-fit">
              Address/Office
            </h4>
            <ul>
              <li className="mb-2">Registered Address</li>
              <p className="mb-6 text-gray-400">Address details here</p>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
