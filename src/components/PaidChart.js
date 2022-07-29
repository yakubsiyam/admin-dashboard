import React, { useState } from "react";
import { Bar } from "react-chartjs-2";

import { Chart as ChartJS } from "chart.js/auto";
import { PaidData } from "../PaidData";

function PaidChart() {
  const [paidData, setPaidData] = useState({
    labels: PaidData.map((data) => data.month),
    datasets: [
      {
        label: "Billed",
        data: PaidData.map((data) => data.amount),
        backgroundColor: ["#56BBF1"],
      },
      {
        label: "Paid",
        backgroundColor: ["#6CC4A1"],
      },
    ],
  });
  return (
    <div>
      <h6
        className="text-center text-light mb-0 p-1"
        style={{ backgroundColor: "#027F8D" }}
      >
        Total Billed vs Total Paid
      </h6>
      <div className="border border-secondary rounded-bottom p-2 mt-0">
        <Bar data={paidData} />
      </div>
    </div>
  );
}

export default PaidChart;
