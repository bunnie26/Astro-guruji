import React, { useState, useEffect } from "react";
import axios from "axios";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./consultslider.css";

function Arrow(props) {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left
          ? "partners-carousal-arrow--left"
          : "partners-carousal-arrow--right"
      } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}

function ConsultSlider() {
  // console.log(partners);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      initial: 0,
      loop: true,
      // rtl: true,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
      breakpoints: {
        "(min-width: 400px)": {
          slides: { perView: 1, spacing: 5 },
        },
        "(min-width: 740px)": {
          slides: { perView: 3, spacing: 10 },
        },
        "(min-width: 1120px)": {
          slides: { perView: 5, spacing: 15 },
        },
      },
      slides: { perView: 1 },
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 10000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <div className="slider partner-slider pb-5 container">
      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider">
          <div className="partners-carousal-cards">
            <div className="keen-slider__slide number-slide1 d-flex flex-column align-items-center justify-content-center px-3 pt-5 text-center fw-normal">
              <h3>Astrology</h3>
              <p className="fs-5">Verified and experience astrologers </p>
            </div>
            <div className="keen-slider__slide number-slide2 d-flex flex-column align-items-center justify-content-center px-3 pt-5 text-center fw-normal">
              <h3>Kundli matching</h3>
              <p className="fs-5">Verified and experience astrologers </p>
            </div>
            <div className="keen-slider__slide number-slide3 d-flex flex-column align-items-center justify-content-center px-3 pt-5 text-center fw-normal">
              <h3>Numerology</h3>
              <p className="fs-5">Verified and experience astrologers </p>
            </div>
            <div className="keen-slider__slide number-slide4 d-flex flex-column align-items-center justify-content-center px-3 pt-5 text-center fw-normal">
              <h3>Numerology</h3>
              <p className="fs-5">Verified and experience astrologers </p>
            </div>
            <div className="keen-slider__slide number-slide5 d-flex flex-column align-items-center justify-content-center px-3 pt-5 text-center fw-normal">
              <h3>Tarot card reading</h3>
              <p className="fs-5">Verified and experience astrologers </p>
            </div>
            <div className="keen-slider__slide number-slide6 d-flex flex-column align-items-center justify-content-center px-3 pt-5 text-center fw-normal">
              <h3>Palmistry</h3>
              <p className="fs-5">Verified and experience astrologers </p>
            </div>
          </div>
        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </div>
      {loaded && instanceRef.current && (
        <div className="dots">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              ></button>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default ConsultSlider;
