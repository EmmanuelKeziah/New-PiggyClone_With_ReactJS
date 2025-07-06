import React from "react";
import invest1 from "../assets/invest1.png";
import invest2 from "../assets/invest2.png";
import invest3 from "../assets/invest3.png";
import invest4 from "../assets/invest4.png";
import Button from "../components/reusable/Button";
import { FaGooglePlay, FaApple } from "react-icons/fa";
import invest5 from "../assets/invest5.png";
const Invest = () => {
  return (
    <div
      className=" "
      style={{
        backgroundColor: "#F2F7F8",
      }}
    >
      <section
        className="flex max-w-[1280px] mx-auto items-center px-16 justify-between  pt-20"
        style={{
          backgroundColor: "#7913E7",
        }}
      >
        <div className=" text-white">
          <h1 className=" text-[48px] mb-[32px] font-bold">Invest on the go</h1>
          <span
            className="bg-white text-[20px] mb-8 inline-block px-6 py-3 rounded-4xl"
            style={{
              color: "#7912E5",
              backgroundColor: "#EFF5FC",
            }}
          >
            Up to 35% returns
          </span>
          <p className="w-[65%] text-2xl  mb-6">
            Invest securely and confidently on the go. Up to 35% returns, 6-12
            month duration.
          </p>
          <div className="flex gap-4 mb-8">
            <Button
              label="Get on iPhone"
              textColor="#FFFFFF"
              bgColor="#122231"
              borderColor="#122231"
              iconTitle={<FaApple />}
            />
            <Button
              label="Get on Android"
              textColor="#FFFFFF"
              borderColor="#122231"
              bgColor="#122231"
              iconTitle={<FaGooglePlay />}
            />
          </div>
        </div>

        <div>
          <img src={invest1} alt="Invest" className="max-h-[800px] " />
        </div>
      </section>

      <section className="max-w-[1280px] mx-auto px-16 pt-22 pb-11">
        <div className="text-center ">
          <h1
            className="text-[51px] font-bold mt-8"
            style={{
              color: "#122231",
            }}
          >
            Simple investments with great returns
          </h1>

          <p
            className="text-[18px]"
            style={{
              color: "#485F6E",
            }}
          >
            Investments are made readily accessible to everyone
          </p>
        </div>
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
          <img src={invest2} alt="Investors" className="max-h-[250px]" />
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
          <img src={invest3} alt="explore" className="max-h-[250px]" />
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

          <img src={invest4} alt="Investment" className="max-h-[250px]" />
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

        <div className="w-3/5">
          <img src={invest5} alt="Growth" />
        </div>
      </section>
    </div>
  );
};

export default Invest;
