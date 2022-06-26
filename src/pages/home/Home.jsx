import React from "react";
import Main from "../../compoonents/main/Main";
import Navbar from "../../compoonents/navbar/Navbar";
import "./home.css";

const Home = () => {
  return (
    <div className="homeWrapper" id="home">
      <Navbar />
      <Main />
    </div>
  );
};

export default Home;
