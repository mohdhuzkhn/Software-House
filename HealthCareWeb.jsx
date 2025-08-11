import Appointment from "./Appointment/Appointment";
import {
  AffordableRate,
  CareJourney,
  FAQSection,
  Footer,
  Testimonial,
} from "./components";
import Hero from "./Hero/Hero";
import Navbar from "./Navbar/Navbar";
import Services from "./Services/Services";
import StepsSection from "./Steps/StepsSection";
import Testimonials from "./Testimonials/Testimonials";

const HealthCareWeb = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <CareJourney />
      <Services />
      <StepsSection />
      <Appointment />
      <FAQSection />
      <Testimonial />
      <AffordableRate />
      <Footer />
    </div>
  );
};

export default HealthCareWeb;
