import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';

import clear_icon from '../assets/clear.png';
import cloud_icon from '../assets/cloud.png';
import drizzle_icon from '../assets/drizzle.png';
import humidity_icon from '../assets/humidity.png';
import rain_icon from '../assets/rain.png';
import search_icon from '../assets/search.png';
import snow_icon from '../assets/snow.png';
import wind_icon from '../assets/wind.png';

const WeatherApp = () => {

    let api_key = "4cdc9b67bb98760e77eba182643b88f7";

    const [wicon,setWicon] = useState(clear_icon);

    const search = async () => {
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
            const time = document.getElementsByClassName("weather-time");
            humidity[0].innerHTML = data.main.humidity + "%";
            wind[0].innerHTML = data.wind.speed + " km/h";
            temperature[0].innerHTML = data.main.temp + "°C";
            location[0].innerHTML = data.name;
    
            if (data.weather[0].icon=== "01d" || data.weather[0].icon === "01n") {
                setWicon(clear_icon);
            } else if (data.weather[0].icon=== "02d" || data.weather[0].icon === "02n") {
                setWicon(cloud_icon);
            } else if (data.weather[0].icon=== "03d" || data.weather[0].icon === "03n") {
                setWicon(drizzle_icon);
            } else if (data.weather[0].icon=== "04d" || data.weather[0].icon === "04n") {
                setWicon(drizzle_icon);
            } else if (data.weather[0].icon=== "09d" || data.weather[0].icon === "09n") {
                setWicon(rain_icon);
            } else if (data.weather[0].icon=== "10d" || data.weather[0].icon === "10n") {
                setWicon(rain_icon);
            } else if (data.weather[0].icon=== "13d" || data.weather[0].icon === "13n") {
                setWicon(snow_icon);
            } else {
                setWicon(clear_icon);
            }
            
        } catch (error) {
            console.error("Error fetching data:", error);
        }

        
    const city_name = element[0].value; // Mengambil nama kota dari input pengguna

    const targetHours = [15,18,21,0,3,6,9,12]; // Jam yang diinginkan
    let url1 = `https://api.openweathermap.org/data/2.5/forecast?q=${ city_name}&units=metric&appid=${api_key}`;

    try{
        targetHours.forEach(hour => {
            let targetTimestamp = data.list.find(item => {
                const date = new Date(item.dt_txt);
                return date.getHours() === hour;
            });
    
            if (!targetTimestamp) {
                // Jika data tidak ditemukan, coba timestamp selanjutnya
                targetTimestamp = data.list.find(item => {
                    const date = new Date(item.dt_txt);
                    return date.getHours() > hour;
                });
            }
    
            if (targetTimestamp) {
                const humidityCard = document.getElementsByClassName(`humidity-percent-card-${hour}`);
                const windCard = document.getElementsByClassName(`wind-rate-card-${hour}`);
                const temperatureCard = document.getElementsByClassName(`weather-temp-card-${hour}`);
                const dateCard = document.getElementsByClassName(`weather-time-card-${hour}`);
    
                humidityCard[0].innerHTML = targetTimestamp.main.humidity + "%";
                windCard[0].innerHTML = targetTimestamp.wind.speed + " km/h";
                temperatureCard[0].innerHTML = targetTimestamp.main.temp + "°C";
                const date = new Date(targetTimestamp.dt_txt);
    
                // Ambil jam
                const hours = date.getHours();
    
                // Tampilkan jam
                dateCard[0].innerHTML = hours + ":00";
    
                if (targetTimestamp.weather[0].icon === "01d" || targetTimestamp.weather[0].icon === "01n") {
                    setWicon(clear_icon);
                } else if (targetTimestamp.weather[0].icon === "02d" || targetTimestamp.weather[0].icon === "02n") {
                    setWicon(cloud_icon);
                } else if (targetTimestamp.weather[0].icon === "03d" || targetTimestamp.weather[0].icon === "03n") {
                    setWicon(drizzle_icon);
                } else if (targetTimestamp.weather[0].icon === "04d" || targetTimestamp.weather[0].icon === "04n") {
                    setWicon(drizzle_icon);
                } else if (targetTimestamp.weather[0].icon === "09d" || targetTimestamp.weather[0].icon === "09n") {
                    setWicon(rain_icon);
                } else if (targetTimestamp.weather[0].icon === "10d" || targetTimestamp.weather[0].icon === "10n") {
                    setWicon(rain_icon);
                } else if (targetTimestamp.weather[0].icon === "13d" || targetTimestamp.weather[0].icon === "13n") {
                    setWicon(snow_icon);
                } else {
                    setWicon(clear_icon);
                }
            } else {
                console.log(`Tidak ada data untuk waktu yang diinginkan.`);
            }
        });
    } catch (error) {
        console.error("Error fetching data:", error);
    }
        try{
            let response = await fetch(url1);
            let data = await response.json();

            const targetTimestamp = 1699380000; // Timestamp untuk 7 November 2023, 15:00:00

            const targetData = data.list.find(item => item.dt === targetTimestamp);

            if (targetData) {
                // Ambil data cuaca untuk jam yang diinginkan
                const humidityCard = document.getElementsByClassName("humidity-percent-card-18");
                const windCard = document.getElementsByClassName("wind-rate-card-18");
                const temperatureCard = document.getElementsByClassName("weather-temp-card-18");
                const dateCard = document.getElementsByClassName("weather-time-card-18");

                humidityCard[0].innerHTML = targetData.main.humidity + "%";
                windCard[0].innerHTML = targetData.wind.speed + " km/h";
                temperatureCard[0].innerHTML = targetData.main.temp + "°C";
                const date = new Date(targetData.dt_txt);

                // Ambil jam
                const hours = date.getHours();
        
                // Tampilkan jam
                dateCard[0].innerHTML = hours + ":00";

                if (targetData.weather[0].icon === "01d" || targetData.weather[0].icon === "01n") {
                    setWicon(clear_icon);
                } else if (targetData.weather[0].icon === "02d" || targetData.weather[0].icon === "02n") {
                    setWicon(cloud_icon);
                } else if (targetData.weather[0].icon === "03d" || targetData.weather[0].icon === "03n") {
                    setWicon(drizzle_icon);
                } else if (targetData.weather[0].icon === "04d" || targetData.weather[0].icon === "04n") {
                    setWicon(drizzle_icon);
                } else if (targetData.weather[0].icon === "09d" || targetData.weather[0].icon === "09n") {
                    setWicon(rain_icon);
                } else if (targetData.weather[0].icon === "10d" || targetData.weather[0].icon === "10n") {
                    setWicon(rain_icon);
                } else if (targetData.weather[0].icon === "13d" || targetData.weather[0].icon === "13n") {
                    setWicon(snow_icon);
                } else {
                    setWicon(clear_icon);
                }
            } else {
                console.log(`Tidak ada data untuk waktu yang diinginkan.`);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }

        try{
            let response = await fetch(url1);
            let data = await response.json();

            const targetTimestamp = 1699390800; // Timestamp untuk 7 November 2023, 15:00:00

            const targetData = data.list.find(item => item.dt === targetTimestamp);

            if (targetData) {
                // Ambil data cuaca untuk jam yang diinginkan
                const humidityCard = document.getElementsByClassName("humidity-percent-card-21");
                const windCard = document.getElementsByClassName("wind-rate-card-21");
                const temperatureCard = document.getElementsByClassName("weather-temp-card-21");
                const dateCard = document.getElementsByClassName("weather-time-card-21");

                humidityCard[0].innerHTML = targetData.main.humidity + "%";
                windCard[0].innerHTML = targetData.wind.speed + " km/h";
                temperatureCard[0].innerHTML = targetData.main.temp + "°C";
                const date = new Date(targetData.dt_txt);

                // Ambil jam
                const hours = date.getHours();
        
                // Tampilkan jam
                dateCard[0].innerHTML = hours + ":00";

                if (targetData.weather[0].icon === "01d" || targetData.weather[0].icon === "01n") {
                    setWicon(clear_icon);
                } else if (targetData.weather[0].icon === "02d" || targetData.weather[0].icon === "02n") {
                    setWicon(cloud_icon);
                } else if (targetData.weather[0].icon === "03d" || targetData.weather[0].icon === "03n") {
                    setWicon(drizzle_icon);
                } else if (targetData.weather[0].icon === "04d" || targetData.weather[0].icon === "04n") {
                    setWicon(drizzle_icon);
                } else if (targetData.weather[0].icon === "09d" || targetData.weather[0].icon === "09n") {
                    setWicon(rain_icon);
                } else if (targetData.weather[0].icon === "10d" || targetData.weather[0].icon === "10n") {
                    setWicon(rain_icon);
                } else if (targetData.weather[0].icon === "13d" || targetData.weather[0].icon === "13n") {
                    setWicon(snow_icon);
                } else {
                    setWicon(clear_icon);
                }
            } else {
                console.log(`Tidak ada data untuk waktu yang diinginkan.`);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }

        try{
            let response = await fetch(url1);
            let data = await response.json();

            const targetTimestamp = 1699401600; // Timestamp untuk 7 November 2023, 15:00:00

            const targetData = data.list.find(item => item.dt === targetTimestamp);

            if (targetData) {
                // Ambil data cuaca untuk jam yang diinginkan
                const humidityCard = document.getElementsByClassName("humidity-percent-card-00");
                const windCard = document.getElementsByClassName("wind-rate-card-00");
                const temperatureCard = document.getElementsByClassName("weather-temp-card-00");
                const dateCard = document.getElementsByClassName("weather-time-card-00");

                humidityCard[0].innerHTML = targetData.main.humidity + "%";
                windCard[0].innerHTML = targetData.wind.speed + " km/h";
                temperatureCard[0].innerHTML = targetData.main.temp + "°C";
                const date = new Date(targetData.dt_txt);

                // Ambil jam
                const hours = date.getHours();
        
                // Tampilkan jam
                dateCard[0].innerHTML = hours + ":00";

                if (targetData.weather[0].icon === "01d" || targetData.weather[0].icon === "01n") {
                    setWicon(clear_icon);
                } else if (targetData.weather[0].icon === "02d" || targetData.weather[0].icon === "02n") {
                    setWicon(cloud_icon);
                } else if (targetData.weather[0].icon === "03d" || targetData.weather[0].icon === "03n") {
                    setWicon(drizzle_icon);
                } else if (targetData.weather[0].icon === "04d" || targetData.weather[0].icon === "04n") {
                    setWicon(drizzle_icon);
                } else if (targetData.weather[0].icon === "09d" || targetData.weather[0].icon === "09n") {
                    setWicon(rain_icon);
                } else if (targetData.weather[0].icon === "10d" || targetData.weather[0].icon === "10n") {
                    setWicon(rain_icon);
                } else if (targetData.weather[0].icon === "13d" || targetData.weather[0].icon === "13n") {
                    setWicon(snow_icon);
                } else {
                    setWicon(clear_icon);
                }
            } else {
                console.log(`Tidak ada data untuk waktu yang diinginkan.`);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }

        try{
            let response = await fetch(url1);
            let data = await response.json();

            const targetTimestamp = 1699412400; // Timestamp untuk 7 November 2023, 15:00:00

            const targetData = data.list.find(item => item.dt === targetTimestamp);

            if (targetData) {
                // Ambil data cuaca untuk jam yang diinginkan
                const humidityCard = document.getElementsByClassName("humidity-percent-card-03");
                const windCard = document.getElementsByClassName("wind-rate-card-03");
                const temperatureCard = document.getElementsByClassName("weather-temp-card-03");
                const dateCard = document.getElementsByClassName("weather-time-card-03");

                humidityCard[0].innerHTML = targetData.main.humidity + "%";
                windCard[0].innerHTML = targetData.wind.speed + " km/h";
                temperatureCard[0].innerHTML = targetData.main.temp + "°C";
                const date = new Date(targetData.dt_txt);

                // Ambil jam
                const hours = date.getHours();
        
                // Tampilkan jam
                dateCard[0].innerHTML = hours + ":00";

                if (targetData.weather[0].icon === "01d" || targetData.weather[0].icon === "01n") {
                    setWicon(clear_icon);
                } else if (targetData.weather[0].icon === "02d" || targetData.weather[0].icon === "02n") {
                    setWicon(cloud_icon);
                } else if (targetData.weather[0].icon === "03d" || targetData.weather[0].icon === "03n") {
                    setWicon(drizzle_icon);
                } else if (targetData.weather[0].icon === "04d" || targetData.weather[0].icon === "04n") {
                    setWicon(drizzle_icon);
                } else if (targetData.weather[0].icon === "09d" || targetData.weather[0].icon === "09n") {
                    setWicon(rain_icon);
                } else if (targetData.weather[0].icon === "10d" || targetData.weather[0].icon === "10n") {
                    setWicon(rain_icon);
                } else if (targetData.weather[0].icon === "13d" || targetData.weather[0].icon === "13n") {
                    setWicon(snow_icon);
                } else {
                    setWicon(clear_icon);
                }
            } else {
                console.log(`Tidak ada data untuk waktu yang diinginkan.`);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }

        try{
            let response = await fetch(url1);
            let data = await response.json();

            const targetTimestamp = 1699423200; // Timestamp untuk 7 November 2023, 15:00:00

            const targetData = data.list.find(item => item.dt === targetTimestamp);

            if (targetData) {
                // Ambil data cuaca untuk jam yang diinginkan
                const humidityCard = document.getElementsByClassName("humidity-percent-card-06");
                const windCard = document.getElementsByClassName("wind-rate-card-06");
                const temperatureCard = document.getElementsByClassName("weather-temp-card-06");
                const dateCard = document.getElementsByClassName("weather-time-card-06");

                humidityCard[0].innerHTML = targetData.main.humidity + "%";
                windCard[0].innerHTML = targetData.wind.speed + " km/h";
                temperatureCard[0].innerHTML = targetData.main.temp + "°C";
                const date = new Date(targetData.dt_txt);

                // Ambil jam
                const hours = date.getHours();
        
                // Tampilkan jam
                dateCard[0].innerHTML = hours + ":00";

                if (targetData.weather[0].icon === "01d" || targetData.weather[0].icon === "01n") {
                    setWicon(clear_icon);
                } else if (targetData.weather[0].icon === "02d" || targetData.weather[0].icon === "02n") {
                    setWicon(cloud_icon);
                } else if (targetData.weather[0].icon === "03d" || targetData.weather[0].icon === "03n") {
                    setWicon(drizzle_icon);
                } else if (targetData.weather[0].icon === "04d" || targetData.weather[0].icon === "04n") {
                    setWicon(drizzle_icon);
                } else if (targetData.weather[0].icon === "09d" || targetData.weather[0].icon === "09n") {
                    setWicon(rain_icon);
                } else if (targetData.weather[0].icon === "10d" || targetData.weather[0].icon === "10n") {
                    setWicon(rain_icon);
                } else if (targetData.weather[0].icon === "13d" || targetData.weather[0].icon === "13n") {
                    setWicon(snow_icon);
                } else {
                    setWicon(clear_icon);
                }
            } else {
                console.log(`Tidak ada data untuk waktu yang diinginkan.`);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }


        try{
            let response = await fetch(url1);
            let data = await response.json();

            const targetTimestamp = 1699434000; // Timestamp untuk 7 November 2023, 15:00:00

            const targetData = data.list.find(item => item.dt === targetTimestamp);

            if (targetData) {
                // Ambil data cuaca untuk jam yang diinginkan
                const humidityCard = document.getElementsByClassName("humidity-percent-card-09");
                const windCard = document.getElementsByClassName("wind-rate-card-09");
                const temperatureCard = document.getElementsByClassName("weather-temp-card-09");
                const dateCard = document.getElementsByClassName("weather-time-card-09");

                humidityCard[0].innerHTML = targetData.main.humidity + "%";
                windCard[0].innerHTML = targetData.wind.speed + " km/h";
                temperatureCard[0].innerHTML = targetData.main.temp + "°C";
                const date = new Date(targetData.dt_txt);

                // Ambil jam
                const hours = date.getHours();
        
                // Tampilkan jam
                dateCard[0].innerHTML = hours + ":00";

                if (targetData.weather[0].icon === "01d" || targetData.weather[0].icon === "01n") {
                    setWicon(clear_icon);
                } else if (targetData.weather[0].icon === "02d" || targetData.weather[0].icon === "02n") {
                    setWicon(cloud_icon);
                } else if (targetData.weather[0].icon === "03d" || targetData.weather[0].icon === "03n") {
                    setWicon(drizzle_icon);
                } else if (targetData.weather[0].icon === "04d" || targetData.weather[0].icon === "04n") {
                    setWicon(drizzle_icon);
                } else if (targetData.weather[0].icon === "09d" || targetData.weather[0].icon === "09n") {
                    setWicon(rain_icon);
                } else if (targetData.weather[0].icon === "10d" || targetData.weather[0].icon === "10n") {
                    setWicon(rain_icon);
                } else if (targetData.weather[0].icon === "13d" || targetData.weather[0].icon === "13n") {
                    setWicon(snow_icon);
                } else {
                    setWicon(clear_icon);
                }
            } else {
                console.log(`Tidak ada data untuk waktu yang diinginkan.`);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }

                try{
            let response = await fetch(url1);
            let data = await response.json();

            const targetTimestamp = 1699444800; // Timestamp untuk 7 November 2023, 15:00:00

            const targetData = data.list.find(item => item.dt === targetTimestamp);

            if (targetData) {
                // Ambil data cuaca untuk jam yang diinginkan
                const humidityCard = document.getElementsByClassName("humidity-percent-card-12");
                const windCard = document.getElementsByClassName("wind-rate-card-12");
                const temperatureCard = document.getElementsByClassName("weather-temp-card-12");
                const dateCard = document.getElementsByClassName("weather-time-card-12");

                humidityCard[0].innerHTML = targetData.main.humidity + "%";
                windCard[0].innerHTML = targetData.wind.speed + " km/h";
                temperatureCard[0].innerHTML = targetData.main.temp + "°C";
                const date = new Date(targetData.dt_txt);

                // Ambil jam
                const hours = date.getHours();
        
                // Tampilkan jam
                dateCard[0].innerHTML = hours + ":00";

                if (targetData.weather[0].icon === "01d" || targetData.weather[0].icon === "01n") {
                    setWicon(clear_icon);
                } else if (targetData.weather[0].icon === "02d" || targetData.weather[0].icon === "02n") {
                    setWicon(cloud_icon);
                } else if (targetData.weather[0].icon === "03d" || targetData.weather[0].icon === "03n") {
                    setWicon(drizzle_icon);
                } else if (targetData.weather[0].icon === "04d" || targetData.weather[0].icon === "04n") {
                    setWicon(drizzle_icon);
                } else if (targetData.weather[0].icon === "09d" || targetData.weather[0].icon === "09n") {
                    setWicon(rain_icon);
                } else if (targetData.weather[0].icon === "10d" || targetData.weather[0].icon === "10n") {
                    setWicon(rain_icon);
                } else if (targetData.weather[0].icon === "13d" || targetData.weather[0].icon === "13n") {
                    setWicon(snow_icon);
                } else {
                    setWicon(clear_icon);
                }
            } else {
                console.log(`Tidak ada data untuk waktu yang diinginkan.`);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }

    }

    return (
        <div className='container mx-auto p-6 bg-gray-500'>
            <div className='flex items-center justify-center space-x-4'>
                <input type="text" className='cityInput border border-gray-300 rounded-full px-4 py-2' placeholder='search' />
                <div className="search-icon" onClick={() => { search() }} style={{ cursor: 'pointer' }}>
                    <img src={search_icon} alt="Search Icon" className="w-6 h-6" />
                </div>
            </div>
            <div className="flex gap-4 mt-10 ml-8">
                <div className='flex flex-col items-center justify-center bg-gray-400 p-4 rounded-xl shadow-lg w-[350px] h-[350px]'>
                    <div className='mb-4'>
                        <img src={wicon} alt="" className="w-16 h-16" />
                    </div>
                    <div className="weather-temp text-5xl font-bold text-white">24°C</div>
                    <div className="weather-location text-xl text-white">London</div>
                    <div className="flex flex-col items-center mt-4">
                    <div className="flex items-center justify-center">
                        <div className="flex items-center">
                            <img src={humidity_icon} alt="Humidity Icon" className="w-6 h-6" />
                            <div className="ml-2">
                                <div className="humidity-percent text-xl text-white">64%</div>
                                <div className="text-white">Humidity</div>
                            </div>
                        </div>
                        <div className="flex items-center ml-4">
                            <img src={wind_icon} alt="Wind Icon" className="w-6 h-6" />
                            <div className="ml-2">
                                <div className="wind-rate text-xl text-white">18 km/h</div>
                                <div className="text-white">Wind Speed</div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="hourly-forecast bg-gray-400 rounded-md flex gap-4 w-[1100px] h-[350px] overflow-y-auto">
                    <div className='flex flex-col items-center justify-center bg-gray-700 p-4 rounded-xl shadow-lg w-[170px] h-[300px] mt-[25px] ml-[55px]'>
                        <div className='weather-image-card mt-3 mb-1'>
                            <img src={wicon} alt="" className="w-16 h-16" />
                        </div>
                        <div className="weather-temp-card text-3xl font-bold text-white">24°C</div>
                        <div className="weather-time-card text-md font-bold text-white">15:00</div>
                        <div className="flex flex-col items-center mt-4">
                            <div className="flex items-center justify-center">
                                <div className="flex flex-col items-center text-center">
                                    <img src={humidity_icon} alt="Humidity Icon" className="w-[20px] h-[25px]" />
                                    <div className="humidity-percent-card mt-2 text-xs text-white">64%</div>
                                    <div className="text-white text-[9px]">Humidity</div>
                                </div>
                                <div className="flex flex-col items-center ml-4 text-center">
                                    <img src={wind_icon} alt="Wind Icon" className="w-6 h-6" />
                                    <div className="wind-rate-card mt-2 text-xs text-white">18 km/h</div>
                                    <div className="text-white text-[9px]">Wind Speed</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-center bg-gray-700 p-4 rounded-xl shadow-lg w-[170px] h-[300px] mt-[25px] ml-[5px]'>
                        <div className='weather-image-card mt-3 mb-1'>
                            <img src={wicon} alt="" className="w-16 h-16" />
                        </div>
                        <div className="weather-temp-card-18 text-3xl font-bold text-white">24°C</div>
                        <div className="weather-time-card-18 text-md font-bold text-white">18:00</div>
                        <div className="flex flex-col items-center mt-4">
                            <div className="flex items-center justify-center">
                                <div className="flex flex-col items-center text-center">
                                    <img src={humidity_icon} alt="Humidity Icon" className="w-[20px] h-[25px]" />
                                    <div className="humidity-percent-card-18 mt-2 text-xs text-white">64%</div>
                                    <div className="text-white text-[9px]">Humidity</div>
                                </div>
                                <div className="flex flex-col items-center ml-4 text-center">
                                    <img src={wind_icon} alt="Wind Icon" className="w-6 h-6" />
                                    <div className="wind-rate-card-18 mt-2 text-xs text-white">18 km/h</div>
                                    <div className="text-white text-[9px]">Wind Speed</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-center bg-gray-700 p-4 rounded-xl shadow-lg w-[170px] h-[300px] mt-[25px] ml-[5px]'>
                        <div className='weather-image-card mt-3 mb-1'>
                            <img src={wicon} alt="" className="w-16 h-16" />
                        </div>
                        <div className="weather-temp-card-21 text-3xl font-bold text-white">24°C</div>
                        <div className="weather-time-card-21 text-md font-bold text-white">21:00</div>
                        <div className="flex flex-col items-center mt-4">
                            <div className="flex items-center justify-center">
                                <div className="flex flex-col items-center text-center">
                                    <img src={humidity_icon} alt="Humidity Icon" className="w-[20px] h-[25px]" />
                                    <div className="humidity-percent-card-21 mt-2 text-xs text-white">64%</div>
                                    <div className="text-white text-[9px]">Humidity</div>
                                </div>
                                <div className="flex flex-col items-center ml-4 text-center">
                                    <img src={wind_icon} alt="Wind Icon" className="w-6 h-6" />
                                    <div className="wind-rate-card-21 mt-2 text-xs text-white">18 km/h</div>
                                    <div className="text-white text-[9px]">Wind Speed</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-center bg-gray-700 p-4 rounded-xl shadow-lg w-[170px] h-[300px] mt-[25px] ml-[5px]'>
                        <div className='weather-image-card mt-3 mb-1'>
                            <img src={wicon} alt="" className="w-16 h-16" />
                        </div>
                        <div className="weather-temp-card-00 text-3xl font-bold text-white">24°C</div>
                        <div className="weather-time-card-00 text-md font-bold text-white">00:00</div>
                        <div className="flex flex-col items-center mt-4">
                            <div className="flex items-center justify-center">
                                <div className="flex flex-col items-center text-center">
                                    <img src={humidity_icon} alt="Humidity Icon" className="w-[20px] h-[25px]" />
                                    <div className="humidity-percent-card-00 mt-2 text-xs text-white">64%</div>
                                    <div className="text-white text-[9px]">Humidity</div>
                                </div>
                                <div className="flex flex-col items-center ml-4 text-center">
                                    <img src={wind_icon} alt="Wind Icon" className="w-6 h-6" />
                                    <div className="wind-rate-card-00 mt-2 text-xs text-white">18 km/h</div>
                                    <div className="text-white text-[9px]">Wind Speed</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-center bg-gray-700 p-4 rounded-xl shadow-lg w-[170px] h-[300px] mt-[25px] ml-[5px]'>
                        <div className='weather-image-card mt-3 mb-1'>
                            <img src={wicon} alt="" className="w-16 h-16" />
                        </div>
                        <div className="weather-temp-card-03 text-3xl font-bold text-white">24°C</div>
                        <div className="weather-time-card-03 text-md font-bold text-white">03:00</div>
                        <div className="flex flex-col items-center mt-4">
                            <div className="flex items-center justify-center">
                                <div className="flex flex-col items-center text-center">
                                    <img src={humidity_icon} alt="Humidity Icon" className="w-[20px] h-[25px]" />
                                    <div className="humidity-percent-card-03 mt-2 text-xs text-white">64%</div>
                                    <div className="text-white text-[9px]">Humidity</div>
                                </div>
                                <div className="flex flex-col items-center ml-4 text-center">
                                    <img src={wind_icon} alt="Wind Icon" className="w-6 h-6" />
                                    <div className="wind-rate-card-03 mt-2 text-xs text-white">18 km/h</div>
                                    <div className="text-white text-[9px]">Wind Speed</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-center bg-gray-700 p-4 rounded-xl shadow-lg w-[170px] h-[300px] mt-[25px] ml-[5px]'>
                        <div className='weather-image-card mt-3 mb-1'>
                            <img src={wicon} alt="" className="w-16 h-16" />
                        </div>
                        <div className="weather-temp-card-06 text-3xl font-bold text-white">24°C</div>
                        <div className="weather-time-card-06 text-md font-bold text-white">06:00</div>
                        <div className="flex flex-col items-center mt-4">
                            <div className="flex items-center justify-center">
                                <div className="flex flex-col items-center text-center">
                                    <img src={humidity_icon} alt="Humidity Icon" className="w-[20px] h-[25px]" />
                                    <div className="humidity-percent-card-06 mt-2 text-xs text-white">64%</div>
                                    <div className="text-white text-[9px]">Humidity</div>
                                </div>
                                <div className="flex flex-col items-center ml-4 text-center">
                                    <img src={wind_icon} alt="Wind Icon" className="w-6 h-6" />
                                    <div className="wind-rate-card-06 mt-2 text-xs text-white">18 km/h</div>
                                    <div className="text-white text-[9px]">Wind Speed</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-center bg-gray-700 p-4 rounded-xl shadow-lg w-[170px] h-[300px] mt-[25px] ml-[5px]'>
                        <div className='weather-image-card mt-3 mb-1'>
                            <img src={wicon} alt="" className="w-16 h-16" />
                        </div>
                        <div className="weather-temp-card-09 text-3xl font-bold text-white">24°C</div>
                        <div className="weather-time-card-09 text-md font-bold text-white">09:00</div>
                        <div className="flex flex-col items-center mt-4">
                            <div className="flex items-center justify-center">
                                <div className="flex flex-col items-center text-center">
                                    <img src={humidity_icon} alt="Humidity Icon" className="w-[20px] h-[25px]" />
                                    <div className="humidity-percent-card-09 mt-2 text-xs text-white">64%</div>
                                    <div className="text-white text-[9px]">Humidity</div>
                                </div>
                                <div className="flex flex-col items-center ml-4 text-center">
                                    <img src={wind_icon} alt="Wind Icon" className="w-6 h-6" />
                                    <div className="wind-rate-card-09 mt-2 text-xs text-white">18 km/h</div>
                                    <div className="text-white text-[9px]">Wind Speed</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-center bg-gray-700 p-4 rounded-xl shadow-lg w-[170px] h-[300px] mt-[25px] ml-[5px] mr-[25px]'>
                        <div className='weather-image-card mt-3 mb-1'>
                            <img src={wicon} alt="" className="w-16 h-16" />
                        </div>
                        <div className="weather-temp-card-12 text-3xl font-bold text-white">24°C</div>
                        <div className="weather-time-card-12 text-md font-bold text-white">12:00</div>
                        <div className="flex flex-col items-center mt-4">
                            <div className="flex items-center justify-center">
                                <div className="flex flex-col items-center text-center">
                                    <img src={humidity_icon} alt="Humidity Icon" className="w-[20px] h-[25px]" />
                                    <div className="humidity-percent-card-12 mt-2 text-xs text-white">64%</div>
                                    <div className="text-white text-[9px]">Humidity</div>
                                </div>
                                <div className="flex flex-col items-center ml-4 text-center">
                                    <img src={wind_icon} alt="Wind Icon" className="w-6 h-6" />
                                    <div className="wind-rate-card-12 mt-2 text-xs text-white">18 km/h</div>
                                    <div className="text-white text-[9px]">Wind Speed</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WeatherApp;