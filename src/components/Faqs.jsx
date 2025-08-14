import React, { useState } from "react";
import { HelpCircle } from "lucide-react";

const Faqs = () => {
  const [selectedCategory, setSelectedCategory] = useState("Designing");

  const faqData = {
    Designing: [
      {
        question: "What design tools do you use?",
        answer:
          "We use Figma, Canva to craft sleek, user-friendly, and modern designs tailored for your brand.",
      },
      {
        question: "Do you offer custom UI/UX designs?",
        answer:
          "Yes! Every design we create is fully custom and focused on enhancing user experience and brand identity.",
      },
      {
        question: "Can you redesign my existing website?",
        answer:
          "Absolutely! We can revamp your site’s visuals, layout, and usability while keeping your goals in mind.",
      },
    ],
    Development: [
      {
        question: "Which technologies do you work with?",
        answer:
          "We specialize in React, Next.js, Node.js, Tailwind CSS, and integrate APIs for powerful functionality.",
      },
      {
        question: "Do you build responsive websites?",
        answer:
          "Yes! All our websites are fully responsive and optimized for all devices, ensuring a seamless experience.",
      },
      {
        question: "Can you integrate third-party services?",
        answer:
          "Definitely! We can integrate payment gateways, CRMs, and analytics tools to boost your platform’s performance.",
      },
    ],
    "Pricing & Services": [
      {
        question: "How do you charge for projects?",
        answer:
          "We offer both fixed-price packages and hourly rates depending on project scope and complexity.",
      },
      {
        question: "Do you offer ongoing support?",
        answer:
          "Yes! We provide maintenance packages to ensure your platform stays updated and secure.",
      },
      {
        question: "Can you handle urgent projects?",
        answer:
          "We can take urgent projects depending on our availability. Rush fees may apply for expedited delivery.",
      },
    ],
  };

  const categories = Object.keys(faqData);

  return (
    <div className="py-10 px-12 bg-white text-black">
      {/* Header */}
      <div className="flex flex-col items-start gap-4 mb-10">
        <h1 className="goat font-bold text-4xl max-w-3xl bg-gradient-to-r from-blue-400 to-blue-950 bg-clip-text text-transparent">
          Your Questions Resolved At 1 Place
        </h1>
        <div className="flex items-center justify-between w-full flex-wrap gap-4">
          <p className="p-regular max-w-3xl text-gray-800">
            We've gathered the most frequently asked questions from our Clients.
            If you don't find what you're looking for, let us know, and we'll be
            happy to assist you.
          </p>
          <button
            className="bg-blue-400 hover:bg-blue-500 transition px-4 py-2 rounded p-regular text-sm text-white cursor-pointer"
          >
            Contact Us
          </button>
        </div>
      </div>

      {/* Category Selector */}
      <div className="flex gap-2 bg-blue-100 px-2 py-2 rounded-lg w-fit mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-lg font-medium transition p-regular text-sm ${
              selectedCategory === cat
                ? "bg-gradient-to-r from-blue-600 to-blue-400 text-white"
                : "bg-white text-black hover:bg-blue-300"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* FAQ Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {faqData[selectedCategory].map((faq, index) => (
          <div
            key={index}
            className="bg-blue-50 text-black rounded-md p-6 shadow hover:shadow-md transition flex flex-col items-start gap-4"
          >
            <div className="bg-blue-100 p-3 rounded-full">
              <HelpCircle className="text-blue-500" size={24} />
            </div>
            <h3 className="font-semibold text-lg p-semibold">{faq.question}</h3>
            <p className="text-gray-600 p-regular">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
