import React from "react";
import ConsultSlider from "./sliders/consultSlider";

function Consult() {
  return (
    <div className="consult d-flex justify-content-center align-items-center flex-column">
      <h1>All the problem you can consult and get answer</h1>
      <div className="button-container d-flex justify-content-center align-items-center mb-4">
        <button type="button" class="btn btn-light mb-3 mx-2">
          Scenario
        </button>
        <button type="button" class="btn btn-dark mb-3 mx-2">
          Consult methods
        </button>
      </div>
      <ConsultSlider />
    </div>
  );
}

export default Consult;
