import { useState } from "react";
import "./App.css";
import BillChart from "./components/BillChart";
import { BillData } from "./BillData";
import { ChargeData } from "./ChargeData";
import ChargeChart from "./components/ChargeChart";
import { PaidData } from "./PaidData";
import PaidChart from "./components/PaidChart";
import DashboardHeader from "./components/DashboardHeader/DashboardHeader";

function App() {
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

  const [paidData, setPaidData] = useState({
    labels: PaidData.map((data) => data.month),
    datasets: [
      {
        label: "Billed",
        data: PaidData.map((data) => data.amount),
        backgroundColor: ["#56BBF1"],
      },
    ],
  });

  return (
    <div className="container">
      <DashboardHeader></DashboardHeader>
      <div style={{ width: 700 }}>
        <BillChart chartData={billData} />
      </div>
      <div style={{ width: 700 }}>
        <ChargeChart chartData={chargeData} />
      </div>
      <div style={{ width: 700 }}>
        <PaidChart chartData={paidData} />
      </div>
    </div>
  );
}

export default App;
