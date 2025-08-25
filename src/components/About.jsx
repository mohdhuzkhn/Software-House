import React from "react";
import aboutImg from "../assets/aboutImg.png";

const About = () => {
  return (
    <div
      className="
        min-h-screen bg-gradient-to-b from-black via-blue-950 to-black text-white
        flex flex-col lg:flex-row items-center justify-between gap-12 
        px-4 sm:px-8 lg:px-12 py-10
      "
    >
      {/* Left Content */}
      <div className="flex flex-col gap-6 w-full lg:w-1/2 text-center lg:text-left">
        <p className="bg-gradient-to-r from-blue-500 to-blue-300 text-black px-5 py-1 rounded-full text-xs sm:text-sm tracking-wide shadow-md p-semibold w-fit mx-auto lg:mx-0">
          ABOUT US
        </p>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight goat">
          Crafting{" "}
          <span className="bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">
            Designs & Solutions
          </span>{" "}
          that Inspire
        </h1>

        <p className="text-gray-300 leading-relaxed p-regular text-sm sm:text-base text-left">
          We are a creative technology company specializing in delivering
          impactful digital solutions. From stunning graphic designs and
          memorable brand logos to high-performance websites and full-stack
          development, we combine creativity with cutting-edge technology. Our
          team transforms ideas into reality—whether it's building a brand-new
          digital presence, redesigning an outdated website, or developing
          custom business software that drives success.
        </p>

        {/* Stats Section */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mt-6">
          <div className="flex flex-col gap-1">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-400 goat">50+</h2>
            <p className="text-gray-400 text-xs sm:text-sm p-regular">Brands Designed</p>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-400 goat">30+</h2>
            <p className="text-gray-400 text-xs sm:text-sm p-regular">Websites Devs</p>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-400 goat">100%</h2>
            <p className="text-gray-400 text-xs sm:text-sm p-regular">On-Time Delivery</p>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-400 goat">99%</h2>
            <p className="text-gray-400 text-xs sm:text-sm p-regular">Client Satisfaction</p>
          </div>
        </div>
      </div>

      {/* Right Content */}
      <div className="w-full sm:w-3/4 lg:w-1/2 flex justify-center">
        <div className="relative group">
          <img
            loading="lazy"
            src={aboutImg}
            alt="About us"
            className="w-full max-w-sm sm:max-w-md lg:max-w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
