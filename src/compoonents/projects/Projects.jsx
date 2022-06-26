import React, { useState } from "react";
import "./projects.css";

const Projects = () => {
  const [showBtn, setShowBtn] = useState(false);

  const scrollToTop = (e) => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    // document.body.scrollIntoView({ behavior: "smooth" });
  };
  window.addEventListener("scroll", () => {
    if (window.scrollY >= 30) {
      setShowBtn(true);
    }
    if (window.scrollY < 30) {
      setShowBtn(false);
    }
  });
  return (
    <div className="projectsWrapper" id="projects">
      {showBtn && (
        <div className="backToTop" onClick={(e) => scrollToTop(e)}>
          Back to the top
        </div>
      )}
      <div className="project">
        <div className="projectTitleWrapper">
          <h3 className="projectTitle">Project 1</h3>
        </div>
        <div className="projectDesc">
          <span>Technologies used:</span> ReactJS, GraphQL, Redux-toolkit
        </div>
        <div className="imgCon">
          <a
            href="http://silver-fenglisu-6801e0.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="projectImg"
              src={require("../../images/eComm2.png")}
              alt=""
            />
          </a>
        </div>
      </div>
      <div className="projectEven">
        <div className="projectTitleWrapper">
          <h3 className="projectTitle color2">Project 2</h3>
        </div>
        <div className="projectDesc">
          <span>Technologies used:</span> ReactJS, NextJS, MongoDB,
          Redux-toolkit,
        </div>
        <div className="imgCon">
          <a
            href="http://zstaurant.herokuapp.com/"
            target={"_blank"}
            rel="noreferrer"
          >
            <img
              className="projectImg"
              src={require("../../images/zStaurant.png")}
              alt=""
            />
          </a>
        </div>
      </div>
      <div className="project">
        <div className="projectTitleWrapper">
          <h3 className="projectTitle color3">Project 3</h3>
        </div>
        <div className="projectDesc">
          <span>Technologies used:</span> ReactJS,MongoDB, ContextAPI,NodeJS
        </div>
        <div className="imgCon">
          <a
            href="http://zbookings.herokuapp.com/"
            target={"_blank"}
            rel="noreferrer"
          >
            <img
              className="projectImg"
              src={require("../../images/zBookings.png")}
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
