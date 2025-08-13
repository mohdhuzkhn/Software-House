import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import StepSection from "./components/StepsSection";
import Inquire from "./components/Inquire";
import Choose from "./components/Choose";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Tools from "./components/Tools";
import Faqs from "./components/Faqs";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Choose />
      <Services />
      <Tools />
      <StepSection />
      <Portfolio />
      <Faqs />
      <Testimonials />
      <Contact />
      <Inquire />
      <Footer />
    </div>
  );
};

export default App;
