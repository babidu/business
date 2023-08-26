import React from "react";
import HeroSection from "./HeroSection";
// import heroImg from "../../image/hero.svg";
import heroImg from "../../image/animated1.jpg";

import Products from "./Products";
import Contact from "./Contact";
const Home = () => {
  return (
    <>
      <HeroSection heading="Babidul  Hassan" imgSrc={heroImg} />
      <Products />
      <Contact />
    </>
  );
};
export default Home;
