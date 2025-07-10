import React from "react";
import security from "../../../../assets/security.svg";
import arrow from "../../../../assets/arrow.svg";

const Security = () => {
  return (
    <div className="flex gap-2 items-center mx-auto px-16 max-w-[1280px] mt-[150px] mb-[150px] ">
      <div>
        <img src={security} alt="Security-icon" className="w-20  mb-4" />
      </div>

      <div className="">
        <h1 className=" text-[24px] font-bold text-[#122231]">
          Your security is our priority
        </h1>
        <p className="text-gray-600 mt-2 mb-2 text-left max-w-md">
          PiggyVest uses the highest level of Internet Security and it is
          secured by 256 bits SSL security encryption to ensure that your
          information is completely protected from fraud.
        </p>

        <div className="flex gap-2 text-xl font-semibold">
          <img src={arrow} alt="arrow-right" />

          <p>More on our security measures</p>
        </div>
      </div>
    </div>
  );
};

export default Security;
