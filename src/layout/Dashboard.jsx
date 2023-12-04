import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../pages/Dashboard/Navbar";
import Sidebar from "../pages/Dashboard/Sidebar";

const Dashboard = () => {
  return (
    <div className="max-w-[1440px] mx-auto flex h-auto">
      <Sidebar />
      <div className="w-[80%]">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
