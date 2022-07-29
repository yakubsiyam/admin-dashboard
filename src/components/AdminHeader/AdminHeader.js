import {
  ArrowsExpandIcon,
  PlusSmIcon,
  BellIcon,
  DownloadIcon,
  UserCircleIcon,
} from "@heroicons/react/solid";
import React from "react";

const AdminHeader = () => {
  return (
    <div className="main-box bg-white">
      <div className="d-flex justify-content-between align-items-center p-2 my-2">
        <div className="d-flex align-items-center">
          <UserCircleIcon
            style={{ width: "40px", color: "#3EB6C3" }}
            className="mx-2"
          />
          <h5 className="mt-2">ABC Behavioral Therapy Center</h5>
        </div>
        <div className="d-flex align-items-center">
          <ArrowsExpandIcon style={{ width: "20px", color: "#3EB6C3" }} />
          <PlusSmIcon
            style={{ width: "20px", color: "#3EB6C3" }}
            className="ms-2"
          />
          <BellIcon
            style={{ width: "20px", color: "#3EB6C3" }}
            className="ms-2"
          />
          <DownloadIcon
            style={{ width: "20px", color: "#3EB6C3" }}
            className="ms-2"
          />
          <div className="d-flex justify-content-between">
            <UserCircleIcon
              style={{ width: "40px", color: "#3EB6C3" }}
              className="mx-2"
            />

            <div>
              <h6 className="my-0">Admin</h6>
              <p className="mb-0" style={{ color: "#79D2D5" }}>
                admin@admin.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
