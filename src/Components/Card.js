import React from 'react';
import CardStyle from "./CardStyle.css"




function Card(props) {
  return (
    <section class='card'>
        
            <img class="image"src={props.place.photo}/>
            <div class="info">
            <h3>{props.place.superHost }</h3>
            <h4>{props.place.type}</h4>
            <h4>{props.place.beds}</h4>
            <h4>{props.place.rating}</h4>
            </div>
            <div>
           {props.place.title}
           
           
         
            
            </div>
            
          
    </section>
  );
}

export default Card;