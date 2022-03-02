import React from "react";
import star from "../assets/star.png";
import hero_img from "../assets/hero.png";

function Hero() {
  return (
    <div className="Hero-section mb-5">
      <div className="hero-data">
        <h1>Find your destiny and remedies with top expert astrologers</h1>
        <hr />
        <p className=" fs-5">
          Call to consult with professional astrologers
        </p>
        <div className="d-flex hero-ratings">
          <div className="rating-box mr-2">
            <p className="mb-0">
              <img src={star} />
              Trustpilot
            </p>
            <h3>
              4.9
              <img src={star} />
              <img src={star} />
              <img src={star} />
              <img src={star} />
              <img src={star} />
            </h3>
          </div>
          <div className="rating-box ">
            <p className="mb-0">
              <img src={star} />
              Trustpilot
            </p>
            <h3>
              4.9
              <img src={star} />
              <img src={star} />
              <img src={star} />
              <img src={star} />
              <img src={star} />
            </h3>
          </div>
          <div className="rating-box mr-2">
            <p className="mb-0">
              <img src={star} />
              Trustpilot
            </p>
            <h3>
              4.9
              <img src={star} />
              <img src={star} />
              <img src={star} />
              <img src={star} />
              <img src={star} />
            </h3>
          </div>
        </div>
        <button className="btn text-white mt-4 fs-5">Talk Now</button>
      </div>
      <div className="hero-image">
        <img src={hero_img}></img>
      </div>
    </div>
  );
}

export default Hero;
