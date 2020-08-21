import React from "react";
import Form from "./Form";
import Logo from "./Logo";
import "./HeaderStyle.css";
import Hero from "./Hero/Hero";

function Header() {
  return (
    <>
      <div className="header">
        <div className="header-inner">
          <Logo />
          <Form />
        </div>
      </div>
      <Hero />
    </>
  );
}

export default Header;
