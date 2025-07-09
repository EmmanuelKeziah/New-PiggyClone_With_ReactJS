import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";
import MenuItem from "../components/reusable/MenuItem";
import Button from "../components/reusable/Button";
import HeaderMobile from "./HeaderMobile";
import blog from "../assets/blog.svg";
import comic from "../assets/comic.svg";
import news from "../assets/news.svg";
import report from "../assets/report.svg";
import calculator from "../assets/calculator.svg";
import ebook from "../assets/ebook.svg";

const Header = () => {
  const [save, setSave] = useState(false);
  const [resource, setResource] = useState(false);

  const saveLinks = [
    {
      to: "/piggybank",
      icon: "piggybank_icon_bd14f39497_7ef36812cd",
      title: "PiggyBank",
      desc: "Automated Savings",
    },
    {
      to: "/targets",
      icon: "targets_icon_a382a2df4f_10353cd31e",
      title: "Target Savings",
      desc: "Goal-Oriented Savings",
    },
    {
      to: "/flex-dollar",
      icon: "flex_dollar_icon_b180813700_8c5227fe52",
      title: "Flex Dollar",
      desc: "Dollar Savings",
    },
    {
      to: "/safelock",
      icon: "safelock_icon_7595628576_b010a4fee8",
      title: "Safelock",
      desc: "Fixed Savings",
    },
    {
      to: "/flexnaira",
      icon: "flex_naira_icon_1c37272848_635abfe249",
      title: "Flex Naira",
      desc: "Flexible Savings",
    },
    {
      to: "/housemoney",
      icon: "house_icon_1_62b781ec0c",
      title: "House Money",
      desc: "Semi-Strict Wallet",
    },
  ];

  const navLinks = [
    { to: "/invest", label: "Invest" },
    { to: "/stories", label: "Stories" },
    { to: "/faqs", label: "FAQ" },
    { to: "/shop", label: "Shop" },
  ];

  const resourceLinks = [
    { label: "Blog", to: "/Blog", iconType: "blog" },
    { label: "Comics", iconType: "comic" },
    { label: "NewsLetter", iconType: "news" },
    { label: "Reports", iconType: "report" },
    { label: "Calculator", iconType: "calculator" },
    { label: "Ebooks", iconType: "ebook" },
  ];

  const iconMap = {
    blog,
    comic,
    news,
    report,
    calculator,
    ebook,
  };

  return (
    <header className="h-24 shadow shadow-gray-400 w-full fixed bg-white z-50">
      <div className="max-w-[1280px] px-16 mx-auto flex items-center justify-between h-full max-md:hidden">
        <div className="flex items-center gap-x-10 w-full">
          <div className="w-[160px]">
            <MenuItem
              icon="https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/logo_08e6965627/logo_08e6965627.svg"
              path="/"
            />
          </div>

          <nav className="flex items-center gap-x-10 w-full justify-between">
            <div className="flex items-center gap-x-10">
              <div
                className="relative"
                onMouseEnter={() => setSave(true)}
                onMouseLeave={() => setSave(false)}
              >
                <span className="flex items-center gap-x-1 cursor-pointer">
                  Save <MdKeyboardArrowDown />
                </span>

                {save && (
                  <div className="absolute top-full mt-3 left-0 w-[500px] flex justify-between rounded-[10px] shadow shadow-gray-500 p-5 bg-white z-50">
                    <div className="w-1/2 flex flex-col gap-y-5">
                      {saveLinks
                        .slice(0, 3)
                        .map(({ to, icon, title, desc }) => (
                          <Link to={to} key={title}>
                            <div className="flex items-center gap-x-3 p-2">
                              <img
                                src={`https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/${icon}/${icon}.png`}
                                alt={title}
                                className="w-[35px] h-[35px]"
                              />
                              <div>
                                <p className="font-semibold text-[16px]">
                                  {title}
                                </p>
                                <p className="text-[14px] font-medium">
                                  {desc}
                                </p>
                              </div>
                            </div>
                          </Link>
                        ))}
                    </div>
                    <div className="w-1/2 flex flex-col gap-y-5">
                      {saveLinks.slice(3).map(({ to, icon, title, desc }) => (
                        <Link to={to} key={title}>
                          <div className="flex items-center gap-x-3 p-2">
                            <img
                              src={`https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/${icon}/${icon}.png`}
                              alt={title}
                              className="w-[35px] h-[35px]"
                            />
                            <div>
                              <p className="font-semibold text-[16px]">
                                {title}
                              </p>
                              <p className="text-[14px] font-medium">{desc}</p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {navLinks.map(({ to, label }) => (
                <Link to={to} key={label}>
                  <span className="cursor-pointer">{label}</span>
                </Link>
              ))}

              <div
                className="relative"
                onMouseEnter={() => setResource(true)}
                onMouseLeave={() => setResource(false)}
              >
                <span className="flex items-center gap-x-1 cursor-pointer">
                  Resources <MdKeyboardArrowDown />
                </span>

                {resource && (
                  <div className="absolute top-full mt-3 left-0 w-[500px] flex justify-between rounded-[10px] shadow shadow-gray-500 p-5 bg-white z-50">
                    <div className="w-1/2 flex flex-col gap-y-5">
                      {resourceLinks
                        .slice(0, 3)
                        .map(({ label, to = "#", iconType }) => (
                          <Link to={to} key={label}>
                            <div className="flex items-center gap-x-3 p-2">
                              <img
                                src={iconMap[iconType]}
                                alt={label}
                                className="w-[35px] h-[35px]"
                              />
                              <p className="font-semibold text-[16px]">
                                {label}
                              </p>
                            </div>
                          </Link>
                        ))}
                    </div>
                    <div className="w-1/2 flex flex-col gap-y-5">
                      {resourceLinks.slice(3).map(({ label, iconType }) => (
                        <div
                          key={label}
                          className="flex items-center gap-x-3 p-2"
                        >
                          <img
                            src={iconMap[iconType]}
                            alt={label}
                            className="w-[35px] h-[35px]"
                          />
                          <p className="font-semibold text-[16px]">{label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="flex gap-x-4">
              <Button
                label="Sign in"
                bgColor="white"
                textColor="#0C1825"
                borderColor="#0C1825"
              />
              <Button
                label="Create free account"
                bgColor="#0C1825"
                textColor="white"
              />
            </div>
          </nav>
        </div>
      </div>

      <HeaderMobile />
    </header>
  );
};

export default Header;
