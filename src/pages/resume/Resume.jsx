import React, { useRef, useState } from "react";
import Projects from "../../compoonents/projects/Projects";
import Skills from "../../compoonents/skills/Skills";
import "./resume.css";

const Resume = () => {
  const [inPosition, setInPosition] = useState(false);
  const resumeRef = useRef();

  const setBackgroundColor = () => {
    if (resumeRef.current && window.scrollY >= 571) {
      setInPosition(true);
    }
    if (resumeRef.current && window.scrollY < 571) {
      setInPosition(false);
    }
  };

  window.addEventListener("scroll", () => setBackgroundColor());

  return (
    <div
      className="resumeContainer"
      // className={` ${inPosition ? "resumeContainer show" : "resumeContainer"} `}
      id="resume"
      ref={resumeRef}
    >
      {/* <div className="white "> */}
      <div className={` ${inPosition ? "white " : "black"} `}>
        <Skills inPosition={inPosition} />
        <Projects />
      </div>
    </div>
  );
};

export default Resume;
