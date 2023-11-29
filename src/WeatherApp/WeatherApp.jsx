import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';

import sunrise_icon from '../assets/2.png';
import sunset_icon from '../assets/3.png';
import search_icon from '../assets/9349901.png';
import uv_icon from '../assets/UV1.png';
import clear_icon from '../assets/clear.png';
import cloud_icon from '../assets/cloud.png';
import drizzle_icon from '../assets/drizzle.png';
import humidity_icon from '../assets/humidity.png';
import navigation_icon from '../assets/navigation.png';
import rain_icon from '../assets/rain.png';
import snow_icon from '../assets/snow.png';
import tekanan_icon from '../assets/untitled design.png';
import wind_icon from '../assets/wind.png';

const WeatherApp = () => {

    
    const hourlyForecastDataJakarta = [
        { time: '00:00', temperature: '26°C', windSpeed: '3km/h', humidity: '95%', weatherIcon: 'clear_icon' },
        { time: '03:00', temperature: '27°C', windSpeed: '4km/h', humidity: '92%', weatherIcon: 'clear_icon' },
        { time: '06:00', temperature: '28°C', windSpeed: '5km/h', humidity: '90%', weatherIcon: 'clear_icon' },
        { time: '09:00', temperature: '29°C', windSpeed: '6km/h', humidity: '94%', weatherIcon: 'clear_icon' },
        { time: '12:00', temperature: '30°C', windSpeed: '7km/h', humidity: '97%', weatherIcon: 'clear_icon' },
    ];
    
    
    const dummy5DaysForecastJakarta = [
        { date: 'Tuesday, 5 Sep', temperature: '26°C', weatherIcon: rain_icon },
        { date: 'Monday, 4 Sep', temperature: '27°C', weatherIcon: clear_icon },
        { date: 'Sunday, 3 Sep', temperature: '28°C', weatherIcon: cloud_icon },
        { date: 'Saturday, 2 Sep', temperature: '29°C', weatherIcon: drizzle_icon },
        { date: 'Friday, 1 Sep', temperature: '30°C', weatherIcon: snow_icon },
    ];

    const hourlyForecastDataSydney = [
        { time: '00:00', temperature: '26°C', windSpeed: '3km/h', humidity: '95%', weatherIcon: 'rain_icon' },
        { time: '03:00', temperature: '25°C', windSpeed: '4km/h', humidity: '92%', weatherIcon: 'rain_icon' },
        { time: '06:00', temperature: '24°C', windSpeed: '5km/h', humidity: '90%', weatherIcon: 'rain_icon' },
        { time: '09:00', temperature: '23°C', windSpeed: '6km/h', humidity: '94%', weatherIcon: 'rain_icon' },
        { time: '12:00', temperature: '22°C', windSpeed: '7km/h', humidity: '97%', weatherIcon: 'rain_icon' },
    ];
    
    const dummy5DaysForecastSydney = [
        { date: 'Tuesday, 5 Sep', temperature: '26°C', weatherIcon: rain_icon },
        { date: 'Monday, 4 Sep', temperature: '27°C', weatherIcon: clear_icon },
        { date: 'Sunday, 3 Sep', temperature: '28°C', weatherIcon: cloud_icon },
        { date: 'Saturday, 2 Sep', temperature: '25°C', weatherIcon: drizzle_icon },
        { date: 'Friday, 1 Sep', temperature: '23°C', weatherIcon: snow_icon },
    ];
    
    const hourlyForecastDataTokyo = [
        { time: '00:00', temperature: '26°C', windSpeed: '3km/h', humidity: '95%', weatherIcon: 'cloud_icon' },
        { time: '03:00', temperature: '25°C', windSpeed: '4km/h', humidity: '92%', weatherIcon: 'cloud_icon' },
        { time: '06:00', temperature: '24°C', windSpeed: '5km/h', humidity: '90%', weatherIcon: 'cloud_icon' },
        { time: '09:00', temperature: '27°C', windSpeed: '6km/h', humidity: '94%', weatherIcon: 'cloud_icon' },
        { time: '12:00', temperature: '29°C', windSpeed: '7km/h', humidity: '97%', weatherIcon: 'cloud_icon' },
    ];
    
    
    const dummy5DaysForecastTokyo = [
        { date: 'Tuesday, 5 Sep', temperature: '26°C', weatherIcon: rain_icon },
        { date: 'Monday, 4 Sep', temperature: '27°C', weatherIcon: clear_icon },
        { date: 'Sunday, 3 Sep', temperature: '28°C', weatherIcon: cloud_icon },
        { date: 'Saturday, 2 Sep', temperature: '25°C', weatherIcon: drizzle_icon },
        { date: 'Friday, 1 Sep', temperature: '23°C', weatherIcon: snow_icon },
    ];

    const hourlyForecastDataLondon = [
        { time: '00:00', temperature: '12°C', windSpeed: '3km/h', humidity: '95%', weatherIcon: 'drizzle_icon' },
        { time: '03:00', temperature: '14°C', windSpeed: '4km/h', humidity: '92%', weatherIcon: 'drizzle_icon' },
        { time: '06:00', temperature: '13°C', windSpeed: '5km/h', humidity: '90%', weatherIcon: 'drizzle_icon' },
        { time: '09:00', temperature: '15°C', windSpeed: '6km/h', humidity: '94%', weatherIcon: 'drizzle_icon' },
        { time: '12:00', temperature: '16°C', windSpeed: '7km/h', humidity: '97%', weatherIcon: 'drizzle_icon' },
    ];
    
    
    const dummy5DaysForecastLondon = [
        { date: 'Tuesday, 5 Sep', temperature: '26°C', weatherIcon: rain_icon },
        { date: 'Monday, 4 Sep', temperature: '27°C', weatherIcon: clear_icon },
        { date: 'Sunday, 3 Sep', temperature: '28°C', weatherIcon: cloud_icon },
        { date: 'Saturday, 2 Sep', temperature: '25°C', weatherIcon: drizzle_icon },
        { date: 'Friday, 1 Sep', temperature: '23°C', weatherIcon: snow_icon },
    ];

    const hourlyForecastDataNewYork = [
        { time: '00:00', temperature: '16°C', windSpeed: '3km/h', humidity: '95%', weatherIcon: 'drizzle_icon' },
        { time: '03:00', temperature: '17°C', windSpeed: '4km/h', humidity: '92%', weatherIcon: 'drizzle_icon' },
        { time: '06:00', temperature: '19°C', windSpeed: '5km/h', humidity: '90%', weatherIcon: 'drizzle_icon' },
        { time: '09:00', temperature: '18°C', windSpeed: '6km/h', humidity: '94%', weatherIcon: 'drizzle_icon' },
        { time: '12:00', temperature: '15°C', windSpeed: '7km/h', humidity: '97%', weatherIcon: 'drizzle_icon' },
    ];
    
    
    const dummy5DaysForecastNewYork = [
        { date: 'Tuesday, 5 Sep', temperature: '26°C', weatherIcon: rain_icon },
        { date: 'Monday, 4 Sep', temperature: '27°C', weatherIcon: clear_icon },
        { date: 'Sunday, 3 Sep', temperature: '28°C', weatherIcon: cloud_icon },
        { date: 'Saturday, 2 Sep', temperature: '25°C', weatherIcon: drizzle_icon },
        { date: 'Friday, 1 Sep', temperature: '23°C', weatherIcon: snow_icon },
    ];

    const dummyCurrentWeatherJakarta = {
        city: 'Jakarta',
        temperature: '28°C',
        feelsLike: '22°C',
        sunrise: '06:00',
        sunset: '18:00',
        weatherIcon: rain_icon,
        weatherDescription: 'Hujan',
        uvIndex: 8,
        pressure: '1005hPa',
        windSpeed: '2km/h',
        humidity: '99%',
        date: 'Kamis 30 November 2023',
        time: '19:00',
        hourlyForecastData: hourlyForecastDataJakarta,
        dummy5DaysForecast: dummy5DaysForecastJakarta,
    };
    
    const dummyCurrentWeatherSydney = {
        city: 'Sydney',
        temperature: '28°C',
        feelsLike: '25°C',
        sunrise: '05:30',
        sunset: '19:30',
        weatherIcon: clear_icon,
        weatherDescription: 'Cerah',
        uvIndex: 7,
        pressure: '1003hPa',
        windSpeed: '5km/h',
        humidity: '80%',
        date: 'Kamis 30 November 2023',
        time: '19:00',
        hourlyForecastData: hourlyForecastDataSydney,
        dummy5DaysForecast: dummy5DaysForecastSydney,
    };
    
    const dummyCurrentWeatherNewYork = {
        city: 'New York',
        temperature: '20°C',
        feelsLike: '18°C',
        sunrise: '06:30',
        sunset: '17:30',
        weatherIcon: cloud_icon,
        weatherDescription: 'Berawan',
        uvIndex: 6,
        pressure: '1008hPa',
        windSpeed: '3km/h',
        humidity: '75%',
        date: 'Kamis 30 November 2023',
        time: '19:00',
        hourlyForecastData: hourlyForecastDataNewYork,
        dummy5DaysForecast: dummy5DaysForecastNewYork,
    };
    
    const dummyCurrentWeatherTokyo = {
        city: 'Tokyo',
        temperature: '22°C',
        feelsLike: '20°C',
        sunrise: '05:30',
        sunset: '18:30',
        weatherIcon: drizzle_icon,
        weatherDescription: 'Gerimis',
        uvIndex: 6,
        pressure: '1002hPa',
        windSpeed: '4km/h',
        humidity: '78%',
        date: 'Kamis 30 November 2023',
        time: '19:00',
        hourlyForecastData: hourlyForecastDataTokyo,
        dummy5DaysForecast: dummy5DaysForecastTokyo,
    };
    
    const dummyCurrentWeatherLondon = {
        city: 'London',
        temperature: '18°C',
        feelsLike: '16°C',
        sunrise: '07:00',
        sunset: '17:30',
        weatherIcon: snow_icon,
        weatherDescription: 'Salju',
        uvIndex: 5,
        pressure: '1010hPa',
        windSpeed: '3km/h',
        humidity: '85%',
        date: 'Kamis 30 November 2023',
        time: '19:00',
        hourlyForecastData: hourlyForecastDataLondon,
        dummy5DaysForecast: dummy5DaysForecastLondon,
    };

    const [searchTerm, setSearchTerm] = useState('');
    const [currentWeather, setCurrentWeather] = useState(dummyCurrentWeatherJakarta);
    const [hourlyForecast, setHourlyForecast] = useState(hourlyForecastDataJakarta);
    const [fiveDaysForecast, setFiveDaysForecast] = useState(dummy5DaysForecastJakarta)

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };
    
    const handleSearch = () => {
        // Implement your logic to filter the data based on the search term
        // For simplicity, let's assume the search term should match the city name exactly
        const searchedCity = searchTerm.toLowerCase();
        
        // Use dummy data for search, replace it with actual data fetching logic
        switch (searchedCity) {
            case 'jakarta':
                setCurrentWeather(dummyCurrentWeatherJakarta);
                set5DaysForecast(dummy5DaysForecastJakarta);
                setHourlyForecast(hourlyForecastDataJakarta);
                break;
            case 'sydney':
                setCurrentWeather(dummyCurrentWeatherSydney);
                set5DaysForecast(dummy5DaysForecastJakarta);
                setHourlyForecast(hourlyForecastDataSydney);


                break;
            case 'new york':
                setCurrentWeather(dummyCurrentWeatherNewYork);
                set5DaysForecast(dummy5DaysForecastNewYork);
                setHourlyForecast(hourlyForecastDataNewYork);


                break;
            case 'tokyo':
                setCurrentWeather(dummyCurrentWeatherTokyo);
                set5DaysForecast(dummy5DaysForecastTokyo);
                setHourlyForecast(hourlyForecastDataTokyo);


                break;
            case 'london':
                setCurrentWeather(dummyCurrentWeatherLondon);
                set5DaysForecast(dummy5DaysForecastJakarta);
                setHourlyForecast(hourlyForecastDataLondon);


                break;
            default:
                // Handle the case where the city is not found
                setCurrentWeather(null);
                break;
        }
    };



    return (
        <div className='container mx-auto p-6  bg-gradient-to-r from-neutral-700 to-stone-900 '>
            <div className="flex items-center justify-center space-x-4">
                <input
                type="text"
                className="cityInput border border-gray-300 rounded-full px-4 py-2"
                placeholder="search"
                value={searchTerm}
                onChange={handleInputChange}
                />
                <div className="search-icon" onClick={() => handleSearch(searchTerm)} style={{ cursor: 'pointer' }}>
                <img src={search_icon} alt="Search Icon" className="w-6 h-6 text-white" />
                </div>
            </div>
            <div className="flex gap-4 mt-10 ml-[80px]">
            <div className="w-[510px] h-[330px] relative flex flex-col items-center justify-center">
                <div className="w-[510px] h-[330px] left-0 top-0 absolute bg-neutral-600 rounded-[30px]" />
                <div className="w-[296px] h-[228px] left-[107px] top-[54px] absolute flex flex-col items-center justify-center">
                    <div className="kota text-white text-4xl font-bold  font-['Poppins']">{currentWeather.city}</div>
                    <div className="time text-center text-white text-8xl mt-2 font-bold font-['Poppins']">{currentWeather.time}</div>
                    <div className="date text-center text-white text-xl mt-2 font-normal font-['Poppins']">{currentWeather.date}</div>
                </div>
            </div>

                <div className="current-forecast w-[780px]  bg-neutral-600 rounded-xl shadow-md flex ml-5">
                    <div className="main-current">
                        <div className="current-temp text-[50px] font-bold text-white ml-5 mt-3" >{currentWeather.temperature}</div>
                        <div className="feels-like text-[20px] font-bold text-white ml-5 flex"> Feels like:
                            <div className="feels-like-temp font-bold ml-1">{currentWeather.feelsLike}</div>
                        </div>
                        <div className="sunrise flex">
                            <img className="w-[50px] h-[50px] mt-5 ml-8" src={sunrise_icon} />
                            <div className="flex flex-col">
                                <div className="sunrise-text mt-5 ml-2 font-bold text-white ">Sunrise</div>
                                <div className="sunrise-time ml-2 text-white ">{currentWeather.sunrise}</div>
                            </div>
                        </div>
                        <div className="sunset flex">
                            <img className="w-[50px] h-[50px] mt-5 ml-8" src={sunset_icon} />
                            <div className="flex flex-col">
                                <div className="sunset-text mt-5 ml-2 font-bold text-white ">Sunset</div>
                                <div className="sunset-time ml-2 text-white ">{currentWeather.sunset}</div>
                            </div>
                        </div>
                    </div>
                    <div className="current-weather ml-[70px]">
                        <img src={currentWeather.weatherIcon} alt="" />
                        <div className="weather-text text-[50px] font-bold text-white ml-[40px] font-['Poppins']">{currentWeather.weatherDescription}</div>
                    </div>
                    <div className="detail ml-[70px] ">
                        <div className="w-[247px] h-[328px] relative">
                            <div className="w-[107.40px] left-[131px] top-[172px] absolute">
                                <div className="w-[107.40px] h-[73.05px] left-0 top-[65.90px] absolute">
                                    <div className="w-[107.40px] h-[32.20px] left-0 top-[40.86px] absolute text-center text-white text-base font-medium font-['Poppins']">UV</div>
                                    <div className="w-[104.57px] h-[40.67px] left-[2.48px] top-0 absolute text-center text-white text-xl font-semibold font-['Poppins']">{currentWeather.uvIndex}</div>
                                </div>
                                <img className="w-[58px] h-[58px] left-[26px] top-0 absolute" src={uv_icon} />
                            </div>
                            <div className="w-[113.94px] left-[-0px] top-[172px] absolute">
                                <div className="w-[113.94px] h-[73.05px] left-0 top-[65.90px] absolute">
                                    <div className="w-[113.30px] h-[32.19px] left-[-0px] top-[40.86px] absolute text-center text-white text-base font-medium font-['Poppins']">Pressure</div>
                                    <div className="w-[110.32px] h-[40.67px] left-[3.62px] top-[-0px] absolute text-center text-white text-xl font-semibold font-['Poppins']">{currentWeather.pressure}</div>
                                </div>
                                <img className="w-[58px] h-[58px] left-[28px] top-0 absolute" src={tekanan_icon} />
                            </div>
                            <div className="w-[107.40px] left-[131px] top-[21px] absolute">
                                <div className="w-[107.40px] h-[73.05px] left-0 top-[64.90px] absolute">
                                    <div className="w-[107.40px] h-[32.20px] left-0 top-[40.86px] absolute text-center text-white text-base font-medium font-['Poppins']">Wind Speed</div>
                                    <div className="w-[104.57px] h-[40.67px] left-[2.48px] top-[-0px] absolute text-center text-white text-xl font-semibold font-['Poppins']">{currentWeather.windSpeed}</div>
                                </div>
                                <img className="w-[60px] h-[59.24px] left-[25px] top-0 absolute" src={wind_icon} />
                            </div>
                            <div className="w-[113.94px] h-[132.95px] left-0 top-[26px] absolute">
                                <div className="w-[113.94px] h-[73.05px] left-0 top-[59.90px] absolute">
                                    <div className="w-[113.30px] h-[32.19px] left-[-0px] top-[40.86px] absolute text-center text-white text-base font-medium font-['Poppins']">Humidity</div>
                                    <div className="w-[110.32px] h-[40.67px] left-[3.62px] top-[-0px] absolute text-center text-white text-xl font-semibold font-['Poppins']">{currentWeather.humidity}</div>
                                </div>
                                <img className="w-[60px] h-[50.13px] left-[29px] top-0 absolute" src={humidity_icon} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="konten-dua">
                <div className="flex ">
                <div className="w-[420px] h-[400px] relative mt-[20px] shadow-xl ml-[80px]">
                    <div className="w-[420px] h-[400px] left-0 top-[16px] absolute bg-neutral-600 rounded-[30px]" />
                    <div className="w-[420px] h-[400px] left-0 top-0 absolute">
                        {currentWeather && currentWeather.dummy5DaysForecast.map((forecast, index) => (
                            <div key={index} className={`w-[370px] left-[30px] top-[${308 - (60 * index)}px] absolute`}>
                                <div className="w-[163px] h-[50px] left-[207px] top-[24px] absolute text-white text-xl font-semibold font-['Poppins']">
                                    {forecast.date}
                                </div>
                                <div className="w-[62px] h-[50px] left-[103px] top-[24px] absolute text-center text-white text-2xl font-semibold font-['Poppins']">
                                    {forecast.temperature}
                                </div>
                                <img className="w-[60px] h-[60px] left-0 top-[24px] absolute" src={forecast.weatherIcon} alt="Weather Icon" />
                            </div>
                        ))}
                        <div className="w-72 h-[50px] left-[63px] top-[18px] absolute text-center text-white text-[32px] font-bold font-['Poppins'] mt-2">5 Days Forecast:</div>
                    </div>
                </div>
                <div className="w-[870px] h-[400px] relative bg-neutral-600 rounded-[30px] shadow-xl ml-[50px] mt-[40px] flex items-center">
                    <div className="left-[306px] top-[13px] absolute text-white text-[32px] font-bold font-['Poppins']">
                        Hourly Forecast:
                    </div>
                    <div className="flex justify-center items-center ml-[75px]">
                {currentWeather &&
                    currentWeather.hourlyForecastData.map((data, index) => (
                        <div
                            key={index}
                            className={`w-[130px] h-[270px] top-[20px] ml-3 items-center relative`}
                        >
                            {/* Example for one hour in Hourly Forecast */}
                            <div className="w-[130px] h-[270px] left-0 top-0 absolute bg-neutral-700 rounded-[40px]" />
                            <div className="w-20 h-[111px] left-[28px] top-[42px] absolute">
                                <div className="left-[12px] top-[81px] absolute text-white text-xl font-bold font-['Poppins']">
                                    {data.temperature}
                                </div>
                                <img src={rain_icon} alt="Weather Icon" className="ml-[-3px]" />
                                <img
                                    src={navigation_icon}
                                    alt="Navigation Icon"
                                    className="mt-7 ml-[10px]"
                                />
                            </div>
                            <div className="left-[35px] top-[13px] absolute text-white text-2xl font-bold font-['Poppins']">
                                {data.time}
                            </div>
                            <div className="left-[35px] top-[180px] mt-[34px] absolute text-white text-xl font-bold font-['Poppins']">
                                {data.windSpeed}
                            </div>
                        </div>
                    ))}
            </div>
                </div>


                    
                </div>
                </div>
        </div>
    );
}

export default WeatherApp;