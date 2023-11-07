import React, { useState } from 'react';
import clear_icon from '../assets/clear.png'; // Ganti dengan path
import { default as cloud_icon, default as drizzle_icon } from '../assets/cloud.png';
import rain_icon from '../assets/rain.png';
import search_icon from '../assets/search.png'; // Ganti dengan path yang sesuai
import snow_icon from '../assets/snow.png';

function WeatherSearch() {
    // Tambahkan fungsi search() di sini
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

        
    let url1 =`https://api.openweathermap.org/data/2.5/forecast?q=${element[0].value}&units=metric&appid=${api_key}`;

    try{
            let response = await fetch(url1);
            let data = await response.json();

            const targetTimestamp = 1699369200; // Timestamp untuk 7 November 2023, 15:00:00

            const targetData = data.list.find(item => item.dt === targetTimestamp);

            if (targetData) {
                // Ambil data cuaca untuk jam yang diinginkan
                const humidityCard = document.getElementsByClassName("humidity-percent-card");
                const windCard = document.getElementsByClassName("wind-rate-card");
                const temperatureCard = document.getElementsByClassName("weather-temp-card");
                const dateCard = document.getElementsByClassName("weather-time-card");

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

    return (
        <div className='flex items-center justify-center space-x-4'>
            <input type="text" className='cityInput border border-gray-300 rounded-full px-4 py-2' placeholder='search' />
            <div className="search-icon" onClick={search} style={{ cursor: 'pointer' }}>
                <img src={search_icon} alt="Search Icon" className="w-6 h-6" />
            </div>
        </div>
    );
}
}
export default WeatherSearch;
