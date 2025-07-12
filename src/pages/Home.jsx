import React from "react";
import Hero from "../components/block/homepage/home/Hero";
import Security from "../components/block/homepage/home/Security";
import Savings from "../components/block/homepage/home/Savings";
import Sponsors from "../static/Sponsors";
import SaverMonth from "../components/block/homepage/home/SaverMonth";
import Testimony from "../components/block/homepage/home/Testimony";

const Home = () => {
  return (
    <div className="bg-[#F2F7F8]">
      <Hero />
      <Security />
      <Savings />
      <SaverMonth />
      <Testimony />
      <Sponsors />
    </div>
  );
};

export default Home;
