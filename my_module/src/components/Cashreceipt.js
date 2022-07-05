import React from "react";
import { useAutocomplete } from "@mui/base/AutocompleteUnstyled";

import "./Cashreceipt.css";

const Cashreceipt = () => {
  //   const myCard={
  //     height: "470px",
  //     width: "700px",
  //     borderRadius: "9px",
  //     // backgroundColor: "yellow"
  //     boxShadow: "0px 0px 10px 8px rgba(84,84,84,0.15)"
  //   }

  return (
    //
    <div className="bg">
      <div className="wrapper rounded bg-white">
        <div className="h3">FEES RECEIPT </div>
        <div className="form">
          <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
              <label>First Name</label>
              <input type="text" className="form-control" required />
            </div>
            <div className="col-md-6 mt-md-0 mt-3">
              <label>Last Name</label>
              <input type="text" className="form-control" required />
            </div>
          </div>
          <div className="row">
            {/* <div className="col-md-6 mt-md-0 mt-3">
              <label>Birthday</label>
              <input type="date" className="form-control" required />
            </div> */}
            {/* <div className="col-md-6 mt-md-0 mt-3">
              <label>Gender</label>
              <div className="d-flex align-items-center mt-2">
                <label className="option">
                  <input type="radio" name="radio" />
                  Male
                  <span className="checkmark" />
                </label>
                <label className="option ms-4">
                  <input type="radio" name="radio" />
                  Female
                  <span className="checkmark" />
                </label>
              </div>
            </div> */}
          </div>
          <div className="row">
            <div className="col-md-12 mt-md-0 mt-3">
              <label>Amount</label>
              <input type="email" className="form-control" required />
            </div>
            {/* <div className="col-md-6 mt-md-0 mt-3">
              <label>Phone Number</label>
              <input type="tel" className="form-control" required />
            </div> */}
          </div>
          <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
              <label>Year</label>
              <select id="sub" required>
                <option value selected hidden>
                  Choose Option
                </option>
                <option value="I">I Year</option>
                <option value="II">II Year</option>
                <option value="III">III Year</option>
              </select>
            </div>
            <div className="col-md-6 mt-md-0 mt-3">
              <label>Subject</label>
              <select id="sub" required>
                <option value selected hidden>
                  Choose Option
                </option>
                <option value="BCA">BCA</option>
                <option value="B.com(CA)">B.com(CA)</option>
                <option value="BBA">BBA</option>
                <option value="BSC(Micro)">BSC(Micro)</option>
                <option value="BSC(BT)">BSC(BT)</option>
                <option value="BA(CA)">BA(CA)</option>
                <option value="BSC(CS)">BSC(CS)</option>
                <option value="BSC(ST)">BSC(ST)</option>
                <option value="MSW">MSW</option>
                <option value="ITEG Diploma">ITEG Diploma</option>
                {/* <option value="Maths">Maths</option> */}
              </select>
              <div className="text-center">
        <div  id ="receiptbtn" className="btn btn-outline-primary btn-block mt-10">Submit</div>
      </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12"> */}
      {/* <div className="text-center">
        <div  id ="receiptbtn" className="btn btn-outline-primary btn-block mt-10">Submit</div>
      </div> */}
    </div>

    // </div>
  );
};
export default Cashreceipt;
