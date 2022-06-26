import React, { useRef } from "react";
import "./navbar.css";

const Navbar = () => {
  const cursor = useRef(null);

  const setCursor = (e, color) => {
    if (cursor) {
      cursor.current.style.left = e.clientX + "px";
      cursor.current.style.top = e.clientY + "px";
      cursor.current.style.backgroundColor = color;
      cursor.current.style.transform =
        " scale(1) translateX(-50%) translateY(-50%)";
    }
  };

  return (
    <div className="navContainer">
      <div className="cursor" ref={cursor}></div>
      <div className="navLeft">
        ABDUL <br /> AZEEZ
      </div>
      <div
        className="navCenter"
        onMouseLeave={() => {
          cursor.current.style.transform = "scale(0) ";
        }}
      >
        <ul className="navLinks">
          <li
            className="navLink"
            onMouseMove={(e) => setCursor(e, "rgba(255, 239, 213, 0.527)")}
          >
            <a href="#home">Home</a>
          </li>
          <li
            className="navLinkCenter"
            onMouseMove={(e) => setCursor(e, "rgb(82, 155, 133)")}
          >
            <a href="#skills"> Skills</a>
          </li>
          <li
            className="navLink"
            onMouseMove={(e) => setCursor(e, "lightgray")}
          >
            <a href="#projects">Projects</a>
          </li>
        </ul>
      </div>
      <a
        href={require("../../images/alausaAbdulAzeezResume.pdf")}
        download={"Alausa-AbdulAzeez-resume"}
      >
        <div className="navRight">Get Resume</div>
      </a>
    </div>
  );
};

export default Navbar;
