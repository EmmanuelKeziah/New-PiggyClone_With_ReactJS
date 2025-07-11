import React from "react";
import Hero from "../components/block/homepage/home/Hero";
import Security from "../components/block/homepage/home/Security";
import Savings from "../components/block/homepage/home/Savings";
import Sponsors from "../static/Sponsors";

const Home = () => {
  return (
    <div className="bg-[#F2F7F8]">
      <Hero />
      <Security />
      <Savings />
      <Sponsors />
    </div>
  );
};

export default Home;
