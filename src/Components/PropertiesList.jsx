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
    if (state.city.length > 0 && state.submitted === true) {
      const filteredProperties = data.filter(requestProperties);
      setProperties(filteredProperties);
    }
  }, [state.submitted]);

  return (
    <>
    <h3 className="propertiesListTitle">Explore near and far from ordinary</h3>
    <div className="container">
      {properties.map((place) => {
        return <Card place={place} />;
      })}
    </div>
    </>
  );
}
export default PropertiesList;
