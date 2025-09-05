import React from "react";
import { Link } from "react-router-dom";
import portfolio1 from "../assets/Coaching.png";
import portfolio2 from "../assets/Crypto.png";
import portfolio3 from "../assets/Dashboard.png";
import portfolio4 from "../assets/Finance.png";
import portfolio5 from "../assets/Gemini.png";
import portfolio6 from "../assets/HooBank.png";
import portfolio7 from "../assets/Leadify.png";
import portfolio8 from "../assets/Gross.png";
import portfolio9 from "../assets/PortfolioWeb.png";
import portfolio10 from "../assets/Virtual.png";
import portfolio11 from "../assets/2.png";
import portfolio15 from "../assets/portfolio15.webp";

const Portfolio = () => {
  const portfolioItems = [
    {
      img: portfolio7,
      category: "Web Development",
      title: "Next.js SaaS Website",
      desc: "A Next.js SaaS website crafted for a software agency with modern design.",
      link: "https://dd-wa.vercel.app/",
    },
    {
      img: portfolio3,
      category: "Software Development",
      title: "Dashboard UI",
      desc: "A collaborative dashboard where teams can work and manage tasks together.",
      link: "https://dashboarddesign-five.vercel.app/",
    },
    {
      img: portfolio1,
      category: "Web Design",
      title: "Coaching Center Website",
      desc: "A responsive website built for a coaching center to manage courses online.",
      link: "https://tss-database-f5beb.web.app/",
    },
    {
      img: portfolio4,
      category: "Custom Development",
      title: "Finance Dashboard",
      desc: "A full MERN stack finance dashboard web app with analytics & insights.",
      link: "/",
    },
    {
      img: portfolio8,
      category: "Software Development",
      title: "Full Stack Grocery Application",
      desc: "A full MERN stack grcoery web app with admin dashboard & stripe integration.",
      link: "/",
    },
    {
      img: portfolio15,
      category: "Custom Development",
      title: "Task Manager",
      desc: "A full frontend based task management app to manage your daily tasks.",
      link: "/",
    },
    {
      img: portfolio11,
      category: "Graphic Design",
      title: "Brand Identity",
      desc: "A modern brand agency logo design package with strong visual appeal.",
      link: "https://the-webers.vercel.app/",
    },
    {
      img: portfolio6,
      category: "Landing Page",
      title: "Bank Payments AI Page",
      desc: "A Next.js landing page focused on AI-driven bank payments solutions.",
      link: "https://apexwallet.vercel.app/",
    },
    {
      img: portfolio10,
      category: "Landing Page",
      title: "Developers Landing Page",
      desc: "A React.js landing page tailored for developers and tech enthusiasts.",
      link: "https://virtualsolutions-three.vercel.app/",
    },
    {
      img: portfolio9,
      category: "Personal Portfolio",
      title: "Next.js Portfolio Site",
      desc: "A modern Next.js portfolio website to showcase projects and skills.",
      link: "https://annas-portfolio-ten.vercel.app/",
    },
    {
      img: portfolio2,
      category: "Software Development",
      title: "Crypto Price Tracker",
      desc: "A crypto software web application for live daily price updates.",
      link: "https://cryptotrack-neon.vercel.app/",
    },
    {
      img: portfolio5,
      category: "AI Application",
      title: "Gemini Chat Bot",
      desc: "An AI chatbot powered by Gemini API for smart conversational support.",
      link: "https://gemini-bot-pi.vercel.app/",
    },
  ];

  return (
    <div className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-12 bg-gradient-to-b from-black via-blue-950 to-black text-white">
      {/* Header */}
      <div className="flex flex-col gap-3 items-center justify-center mb-8 sm:mb-12">
        <h1 className="goat font-bold text-3xl sm:text-4xl md:text-5xl text-center tracking-wide bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
          Our Creative Showcase
        </h1>
        <p className="p-regular text-center text-gray-300 max-w-2xl text-sm sm:text-base md:text-lg">
          Discover our finest design & development work — each project a blend
          of creativity, technology, and strategy, tailored to elevate brands
          and experiences.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-7xl mx-auto">
        {portfolioItems.map((item, idx) => (
          <Link
            to={item.link}
            key={idx}
            target="_blank"
            className="flex flex-col items-start gap-3 bg-white text-black rounded-xl overflow-hidden shadow-md transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl border-none outline-none"
          >
            <img
              loading="lazy"
              src={item.img}
              alt={item.title}
              className="w-full h-48 sm:h-56 md:h-60 lg:h-72 hover:scale-105 transition-transform duration-500"
            />
            <div className="p-4 sm:p-5 flex flex-col gap-2">
              <p className="bg-blue-200 text-blue-900 rounded-full px-3 sm:px-4 py-1 text-xs sm:text-sm font-medium w-fit p-regular">
                {item.category}
              </p>
              <h1 className="font-semibold text-base sm:text-lg md:text-xl p-semibold">
                {item.title}
              </h1>
              <p className="text-gray-600 text-xs sm:text-sm md:text-base p-regular">
                {item.desc}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
