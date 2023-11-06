import React from 'react';
import './WeatherApp.css';

import cloud_icon from '../assets/cloud.png';
import humidity_icon from '../assets/humidity.png';
import search_icon from '../assets/search.png';
import wind_icon from '../assets/wind.png';

const WeatherApp = () => {

    let api_key = "4cdc9b67bb98760e77eba182643b88f7";

    const search = async () => { // Tandai fungsi sebagai async
        const element = document.getElementsByClassName("cityInput");
        if (element[0].value === "") {
            return 0;
        }

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=metric&appid=${api_key}`;

        try {
            let response = await fetch(url);
            let data = await response.json();

            const humidity = document.getElementsByClassName("humidity-percent");
            const wind = document.getElementsByClassName("wind-rate");
            const temperature = document.getElementsByClassName("weather-temp");
            const location = document.getElementsByClassName("weather-location");

            humidity[0].innerHTML = data.main.humidity + "%";
            wind[0].innerHTML = data.wind.speed + " km/h";
            temperature[0].innerHTML = data.main.temp + "°C";
            location[0].innerHTML = data.name;
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    return (
        <div className='container'>
            <div className='top-bar'>
                <input type="text" className='cityInput' placeholder='search' />
                <div className="search-icon" onClick={() => { search() }}>
                    <img src={search_icon} alt="Search Icon" className="search-icon-img" />
                </div>
            </div>
            <div className='current-data'>
                <div className='weather-image'>
                    <img src={cloud_icon} alt="Cloud Icon" className='cloud-icon' />
                </div>
                <div className="weather-temp">24°C</div>
                <div className="weather-location">London</div>
                <div className="data-container">
                    <div className="element">
                        <img src={humidity_icon} alt="Humidity Icon" className="humidity-icon" />
                        <div className="data">
                            <div className="humidity-percent">64%</div>
                            <div className="text">Humidity</div>
                        </div>
                    </div>
                    <div className="element">
                        <img src={wind_icon} alt="Wind Icon" className="wind-icon" />
                        <div className="data">
                            <div className="wind-rate">18 km/h</div>
                            <div className="text">Wind Speed</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WeatherApp;
