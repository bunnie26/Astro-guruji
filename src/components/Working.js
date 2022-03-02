import React from "react";
import workImg from "../assets/how_it_works.png";

function Working() {
  return (
    <div className="working d-flex flex-column">
      <h1 className="align-self-center">How it works</h1>
      <div className="card-container d-flex">
        <div className="col-12 col-md-4 px-3 d-flex justify-content-center">
          <div className="working-card d-flex flex-column align-items-center">
            <img className="" src={workImg} />
            <div className="d-flex flex-column align-items-center text-center">
              <h5 className="mb-4">Find your Guruji</h5>
              <p className="text-secondary">
                Browse astrologers and check their skills, specialties and
                reviews. To find your destinated Guruji.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4 px-3 d-flex justify-content-center">
          <div className="working-card d-flex flex-column align-items-center">
            <img className="" src={workImg} />
            <div className="d-flex flex-column align-items-center text-center">
              <h5 className="mb-4">Recharge for Consultation</h5>
              <p className="text-secondary">
                After recharge, you can have the new user offer: ₹5/min and MAX
                6 mins duration.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4 px-3 d-flex justify-content-center">
          <div className="working-card d-flex flex-column align-items-center">
            <img className="" src={workImg} />
            <div className="d-flex flex-column align-items-center text-center">
              <h5 className="mb-4">Solve problem with astrologers</h5>
              <p className="text-secondary">
                Call and Ask astrologers your problems.By providing your birth
                chart, astrologer can help you get the answer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Working;
