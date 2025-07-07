// import React from "react";
// import img1 from "../../assets/img1.jpg";
// import img2 from "../../assets/img2.png";
// import img3 from "../../assets/img3.png";
// import img4 from "../../assets/img4.png";
// import img5 from "../../assets/img5.png";
// import img6 from "../../assets/img6.png";

// // const Cards = ({ title, midContent, tag }) => {
// //   const cardContent = [
// //     {
// //       title: "CORPORATE DEBT NOTES SERIES XLVII",
// //       midContent: "#5000 per unit",
// //       desc: "578 investors",
// //       img: img1,
// //       tag: "Sold Out",
// //     },

// //     {
// //       title: "CORPORATE DEBT NOTES SERIES XLVII",
// //       midContent: "#5000 per unit",
// //       desc: "745 investors",
// //       img: img2,
// //       tag: "Sold Out",
// //     },

// //     {
// //       title: "CORPORATE DEBT NOTES SERIES XLV",
// //       midContent: "#5000 per unit",
// //       desc: "470 investors",
// //       img: img3,
// //       tag: "Sold Out",
// //     },

// //     {
// //       title: "CORPORATE DEBT NOTES SERIES XLVI",
// //       midContent: "#5000 per unit",
// //       desc: "860 investors",
// //       img: img4,
// //       tag: "Sold Out",
// //     },

// //     {
// //       title: "CORPORATE DEBT NOTES SERIES XLVII",
// //       midContent: "#5000 per unit",
// //       desc: "373 investors",
// //       img: img5,
// //       tag: "Sold Out",
// //     },

// //     {
// //       title: "CORPORATE DEBT NOTES SERIES XLVIII",
// //       midContent: "#5000 per unit",
// //       desc: "1271 investors",
// //       img: img6,
// //       tag: "Sold Out",
// //     },
// //   ];

// //   return (
// //     <div className="pt-16 mx-w-[1280px] mx-auto px-4">
// //       <h1 className="text-3xl font-bold text-[#122231] text-center"></h1>
// //       <section className="flex flex-wrap justify-between gap-4">
// //         {cardContent.map((data, i) => (
// //           <main className="" key={i}>
// //             <img
// //               src={data.img}
// //               alt="card-img"
// //               className="w-full h-64 object-cover rounded-lg mb-4"
// //             />

// //             <h1 className="text">{data.title}</h1>
// //             <div className="flex">
// //               <p className="font">{data.desc}</p>
// //               <p className="font">{data.midContent}</p>
// //             </div>
// //             <button>{data.tag}</button>
// //           </main>
// //         ))}
// //       </section>
// //     </div>
// //   );
// // };

// // export default Cards;
// // import React from "react";
// // import img1 from "../assets/img1.jpg";
// // import img2 from "../assets/img2.png";
// // import img3 from "../assets/img3.png";
// // import img4 from "../assets/img4.png";
// // import img5 from "../assets/img5.png";
// // import img6 from "../assets/img6.png";

// const Cards = () => {
//   const cardContent = [
//     {
//       title: "CORPORATE DEBT NOTES SERIES XLVII",
//       midContent: "#5000 per unit",
//       desc: "578 investors",
//       img: img1,
//       tag: "Sold Out",
//     },
//     {
//       title: "CORPORATE DEBT NOTES SERIES XLVII",
//       midContent: "#5000 per unit",
//       desc: "745 investors",
//       img: img2,
//       tag: "Sold Out",
//     },
//     {
//       title: "CORPORATE DEBT NOTES SERIES XLV",
//       midContent: "#5000 per unit",
//       desc: "470 investors",
//       img: img3,
//       tag: "Sold Out",
//     },
//     {
//       title: "CORPORATE DEBT NOTES SERIES XLVI",
//       midContent: "#5000 per unit",
//       desc: "860 investors",
//       img: img4,
//       tag: "Sold Out",
//     },
//     {
//       title: "CORPORATE DEBT NOTES SERIES XLVII",
//       midContent: "#5000 per unit",
//       desc: "373 investors",
//       img: img5,
//       tag: "Sold Out",
//     },
//     {
//       title: "CORPORATE DEBT NOTES SERIES XLVIII",
//       midContent: "#5000 per unit",
//       desc: "1271 investors",
//       img: img6,
//       tag: "Sold Out",
//     },
//   ];

