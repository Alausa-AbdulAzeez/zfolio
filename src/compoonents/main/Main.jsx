import React, { useRef } from "react";
import "./main.css";

const Main = () => {
  const mainCursor = useRef(null);
  let color;
  const colorArr = [
    "lightgray",
    "rgba(255, 239, 213, 0.527)",
    "#a28089",
    "#ffa8B6",
    "#edf756",
    "#9df9ef",
    "#51e2f5",
  ];

  const setMainCursor = (e) => {
    if (mainCursor) {
      function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }
      color = getRandomInt(colorArr.length);
      mainCursor.current.style.backgroundColor = colorArr[color || 0];
      mainCursor.current.style.left = e.clientX + "px";
      mainCursor.current.style.top = e.clientY + "px";
      mainCursor.current.style.transform =
        "scale(1) translateX(-50%) translateY(-50%)";
    }
  };
  return (
    <div
      className="mainWrapper"
      onMouseMove={(e) => setMainCursor(e, colorArr)}
      onMouseLeave={() => {
        mainCursor.current.style.transform = "scale(0)";
      }}
    >
      <h1 className="mainTextContainer">
        SOFTWARE <br /> DEVELOPER
      </h1>
      <div className="mainCursor" ref={mainCursor}></div>
      <div className="eMail">
        <span>Email:</span> alausaabdulazeez@gmail.com
      </div>
    </div>
  );
};

export default Main;
