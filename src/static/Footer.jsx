import React from "react";
import ashPiggy from "../assets/ashPiggy.svg";

const Footer = () => {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-[#F2F7F8] py-20 max-w-[1280px] mx-auto px-16 foot ">
      <div className="flex flex-col w-40 gap-6 items-center">
        <img className="w-40 " src={ashPiggy} alt="piggyvest-logo" />

        <img
          className="w-30 "
          src={
            "https://www.piggyvest.com/_next/static/images/compliance-378fe121550ceac55d0eeb8c5edac2e7.avif"
          }
          alt="piggytech-global-logo"
        />
      </div>

      <div className="flex max-md:w-[100%] max-md:flex-wrap gap-10">
        <section className=" max-md:w-[40%] ">
          <h4 className="text-[#122231]">Products</h4>
          <ul className="text-[#485F6E] flex flex-col gap-3">
            <li>
              <a href="">Piggybank</a>
            </li>
            <li>
              <a href="">Invest</a>
            </li>
            <li>
              <a href="">Safelock</a>
            </li>
            <li>
              <a href="">Target Savings</a>
            </li>
            <li>
              <a href="">Flex Naira</a>
            </li>
            <li>
              <a href="">Flex Dollar</a>
            </li>
          </ul>
        </section>

        <main className=" max-md:w-[40%] ">
          <ul>
            <li>
              <a href=""></a>
            </li>
          </ul>
        </main>
      </div>
    </main>
  );
};

export default Footer;
