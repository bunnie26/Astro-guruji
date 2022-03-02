import React from "react";
import protext from "../assets/protect.png";
function Protect() {
  return (
    <div className="protect d-flex flex-column">
      <h1 className="align-self-center">We protect the rights of users</h1>
      <div className="card-container d-flex">
        <div className="col-12 col-md-4 px-3 d-flex justify-content-center mb-5">
          <div className="protect-card d-flex flex-column align-items-center">
            <img src={protext} />
            <h5 className="mt-3">Refund if unsatisfied</h5>
          </div>
        </div>
        <div className="col-12 col-md-4 px-3 d-flex justify-content-center mb-5">
          <div className="protect-card d-flex flex-column align-items-center">
            <img src={protext} />
            <h5 className="mt-3">Refund if unsatisfied</h5>
          </div>
        </div>
        <div className="col-12 col-md-4 px-3 d-flex justify-content-center mb-5">
          <div className="protect-card d-flex flex-column align-items-center">
            <img src={protext} />
            <h5 className="mt-3">Refund if unsatisfied</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Protect;
