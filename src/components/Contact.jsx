import React, { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaClipboardList,
  FaRegCommentDots,
} from "react-icons/fa";
import design from "../assets/design6.jpg";
import emailjs from "emailjs-com";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Email validation
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const badDomains = ["gmial.com", "gamil.com", "yaho.com", "hotnail.com"];
    return emailRegex.test(email) && !badDomains.some((d) => email.includes(d));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.service ||
      !formData.message
    ) {
      toast.error("⚠️ Please fill out all the fields");
      return;
    }

    if (!isValidEmail(formData.email)) {
      toast.error("❌ Please enter a valid email address");
      return;
    }

    setLoading(true);

    emailjs
      .send(
        "service_yg1yvz1",
        "template_001",
        formData,
        "7WccIzgFpyQ580mdo"
      )
      .then(
        () => {
          toast.success("✅ Your message has been sent successfully!");
          setFormData({
            name: "",
            email: "",
            phone: "",
            service: "",
            message: "",
          });
        },
        (error) => {
          console.error("Error:", error.text);
          toast.error("❌ Something went wrong. Please try again.");
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <div className="bg-blue-50 py-10 px-4 sm:px-6 lg:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left: Contact Form */}
        <div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 to-blue-950 bg-clip-text text-transparent goat">
            Get in Touch
          </h2>
          <p className="text-gray-600 mt-2 mb-8 text-sm sm:text-base p-regular">
            Tell us about your project and we’ll get back to you shortly.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 goat">
                Full Name
              </label>
              <div className="relative">
                <FaUser className="absolute left-3 top-8 -translate-y-1/2 text-blue-400" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="pl-10 mt-2 w-full rounded-xl bg-blue-50 border border-blue-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 p-3 transition-all outline-none text-sm sm:text-base p-regular"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 goat">
                Email Address
              </label>
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-8 -translate-y-1/2 text-blue-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="johndoe@gmail.com"
                  className="pl-10 mt-2 w-full rounded-xl bg-blue-50 border border-blue-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 p-3 transition-all outline-none text-sm sm:text-base p-regular"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 goat">
                Phone Number
              </label>
              <div className="relative">
                <FaPhone className="absolute left-3 top-8 -translate-y-1/2 text-blue-400 scale-x-[-1]" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (415) 555-0198"
                  className="pl-10 mt-2 w-full rounded-xl bg-blue-50 border border-blue-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 p-3 transition-all outline-none text-sm sm:text-base p-regular"
                />
              </div>
            </div>

            {/* Service */}
            <div>
              <label className="block text-sm font-medium text-gray-700 goat">
                Which service are you interested in?
              </label>
              <div className="relative">
                <FaClipboardList className="absolute left-3 top-8 -translate-y-1/2 text-blue-400" />
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="pl-10 mt-2 w-full rounded-xl bg-blue-50 border border-blue-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 p-3 transition-all outline-none text-sm sm:text-base p-regular"
                >
                  <option value="">Select a service</option>
                  <option value="Websites">Websites</option>
                  <option value="Web Applications">Web Applications</option>
                  <option value="Chatbots">Chatbots</option>
                  <option value="WordPress">WordPress</option>
                  <option value="E-Commerce Websites">
                    E-Commerce Websites
                  </option>
                  <option value="Mobile Applications">
                    Mobile Applications
                  </option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700 goat">
                Your Message
              </label>
              <div className="relative">
                <FaRegCommentDots className="absolute left-3 top-6 text-blue-400" />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="From idea to launch — what's your plan?"
                  rows="6"
                  className="pl-10 mt-2 w-full rounded-xl bg-blue-50 border border-blue-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 p-3 transition-all outline-none resize-none text-sm sm:text-base p-regular"
                ></textarea>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-[#002B5B] via-[#2563eb] to-[#0a0a0a] hover:opacity-90 transition-all duration-300 shadow-lg p-semibold flex justify-center items-center"
            >
              {loading ? (
                <>
                  <span className="loader mr-2 border-2 border-white border-t-transparent rounded-full w-5 h-5 animate-spin"></span>
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </div>

        {/* Right: Image (hidden on small devices) */}
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