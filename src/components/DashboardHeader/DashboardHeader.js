import React from "react";
import "./DashboardHeader.css";
import {
  UserCircleIcon,
  UserGroupIcon,
  CashIcon,
} from "@heroicons/react/solid";

const DashboardHeader = () => {
  return (
    <div className="container mt-2 text-light">
      <div class="row g-4">
        <div class="col-md-3 patients-bg rounded-1">
          <div className="d-flex justify-content-between align-items-center">
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
        <div class="col-md-3 staff-bg  rounded-1">
          <div className="d-flex justify-content-between align-items-center">
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
        <div class="col-md-3 sessions-bg  rounded-1">
          <div className="d-flex justify-content-between align-items-center">
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
        <div class="col-md-3 bill-bg  rounded-1">
          <div className="d-flex justify-content-between align-items-center">
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
  );
};

export default DashboardHeader;