//   return (
//     <div className=" pt-16 mx-auto px-4">
//       <h1 className="text-3xl font-bold text-[#122231] text-center mb-8">
//         Recent Opportunities on Investify
//       </h1>
//       <section className=" flex flex-wrap justify-center items-center gap-4 ">
//         {cardContent?.map((data, i) => (
//           <main
//             className="w-[350px] h-64 object-cover rounded-lg bg-white mb-4"
//             key={i}
//           >
//             <img className="pt-0 rounded-t-3xl" src={data.img} alt="card-img" />
//             <h1 className="text-sm p-6 font-semibold">{data.title}</h1>
//             <div className="flex justify-between text-sm text-gray-700 mb-2">
//               <p className=" font-medium ">{data.desc}</p>
//               <p className=" font-medium w-[4xl]">{data.midContent}</p>
//             </div>
//             <button className=" rounded-[30px]  ml-8 text-[#b32e58] bg-[#FAF1F4] text-sm">
//               {data.tag}
//             </button>
//           </main>
//         ))}
//       </section>
//     </div>
//   );
// };

// export default Cards;

import React from "react";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";
import img5 from "../../assets/img5.png";
import img6 from "../../assets/img6.png";

const Cards = () => {
  const cardContent = [
    {
      title: "CORPORATE DEBT NOTES SERIES XLVII",
      midContent: "#5000 per unit",
      desc: "578 investors",
      img: img1,
      tag: "Sold Out",
    },
    {
      title: "CORPORATE DEBT NOTES SERIES XLVII",
      midContent: "#5000 per unit",
      desc: "745 investors",
      img: img2,
      tag: "Sold Out",
    },
    {
      title: "CORPORATE DEBT NOTES SERIES XLV",
      midContent: "#5000 per unit",
      desc: "470 investors",
      img: img3,
      tag: "Sold Out",
    },
    {
      title: "CORPORATE DEBT NOTES SERIES XLVI",
      midContent: "#5000 per unit",
      desc: "860 investors",
      img: img4,
      tag: "Sold Out",
    },
    {
      title: "CORPORATE DEBT NOTES SERIES XLVII",
      midContent: "#5000 per unit",
      desc: "373 investors",
      img: img5,
      tag: "Sold Out",
    },
    {
      title: "CORPORATE DEBT NOTES SERIES XLVIII",
      midContent: "#5000 per unit",
      desc: "1271 investors",
      img: img6,
      tag: "Sold Out",
    },
  ];

  return (
    <div className="pt-16 mx-auto px-4 max-w-[1280px]">
      <h1 className="text-3xl font-bold text-[#122231] text-center mb-8">
        Recent Opportunities on Investify
      </h1>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cardContent.map((data, i) => (
          <main
            key={i}
            className="bg-white rounded-3xl shadow-md overflow-hidden"
          >
            <img
              src={data.img}
              alt="card-img"
              className="w-full h-48 object-cover rounded-t-3xl"
            />
            <div className="p-4">
              <h1 className="text-md font-bold text-[#122231] mb-2">
                {data.title}
              </h1>
              <div className="flex justify-between text-sm text-gray-700 mb-4">
                <p>{data.desc}</p>
                <p>{data.midContent}</p>
              </div>
              <button className="px-4 py-1 rounded-full text-[#b32e58] bg-[#FAF1F4] text-sm font-semibold">
                {data.tag}
              </button>
            </div>
          </main>
        ))}
      </section>
    </div>
  );
};

export default Cards;
