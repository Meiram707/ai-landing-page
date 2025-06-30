import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Features from "./Components/Features";
import Pricing from "./Components/Pricing";
import Footer from "./Components/Footer";
const App = () => {
  return (
     <div className="min-h-screen bg-gray-950 text-white font-sans">
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <Footer />
    </div>
  );
}


export default App
