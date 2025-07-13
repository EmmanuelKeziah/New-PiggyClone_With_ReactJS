import React from "react";
import Button from "../../../components/reusable/Button";
import { FaHeart } from "react-icons/fa6";
import story from "../../../assets/story.png";

const StoriesHero = () => {
  return (
    <section className="bg-[#F2F7F8]">
      <div
        className="  max-w-[1280px] mx-auto px-16 py-70 max-tablet:flex-col "
        style={{
          backgroundColor: "#F2F7F8",
        }}
      >
        <section className="flex items-center px-16 justify-between">
          <div className=" text-[#122231] flex flex-col justify-center">
            <h1 className=" text-[48px] mb-[32px] font-bold">
              Loved by our
              <span className="flex  items-center gap-2">
                Customers
                <FaHeart size={50} className="text-[#7913E5]" />
              </span>
            </h1>
            <p className="w-[65%] text-2xl  mb-6">
              Stories of happy savers who Piggyvest has helped or is helping
              save for what truly matters to them.
            </p>
            <div className="flex gap-4 mb-8">
              <Button
                label="Add your story"
                textColor="#FFFFFF"
                bgColor="#122231"
                borderColor="#122231"
              />
            </div>
          </div>

          <div>
            <img src={story} alt="Stories" className="max-h-[900px] " />
          </div>
        </section>
      </div>
    </section>
  );
};

export default StoriesHero;
