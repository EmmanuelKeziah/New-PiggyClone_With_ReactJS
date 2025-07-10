import React from "react";

const Cards = ({ title, price, unit, investors, number, img, tag }) => {
  return (
    <main className="bg-white rounded-3xl shadow-md overflow-hidden">
      <img
        src={img}
        alt="card-img"
        className="w-full h-48 object-cover rounded-t-3xl"
      />
      <div className="p-4">
        <h1 className="text-md font-bold text-[#122231] mb-2">{title}</h1>
        <div className="flex justify-between  text-gray-700 mb-4 max-w-[70%] font-semibold">
          <div className="flex flex-col">
            <p>{price}</p>
            <p>{unit}</p>
          </div>
          <div className="flex flex-col">
            <p>{number}</p>
            <p>{investors}</p>
          </div>
        </div>
        <button className="px-4 py-1 rounded-full text-[#b32e58] bg-[#FAF1F4] text-sm font-semibold">
          {tag}
        </button>
      </div>
    </main>
  );
};

export default Cards;
