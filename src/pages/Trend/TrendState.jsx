import React from "react";
import data from "../../data/data";
import { FaBoltLightning } from "react-icons/fa6";
import { IoMdWarning } from "react-icons/io";
import { FaPowerOff } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa";
import { FaArrowRightFromBracket } from "react-icons/fa6";

const TrendState = () => {
  const currentReducer = (accumulator, currentValue) =>
    accumulator + currentValue.current;
  const totalCurrent = data.reduce(currentReducer, 0);
  const avgCur = (totalCurrent / data.length).toFixed(2);

  const voltageReducer = (accumulator, currentValue) =>
    accumulator + currentValue.voltage;
  const totalVoltage = data.reduce(voltageReducer, 0);
  const avgVol = (totalVoltage / data.length).toFixed(2);

  const powerReducer = (accumulator, currentValue) =>
    accumulator + currentValue.power;
  const totalPower = data.reduce(powerReducer, 0);
  const avgPow = (totalPower / data.length).toFixed(2);
  return (
    <div className="stats shadow w-full ">
      <div className="stat">
        <div className="stat-figure text-secondary">
          <FaBoltLightning className="text-[#E57E31] text-3xl" />
        </div>
        <div className="stat-title">Current</div>
        <div className="stat-value">{avgCur}</div>
        <div className="stat-desc  mt-2">Dec 4 - Dec 9</div>
      </div>

      <div className="stat">
        <div className="stat-figure text-secondary">
          <FaPowerOff className="text-[#293541] text-3xl" />
        </div>
        <div className="stat-title">Power</div>
        <div className="stat-value text-[#E57E31]">{avgPow}</div>
        <div className="stat-desc mt-2">Dec 4 - Dec 9</div>
      </div>

      <div className="stat">
        <div className="stat-figure text-secondary">
          <IoMdWarning className="text-[#E57E31] text-3xl" />
        </div>
        <div className="stat-title">Voltage</div>
        <div className="stat-value">{avgVol}</div>
        <div className="stat-desc  mt-2">Dec 4 - Dec 9</div>
      </div>
    </div>
  );
};

export default TrendState;
