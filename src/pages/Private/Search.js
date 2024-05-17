import React, { useEffect, useState } from "react";
import "../../Features/backgroundcolor.css";
import Logo from "../../Components/Logo/Logo";
import axios from "axios";
import Button from "../../Components/Button/button";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the weather data for Colombo on component mount
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          "https://api.openweathermap.org/data/2.5/weather?q=Colombo&appid=b4528fd9d4c6423b2ecd369c3cde93c9&units=metric"
        );
        setWeather(response.data);
        setLoading(false);
      } catch (err) {
        setError("Error fetching Weather data");
        setLoading(false);
      }
    };
    fetchWeather();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        "https://api.openweathermap.org/data/2.5/weather?lat=${latitude.trim()}&lon=${longitude.trim()}&appid=b4528fd9d4c6423b2ecd369c3cde93c9&units=metric"
      );
      setWeather(response.data);
    } catch (err) {
      setError("Error fetching Weather data");
    } finally {
      setLoading(false);
    }
    navigate("/threeDays");
  };

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center bg-color2 min-h-screen">
      <div className="absolute top-0 left-0 p-8 text-center">
        <Logo />
        <h1 className="absolute text-2xl text-white top-20 left-40 p-5 lg:ml-20">
          Weather
        </h1>
      </div>
      <form
        onSubmit={handleSearch}
        className="absolute top-40 bottom-40 mt-10 flex w-full lg:mt-20 justify-center p-2"
      >
        <div className="relative bottom-20 w-full lg:w-1/2">
          <input
            className="border rounded-full mt-2 lg:mt-0 py-3 px-5 text-grey-darker w-full text-center mb-4"
            type="text"
            placeholder="Enter the latitude and longitude of the area"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="mt-2 lg:mt-4 w-full lg:w-36">
          <Button text="Search" onClick={handleSearch} />
        </div>
      </form>
      <form
        className="absolute top-80 mt-10 w-full lg:w-3/4 p-5 py-5 boader rounded-full ml-40 lg:mt-0 py-20  p-10  text-center text-white bg-[#1C146F] "
        style={{ borderRadius: "2cm" }}
      >
        <div className="mt-5 py-30">
          {loading && <p>Loading Weather Data...</p>}
          {error && <p>{error}</p>}
          {weather && (
            <div>
              <h2 className="text-2xl font-bold">Weather in {weather.name}</h2>
              <div className="flex flex-col items-center">
                <img
                  src="https://openweathermap.org/img/wn/10d@2x.png"
                  alt="weather-icon"
                />
                <p>Temperature: {weather.main.temp} °C</p>
                <p>Weather: {weather.weather[0].description}</p>
                <p>Humidity: {weather.main.humidity} %</p>
                <p>Wind Speed: {weather.wind.speed} m/s</p>
              </div>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default Search;
