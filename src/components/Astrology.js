import React from "react";
import arrow from "../assets/arrow.png";
import { useState } from "react";
function Astrology() {
  const [description, setDescription] = useState(false);
  return (
    <div className="astrology d-flex flex-column justify-content-center align-items-center">
      <div className="d-flex align-items-center justify-content-center mb-3">
        <h1 className="mt-2">Why Astrology？</h1>
        <img
          src={arrow}
          className="open-icon"
          onClick={() => setDescription(!description)}
          style={description ? { transform: "rotate(0deg)" } : {}}
        />
      </div>
      <h5>Astrology reveals the will of the God</h5>
      <div
        className="description"
        style={description ? { height: "100%", overflow: "auto",marginTop:"32px" } : {}}
      >
        <p>
          I want to speak like a native Japanese person. Learning a foreign
          language has been eye opening, so I want to further improve my
          Japanese skills. AmazingTalker is a flexible platform that lets me
          schedule my lessons for whenever I need, select tutors that fit my
          budget and needs, and even purchase a single lesson if I'd like. Don’t
          put off learning a new language！
        </p>
        <p>
          I learn foreign languages to expand my future plans. Language learning
          lets me explore other interests and possibilities in my life.
          AmazingTalker is a student-oriented platform, where I can learn in my
          own pace. Tutors offer personalized courses based on my learning
          needs. Thanks to AmazingTalker, language learning has helped enrich my
          life.
        </p>
      </div>
    </div>
  );
}

export default Astrology;
