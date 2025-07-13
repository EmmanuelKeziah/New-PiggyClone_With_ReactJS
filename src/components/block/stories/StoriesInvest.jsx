import React from "react";

const StoriesInvest = () => {
  return (
    <div>
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

export default StoriesInvest;
