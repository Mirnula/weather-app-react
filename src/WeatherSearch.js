import React, { useState } from "react";
import axios from "axios";
import WeatherData from "./WeatherData";

export default function WeatherSearch() {
  let [city, setCity] = useState("");
  let [search, setSearch] = useState("");
  let [temperature, setTemperature] = useState("");
  let [description, setDescription] = useState("");
  let [humidity, setHumidity] = useState("");
  let [wind, setWind] = useState("");
  let [icon, setIcon] = useState("");

  function submitSearch(event) {
    event.preventDefault();
    let apiKey = "0163abee892c1733e53a43b6a0e7908a";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(showWeather);
    return setSearch(city);
  }

  function showWeather(response) {
    console.log(response.data);
    setTemperature(Math.round(response.data.main.temp));
    setDescription(response.data.weather[0].main);
    setHumidity(response.data.main.humidity);
    setWind(Math.round(response.data.wind.speed));
    setIcon(
      `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }

  function newCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="search">
      <form onSubmit={submitSearch}>
        <input type="search" placeholder="Enter a city" onChange={newCity} />
        <input type="submit" value="Search" />
      </form>
      <WeatherData
        city={search}
        temperature={temperature}
        description={description}
        humidity={humidity}
        wind={wind}
        icon={icon}
      />
    </div>
  );
}
