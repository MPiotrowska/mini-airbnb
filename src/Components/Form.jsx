import React from "react";
import Search from "./Search";
import Dropdown from "./Dropdown";
import "./FormStyle.css";
import Guests from "./Guests";
import { StateProvider } from "../Lib/store";

function Form() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <StateProvider>
      <form action="" className="form" onSubmit={handleSubmit}>
        <Dropdown />
        <Guests />
        <Search />
      </form>
    </StateProvider>
  );
}

export default Form;
