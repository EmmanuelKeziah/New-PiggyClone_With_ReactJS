import React from "react";

const Sponsors = () => {
  return (
    <section className="bg-[#F2F7F8] py-20 max-w-[1280px] mx-auto px-16">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl text-[#122231] font-semibold mb-10">
          As featured in
        </h1>
      </div>

      <div className="flex flex-wrap gap-10">
        <img
          src="https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/tclogo_2x_e3771e8b17/tclogo_2x_e3771e8b17.png"
          alt="TechCabal"
          className="w-[160px] h-[100px] object-contain"
        />

        <img
          src="https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/output_9290be116f/output_9290be116f.png"
          alt="CNBC"
          className="w-[160px] h-[100px] object-contain"
        />

        <img
          src="https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/brand1_b2a9805fff/brand1_b2a9805fff.png"
          alt="TechCrunch"
          className="w-[160px] h-[100px] object-contain"
        />

        <img
          src="https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/pym_removebg_preview_109a666426/pym_removebg_preview_109a666426.svg"
          alt="PYMNTS"
          className="w-[120px] h-[100px] object-contain"
        />

        <img
          src="https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/fast_61fdc50524/fast_61fdc50524.svg"
          alt="FastCompany-logo"
          className="w-[160px] h-[100px] object-contain"
        />

        <img
          src="https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/cio_6806ee3afd/cio_6806ee3afd.svg"
          alt="CIO-logo"
          className="w-[100px] h-[100px] object-contain"
        />
      </div>
    </section>
  );
};

export default Sponsors;
