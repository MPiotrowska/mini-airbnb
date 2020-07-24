import React from "react";
import data from "../api/stays.json";
import Card from "./Card";
import "./PropertiesStyle.css"



function Properties() {
  return (
    <div className="container">
      {data.map((place) => {
        return (
         <Card place={place} />
     
        );
      })}
    </div>
  );
}
export default Properties;


