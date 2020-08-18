import React from "react";

const initialState = {
  city: "",
  adults: 0,
  children: 0,
  totalGuests: 0,
  submitted: false,
  guestBtnFocus: false
};

const FormStateContext = React.createContext();
const FormDispatchContext = React.createContext();


function formReducer(state, action) {
  switch (action.type) {
    case "SET_CITY":
      const newCity = {
        ...state,
        city: action.cityName,
      };
      return newCity;
    case "SET_ADULTS":
      const newGuests = {
        ...state,
        adults: action.numberOfAdults,
        totalGuests: state.children + action.numberOfAdults,
      };
      return newGuests;
    case "SET_CHILDREN":
      const newChildren = {
        ...state,
        children: action.numberOfChildren,
        totalGuests: state.adults + action.numberOfChildren,
      };
      return newChildren;
    case "SET_SUBMITTED":
      const submittedForm = {
        ...state,
        submitted: action.submitted,
      };
      return submittedForm;
      case "SET_FOCUSED":
      const focusedGuestBtn ={
        ...state,
        guestBtnFocus: action.guestBtnFocus,
      }
      return focusedGuestBtn;
    default:
      throw new Error();

  }
}

function FormProvider({ children }) {
  const [state, dispatch] = React.useReducer(formReducer, { ...initialState });

  return (
    <FormStateContext.Provider value={state}>
      <FormDispatchContext.Provider value={dispatch}>
        {children}
      </FormDispatchContext.Provider>
    </FormStateContext.Provider>
  );
}

function useFormState() {
  const context = React.useContext(FormStateContext);

  if (context === undefined) {
    throw new Error("useFormState must be used within a FormProvider");
  }

  return context;
}

function useFormDispatch() {
  const context = React.useContext(FormDispatchContext);

  if (context === undefined) {
    throw new Error("useFormDispatch must be used within a FormProvider");
  }

  return context;
}

export { FormProvider, useFormState, useFormDispatch };
