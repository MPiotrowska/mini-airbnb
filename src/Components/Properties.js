import React from "react";
import data from "../api/stays.json";
import Card from "./Card";



function Properties() {
  return (
    <div>
      {data.map((place) => {
        return (
         <Card place={place} />
     
        );
      })}
    </div>
  );
}
export default Properties;


