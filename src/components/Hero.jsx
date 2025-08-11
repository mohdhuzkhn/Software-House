import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import heroImg from "../assets/hero3.jpg";
import heroWeb from "../assets/heroWeb.png";
import {
  Code,
  Bot,
  Figma,
  MonitorSmartphone,
  GlobeLock,
  LayoutGridIcon,
  PencilRuler,
} from "lucide-react";

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
  const words = ["Websites", "Logos", "Redesign", "Custom"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="#"
      className="relative bg-white flex items-center justify-between gap-10 py-10 pl-12 pr-4 overflow-hidden"
    >
      {/* heroWeb background image with bounce */}
      <motion.img
        src={heroWeb}
        alt="Hero Web"
        className="absolute left-80 -top-8 w-[500px] h-auto z-0"
        style={{ opacity: 0.2 }}
        initial={{ y: -200, opacity: 0 }}
        animate={{
          y: [-200, 0, -30, 0, -15, 0], // bounce effect
          opacity: 0.2,
        }}
        transition={{
          duration: 1.5,
          ease: "easeOut",
        }}
      />

      {/* Left Content with stagger */}
      <motion.div
        className="flex flex-col items-start gap-6 w-1/2 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          className="bg-blue-100 border border-blue-500 px-4 py-1 rounded-full p-regular text-sm text-blue-900"
          variants={itemVariants}
        >
          DDD - Design | Develop | Deliver
        </motion.p>

        <motion.h1
          className="slab text-6xl tracking-wider bg-gradient-to-r from-black via-blue-800 to-blue-500 text-transparent bg-clip-text"
          variants={itemVariants}
        >
          THE WEBERS
        </motion.h1>

        {/* Animated text */}
        <motion.p
          className="goat text-4xl tracking-wider text-blue-900 flex"
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
          className="grid grid-cols-2 gap-4 mt-10"
          variants={containerVariants}
        >
          {[
            { icon: <GlobeLock />, text: "Secure Websites" },
            { icon: <LayoutGridIcon />, text: "Brand Logos" },
            { icon: <PencilRuler />, text: "Website Design" },
            { icon: <MonitorSmartphone />, text: "Website Recreation" },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-2 p-regular bg-blue-100 border border-blue-500 px-4 py-2"
              variants={itemVariants}
            >
              {item.icon}
              <p>{item.text}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          className="p-semibold text-sm bg-blue-50 px-4 py-1 w-fit border border-blue-500"
          variants={itemVariants}
        >
          • Let’s build something amazing together ( Your Vision, Our Expertise
          ) — get in touch today and bring your ideas to life!
        </motion.p>
      </motion.div>

      {/* Middle Icons with stagger */}
      <motion.div
        className="flex flex-col items-center gap-2"
        variants={middleIconsContainer}
        initial="hidden"
        animate="visible"
      >
        {[
          <Code key="code" />,
          <Figma key="figma" />,
          <Bot key="bot" />,
          <MonitorSmartphone key="monitor" />,
        ].map((Icon, index) => (
          <motion.p
            key={index}
            className={
              index === 0 || index === 3
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
        className="w-1/2 border-2 border-blue-500 rounded-full p-4 relative z-10"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img loading="lazy" className="w-full" src={heroImg} alt="Hero" />
      </motion.div>
    </div>
  );
};

export default Hero;
