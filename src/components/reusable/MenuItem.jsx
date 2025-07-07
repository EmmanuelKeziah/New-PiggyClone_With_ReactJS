import React from "react";

const MenuItem = ({ icon, title, subtitle, path }) => (
  <Link to={path}>
    <div className="flex items-center p-[10px] gap-x-[10px]">
      <div className="w-[35px]">
        <img src={icon} className="w-[35px] h-[35px]" alt={title} />
      </div>
      <div className="w-[70%]">
        <p className="font-[600] text-[16px]">{title}</p>
        {subtitle && <p className="font-[600] text-[14px]">{subtitle}</p>}
      </div>
    </div>
  </Link>
);

export default MenuItem;
