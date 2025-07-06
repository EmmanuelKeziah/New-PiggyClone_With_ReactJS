import React from "react";

const Button = ({ label, textColor, iconTitle, borderColor, bgColor }) => {
  return (
    <button
      style={{
        label: `${label}`,
        color: `${textColor}`,
        border: `1px solid ${borderColor}`,
        backgroundColor: `${bgColor}`,
      }}
      className="px-5 py-2 flex rounded-xl items-center w-max cursor-pointer"
    >
      <span className="text-2xl">
        {iconTitle}
      </span>
      <span className="mx-2">{label}</span>
    </button>
  );
};

export default Button;
