import React, { useState } from "react";
import { Wrench, PenTool, Figma, CodeXml, HeadsetIcon } from "lucide-react";
import design2 from "../assets/design2.jpg";
import design1 from "../assets/design1.jpg";
import design5 from "../assets/design5.jpg";

const Services = () => {
  const [activeService, setActiveService] = useState("Graphics");

  const serviceData = {
    Graphics: {
      icon: <PenTool />,
      title: "Graphics",
      desc: "We create stunning visual assets — from branding kits to social media creatives — that speak for your brand and captivate your audience.",
      img: design2,
    },
    Designing: {
      icon: <Figma />,
      title: "Designing",
      desc: "Our UI/UX designs blend aesthetics with usability, delivering seamless and engaging experiences for your customers.",
      img: design1,
    },
    Development: {
      icon: <CodeXml />,
      title: "Development",
      desc: "We build high-performance, scalable, and secure web applications tailored to your business needs using modern tech stacks.",
      img: design5,
    },
  };

  return (
    <div className="py-14 px-12 bg-gradient-to-b from-black via-blue-950 to-black text-black">
      {/* Header */}
      <div className="flex flex-col gap-4 items-start mb-10">
        <div className="flex items-center gap-2 p-regular bg-blue-200 text-black px-3 py-1 rounded-full">
          <Wrench />
          <p>Services</p>
        </div>
        <h1 className="text-5xl goat bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
          Our Services
        </h1>
        <p className="p-regular text-gray-300 max-w-3xl">
          We roar success by delivering cutting-edge solutions — from versatile
          design and brand identity to high-quality development powered by the
          latest technologies.
        </p>
      </div>

      {/* Service Tabs */}
      <div className="flex items-center justify-between mt-6 px-4 py-4 max-w-6xl mx-auto bg-blue-200 rounded-t-3xl text-black font-medium">
        {Object.keys(serviceData).map((service) => (
          <button
            key={service}
            onClick={() => setActiveService(service)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${
              activeService === service
                ? "bg-gradient-to-r from-blue-600 to-blue-400 text-white"
                : "hover:bg-blue-300"
            }`}
          >
            {serviceData[service].icon}
            <span>{service}</span>
          </button>
        ))}
      </div>

      {/* Active Service Content */}
      <div className="bg-blue-300 max-w-6xl mx-auto p-6 flex flex-col md:flex-row items-center gap-10 transition-all duration-500">
        {/* Left content */}
        <div className="flex flex-col gap-4 items-start md:w-1/2">
          <div className="bg-blue-200 rounded-full p-3 text-black">
            {serviceData[activeService].icon}
          </div>
          <h1 className="text-3xl goat font-bold text-black">
            {serviceData[activeService].title}
          </h1>
          <p className="text-gray-800 p-regular">
            {serviceData[activeService].desc}
          </p>
          <div className="flex items-center gap-2 bg-blue-400 text-white rounded-full px-4 py-2 cursor-pointer hover:bg-blue-500 transition p-regular">
            <button>Let's Chat</button>
            <HeadsetIcon />
          </div>
        </div>

        {/* Right image */}
        <div className="md:w-1/2 rounded-lg overflow-hidden shadow-lg">
          <img
            loading="lazy"
            src={serviceData[activeService].img}
            alt={serviceData[activeService].title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
