import React from "react";
import Search from "./Search";
import Dropdown from "./Dropdown";
import "./FormStyle.css";
import Guests from "./Guests";
import { useFormState, useFormDispatch } from "../Lib/store";
import { setSubmitted } from '../Lib/actions'

function Form() {
  const state = useFormState();
  const dispatch = useFormDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("You submitted your form!!");
    dispatch(setSubmitted())
   
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
