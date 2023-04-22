import React from "react";

const Weather = ({weather}) => {
    
    console.log('weather',weather)
    console.log('derece',Math.floor(weather.main.temp))
  return (
    <div className="app">
      <img
        className="background"
        src="https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHdlYXRoZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"
        alt=""
      />
      <div className="weather">
        <div className="top">
          <div className="location">
            <p>{weather.name}</p>
          </div>
          <div className="temp">
            <h1>{Math.floor(weather.main.temp)}°C</h1>
          </div>
          <div className="description">
            <p>{Math.floor(weather.weather[0].main)}</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels title">
            <p>Fees Like</p>
            <p>{Math.floor(weather.main.feels_like)}°C</p>
          </div>
          <div className="humidity title">
            <p>Humidty</p>
            <p>{Math.floor(weather.main.humidity)}%</p>
          </div>

          <div className="wind title">
            <p>Wind Speed</p>
            <p>{Math.floor(weather.wind.speed)}MPH</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
