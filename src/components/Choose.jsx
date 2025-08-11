import React from "react";
import { ArrowRight } from "lucide-react";

const stepsData = [
  {
    id: 1,
    title: "Proven Expertise",
    description:
      "Years of delivering high-quality software solutions across industries, ensuring precision and innovation in every line of code.",
    bgColor: "bg-black",
    stepNumber: "01",
  },
  {
    id: 2,
    title: "Client-First Approach",
    description:
      "Your goals drive our process. We collaborate closely to deliver solutions that fit your vision and business needs.",
    bgColor: "bg-gradient-to-b from-black to-blue-600",
    stepNumber: "02",
  },
  {
    id: 3,
    title: "Reliable Support",
    description:
      "From kickoff to post-launch, we provide dependable support to help your software grow and adapt with your business.",
    bgColor: "bg-blue-800",
    stepNumber: "03",
  },
];

export default function Choose() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10 bg-white font-inter">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl goat font-bold text-gray-900 mb-4">
          Why Choose Us?
        </h1>
        <p className="text-lg text-blue-600 max-w-2xl mx-auto p-regular">
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
                <ArrowRight className="w-6 h-6" strokeWidth={3} />
              </div>
              <div className="flex flex-col items-center justify-end h-full">
                <div className="text-4xl font-extrabold text-white goat">
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
          href="/contact"
          className="bg-gradient-to-r from-blue-600 to-black text-white font-semibold px-8 py-3 rounded-xl shadow-md hover:opacity-90 transition-all duration-300 inline-flex items-center text-md"
        >
          <span className="mr-2 p-regular">📅</span>
          Book a Free Consultation
        </a>
      </div>
    </div>
  );
}
