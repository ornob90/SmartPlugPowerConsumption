import React from "react";
import Container from "../../components/shared/Container";
import data from "../../data/data";
import TrendState from "./TrendState";
import TrendChart from "./TrendChart";

const Trend = () => {
  return (
    <Container className="mt-5 ">
      <div className="w-[85%] mx-auto mb-10">
        <TrendState />
      </div>
      <div className="">
        <TrendChart />
      </div>
    </Container>
  );
};

export default Trend;
