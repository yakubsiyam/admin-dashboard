import React from "react";
import "./DashboardHeader.css";
import {
  UserCircleIcon,
  UserGroupIcon,
  CashIcon,
} from "@heroicons/react/solid";

const DashboardHeader = () => {
  return (
    <div className=" mt-3 pt-3 text-light">
      <h5 style={{ color: "#FBA25B" }}>Dashboard</h5>
      <div className="row g-4">
        <div className="col-md-3">
          <div className="patients-bg rounded-1 px-2">
            <div className="d-flex justify-content-between">
              <UserCircleIcon
                style={{
                  width: "40px",
                  color: "white",
                }}
                className="rounded"
              />
              <div className="text-end">
                <h4 className="mb-0 mt-2">36</h4>
                <p>Total No. of Patients</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className=" staff-bg  rounded-1 px-2">
            <div className="d-flex justify-content-between">
              <UserCircleIcon
                style={{
                  width: "40px",
                  color: "white",
                }}
              />
              <div className="text-end">
                <h4 className="mb-0 mt-2">12</h4>
                <p>Total No. of Staffs</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="sessions-bg  rounded-1">
            <div className="d-flex justify-content-between px-2">
              <UserGroupIcon
                style={{
                  width: "40px",
                  color: "white",
                }}
              />
              <div className="text-end">
                <h4 className="mb-0 mt-2">71</h4>
                <p>Unrendered Sessions</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="bill-bg  rounded-1 px-2">
            <div className="d-flex justify-content-between">
              <CashIcon
                style={{
                  width: "40px",
                  color: "white",
                }}
              />
              <div className="text-end">
                <h4 className="mb-0 mt-2">321</h4>
                <p>Unbilled claims</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
