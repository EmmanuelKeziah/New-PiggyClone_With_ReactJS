import React from "react";
import ashPiggy from "../assets/ashPiggy.svg";
import facebook from "../assets/facebook.svg";
import insta from "../assets/insta.svg";
import twitter from "../assets/twitter.svg";
import youtube from "../assets/youtube.svg";
import tik from "../assets/tik.svg";

const Footer = () => {
  return (
    <div className="bg-[#F2F7F8] w-full foot">
      <div className="max-w-[1280px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-20 px-16 mx-auto">
        <div className="flex flex-col w-40 gap-6 items-center">
          <img className="w-40" src={ashPiggy} alt="piggyvest-logo" />
          <img
            className="w-30"
            src="https://www.piggyvest.com/_next/static/images/compliance-378fe121550ceac55d0eeb8c5edac2e7.avif"
            alt="piggytech-global-logo"
          />
        </div>

        <div className="flex gap-10">
          <section className="min-w-[40%]">
            <h4>Products</h4>
            <ul className="flex flex-col gap-3">
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

          <section className="min-w-[40%]">
            <h4>Company</h4>
            <ul>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">FAQs</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
            </ul>
          </section>

          <section>
            <h4>Legal</h4>
            <ul>
              <li>
                <a href="">Terms</a>
              </li>
              <li>
                <a href="">Privacy</a>
              </li>
              <li>
                <a href="">Security</a>
              </li>
            </ul>
          </section>
        </div>

        <div className="flex flex-col items-end max-md:items-start">
          <div className="flex gap-4">
            <img src={facebook} alt="facebook-logo" />
            <img src={insta} alt="instagram-logo" />
            <img src={twitter} alt="twitter-logo" />
            <img src={youtube} alt="youtube-logo" />
            <img src={tik} alt="tiktok-logo" />
          </div>

          <div className="text-right max-md:text-left text-[#485f6e] mt-2">
            <p>
              Tesmot house, Abdulrahman Okene close, <br />
              Victoria Island, Lagos, Nigeria.
            </p>
            <p>contact@piggyvest.com</p>
            <p>+234 700 933 9339</p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-300 py-10 px-16 max-w-[1280px] mx-auto">
        <p className="text-sm text-[#818C97]">
          Piggyvest (formerly piggybank.ng) is the leading online savings &
          investing platform in Nigeria. For over 9 years, our customers have
          saved and invested billions of Naira that they would normally be
          tempted to spend.
        </p>
        <p className="text-sm mt-4 text-[#0859AE]">
          2016 - 2025 PiggyTech Global Limited - RC 1405222
        </p>
      </div>
    </div>
  );
};

export default Footer;
