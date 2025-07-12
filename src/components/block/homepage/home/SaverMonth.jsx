import React from "react";

const SaverMonth = () => {
  return (
    <div>
      <section className=" flex flex-col justify-center items-center gap-10 py-16 ">
        <h1 className="font-bold text-5xl leading-14 text-[#122231]">
          Meet Our Saver of the Month
        </h1>
        <p className="text-2xl text-[#485f6e] max-md:w-[full] w-[60%] leading-6 mx-auto">
          Every month, we shine a spotlight on one saver, asking them about
          their savings culture and how Piggyvest has helped them.
        </p>
      </section>

      <section className="flex justify-center px-9">
        <iframe
          width="790"
          height="444"
          src="https://www.youtube.com/embed/2EnGMGxKuII?si=FheL7xtBxdsvMS0h"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          className="rounded-[10px] shadow-lg"
        ></iframe>
      </section>
    </div>
  );
};

export default SaverMonth;
