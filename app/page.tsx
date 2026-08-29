import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import CitiesSection from "@/components/CitiesSection";
import WhySpeedySection from "@/components/WhySpeedySection";
import JoinFleetSection from "@/components/JoinFleetSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ServicesSection />
        <CitiesSection />
        <WhySpeedySection />
        <JoinFleetSection />
      </main>
      <Footer />
    </>
  );
}
