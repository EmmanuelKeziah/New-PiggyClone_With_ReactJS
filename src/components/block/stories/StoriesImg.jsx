import React from "react";
import Button from "../../../components/reusable/Button";
import { FaGooglePlay, FaApple } from "react-icons/fa";
import story2 from "../../../assets/story2.png";

const StoriesImg = () => {
  return (
    <div>
      <section className="w-[50%] mx-auto px-16 pt-22 pb-11">
        <div className="text-center flex ">
          <img src={story2} alt="explore" className="max-h-[250px]" />

          <div className="text-center w-[70%] flex mt-10">
            <h1>Join 5+ million people who save and invest with us</h1>
            <span>
              <Button
                label="Get in iPhone"
                textColor="#FFFFFF"
                bgColor="#122231"
                borderColor="#122231"
                iconTitle={<FaApple />}
              />
            </span>

            <span>
              <Button
                label="Get in Android"
                textColor="#FFFFFF"
                borderColor="#122231"
                bgColor="#122231"
                iconTitle={<FaGooglePlay />}
              />
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StoriesImg;
