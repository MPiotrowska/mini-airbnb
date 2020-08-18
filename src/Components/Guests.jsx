import React from "react";
import Buttons from "./Buttons";
import "./GuestsStyle.css";
import { useFormState, useFormDispatch } from "../Lib/store";
import { setAdults, setChildren, setSubmitted, setFocused } from "../Lib/actions";

function Guests() {
  const [adultsNumber, setAdultsNumber] = React.useState(0);
  const [childrenNumber, setChildrenNumber] = React.useState(0);
  const [showGuestOptions, setShowGuestOptions] = React.useState(false);

  const state = useFormState();
  const dispatch = useFormDispatch();


  React.useEffect(() => {
    dispatch(setAdults(adultsNumber));
  }, [adultsNumber]);

  React.useEffect(() => {
    dispatch(setChildren(childrenNumber));
  }, [childrenNumber]);

  React.useEffect(() => {
    setShowGuestOptions(state.guestBtnFocus);
  }, [state.guestBtnFocus])

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
    dispatch(setSubmitted(false))
    dispatch(setFocused(!state.guestBtnFocus))
  };

  return (
    <div>
      <button type="button" className="guestsButton formButton" onClick={showGuests}>
        <span className="guestsLabel">Guests</span>
        <span className="guestsPlaceholder paragraphFade">Add guests</span>
      </button>
      {showGuestOptions ? (
        <article className="guestOptionsContainer">
          <div className="row">
            <div className="textContainer">
              <p className="paragraphStyle paragraphFont">Adults</p>
              <p className="paragraphStyle paragraphFade">Ages 13 or above </p>
            </div>
            <div className="guestButtonInnerContainer">
              <Buttons
                guestStatus={adultsNumber}
                onIncrement={handleIncrementAdults}
                onDecrement={handleDecrementAdults}
              />
            </div>
          </div>
          <div className="row">
            <div className="textContainer">
              <p className="paragraphStyle paragraphFont">Children</p>
              <p className="paragraphStyle paragraphFade">Ages 2-12</p>
            </div>
            <div className="guestButtonInnerContainer">
              <Buttons
                guestStatus={childrenNumber}
                onIncrement={handleIncrementChildren}
                onDecrement={handleDecrementChildren}
              />
            </div>
          </div>
        </article>
      ) : null}
    </div>
  );
}

export default Guests;
