import React from "react";
import "./DropdownStyle.css";
import Downshift from "downshift";
import data from "../api/stays.json";
import { useFormState, useFormDispatch } from "../Lib/store";
import { setCity, setCleared } from '../Lib/actions'

const itemToString = (place) => (place ? place.city : "");

function Dropdown() {
  const [selectedValue, setSelectedValue] = React.useState("");
  const state = useFormState();
  const dispatch = useFormDispatch();


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
    <div className="dropdownButton">
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
                    style: { maxHeight: 50, overflowY: "scroll" },
                  })}
                >
                  {isOpen
                    ? unique.map((item, index) => {
                        return (
                          <li
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
