import React from "react";
import About from "../components/About";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Howitworks from "../components/Howitworks";

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <About />
      <Howitworks />
    </div>
  );
};

export default Home;
