import React, { useState } from "react";
import { MdChevronRight } from "react-icons/md";
import {
  IoMailOutline,
  IoCallOutline,
  IoLocationOutline,
} from "react-icons/io5";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send to server)
    alert("Form submitted!");
  };

  return (
    <div>
      {" "}
      <div className="flex items-center gap-1 p-4 bg-gray-100">
        <p
          className="cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </p>
        <MdChevronRight />
        <p className="text-blue-400">Contact Us</p>
      </div>
      <div>
        <h2 className="m-6 bg-gray-100 p-2 md:p-4 rounded text-lg md:text-2xl lg:text-3xl text-gray-800 mb-6">
          Loved by Customers
        </h2>
      </div>
      <div className="p-6  text-gray-900">
        {/* Contact Form */}
        <div className="md:flex justify-between gap-8">
          <div className="w-full md:w-1/2 bg-white p-8 rounded-lg ">
            <h2 className="text-3xl font-semibold text-center mb-6 text-blue-500">
              Contact Us
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Address Info */}
          <div className="w-full md:w-1/2 bg-white p-8 rounded-lg  mt-8 md:mt-0">
            <h2 className="text-3xl font-semibold text-center mb-6 text-blue-500">
              Our Address
            </h2>
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <IoLocationOutline className="text-3xl text-blue-500" />
                <p className="text-lg">
                  Semra, Sahjanwa, Gorakhpur, Uttar Pradesh 273209
                </p>
              </div>
              <div className="flex items-center gap-3">
                <IoCallOutline className="text-3xl text-blue-500" />
                <p className="text-lg">+91 8564903343</p>
              </div>
              <div className="flex items-center gap-3">
                <IoMailOutline className="text-3xl text-blue-500" />
                <p className="text-lg">sunilgupta1577.skg@gmail.com</p>
              </div>
              <div className="flex gap-6 mt-6">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook className="text-2xl text-blue-500 hover:text-blue-600" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="text-2xl text-blue-500 hover:text-blue-600" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter className="text-2xl text-blue-500 hover:text-blue-600" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
