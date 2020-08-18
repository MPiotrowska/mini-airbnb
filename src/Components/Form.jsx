import React from "react";
import Search from "./Search";
import Dropdown from "./Dropdown";
import "./FormStyle.css";
import Guests from "./Guests";
import { useFormDispatch } from "../Lib/store";
import { setSubmitted, setFocused } from '../Lib/actions'

function Form() {
  const dispatch = useFormDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(setSubmitted(true))
    dispatch(setFocused(false))
   
  };
  return (
    <form action="" className="form" onSubmit={handleSubmit}>
      <Dropdown />
      <Guests />
      <Search />
    </form>
  );
}

export default Form;
