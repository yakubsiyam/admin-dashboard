import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { ChargeData } from "../ChargeData";

const ChargeChart = () => {
  const [chargeData, setChargeData] = useState({
    labels: ChargeData.map((data) => data.month),
    datasets: [
      {
        label: "Billed",
        data: ChargeData.map((data) => data.amount),
        backgroundColor: ["#56BBF1"],
      },
    ],
  });
  return (
    <div>
      <h6
        className="text-center text-light mb-0 p-1"
        style={{ backgroundColor: "#027F8D" }}
      >
        Charge Analysis by Service Date
      </h6>
      <div className="border border-secondary rounded-bottom p-2 mt-0">
        <Line data={chargeData} />
      </div>
    </div>
  );
};

export default ChargeChart;
