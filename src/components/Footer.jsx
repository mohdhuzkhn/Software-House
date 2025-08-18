import designNo3 from "../assets/design3.jpg";
import Logo from "../assets/The Webers Logo.png";

import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
} from "react-icons/fa";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-blue-100 px-4 sm:px-6 lg:px-10 py-10">
      {/* Top Promo Section */}
      <div className="bg-gradient-to-r from-[#002B5B] via-black to-[#0a0a0a] rounded-t-3xl flex flex-col lg:flex-row items-center justify-between gap-8 px-6 sm:px-10 py-10 lg:py-12">
        {/* Left Content */}
        <div className="flex flex-col items-start gap-3 w-full lg:w-3/4 text-center lg:text-left">
          <h1 className="text-2xl sm:text-3xl lg:text-5xl bg-gradient-to-r from-blue-300 to-white bg-clip-text text-transparent goat font-bold leading-snug">
            The Webers — Powering Your Digital Vision
          </h1>
          <p className="text-white/90 p-regular text-sm sm:text-base pt-3 leading-relaxed">
            We design and develop high-quality software, modern websites,
            eye-catching logos, and creative brand designs to help your
            business grow in the digital era.
          </p>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/4 flex justify-center lg:justify-end">
          <img
            loading="lazy"
            className="w-32 sm:w-44 lg:w-60 rounded-full shadow-lg"
            src={designNo3}
            alt="Design Illustration"
          />
        </div>
      </div>

      {/* Main Footer Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pt-10">
        {/* Logo + Socials */}
        <div className="flex flex-col gap-4">
          <img
            loading="lazy"
            className="w-16 sm:w-20 rounded-full"
            src={Logo}
            alt="The Webers Logo"
          />
          <p className="p-regular text-[#0a0a0a] text-sm sm:text-base leading-relaxed">
            We craft technology-driven solutions that combine creativity,
            innovation, and strategy to deliver impactful results for our
            clients worldwide.
          </p>
          <div className="flex items-center gap-3 text-base sm:text-lg">
            <a href="https://www.instagram.com/thewebers/">
              <p className="bg-blue-600 text-white p-3 rounded-full hover:bg-[#002B5B] hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                <FaInstagram />
              </p>
            </a>
            <a href="https://www.linkedin.com/company/thewebers/">
              <p className="bg-blue-600 text-white p-3 rounded-full hover:bg-[#002B5B] hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                <FaLinkedinIn />
              </p>
            </a>
            <a href="https://www.facebook.com/thewebers/">
              <p className="bg-blue-600 text-white p-3 rounded-full hover:bg-[#002B5B] hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                <FaFacebookF />
              </p>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-2">
          <h1 className="text-[#002B5B] goat text-xl sm:text-2xl lg:text-3xl font-semibold">
            Quick Links
          </h1>
          {["Home", "About Us", "Services", "Portfolio", "Faqs", "Contact"].map(
            (item, index) => (
              <p
                key={index}
                className="p-regular cursor-pointer hover:text-blue-700 transition-all duration-300 text-sm sm:text-base"
              >
                {item}
              </p>
            )
          )}
        </div>

        {/* Services */}
        <div className="flex flex-col gap-2">
          <h1 className="text-[#002B5B] goat text-xl sm:text-2xl lg:text-3xl font-semibold">
            Our Services
          </h1>
          {[
            "Custom Software Development",
            "Website Design & Development",
            "Logo & Brand Identity",
            "UI/UX Design",
            "E-commerce Solutions",
            "SEO & Digital Marketing",
          ].map((service, index) => (
            <p
              key={index}
              className="p-regular cursor-pointer hover:text-blue-700 transition-all duration-300 text-sm sm:text-base"
            >
              {service}
            </p>
          ))}
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-4 p-regular">
          <h1 className="text-[#002B5B] goat text-xl sm:text-2xl lg:text-3xl font-semibold">
            Contact Info
          </h1>

          <div className="flex gap-2 items-center">
            <FaPhoneAlt className="text-blue-700 text-lg sm:text-xl" />
            <a href="tel:+92 327 2695806">
              <p className="rubik text-sm sm:text-base">+92 327 2695806</p>
            </a>
          </div>

          <div className="flex gap-2 items-center">
            <FaEnvelope className="text-blue-700 text-lg sm:text-xl" />
            <a href="mailto:thewebers200@gmail.com">
              <p className="rubik text-sm sm:text-base">
                thewebers200@gmail.com
              </p>
            </a>
          </div>

          <div className="flex gap-2 items-center">
            <FaClock className="text-blue-700 text-lg sm:text-xl" />
            <p className="rubik text-sm sm:text-base">Mon - Sun | 24/7</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
