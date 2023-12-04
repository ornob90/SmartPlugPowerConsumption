import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../pages/Dashboard/Navbar";

const Dashboard = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Dashboard;
