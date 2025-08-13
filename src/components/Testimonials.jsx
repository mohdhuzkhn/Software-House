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
      "They developed custom business software for us that boosted efficiency by 40%. Highly professional and creative. Higly Recommended!",
    name: "Emily Johnson",
    role: "Operations Manager, AlphaCorp",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

const Testimonials = () => {
  return (
    <div className="px-12 py-16 bg-gradient-to-b from-black via-blue-950 to-black text-white">
      <p className="bg-gradient-to-r from-blue-500 to-blue-300 text-black px-5 py-1 rounded-full text-sm tracking-wide shadow-md w-fit mx-auto p-semibold">
        TESTIMONIALS
      </p>
      <h1 className="font-extrabold text-5xl text-center mt-4 goat">
        What Our{" "}
        <span className="bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">
          Clients Say
        </span>
      </h1>

      <div className="grid md:grid-cols-3 gap-8 mt-12">
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className="bg-gradient-to-b from-blue-900/40 to-black/40 border border-blue-500/40 p-6 rounded-2xl shadow-lg hover:shadow-blue-500/20 transition-shadow duration-300"
          >
            <p className="text-blue-400 mb-4">
              <Quote size={32} />
            </p>
            <p className="text-gray-300 leading-relaxed mb-6 p-regular">
              {testimonial.feedback}
            </p>
            <div className="flex items-center gap-3">
              <img
                loading="lazy"
                className="w-12 h-12 rounded-full border border-blue-400"
                src={testimonial.img}
                alt={testimonial.name}
              />
              <div>
                <p className="text-white p-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-400 p-regular">
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
