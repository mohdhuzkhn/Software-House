import React from "react";
import geminiIcon from "../assets/gemini-icon.svg";
import dialogflowIcon from "../assets/dialogflow-icon.svg";
import langchainIcon from "../assets/langchain-icon.svg";
import whatsappIcon from "../assets/whatsapp-icon.svg";

const tools = [
  { name: "React", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "Node.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" },
  { name: "Express", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg" },
  { name: "MongoDB", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
  { name: "Next Js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
  { name: "Tailwind CSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Figma", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
  { name: "Canva", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg" },
  { name: "Firebase", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" },
  { name: "Framer Motion", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg" },
  { name: "Material Ui", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg" },
  { name: "Postman", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" },
  { name: "Vs Code", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" },
  { name: "Wordpress", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-original.svg" },
  { name: "Slack", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/slack/slack-original.svg", hiddenOnMobile: true },
  { name: "Python", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { name: "Google Gemini", img: geminiIcon },
  { name: "Dialogflow", img: dialogflowIcon },
  { name: "LangChain", img: langchainIcon },
  { name: "WhatsApp", img: whatsappIcon },
];

const Tools = () => (
  <div className="py-12 bg-white">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Title */}
      <h3 className="text-xl sm:text-3xl md:text-4xl font-bold text-center text-[#002B5B] mb-10 goat">
        Our Expertise in Tools & Technologies
      </h3>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-10 items-center justify-items-center">
        {tools.map((tool) => (
          <div
            key={tool.name}
            className={`flex flex-col items-center text-center ${tool.hiddenOnMobile ? "hidden sm:flex" : ""
              }`}
          >
            <img
              loading="lazy"
              src={tool.img}
              alt={`${tool.name} logo`}
              className="h-12 sm:h-16 md:h-20 mb-2 transition-transform duration-300 hover:scale-110"
            />
            <p className="text-xs sm:text-sm md:text-base text-gray-600 p-regular">
              {tool.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Tools;
