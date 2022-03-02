import React from "react";
import reason from "../assets/reason.png";
function Reasons() {
  return (
    <div className="reasons d-flex justify-content-center  flex-column">
      <div className="card m-5 py-5 px-4 d-flex justify-content-center flex-column">
        <h1 className="align-self-center">4 Reason why you should choose Guruji</h1>
        <div className="card-container d-flex">
          <card className="d-flex col-12 col-md-6 my-4 align-items-center">
            <img src={reason} />
            <div className="mx-4">
              <h3>800+ Outstanding astrologers</h3>
              <h5>Verified and experience astrologersge</h5>
            </div>
          </card>
          <card className="d-flex col-12 col-md-6 my-4 align-items-center">
            <img src={reason} />
            <div className="mx-4">
              <h3>Get your answer anytime anywhere</h3>
              <h5>You don't need astrologer near you</h5>
            </div>
          </card>
          <card className="d-flex col-12 col-md-6 my-4 align-items-center">
            <img src={reason} />
            <div className="mx-4">
              <h3>Diversified services</h3>
              <h5>
                Tarot, Vedic, Vastu, Palmism, Face reading and anything you need
              </h5>
            </div>
          </card>
          <card className="d-flex col-12 col-md-6 my-4 align-items-center">
            <img src={reason} />
            <div className="mx-4">
              <h3>100% Guarantee???</h3>
              <h5>Verified and experience astrologersge</h5>
            </div>
          </card>
        </div>
      </div>
    </div>
  );
}

export default Reasons;
