import React from "react";
import Button from "../components/reusable/Button";
import story from "../assets/story.png";
import story2 from "../assets/story2.png";
import { FaGooglePlay, FaApple } from "react-icons/fa";

const Stories = () => {
  return (
    <div
      className=" max-w-[1280px] mx-auto px-16"
      style={{
        backgroundColor: "#F2F7F8",
      }}
    >
      <section className="flex  mx-auto items-center px-16 justify-between">
        <div className=" text-[#122231]">
          <h1 className=" text-[48px] mb-[32px] font-bold">
            Loved by our Customers{" "}
          </h1>
          <p className="w-[65%] text-2xl  mb-6">
            Stories of happy savers who Piggyvest has helped or is helping save
            for what truly matters to them.
          </p>
          <div className="flex gap-4 mb-8">
            <Button
              label="Add your story"
              textColor="#FFFFFF"
              bgColor="#122231"
              borderColor="#122231"
            />
          </div>
        </div>

        <div>
          <img src={story} alt="Stories" className="max-h-[800px] " />
        </div>
      </section>

      <section className="max-w-[1280px] mx-auto px-16 pt-22 pb-11">
        <div className="text-center ">
          <img src={story2} alt="explore" className="max-h-[250px]" />
        </div>

        <div className="text-center mt-10">
          <h1>Join 5+ million people who save and invest with us</h1>
        </div>

        <span>
          <Button
            label="Get in iPhone"
            textColor="#FFFFFF"
            bgColor="#122231"
            borderColor="#122231"
            iconTitle={<FaApple />}
          />
        </span>

        <span>
          <Button
            label="Get in Android"
            textColor="#FFFFFF"
            borderColor="#122231"
            bgColor="#122231"
            iconTitle={<FaGooglePlay />}
          />
        </span>
      </section>

      <section
        className="max-w-[1280px] px-16 pb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto"
        style={{
          backgroundColor: "#F2F7F8",
        }}
      >
        <div className="bg-white rounded-3xl pt-6 px-6">
          <h1
            className="text-4xl font-bold w-[6px] mb-3"
            style={{
              color: "#7913E5",
              fontSize: "3rem",
            }}
          >
            Investments simplified
          </h1>
          <p
            className="w-[100%] text-lg mb-20"
            style={{
              color: "#485F6E",
            }}
          >
            With minimum investments starting as low as N5,000, investment is no
            longer out of reach. Everyone is welcome.
          </p>
          {/* <img src={} alt="Investors" className="max-h-[250px]" /> */}
        </div>

        <div className="bg-white rounded-3xl pt-6 px-6">
          <h1
            className="text-4xl font-bold mb-3"
            style={{
              color: "#7913E5",
              fontSize: "3rem",
            }}
          >
            Invest confidently
          </h1>

          <p
            className="w-[100%] text-lg mb-20"
            style={{
              color: "#485F6E",
            }}
          >
            We work with leading licensed investment houses such as ARM, AIICO
            and Stanbic.
          </p>
          {/* <img src={invest3} alt="explore" className="max-h-[250px]" /> */}
        </div>

        <div className="bg-white rounded-3xl pt-6 px-6 ">
          <h1
            className=" font-bold w-5/5 mb-3"
            style={{
              color: "#7913E5",
              fontSize: "2rem",
            }}
          >
            Diversify your portfolio
          </h1>

          <p
            className="w-[100%] text-lg mb-20"
            style={{
              color: "#485F6E",
              backgroundColor: "#F2F7F8",
            }}
          >
            Invest in various industries such as fixed income instruments,
            agriculture, transportation, etc.
          </p>

          {/* <img src={invest4} alt="Investment" className="max-h-[250px]" /> */}
        </div>
      </section>

      <section className="max-w-[100%] flex mx-auto py-20">
        <div className="w-4/5 bg-[#7913E5] text-white text-left leading-[2] px-16 py-20">
          <h1 className="font-[51px]">
            We've made it easier for anyone to get started.
          </h1>
          <p>
            Finally, you can access pre-vetted low-medium risk primary and
            secondary investment opportunities easily with any amount you have.
            No hidden fees/charges. Thorough due diligence and pre-vetting on
            all investments are carried out for maximum safety.
          </p>
        </div>

        <div className="w-3/5">{/* <img src={invest5} alt="Growth" /> */}</div>
      </section>

      <section className="flex">
        <div>
          <h1>Recent Opportunities on Investify</h1>
        </div>

        <div className="cards"></div>
      </section>
    </div>
  );
};

export default Stories;
