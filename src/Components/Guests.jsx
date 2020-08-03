import React from "react";
import Buttons from './Buttons';
import "./GuestsStyle.css";

function Guests() {
  const [adultsNumber, setAdultsNumber] = React.useState(0);
  const [childrenNumber, setChildrenNumber] = React.useState(0);

  const handleDecrementAdults = function () {
    setAdultsNumber(adultsNumber - 1);
  };

  const handleIncrementAdults = function () {
    setAdultsNumber(adultsNumber + 1);
  };

  const handleDecrementChildren = function () {
    setChildrenNumber(childrenNumber - 1);
  };

  const handleIncrementChildren = function () {
    setChildrenNumber(childrenNumber + 1);
  };

  return (
    <div>
      <button className="guestsButton">
        <h4>Guests</h4>
      </button>
      <p>Adults</p>
      <p>Ages 13 or above </p>
      <Buttons state={adultsNumber} onIncrement={handleIncrementAdults} onDecrement={handleDecrementAdults} />
      <p>Children</p>
      <p>Ages 2-12</p>
      <Buttons state={childrenNumber} onIncrement={handleIncrementChildren} onDecrement={handleDecrementChildren} />
    </div>
  );
}

export default Guests;
