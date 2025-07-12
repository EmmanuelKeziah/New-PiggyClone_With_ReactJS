import React from "react";
import testimony from "../../../../assets/testimony.jpg";
import Button from "../../../reusable/Button";
import { FaGooglePlay, FaApple } from "react-icons/fa";
import test1 from "../../../../assets/test1.png";
import test2 from "../../../../assets/test2.png";
import test3 from "../../../../assets/test3.png";
import test4 from "../../../../assets/test4.png";

const Testimony = () => {
  return (
    <div className="bg-[#F2F7F8]" py-4>
      <section className=" max-w-[1280px] mx-auto py-16">
        <section className="flex gap-[72px] p-20 max-md:flex-col-reverse">
          <main>
            <img src={testimony} alt="testimony-img" />
          </main>

          <main className="w-[50%] h-[150px] flex-col items-center my-auto max-md:w-[100%]">
            <div className="flex gap-6">
              <img
                src={test1}
                alt="test1"
                className="w-[70px] h-[70px] rounded-full"
              />
              <img
                src={test2}
                alt="test2"
                className="w-[70px] h-[70px] rounded-full"
              />
              <img
                src={test3}
                alt="test3"
                className="w-[70px] h-[70px] rounded-full"
              />
              <img
                src={test4}
                alt="test4"
                className="w-[70px] h-[70px] rounded-full"
              />
            </div>
            <p className="text-4xl text-[#122231] leading-10 font-bold ">
              Join 5+ million people who save and invest with us
            </p>
            <main className="flex gap-2 mt-[25px]">
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
                bgColor="#122231"
                borderColor="#122231"
                iconTitle={<FaGooglePlay />}
              />
            </main>
          </main>
        </section>
      </section>
    </div>
  );
};

export default Testimony;
