import React from "react";
import "../../Features/backgroundcolor.css";
import Logo from "./../../Components/Logo/Logo";
import { useNavigate } from "react-router-dom";
import Button from "./../../Components/Button/button";

const ThreeDays = () => {
  const navigate = useNavigate();

  const handleMore = () => {
    navigate("/sevenDays");
  };

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center bg-color2 min-h-screen">
      <div className="absolute top-0 left-0 p-8 text-center">
        <Logo />
        <h1 className="absolute text-2xl text-white top-50 left-0  p-5 lg:ml-10">
          Weather
        </h1>
      </div>
      <div
        className="absolute top-50 mt-20 left-20 w-full lg:w-3/4 p-6 py-10 boader rounded-full ml-40 lg:mt-0 py-20  p-10  text-center text-white bg-[#1C146F]"
        style={{ borderRadius: "2cm" }}
      >
        <div>
          <div className="current-weather mb-10">
            <h2 className="text-2xl font-bold">Today's Weather in Colombo</h2>
            <div className="flex flex-col items-center mt-4">
              <img
                src="https://openweathermap.org/img/wn/10d@2x.png"
                alt="weather-icon"
              />
              <p>Temperature: 27.15 °C</p>
              <p>Weather: Cludy</p>
              <p>Humitidy 83%</p>
              <p>Wind Speed: 5m/s</p>
            </div>
          </div>
          <div className="three-day-forecast p-5">
            <label className="w-full text-left mb-5 mt-10 ml-10 text-2xl font-bold">
              Three Days Forecast
            </label>
            <div className="flex justify-between">
              {[1, 2, 3].map((day, index) => (
                <div key={index} className="flex flex-col items-center">
                  <img
                    src="https://openweathermap.org/img/wn/10d@2x.png"
                    alt="weather-icon"
                  />
                  <p>Temperature: 27.15 °C</p>
                  <p>Weather: Cludy</p>
                  <p>Humitidy 83%</p>
                  <p>Wind Speed: 5m/s</p>
                </div>
              ))}
            </div>
            <div className="mt-2 lg:mt-10 w-full lg:w-45 text-center">
              <Button text="View More" onClick={handleMore} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeDays;
