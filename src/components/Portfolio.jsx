import React from "react";

const Portfolio = () => {
  const portfolioItems = [
    {
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
      category: "Web Development",
      title: "Next.js SaaS Landing Page",
      desc: "A responsive, high-performance SaaS landing page built with Next.js and TailwindCSS for modern startups.",
    },
    {
      img: "https://images.unsplash.com/photo-1522202195461-6cc64b100d8a?w=800&q=80",
      category: "UI/UX Design",
      title: "E-Commerce Mobile App UI",
      desc: "A sleek mobile shopping experience with intuitive navigation and seamless checkout process.",
    },
    {
      img: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=800&q=80",
      category: "Branding",
      title: "Corporate Identity & Logo Design",
      desc: "A complete branding package with a distinctive logo and cohesive visual identity.",
    },
    {
      img: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800&q=80",
      category: "Custom Development",
      title: "CRM Dashboard for Business",
      desc: "A powerful CRM dashboard with analytics, customer management, and task tracking tools.",
    },
    {
      img: "https://images.unsplash.com/photo-1523475496153-3d6cc3000f82?w=800&q=80",
      category: "Graphic Design",
      title: "Marketing Campaign Graphics",
      desc: "Eye-catching social media and ad graphics designed to boost brand engagement.",
    },
    {
      img: "https://images.unsplash.com/photo-1525186402429-b4ff38bedbec?w=800&q=80",
      category: "Product Design",
      title: "3D Product Visualization",
      desc: "Realistic 3D renders that bring your products to life before manufacturing.",
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

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
        {portfolioItems.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-start gap-3 bg-white text-black rounded-xl overflow-hidden shadow-md transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl"
          >
            <img
              loading="lazy"
              src={item.img}
              alt={item.title}
              className="w-full h-48 sm:h-56 md:h-60 lg:h-64 object-cover hover:scale-105 transition-transform duration-500"
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
