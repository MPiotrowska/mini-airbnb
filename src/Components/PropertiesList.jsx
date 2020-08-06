import React from "react";
import data from "../api/stays.json";
import Card from "./Card";
import { useFormState } from "../Lib/store";
import "./PropertiesStyle.css";

function PropertiesList() {
  const [properties, setProperties] = React.useState(data);
  const state = useFormState();

  function requestProperties(propertyObj) {
    return propertyObj.city === state.city && propertyObj.maxGuests >= state.totalGuests
  }

  React.useEffect(() => {
    if (state.city.length > 0 && state.totalGuests > 0) {
      const filteredProperties = properties.filter(requestProperties);
      setProperties(filteredProperties);
    }
  }, [state.submitted]);

  return (
    <div className="container">
      {properties.map((place) => {
        return <Card place={place} />;
      })}
    </div>
  );
}
export default PropertiesList;
