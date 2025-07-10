import React, { useState } from "react";
import { MdOutlineSubdirectoryArrowRight } from "react-icons/md";

const HomeCards = ({ title, desc, btnTitle, bgColor, hoverColor }) => {
  const [hover, setHover] = useState(false);

  return (
    <main
      className="h-[400px] w-[400px] m-9 p-5 rounded-[20px] transition-all duration-300 shadow-md cursor-pointer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        backgroundColor: hover ? hoverColor : bgColor,
      }}
    >
      <h1
        className="text-[36px] font-bold mb-2 transition-colors duration-300"
        style={{
          color: hover ? "#ffffff" : hoverColor,
        }}
      >
        {title}
      </h1>

      <p
        className="text-[19px] w-[280px] transition-colors duration-300"
        style={{
          color: hover ? "#ffffff" : "#122231",
        }}
      >
        {desc}
      </p>

      <button
        className="mt-4 text-[16px] font-semibold flex items-center gap-2"
        style={{
          color: hover ? "#ffffff" : hoverColor,
        }}
      >
        <MdOutlineSubdirectoryArrowRight />
        {btnTitle}
      </button>
    </main>
  );
};

export default HomeCards;
