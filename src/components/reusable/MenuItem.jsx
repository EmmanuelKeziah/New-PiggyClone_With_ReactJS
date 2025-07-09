import React from "react";
import { Link } from "react-router-dom";

const MenuItem = ({ icon, title, subtitle, path }) => (
  <Link to={path}>
    <div className="flex items-center p-[10px] gap-x-[10px]">
      <div className="">
        <img src={icon} className="w-[100%] h-[40px]" alt={title} />
      </div>
      <div className="">
        <p className="font-[600] text-[16px]">{title}</p>
        {subtitle && <p className="font-[600] text-[14px]">{subtitle}</p>}
      </div>
    </div>
  </Link>
);

export default MenuItem;
