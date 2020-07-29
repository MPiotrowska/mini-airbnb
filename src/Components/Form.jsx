import React from 'react';
import Search from './Search';
import Dropdown from './Dropdown';
import "./FormStyle.css"
import Guests from './Guests';




function Form() {
  return (
    <form action="" className="form" >
      <Dropdown/>
      <Guests/>
        <Search/>
    </form>
  );
}

export default Form;
