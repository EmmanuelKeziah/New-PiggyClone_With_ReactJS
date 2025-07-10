// import React from "react";
// import HomeCards from "../../reusable/HomeCards";

// const Savings = () => {
//   const HomeCards = [
//     {
//       title: "Automated Savings",
//       desc: "Build a dedicated savings faster on your terms, automatically or manually",
//       btnTitle: "Piggybank",
//       bgColor: "#FFFFFF",
//       hoverColor: "#0F60D6",
//     },
//     {
//       title: "Fixed Savings",
//       desc: "Lock money away for a fixed duration without access to it until maturity.",
//       btnTitle: "Safe Lock",
//       bgColor: "#FFFFFF",
//       hoverColor: "#2295F2",
//     },
//     {
//       title: "Goal-oriented Savings",
//       desc: "Reach all your savings goals faster.",
//       btnTitle: "Target Savings",
//       bgColor: "#FFFFFF",
//       hoverColor: "#39C277",
//     },
//     {
//       title: "Flex Naira",
//       desc: "Save and manage money anytime.",
//       btnTitle: "Flex Naira",
//       bgColor: "#FFFFFF",
//       hoverColor: "#E756A3",
//     },
//     {
//       title: "Flex Dollar",
//       desc: "Save and grow in dollars.",
//       btnTitle: "Flex Dollar",
//       bgColor: "#FFFFFF",
//       hoverColor: "#0C1825",
//     },
//     {
//       title: "House Money",
//       desc: "Plan for rent and household expenses.",
//       btnTitle: "House Money",
//       bgColor: "#FFFFFF",
//       hoverColor: "#FF783C",
//     },
//   ];

//   return (
//     <div className="my-20 flex flex-col items-center">
//       <section className="text-center mb-10">
//         <h1 className="font-bold text-5xl">Many ways to build your savings</h1>
//         <p className="text-2xl">
//           Earn 12%-20% when you save with any of these Piggyvest plans.
//         </p>
//       </section>

//       <section className="flex justify-center max-w-[1200px] flex-wrap">
//         {HomeCards.map((data, i) => (
//           <Card key={i} {...data} />
//         ))}
//       </section>
//     </div>
//   );
// };

// export default Savings;

// import React from "react";
// import HomeCards from "../reusable/HomeCards";

// const Savings = () => {
//   const savingsCards = [
//     {
//       title: "Automated Savings",
//       desc: "Build a dedicated savings faster on your terms, automatically or manually",
//       btnTitle: "Piggybank",
//       bgColor: "#FFFFFF",
//       hoverColor: "#0F60D6",
//     },
//     {
//       title: "Fixed Savings",
//       desc: "Lock money away for a fixed duration without access to it until maturity.",
//       btnTitle: "Safe Lock",
//       bgColor: "#FFFFFF",
//       hoverColor: "#2295F2",
//     },
//     {
//       title: "Goal-oriented Savings",
//       desc: "Reach all your savings goals faster.",
//       btnTitle: "Target Savings",
//       bgColor: "#FFFFFF",
//       hoverColor: "#39C277",
//     },
//     {
//       title: "Flex Naira",
//       desc: "Save and manage money anytime.",
//       btnTitle: "Flex Naira",
//       bgColor: "#FFFFFF",
//       hoverColor: "#E756A3",
//     },
//     {
//       title: "Flex Dollar",
//       desc: "Save and grow in dollars.",
//       btnTitle: "Flex Dollar",
//       bgColor: "#FFFFFF",
//       hoverColor: "#0C1825",
//     },
//     {
//       title: "House Money",
//       desc: "Plan for rent and household expenses.",
//       btnTitle: "House Money",
//       bgColor: "#FFFFFF",
//       hoverColor: "#FF783C",
//     },
//   ];

//   return (
//     <div className="my-20 flex flex-col items-center">
//       <section className="text-center mb-10">
//         <h1 className="font-bold text-5xl">Many ways to build your savings</h1>
//         <p className="text-2xl">
//           Earn 12%-20% when you save with any of these Piggyvest plans.
//         </p>
//       </section>

//       <section className="flex justify-center max-w-[1200px] flex-wrap">
//         {savingsCards.map((data, i) => (
//           <Card key={i} {...data} />
//         ))}
//       </section>
//     </div>
//   );
// };

// export default HomeCards;

import React from "react";
import HomeCards from "../../../reusable/HomeCards";

// import HomeCards from "../../reusable/HomeCards";

const Savings = () => {
  const savingsCards = [
    {
      title: "Automated Savings",
      desc: "Build a dedicated savings faster on your terms, automatically or manually",
      btnTitle: "Piggybank",
      bgColor: "#FFFFFF",
      hoverColor: "#0F60D6",
    },
    {
      title: "Fixed Savings",
      desc: "Lock money away for a fixed duration without access to it until maturity.",
      btnTitle: "Safe Lock",
      bgColor: "#FFFFFF",
      hoverColor: "#2295F2",
    },
    {
      title: "Goal-oriented Savings",
      desc: "Reach all your savings goals faster.",
      btnTitle: "Target Savings",
      bgColor: "#FFFFFF",
      hoverColor: "#39C277",
    },
    {
      title: "Flex Naira",
      desc: "Save and manage money anytime.",
      btnTitle: "Flex Naira",
      bgColor: "#FFFFFF",
      hoverColor: "#E756A3",
    },
    {
      title: "Flex Dollar",
      desc: "Save and grow in dollars.",
      btnTitle: "Flex Dollar",
      bgColor: "#FFFFFF",
      hoverColor: "#0C1825",
    },
    {
      title: "House Money",
      desc: "Plan for rent and household expenses.",
      btnTitle: "House Money",
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
        {savingsCards.map((card, index) => (
          <HomeCards key={index} {...card} />
        ))}
      </section>
    </div>
  );
};

export default Savings;
