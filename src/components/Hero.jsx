import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import heroImg from "../assets/hero3.jpg";
import heroWeb from "../assets/heroWeb.png";
import { Globe, AppWindow, Bot, ShoppingCart, Smartphone } from "lucide-react";
import { FaWordpress } from "react-icons/fa";

// Variants
const containerVariants = {
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.4 },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const middleIconsContainer = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, staggerChildren: 0.6 },
  },
};

const iconVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
};

const Hero = () => {
  const words = ["Websites", "Web Apps", "Chatbots", "WordPress Sites", "Online Stores", "Mobile Apps"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="
        relative bg-white flex flex-col lg:flex-row items-center 
        justify-between gap-10 py-10 px-4 sm:px-8 lg:px-12 overflow-hidden
      "
    >
      {/* heroWeb background image with bounce */}
      <motion.img
        loading="lazy"
        src={heroWeb}
        alt="Hero Web"
        className="absolute hidden md:block left-1/2 -translate-x-1/2 lg:left-80 -top-8 w-[300px] sm:w-[400px] lg:w-[500px] h-auto z-0"
        style={{ opacity: 0.2 }}
        initial={{ y: -200, opacity: 0 }}
        animate={{
          y: [-200, 0, -30, 0, -15, 0], // bounce effect
          opacity: 0.2,
        }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />

      {/* Left Content with stagger */}
      <motion.div
        className="flex flex-col items-start gap-6 sm:gap-6 w-full lg:w-1/2 relative z-10 text-center lg:text-left"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          className="bg-blue-100 border border-blue-500 px-4 py-1 rounded-full p-regular text-xs sm:text-sm text-blue-900 mx-auto lg:mx-0"
          variants={itemVariants}
        >
          DDD - Design | Develop | Deliver
        </motion.p>

        <motion.h1
          className="slab text-4xl sm:text-5xl lg:text-6xl tracking-wider bg-gradient-to-r from-black via-blue-800 to-blue-500 text-transparent bg-clip-text"
          variants={itemVariants}
        >
          THE WEBERS
        </motion.h1>

        {/* Animated text */}
        <motion.p
          className="goat text-2xl sm:text-3xl lg:text-4xl tracking-wider text-blue-900 flex justify-center lg:justify-start"
          variants={itemVariants}
        >
          We Built&nbsp;
          <AnimatePresence mode="wait">
            <motion.span
              key={words[currentIndex]}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="text-blue-600 font-bold"
            >
              {words[currentIndex]}
            </motion.span>
          </AnimatePresence>
        </motion.p>

        {/* Features with stagger */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 sm:mt-10 w-full"
          variants={containerVariants}
        >
          {[
            { icon: <Globe />, text: "Websites" },
            { icon: <AppWindow />, text: "Web Applications" },
            { icon: <ShoppingCart />, text: "E-Commerce Websites" },
            { icon: <Smartphone />, text: "Mobile Applications" },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-2 p-regular bg-blue-100 border border-blue-500 px-4 py-2 justify-center sm:justify-start"
              variants={itemVariants}
            >
              {item.icon}
              <p>{item.text}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          className="p-semibold text-xs sm:text-sm bg-blue-50 px-4 py-1 w-full sm:w-fit border border-blue-500 text-center lg:text-left"
          variants={itemVariants}
        >
          • Let’s build something amazing together ( Your Vision, Our Expertise ) —
          get in touch today and bring your ideas to life!
        </motion.p>
      </motion.div>

      {/* Middle Icons with stagger */}
      <motion.div
        className="flex flex-row lg:flex-col items-center justify-center gap-2"
        variants={middleIconsContainer}
        initial="hidden"
        animate="visible"
      >
        {[
          <Globe key="globe" />,
          <AppWindow key="appwindow" />,
          <Bot key="bot" />,
          <FaWordpress key="wordpress" />,
          <ShoppingCart key="cart" />,
          <Smartphone key="smartphone" />,
        ].map((Icon, index) => (
          <motion.p
            key={index}
            className={
              index % 2 === 0
                ? "border-2 border-blue-500 p-2 bg-blue-100"
                : "bg-white border-2 border-blue-500 p-2 rounded-full"
            }
            variants={iconVariants}
          >
            {Icon}
          </motion.p>
        ))}
      </motion.div>

      {/* Right Image slide from right */}
      <motion.div
        className="w-full sm:w-3/4 lg:w-1/2 p-2 sm:p-4 relative z-10"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img loading="lazy" className="w-full h-auto rounded-full" src={heroImg} alt="Hero" />
      </motion.div>
    </div>
  );
};

export default Hero;