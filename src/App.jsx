import React from "react";
import { ThemeProvider } from "./context/ThemeProvider";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Features from "./Components/Features";
import Pricing from "./Components/Pricing";
import Footer from "./Components/Footer";
import FAQAccordion from "./Components/FAQAccordion";
import TestimonialsCarousel from "./Components/TestimonialsCarousel";
import BrandsBar from "./Components/BrandsBar";

const App = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-white font-sans">
        <Header />
        <Hero />
        <Features />
        <BrandsBar />
        <TestimonialsCarousel />
        <Pricing />
        <FAQAccordion />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
