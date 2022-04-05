import React from "react";


export default function WeatherData(props) {
  if (props.city !== "") {
    return (
      <div className="details">
        <h3>The weather in {props.city}</h3>
        <ul>
          <li>Temperature: {props.temperature}°C </li>
          <li>Description: {props.description}</li>
          <li>Humiditiy: {props.humiditiy}</li>
          <li>Wind: {props.wind}</li>
          <li>
            <img src={props.icon} alt="" />
          </li>
        </ul>
      </div>
    );
  } else {
    return <div> Please enter a city</div>;
  }
}
