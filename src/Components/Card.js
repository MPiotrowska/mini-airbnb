import React from "react";
import "./CardStyle.css";

function Card(props) {
  return (
    <section className="container-card-">
      <img className="container-image" src={props.place.photo} />
      <div className="container-info">
        <h3 className="host">{props.place.superHost}</h3>
        <h4>{props.place.type}</h4>
        <h4>{props.place.beds + " beds"}</h4>
        <div className="container-ratings">
          <span>
            <svg className="star"
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              viewBox=" 0 0 24 24"
              width="20"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          </span>
          <h4>{props.place.rating}</h4>
        </div>
      </div>

      <div class="container-description">{props.place.title}</div>
    </section>
  );
}

export default Card;
