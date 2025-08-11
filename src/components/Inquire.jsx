import React from "react";
import { Phone, AtSign, Mail, ArrowUpRight } from "lucide-react";

const footerCards = [
  {
    id: "schedule-call",
    title: "Schedule a call",
    icon: Phone,
    arrowBgColor: "bg-blue-600",
    link: "tel:+92 327 2695806",
  },
  {
    id: "book-appointment",
    title: "Book an Appointment",
    icon: AtSign,
    arrowBgColor: "bg-black",
    link: "mailto:thewebers200@gmail.com",
  },
  {
    id: "send-message",
    title: "Send a Message",
    icon: Mail,
    arrowBgColor: "bg-blue-400",
    link: "mailto:thewebers200@gmail.com", // or WhatsApp link
  },
];

export default function Inquire() {
  return (
    <footer className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {footerCards.map((card) => (
            <a
              key={card.id}
              href={card.link}
              className="relative bg-white border border-gray-200 p-6 rounded-xl shadow-sm overflow-hidden group hover:shadow-xl hover:border-blue-500 transition-all duration-300"
            >
              {/* Icon Circle */}
              <div className="absolute top-0 left-0 -ml-4 -mt-4 w-24 h-24 bg-gradient-to-br from-black to-blue-800 rounded-full flex items-center justify-center transform scale-100 group-hover:scale-105 transition-transform duration-300">
                <card.icon className="h-10 w-10 text-white" strokeWidth={1.5} />
              </div>

              {/* Arrow Button */}
              <div
                className={`absolute top-4 right-4 ${card.arrowBgColor} p-2 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}
              >
                <ArrowUpRight className="h-5 w-5 text-white" strokeWidth={2} />
              </div>

              {/* Title */}
              <p className="text-xl text-gray-900 ml-20 pt-4 p-semibold">
                {card.title}
              </p>

              {/* Overlay effect on hover */}
              <div className="absolute inset-0 bg-blue-50 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
