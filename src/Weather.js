import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Milan",
    date: "Mon 23:34",
    description: "Clear",
    imgUrl: "https://openweathermap.org/img/wn/01d@2x.png",
    humidity: 70,
    wind: 11,
    temperature: 23
  };
  return (
    <div className="Weather">
      <form className="mb-3">
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Search a city"
              className="form-control"
              autocomplete="off"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <div className="overview">
        <h1>{weatherData.city}</h1>
        <ul>
          <li>Last updated: {weatherData.date}</li>
          <li>{weatherData.description}</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="clearfix weather-temperature">
            <img
              src={weatherData.imgUrl}
              alt={weatherData.description}
              className="float-left"
            />

            <div className="float-left">
              <strong>{weatherData.temperature}</strong>
              <span className="units">
                <a href="/" className="active">
                  °C
                </a>{" "}
                |{" "}
                <a href="/" className="active1">
                  {" "}
                  °F{" "}
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="col md-6">
          <ul>
            <li>Humidity: {weatherData.humidity}%</li>
            <li>Wind: {weatherData.wind} km/h</li>
          </ul>
        </div>
      </div>
      <div className="weather-fofecast">
        <div className="row">
          <div className="col-2">
            <div className="weather-fofecast-date">Mon</div>
            <img
              src="https://openweathermap.org/img/wn/01n@2x.png"
              alt="clear"
              width="42"
            />
            <div className="weather-fofecast-tematurepers">
              <span className="weather-fofecast-temperature-max">18°</span>
              <span className="weather-fofecast-temperature-min">12°</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}
