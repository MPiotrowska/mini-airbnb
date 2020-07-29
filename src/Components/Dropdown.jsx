import React from "react";
import "./DropdownStyle.css";
import Downshift from "downshift";
import data from "../api/stays.json";

function Dropdown() {

    const unique = [];

    data.map(obj => unique.filter(item => item.city === obj.city && item.country === obj.country).length > 0 ? null : unique.push(obj));
    
    console.log(unique);
    
  return (
    <div className="dropdownButton">
      <Downshift>
        {({ getLabelProps, getInputProps }) => (
          <div>
            <label className="labelBox" {...getLabelProps()}>Location</label>
            <input className="downshiftBox" {...getInputProps()} />

            <div>
              <ul>
                {unique.map((place) => {
                  return (
                    <li key={place.id}>
                      {place.country} {place.city}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        )}
      </Downshift>
    </div>
  );
}

export default Dropdown;
