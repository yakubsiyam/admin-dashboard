import "./App.css";
import BillChart from "./components/BillChart";
import ChargeChart from "./components/ChargeChart";
import PaidChart from "./components/PaidChart";
import DashboardHeader from "./components/DashboardHeader/DashboardHeader";
import Table from "./components/Table/Table";
import AdminHeader from "./components/AdminHeader/AdminHeader";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <AdminHeader></AdminHeader>
      <div className="bg-white main-box">
        <DashboardHeader></DashboardHeader>
        <div>
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
      <Footer></Footer>
      <div className="text-center">
        <a
          href="https://patient-table-task.netlify.app/"
          target="_blank"
          className="btn btn-primary text-center my-3"
        >
          Go To Patients Table
        </a>
      </div>
    </div>
  );
}

export default App;
