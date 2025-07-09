import React from "react";
import security from "../../../../assets/security.svg";
import Button from "../../../reusable/Button";

const Security = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <img
        src={security}
        alt="Security Illustration"
        className="w-40 h-40 mb-4"
      />
      <h1 className="text-3xl font-bold text-gray-700">Security Features</h1>
      <p className="text-gray-600 mt-2 text-center max-w-md">
        Your funds are protected with the highest-grade security infrastructure.
      </p>
    </div>
  );
};

export default Security;
