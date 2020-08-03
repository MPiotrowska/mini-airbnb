import React from "react";

function Buttons(props) {
  return (
    <div className="numberButton">
      <button type="button" className="decrement" onClick={props.onDecrement}>
        -
      </button>
      <p>{props.state}</p>
      <button type="button" className="increment" onClick={props.onIncrement}>
        +
      </button>
    </div>
  );
}

export default Buttons;