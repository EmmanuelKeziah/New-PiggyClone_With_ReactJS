import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";
import Nav from "./Nav";

const NavHover = () => {
  const [save, setSave] = useState(false);
  const [resource, setResource] = useState(false);

  return (
    <div className="w-full">
      <div className="w-full flex justify-between items-center max-w-[1200px] mx-auto py-5 max-md:hidden">
        <div className="w-[20%]">
          <img
            src="https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/logo_08e6965627/logo_08e6965627.svg"
            alt="Logo"
            className="bg-transparent"
          />
        </div>
        <div className="flex justify-between items-center w-[70%] gap-x-[10px] font-[600] text-[16px] text-[#3d4f60]">
          <div
            onMouseEnter={() => setSave(true)}
            onMouseLeave={() => setSave(false)}
            className="relative"
          >
            <span className="flex items-center gap-x-[5px]">
              Save <MdKeyboardArrowDown />
            </span>
            {save && <Nav type="save" />}
          </div>
          <Link to="/invest">
            <span>Invest</span>
          </Link>
          <span>Stories</span>
          <span>FAQ</span>
          <div
            onMouseEnter={() => setResource(true)}
            onMouseLeave={() => setResource(false)}
            className="relative"
          >
            <span className="flex items-center gap-x-[5px]">
              Resources <MdKeyboardArrowDown />
            </span>
            {resource && <Nav type="resource" />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavHover;
