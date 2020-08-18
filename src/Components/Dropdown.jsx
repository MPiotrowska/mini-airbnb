import React from "react";
import "./DropdownStyle.css";
import Downshift from "downshift";
import data from "../api/stays.json";
import { useFormState, useFormDispatch } from "../Lib/store";
import { setCity, setFocused, setSubmitted } from '../Lib/actions'

const itemToString = (place) => (place ? place.city : "");

function Dropdown() {
  const [selectedValue, setSelectedValue] = React.useState("");
  const state = useFormState();
  const dispatch = useFormDispatch();

  const handleClick = () => {
    dispatch(setSubmitted(false))
    dispatch(setFocused(false))
  }


  React.useEffect(() => {
     dispatch(setCity(selectedValue))
  }, [selectedValue])

  React.useEffect(() => {
    if(state.submitted === true) {
      setSelectedValue("")
    }
 }, [state.submitted])


  const unique = [];

  data.map((obj) =>
    unique.filter(
      (item) => item.city === obj.city && item.country === obj.country
    ).length > 0
      ? null
      : unique.push(obj)
  );

  return (
    <div className="dropdownButton formButton" onClick={handleClick}>
      <Downshift itemToString={itemToString}>
        {({
          getLabelProps,
          getInputProps,
          getMenuProps,
          getItemProps,
          inputValue,
          isOpen,
          highlightedIndex,
        }) => {

          setSelectedValue(inputValue);

          return (
            <div className="dropdownBtnContainer">
              <label className="labelBox" {...getLabelProps()}>
                Location
              </label>
              <input className="downshiftBox" {...getInputProps()} />

              <div>
                <ul
                  {...getMenuProps({
                    style: { maxHeight: 100, overflowY: "scroll" },
                  })}
                >
                  {isOpen
                    ? unique.map((item, index) => {
                        return (
                          <li className="placesList"
                            {...getItemProps({
                              item,
                              key: item.id,
                              style: {
                                backgroundColor:
                                  index === highlightedIndex
                                    ? "lightgray"
                                    : null,
                              },
                            })}
                          >
                            {<svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>}
                            {item.city} {item.country}
                          </li>
                        );
                      })
                    : null}
                </ul>
              </div>
            </div>
          );
        }}
      </Downshift>
    </div>
  );
}

export default Dropdown;
