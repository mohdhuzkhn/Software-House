import React from "react";
import { ArrowRight, CalendarCheck, Handshake, LifeBuoy } from "lucide-react";

const stepsData = [
  {
    id: 1,
    icon: <CalendarCheck className="w-6 h-6" />,
    title: "1-Month Free Demo / Trial",
    description:
      "Experience our website solution completely risk-free with a 1-month free demo/trial. Test the website, explore its features, and evaluate the results before making your final decision.",
    bgColor: "bg-black",
    stepNumber: "01",
  },
  {
    id: 2,
    icon: <Handshake className="w-6 h-6" />,
    title: "Client-First Approach",
    description:
      "Your goals drive our process. We collaborate closely to deliver solutions that fit your vision and business needs.",
    bgColor: "bg-gradient-to-b from-black to-blue-600",
    stepNumber: "02",
  },
  {
    id: 3,
    icon: <LifeBuoy className="w-6 h-6" />,
    title: "Ongoing Support & Growth",
    description:
      "Our support doesn't end after delivery. We provide ongoing assistance, updates, improvements, and technical support to help your website continue performing and growing with your business.",
    bgColor: "bg-blue-800",
    stepNumber: "03",
  },
];

export default function Choose() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10 bg-white font-inter">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl goat font-bold text-gray-900 mb-4">
          Why Choose Us?
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-blue-600 max-w-2xl mx-auto p-regular">
          We blend creativity, technical mastery, and strategic thinking to
          build software that delivers real results.
        </p>
      </div>

      {/* Steps */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 mb-10">
        {stepsData.map((step) => (
          <div
            key={step.id}
            className="flex flex-col lg:flex-row items-center lg:items-stretch group"
          >
            {/* Card */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 md:p-8 max-w-md flex-1 flex flex-col justify-between shadow-md hover:shadow-xl transition-all duration-300">
              <div>
                <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                  {step.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-6 goat">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm p-regular">
                  {step.description}
                </p>
              </div>
            </div>

            {/* Step Number Badge */}
            <div
              className={`${step.bgColor} rounded-2xl w-28 md:w-20 flex-shrink-0 flex flex-col justify-between items-center py-8 lg:py-6 mt-6 lg:mt-0 lg:-ml-3 shadow-xl`}
            >
              {/* Arrow */}
              <div className="absolute top-4 right-4 text-white opacity-80">
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={3} />
              </div>
              <div className="flex flex-col items-center justify-end h-full">
                <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white goat">
                  {step.stepNumber}
                </div>
                <div className="text-sm font-medium text-white mt-1 p-regular">
                  Point
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center">
        <a
          href="https://calendly.com/thewebers200/30min"
          className="bg-gradient-to-r from-blue-600 to-black text-white font-semibold px-6 sm:px-8 py-3 rounded-xl shadow-md hover:opacity-90 transition-all duration-300 inline-flex items-center text-sm sm:text-md"
        >
          <span className="mr-2 p-regular">📅</span>
          Book a Free Consultation
        </a>
      </div>
    </div>
  );
}
