import React from "react";
import aboutImg from "../assets/aboutImg.png";
import design from "../assets/design7.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-blue-950 to-black text-white flex items-center justify-between gap-8 px-12 py-10">
      {/* Left Content */}
      <div className="flex flex-col gap-6 w-1/2">
        <p className="bg-gradient-to-r from-blue-500 to-blue-300 text-black px-5 py-1 rounded-full text-sm tracking-wide shadow-md p-semibold w-fit">
          ABOUT US
        </p>

        <h1 className="text-5xl font-extrabold leading-tight goat">
          Crafting{" "}
          <span className="bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">
            Designs & Solutions
          </span>{" "}
          that Inspire
        </h1>

        <p className="text-gray-300 leading-relaxed p-regular">
          We are a creative technology company specializing in delivering
          impactful digital solutions. From stunning graphic designs and
          memorable brand logos to high-performance websites and full-stack
          development, we combine creativity with cutting-edge technology. Our
          team transforms ideas into reality—whether it's building a brand-new
          digital presence, redesigning an outdated website, or developing
          custom business software that drives success.
        </p>

        {/* Stats Section */}
        <div className="grid grid-cols-2 gap-8 mt-4">
          <div className="flex flex-col gap-1">
            <h2 className="text-3xl font-bold text-blue-400 goat">50+</h2>
            <p className="text-gray-400 p-regular">Brands Designed</p>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-3xl font-bold text-blue-400 goat">30+</h2>
            <p className="text-gray-400 p-regular">Websites Developed</p>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-3xl font-bold text-blue-400 goat">100%</h2>
            <p className="text-gray-400 p-regular">On-Time Delivery</p>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-3xl font-bold text-blue-400 goat">99%</h2>
            <p className="text-gray-400 p-regular">Client Satisfaction</p>
          </div>
        </div>
      </div>

      {/* Right Content */}
      <div className="w-1/2 flex justify-center">
        <div className="relative group">
          <img
            loading="lazy"
            src={aboutImg}
            alt="About us"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
