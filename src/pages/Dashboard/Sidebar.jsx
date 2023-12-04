import React, { useState } from "react";
import { FaBoltLightning } from "react-icons/fa6";
import { IoMdWarning } from "react-icons/io";
import { FaPowerOff } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa";
import { FaArrowRightFromBracket } from "react-icons/fa6";
const Sidebar = () => {
  const navItem = [
    {
      name: "Trend",
      icon: <FaChartBar />,
    },
    {
      name: "Current",
      icon: <FaBoltLightning />,
    },
    {
      name: "Power",
      icon: <FaPowerOff />,
    },
    {
      name: "Voltage",
      icon: <IoMdWarning />,
    },
  ];

  const [activeNav, setActiveNav] = useState("Trend");

  return (
    <div className="w-[20%] min-h-screen bg-[#293541]">
      <div className="h-[13%] bg-[#E57E31] text-white font-bold flex  pl-4 items-center text-2xl">
        Admin Panel
      </div>
      <ul className="flex flex-col pt-10 gap-5 text-white font-bold text-md ">
        {navItem.map(({ name, icon }) => (
          <li
            onClick={() => setActiveNav(name)}
            key={name}
            className={`py-4 px-4 flex justify-between items-center gap-4 border-b-2  mx-[5%] border-b-[#36434C] cursor-pointer ${
              activeNav === name
                ? "text-white  bg-[#34404C] rounded-md"
                : "text-[#727C85]"
            }`}
          >
            <p className="flex justify-center items-center gap-2">
              {icon} {name}
            </p>
            <p className={`${activeNav === name ? "" : "hidden"}`}>
              <FaArrowRightFromBracket />
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
