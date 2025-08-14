import React, { useState } from "react";
import { FaUser, FaEnvelope, FaPhone, FaClipboardList, FaRegCommentDots } from "react-icons/fa";
import design from "../assets/design6.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="bg-blue-50 py-10 px-6 sm:px-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        
        {/* Left: Contact Form */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 to-blue-950 bg-clip-text text-transparent goat">
            Get in Touch
          </h2>
          <p className="text-gray-600 mt-2 mb-8 p-regular">
            Tell us about your project and we’ll get back to you shortly.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 goat">Full Name</label>
              <div className="relative">
                <FaUser className="absolute left-3 top-8 -translate-y-1/2 text-blue-400" />
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="pl-10 mt-2 w-full rounded-xl bg-blue-50 border border-blue-300 focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb] p-3 transition-all outline-none p-regular"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 goat">Email Address</label>
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-8 -translate-y-1/2 text-blue-400" />
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="johndoe@gmail.com"
                  className="pl-10 mt-2 w-full rounded-xl bg-blue-50 border border-blue-300 focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb] p-3 transition-all outline-none p-regular"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 goat">Phone Number</label>
              <div className="relative">
                <FaPhone className="absolute left-3 top-8 -translate-y-1/2 text-blue-400 scale-x-[-1]" />
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (415) 555-0198"
                  className="pl-10 mt-2 w-full rounded-xl bg-blue-50 border border-blue-300 focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb] p-3 transition-all outline-none p-regular"
                />
              </div>
            </div>

            {/* Service */}
            <div>
              <label className="block text-sm font-medium text-gray-700 goat">Which service are you interested in?</label>
              <div className="relative">
                <FaClipboardList className="absolute left-3 top-8 -translate-y-1/2 text-blue-400" />
                <select
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="pl-10 mt-2 w-full rounded-xl bg-blue-50 border border-blue-300 focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb] p-3 transition-all outline-none p-regular"
                >
                  <option value="">Select a service</option>
                  <option value="software-development">Custom Software Development</option>
                  <option value="web-design">Website Design & Development</option>
                  <option value="logo-branding">Logo & Brand Identity</option>
                  <option value="ui-ux">UI/UX Design</option>
                  <option value="ecommerce">E-commerce Solutions</option>
                  <option value="seo-marketing">SEO & Digital Marketing</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700 goat">Your Message</label>
              <div className="relative">
                <FaRegCommentDots className="absolute left-3 top-6 text-blue-400" />
                <textarea
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="From idea to launch — what's your plan?"
                  rows="7"
                  className="pl-10 mt-2 w-full rounded-xl bg-blue-50 border border-blue-300 focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb] p-3 transition-all outline-none resize-none p-regular"
                ></textarea>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-[#002B5B] via-[#2563eb] to-[#0a0a0a] hover:opacity-90 transition-all duration-300 shadow-lg p-semibold"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right: Image */}
        <div className="hidden md:block">
          <img
            src={design}
            alt="Design Showcase"
            className="rounded-2xl shadow-lg w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
