import { useState, useEffect } from "react";
import Logo from "../assets/The Webers Logo.png";
import { Menu, X } from "lucide-react"; // More aesthetic icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Home", id: "home" },
    { label: "About Us", id: "about" },
    { label: "Services", id: "services" },
    { label: "Portfolio", id: "portfolio" },
    { label: "Faqs", id: "faqs" },
  ];

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  // Disable body scroll when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <>
      {/* Navbar */}
      <nav className="sticky top-0 left-0 bg-blue-200 flex items-center justify-between px-6 lg:px-10 py-2 z-50">
        {/* Logo */}
        <img className="w-14 sm:w-16 rounded-full" src={Logo} alt="Logo" />

        {/* Menu Items (Desktop) */}
        <div className="hidden lg:flex items-center gap-10 p-regular">
          {menuItems.map((item, idx) => (
            <p
              key={idx}
              onClick={() => handleScroll(item.id)}
              className="relative cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-blue-900 after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </p>
          ))}
        </div>

        {/* Contact Us (Desktop) */}
        <div className="hidden lg:block">
          <a
            href="https://wa.me/923272695806"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer p-regular bg-blue-300 hover:bg-blue-100 transition-all duration-300 px-4 py-2 rounded-md inline-block"
          >
            Contact Us
          </a>
        </div>

        {/* Menu Icon (Mobile) */}
        <button
          className="lg:hidden transition"
          onClick={() => setIsOpen(true)}
        >
          <Menu className="w-7 h-7 text-blue-900" />
        </button>
      </nav>

      {/* Overlay (blur effect) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-blue-100 z-50 transform transition-transform duration-500 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between px-6 py-2 border-b border-gray-300">
          <img className="w-14 rounded-full" src={Logo} alt="Logo" />
          <button onClick={() => setIsOpen(false)}>
            <X className="w-6 h-6 text-blue-900 hover:text-red-600 transition" />
          </button>
        </div>

        {/* Sidebar Menu */}
        <div className="flex flex-col gap-6 px-8 py-6 text-base sm:text-lg font-medium text-gray-800 p-regular">
          {menuItems.map((item, idx) => (
            <p
              key={idx}
              onClick={() => handleScroll(item.id)}
              className="cursor-pointer hover:text-blue-600 transition"
            >
              {item.label}
            </p>
          ))}

          {/* Contact Button */}
          <a
            href="https://wa.me/923272695806"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 bg-blue-400 text-white py-2 px-4 rounded-md p-regular hover:bg-blue-500 transition inline-block text-center"
          >
            Contact Us
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
