import React, { useState } from "react";
import axios from "axios";
export default function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loaded, setLoaded] = useState(false);
  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "32560c27e8e23a3db17cfaff2b468cd2";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?id={city id}&appid={apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }
  function searchCity(event) {
    setCity(event.target.value);
  }
  function displayWeather(response) {
    console.log(response.data);
    setLoaded(true);
    setWeather({
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      wind: Math.round(response.data.wind.speed),
      humidity: Math.round(response.data.main.humidity),
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }
  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Enter city..."
        onChange={searchCity}
      />
      <input type="submit" value="Search" />
    </form>
  );
  if (loaded) {
    return (
      <div>
        {form}
        <ul>
          <li>Temperature: {weather.temperature}°F</li>
          <li>Description: {weather.description}</li>
          <li>Wind: {weather.wind} mph </li>
          <li>Humidity: {weather.humidity}% </li>
          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}