import "./styles.css";
import FooterSection from "./Components/FooterSection";
import HeroSection from "./Components/HeroSection";
import ServicesSection from "./Components/ServicesSection";

export default function App() {
  return (
    <div className="App">
      <HeroSection />
      <ServicesSection />
      <FooterSection />
    </div>
  );
}
