import React from "react";
import Hero from "../components/block/homepage/Hero";
import Security from "../components/block/homepage/Security";
import Savings from "../components/block/homepage/Savings";
import NavMobile from "../static/NavMobile";

const Home = () => {
  return (
    <div className="">
      <Hero />
      <Security />
      <Savings />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
