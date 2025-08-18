import React from "react";
import { Quote } from "lucide-react";

const testimonialsData = [
  {
    feedback:
      "They completely transformed our brand with a stunning logo and a modern website. Our online presence has never looked better!",
    name: "Sarah Mitchell",
    role: "CEO, BrightPath Agency",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    feedback:
      "From concept to launch, their team delivered a sleek, fast, engaging and fully responsive website that exceeded our expectations.",
    name: "Daniel Lee",
    role: "Founder, TechNova",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    feedback:
      "They developed custom business software for us that boosted efficiency by 40%. Highly professional and creative. Highly Recommended!",
    name: "Emily Johnson",
    role: "Operations Manager, AlphaCorp",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

const Testimonials = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-12 py-12 sm:py-16 bg-gradient-to-b from-black via-blue-950 to-black text-white">
      {/* Tag */}
      <p className="bg-gradient-to-r from-blue-500 to-blue-300 text-black px-4 py-1 rounded-full text-xs sm:text-sm tracking-wide shadow-md w-fit mx-auto p-semibold">
        TESTIMONIALS
      </p>

      {/* Heading */}
      <h1 className="font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center mt-4 goat leading-snug">
        What Our{" "}
        <span className="bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">
          Clients Say
        </span>
      </h1>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-10 sm:mt-12">
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className="bg-gradient-to-b from-blue-900/40 to-black/40 border border-blue-500/40 p-5 sm:p-6 rounded-2xl shadow-lg hover:shadow-blue-500/20 transition-shadow duration-300"
          >
            {/* Quote icon */}
            <p className="text-blue-400 mb-3 sm:mb-4">
              <Quote size={28} className="sm:w-8 sm:h-8" />
            </p>

            {/* Feedback */}
            <p className="text-gray-300 leading-relaxed mb-5 sm:mb-6 text-sm sm:text-base md:text-[15px] p-regular">
              {testimonial.feedback}
            </p>

            {/* Author Info */}
            <div className="flex items-center gap-3">
              <img
                loading="lazy"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-blue-400"
                src={testimonial.img}
                alt={testimonial.name}
              />
              <div>
                <p className="text-white p-semibold text-sm sm:text-base">
                  {testimonial.name}
                </p>
                <p className="text-xs sm:text-sm text-gray-400 p-regular">
                  {testimonial.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
