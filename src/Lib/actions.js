export function setCity(cityName) {
  return {
    type: "SET_CITY",
    cityName,
  };
}

export function setAdults(numberOfAdults) {
  return {
    type: "SET_ADULTS",
    numberOfAdults,
  };
}

export function setChildren(numberOfChildren) {
    return {
      type: "SET_CHILDREN",
      numberOfChildren,
    };
  }

  export function setSubmitted(submitted) {
    return {
      type: "SET_SUBMITTED",
      submitted,
    };
  }

  export function setFocused(guestBtnFocus) {
    return {
      type: "SET_FOCUSED",
      guestBtnFocus,
    };
  }
