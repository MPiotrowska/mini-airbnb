import React from "react";
import large from "../../Images/hero-large.jpg";
import "./Hero.css";

function Hero(props) {
  return (
    <div className="hero">
      <img
        src={large}
        alt="Two people sitting and enjoying a mountainous scenery"
      />
      <div className="text-container">
        <h1 className="title">Get out and stretch your imagination</h1>
        <h2 className="text">Plan a different kind of getaway to uncover the hidden gems near you.</h2>
      </div>
    </div>
  );
}

export default Hero;
