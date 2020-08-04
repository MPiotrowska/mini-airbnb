import React from "react";
import "./DropdownStyle.css";
import Downshift from "downshift";
import data from "../api/stays.json";
import matchSorter from "match-sorter"

const itemToString = (place) => (place ? place.city : "");



function Dropdown() {
  const unique = [];

  data.map((obj) =>
    unique.filter(
      (item) => item.city === obj.city && item.country === obj.country
    ).length > 0
      ? null
      : unique.push(obj)
  );

  console.log(unique);

  return (
    <div className="dropdownButton">
      <Downshift itemToString={itemToString}>
        {({
          getLabelProps,
          getInputProps,
          getMenuProps,
          isOpen,
          getItemProps,
          highlightedIndex,
          inputValue
        }) => {
          return (
            <div>
              <label className="labelBox" {...getLabelProps()}>
                Location
              </label>
              <input className="downshiftBox" {...getInputProps()} />

              <div>
                <ul {...getMenuProps({style: {maxHeight: 50, overflowY: 'scroll'}})}>
                  {isOpen
                    ? unique.map((item, index) => {
                        return (
                          <li {...getItemProps({ item, key: item.id,  style: { backgroundColor: index === highlightedIndex ? "lightgray" : null, }})}>
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
