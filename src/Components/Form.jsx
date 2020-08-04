import React from 'react';
import Search from './Search';
import Dropdown from './Dropdown';
import "./FormStyle.css"
import Guests from './Guests';




function Form() {

  const handleSubmit = (event) => {
    event.preventDefault()
  }
  return (
    <form action="" className="form" onSubmit={handleSubmit }>
      <Dropdown/>
      <Guests/>
        <Search/>
    </form>
  );
}

export default Form;
