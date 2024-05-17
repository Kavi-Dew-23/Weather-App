import React from "react";
import Logo from "../../Components/Logo/Logo";
import "../../Features/backgroundcolor.css";

const SevenDays = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center bg-color2 min-h-screen">
      <div className="absolute top-0 left-0 p-8 text-center">
        <Logo />
        <h1 className="absolute text-2xl text-white top-20 left-60  p-4 mt-10 lg:ml-30">
          Weather
        </h1>
      </div>
      <div
        className="absolute top-60 mt-20 left-5 right-5 lg:w-6/4 p-6 py-20 boader rounded-full ml-30 lg:mt-0 py-20 px-5  p-20  text-center text-white bg-[#1C146F]"
        style={{ borderRadius: "2cm" }}
      >
        <div className="three-day-forecast p-5">
          <label className="w-full text-left mb-20 text-2xl font-bold">
            Seven Days Forecast
          </label>
          <div className="flex justify-between mt-12">
            {[1, 2, 3, 4, 5, 6, 7].map((day, index) => (
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
        </div>
      </div>
    </div>
  );
};

export default SevenDays;
