import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { BillData } from "../BillData";
import { Chart as ChartJS } from "chart.js/auto";

function BillChart() {
  const [billData, setBillData] = useState({
    labels: BillData.map((data) => data.month),
    datasets: [
      {
        label: "2000,3000",
        data: BillData.map((data) => data.amount),
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
        Total Billed vs Total Paid
      </h6>
      <div className="border border-secondary rounded-bottom p-2 mt-0">
        <Bar data={billData} />
      </div>
    </div>
  );
}

export default BillChart;
