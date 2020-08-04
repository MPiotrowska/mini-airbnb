import React from "react";
import Buttons from "./Buttons";
import "./GuestsStyle.css";

function Guests() {
  const [adultsNumber, setAdultsNumber] = React.useState(0);
  const [childrenNumber, setChildrenNumber] = React.useState(0);
  const [showGuestOptions, setShowGuestOptions] = React.useState(false);

  const handleIncrementAdults = () => {
    setAdultsNumber(adultsNumber + 1);
  };

  const handleDecrementAdults = () => {
    if (adultsNumber > 0) {
      setAdultsNumber(adultsNumber - 1);
    }
  };

  const handleIncrementChildren = () => {
    setChildrenNumber(childrenNumber + 1);
  };

  const handleDecrementChildren = () => {
    if (childrenNumber > 0) {
      setChildrenNumber(childrenNumber - 1);
    }
  };

  const showGuests = () => {
    setShowGuestOptions(!showGuestOptions);
  };

  return (
    <div>
      <button type="button" className="guestsButton" onClick={showGuests}>
        <h4>Guests</h4>
      </button>
      {showGuestOptions ? (
        <>
          <p>Adults</p>
          <p>Ages 13 or above </p>
          <Buttons
            guestStatus={adultsNumber}
            onIncrement={handleIncrementAdults}
            onDecrement={handleDecrementAdults}
          />
          <p>Children</p>
          <p>Ages 2-12</p>
          <Buttons
            guestStatus={childrenNumber}
            onIncrement={handleIncrementChildren}
            onDecrement={handleDecrementChildren}
          />
        </>
      ) : null}
    </div>
  );
}

export default Guests;
