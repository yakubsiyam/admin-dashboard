import { useState } from "react";
import "./App.css";
import BillChart from "./components/BillChart";
import ChargeChart from "./components/ChargeChart";
import { PaidData } from "./PaidData";
import PaidChart from "./components/PaidChart";
import DashboardHeader from "./components/DashboardHeader/DashboardHeader";
import Table from "./components/Table/Table";

function App() {
  return (
    <div>
      <DashboardHeader></DashboardHeader>

      <div className="container">
        <div className="row g-4 mt-1">
          <div className="col-md-4">
            <BillChart />
          </div>
          <div className="col-md-4">
            <ChargeChart />
          </div>
          <div className="col-md-4">
            <PaidChart />
          </div>
        </div>
      </div>

      <Table></Table>
    </div>
  );
}

export default App;
