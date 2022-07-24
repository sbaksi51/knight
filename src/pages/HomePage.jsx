import React from "react";
import About from "../components/About";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Howitworks from "../components/Howitworks";
import CallToAction from "../components/CallToAction";

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <About />
      <Howitworks />
      <CallToAction />
    </div>
  );
};

export default Home;
