import React from "react";
import "./skills.css";

const Skills = ({ inPosition }) => {
  return (
    <div className="skillsContainer" id="skills">
      <div className="skillsWrapper">
        <h3 className="skillsTitle">Skills</h3>
      </div>
      <div className="skills">
        <div className="skillWrapper">
          <div className={` ${inPosition ? "skillWhite " : "skillBlack"} `}>
            <img
              src={require("../../images/htmlIcon.png")}
              alt=""
              className="skillIcon"
            />
            <h3 className="skilllText">HTML</h3>
          </div>
        </div>
        <div className="skillWrapper">
          <div className={` ${inPosition ? "skillWhite " : "skillBlack"} `}>
            <img
              src={require("../../images/cssIcon.png")}
              alt=""
              className="skillIcon"
            />
            <h3 className="skilllText">CSS</h3>
          </div>
        </div>
        <div className="skillWrapper">
          <div className={` ${inPosition ? "skillWhite " : "skillBlack"} `}>
            <img
              src={require("../../images/bootstrapIcon.png")}
              alt=""
              className="skillIcon"
            />
            <h3 className="skilllText">Bootstrap</h3>
          </div>
        </div>
        <div className="skillWrapper">
          <div className={` ${inPosition ? "skillWhite " : "skillBlack"} `}>
            <img
              src={require("../../images/scssIcon.png")}
              alt=""
              className="skillIcon"
            />
            <h3 className="skilllText">SCSS</h3>
          </div>
        </div>
        <div className="skillWrapper">
          <div className={` ${inPosition ? "skillWhite " : "skillBlack"} `}>
            <img
              src={require("../../images/jsIcon.png")}
              alt=""
              className="skillIcon"
            />
            <h3 className="skilllText">Javascript</h3>
          </div>
        </div>
        <div className="skillWrapper">
          <div className={` ${inPosition ? "skillWhite " : "skillBlack"} `}>
            <img
              src={require("../../images/pythonIcon.png")}
              alt=""
              className="skillIcon"
            />
            <h3 className="skilllText">Python</h3>
          </div>
        </div>
        <div className="skillWrapper">
          <div className={` ${inPosition ? "skillWhite " : "skillBlack"} `}>
            <img
              src={require("../../images/nodeIcon.png")}
              alt=""
              className="skillIcon"
            />
            <h3 className="skilllText">NodeJS</h3>
          </div>
        </div>
        <div className="skillWrapper">
          <div className={` ${inPosition ? "skillWhite " : "skillBlack"} `}>
            <img
              src={require("../../images/django.png")}
              alt=""
              className="skillIcon"
            />
            <h3 className="skilllText">Django</h3>
          </div>
        </div>
        <div className="skillWrapper">
          <div className={` ${inPosition ? "skillWhite " : "skillBlack"} `}>
            <img
              src={require("../../images/reactIcon.png")}
              alt=""
              className="skillIcon"
            />
            <h3 className="skilllText">ReactJS</h3>
          </div>
        </div>
        <div className="skillWrapper">
          <div className={` ${inPosition ? "skillWhite " : "skillBlack"} `}>
            <img
              src={require("../../images/nextJsIcon.png")}
              alt=""
              className="skillIcon"
            />
            <h3 className="skilllText">NextJS</h3>
          </div>
        </div>
        <div className="skillWrapper">
          <div className={` ${inPosition ? "skillWhite " : "skillBlack"} `}>
            <img
              src={require("../../images/mongoIcon.png")}
              alt=""
              className="skillIcon"
            />
            <h3 className="skilllText">MongoDB</h3>
          </div>
        </div>
        <div className="skillWrapper">
          <div className={` ${inPosition ? "skillWhite " : "skillBlack"} `}>
            <img
              src={require("../../images/postgreSQLIcon.png")}
              alt=""
              className="skillIcon"
            />
            <h3 className="skilllText">PostgreSQL</h3>
          </div>
        </div>
        <div className="skillWrapper">
          <div className={` ${inPosition ? "skillWhite " : "skillBlack"} `}>
            <img
              src={require("../../images/gitHubIcon.png")}
              alt=""
              className="skillIcon"
            />
            <h3 className="skilllText">Github</h3>
          </div>
        </div>
        <div className="skillWrapper">
          <div className={` ${inPosition ? "skillWhite " : "skillBlack"} `}>
            <img
              src={require("../../images/gitIcon.png")}
              alt=""
              className="skillIcon"
            />
            <h3 className="skilllText">Git</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
