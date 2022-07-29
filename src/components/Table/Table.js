import React from "react";

const Table = () => {
  return (
    <div className="container mt-5 mb-3">
      <div className="row g-4">
        <div className="col-md-4">
          <h5
            className="text-light mb-0 p-1 border border-dark"
            style={{ backgroundColor: "#09A2B3" }}
          >
            Today's Task
          </h5>
          <div className="border border-dark rounded-bottom">
            <table className="table table-bordered rounded-bottom">
              <thead>
                <tr className="text-center">
                  <th scope="col">Report</th>
                  <th scope="col">Count</th>
                </tr>
              </thead>
              <tbody className="table-text">
                <tr>
                  <td>AR Follow Up Bucket</td>
                  <td>57</td>
                </tr>
                <tr>
                  <td>Provider Escalation</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>Payor escalation</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>MG escalation</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>Medical Records</td>
                  <td>0</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="col-md-4">
          <h5
            className="text-light mb-0 p-1  border border-dark"
            style={{ backgroundColor: "#09A2B3" }}
          >
            Patient
          </h5>
          <div className="border border-dark rounded-bottom">
            <table className="table table-bordered rounded-bottom">
              <thead>
                <tr className="text-center">
                  <th scope="col">Report</th>
                  <th scope="col">Count</th>
                </tr>
              </thead>
              <tbody className="table-text">
                <tr>
                  <td>Expiring Authorization</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>Patient/Guarantor</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>No Authorization</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>Co-Pay For Today</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>Auth place Holders</td>
                  <td>0</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="col-md-4">
          <h5
            className="text-light mb-0 p-1 border border-dark"
            style={{ backgroundColor: "#09A2B3" }}
          >
            Staffs
          </h5>
          <div className="border border-dark rounded-bottom">
            <table className="table table-bordered rounded-bottom">
              <thead className="text-center">
                <tr>
                  <th scope="col">Report</th>
                  <th scope="col">Count</th>
                </tr>
              </thead>
              <tbody className="table-text">
                <tr>
                  <td>vacation(s) Pending Approval</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>Missing credentials</td>
                  <td>11</td>
                </tr>
                <tr>
                  <td>Credentials to Expire</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>Signature Not Loaded</td>
                  <td>0</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-md-4">
          <h5
            className="text-light mb-0 p-1 border border-dark"
            style={{ backgroundColor: "#09A2B3" }}
          >
            Billing
          </h5>
          <div className="border border-dark rounded-bottom">
            <table className="table table-bordered rounded-bottom">
              <thead className="text-center">
                <tr>
                  <th scope="col">Report</th>
                  <th scope="col">Count</th>
                </tr>
              </thead>
              <tbody className="table-text">
                <tr>
                  <td>Sessions Rendered - Not Billed</td>
                  <td>321</td>
                </tr>
                <tr>
                  <td>Last Weeks deposits</td>
                  <td>11</td>
                </tr>
                <tr>
                  <td>Last Month Statements</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>Last Month billed Dates</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>Pending Secondary Claims</td>
                  <td>0</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-md-4">
          <h5
            className="text-light mb-0 p-1 border border-dark"
            style={{ backgroundColor: "#09A2B3" }}
          >
            Scheduler
          </h5>
          <div className="border border-dark rounded-bottom">
            <table className="table table-bordered rounded-bottom">
              <thead className="text-center">
                <tr>
                  <th scope="col">Report</th>
                  <th scope="col">Count</th>
                </tr>
              </thead>
              <tbody className="table-text">
                <tr>
                  <td>Scheduled Not Rendered</td>
                  <td>71</td>
                </tr>
                <tr>
                  <td>Sessions Not Attended Last Week</td>
                  <td>11</td>
                </tr>
                <tr>
                  <td>Provide Signature Missing in Session</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>Session Not Misssing</td>
                  <td>779</td>
                </tr>
                <tr>
                  <td>Cancelled ession This Month</td>
                  <td>23</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-md-4">
          <h5
            className="text-light mb-0 p-1 border border-dark"
            style={{ backgroundColor: "#09A2B3" }}
          >
            Trending Reports
          </h5>
          <div className="border border-dark rounded-bottom">
            <table className="table table-bordered rounded-bottom">
              <thead className="text-center">
                <tr>
                  <th scope="col">Report</th>
                  <th scope="col">Count</th>
                </tr>
              </thead>
              <tbody className="table-text">
                <tr>
                  <td>Schedule Billable</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>Payment Deposits</td>
                  <td>11</td>
                </tr>
                <tr>
                  <td>KPI Report by Month</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>KPI Report by Patient</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>KPI Report by Insurance</td>
                  <td>0</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
