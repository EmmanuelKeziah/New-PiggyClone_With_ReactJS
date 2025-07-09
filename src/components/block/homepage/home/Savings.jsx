import React, { useState } from "react";

const Savings = () => {
  const piggyCard = [
    {
      title: "Automated Savings",
      desc: "Build a dedicated savings faster on your terms, automatically or manually",
      btnTitle: "Piggybank",
      color: "rgb(0, 51, 153)",
      bgColor: "#FFFFFF",
      hoverColor: "#0F60D6",
    },
    {
      title: "Fixed Savings",
      desc: "Lock money away for a fixed duration without access to it until maturity.",
      btnTitle: "Safe Lock",
      color: "#2295F2",
      bgColor: "#FFFFFF",
      hoverColor: "#2295F2",
    },
    {
      title: "Goal-oriented Savings",
      desc: "Reach all your savings goals faster.",
      btnTitle: "Target Savings",
      color: "#39C277",
      bgColor: "#FFFFFF",
      hoverColor: "#39C277",
    },
    {
      title: "Flex Naira",
      desc: "Save and manage money anytime.",
      btnTitle: "Flex Naira",
      color: "#E756A3",
      bgColor: "#FFFFFF",
      hoverColor: "#E756A3",
    },
    {
      title: "Flex Dollar",
      desc: "Save and grow in dollars.",
      btnTitle: "Flex Dollar",
      color: "#0C1825",
      bgColor: "#FFFFFF",
      hoverColor: "#0C1825",
    },
    {
      title: "House Money",
      desc: "Plan for rent and household expenses.",
      btnTitle: "House Money",
      color: "#FF783C",
      bgColor: "#FFFFFF",
      hoverColor: "#FF783C",
    },
  ];

  return (
    <div className="my-20 flex flex-col items-center">
      <section className="text-center mb-10">
        <h1 className="font-bold text-5xl">Many ways to build your savings</h1>
        <p className="text-2xl">
          Earn 12%-20% when you save with any of these Piggyvest plans.
        </p>
      </section>

      <section className="flex justify-center max-w-[1200px] flex-wrap">
        {piggyCard.map((data, i) => (
          <Card key={i} data={data} />
        ))}
      </section>
    </div>
  );
};

const Card = ({ data }) => {
  const [hover, setHover] = useState(false);

  return (
    <main
      className="h-[400px] w-[400px] m-9 p-5 rounded-[10px] transition-all duration-300 shadow-md cursor-pointer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        backgroundColor: hover ? data.hoverColor : data.bgColor,
      }}
    >
      <h1
        className="text-[36px] font-bold transition-colors duration-300 mb-2"
        style={{
          color: hover ? "#ffffff" : data.hoverColor,
        }}
      >
        {data.title}
      </h1>

      <p
        className=" transition-colors duration-300 text-[19px] w-[280px] "
        style={{
          color: hover ? "#ffffff" : "#122231",
        }}
      >
        {data.desc}
      </p>

      <button
        className=" mt-4 text-[16px] font-semibold "
        style={{
          color: hover ? data.bgColor : data.color,
        }}
      >
        {data.btnTitle}
      </button>
    </main>
  );
};

export default Savings;
