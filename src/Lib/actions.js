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

  export function setSubmitted() {
    return {
      type: "SET_SUBMITTED",
    };
  }

