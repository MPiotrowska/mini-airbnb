import React from "react";
import Form from "./Form";
import Logo from "./Logo";
import "./HeaderStyle.css";

function Header() {
  return (
    <div className="header">
      <div className="header-inner">
        <Logo />
        <Form />
      </div>
    </div>
  );
}

export default Header;
