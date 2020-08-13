import React from "react";

function Buttons(props) {
  return (
    <div className="numberButton">
      <button type="button" className="decrement signButtons" onClick={props.onDecrement}>
        -
      </button>
      <p className="numberStyle paragraphFade">{props.guestStatus}</p>
      <button type="button" className="increment signButtons" onClick={props.onIncrement}>
        +
      </button>
    </div>
  );
}

export default Buttons;
