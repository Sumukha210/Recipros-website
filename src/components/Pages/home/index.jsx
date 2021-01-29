import React from "react";
import Categories from "./categories";
import Hero from "./Hero";
import Feedback from "./Feedback";
import ChooseUs from "./choose-us";
import Footer from "../../common/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <Categories />
      <Feedback />
      <ChooseUs />
      <Footer />
    </>
  );
};

export default Home;
