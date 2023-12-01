import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import clear_icon from '../assets/clear.png';
import cloud_icon from '../assets/cloud.png';
import drizzle_icon from '../assets/drizzle.png';
import rain_icon from '../assets/rain.png';
import snow_icon from '../assets/snow.png';

import KontenDua from '../components/KontenDua';
import KontenEmpat from '../components/KontenEmpat';
import KontenLima from '../components/KontenLima';
import KontenSatu from '../components/KontenSatu';
import KontenSix from '../components/KontenSix';
import KontenTiga from '../components/KontenTiga';
import SearchBar from '../components/SearchBar';
import ToggleButton from '../components/ToggleButton';

const WeatherApp = ({darkMode,setDarkMode}) => {

    
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
        tempNight:'25°C',
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
        humidityNight:'85%',
        pressureNight: '1010hPa',
        windSpeedNight: '3km/h',
        hourlyForecastData: hourlyForecastDataJakarta,
        dummy5DaysForecast: dummy5DaysForecastJakarta,
    };
    
    const dummyCurrentWeatherSydney = {
        city: 'Sydney',
        temperature: '28°C',
        tempNight:'25°C',
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
        humidityNight:'85%',
        pressureNight: '1010hPa',
        windSpeedNight: '3km/h',
        hourlyForecastData: hourlyForecastDataSydney,
        dummy5DaysForecast: dummy5DaysForecastSydney,
    };
    
    const dummyCurrentWeatherNewYork = {
        city: 'New York',
        tempNight:'25°C',
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
        humidityNight:'85%',
        pressureNight: '1010hPa',
        windSpeedNight: '3km/h',
        hourlyForecastData: hourlyForecastDataNewYork,
        dummy5DaysForecast: dummy5DaysForecastNewYork,
    };
    
    const dummyCurrentWeatherTokyo = {
        city: 'Tokyo',
        tempNight:'25°C',
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
        humidityNight:'85%',
        pressureNight: '1010hPa',
        windSpeedNight: '3km/h',
        hourlyForecastData: hourlyForecastDataTokyo,
        dummy5DaysForecast: dummy5DaysForecastTokyo,
    };
    
    const dummyCurrentWeatherLondon = {
        city: 'London',
        tempNight:'25°C',
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
        humidityNight:'85%',
        pressureNight: '1010hPa',
        windSpeedNight: '3km/h',
        hourlyForecastData: hourlyForecastDataLondon,
        dummy5DaysForecast: dummy5DaysForecastLondon,
    };

    const [searchTerm, setSearchTerm] = useState('');
    const [currentWeather, setCurrentWeather] = useState(dummyCurrentWeatherJakarta);
    const [hourlyForecast, setHourlyForecast] = useState(hourlyForecastDataJakarta);
    const [fiveDaysForecast, setFiveDaysForecast] = useState(dummy5DaysForecastJakarta)

    
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };


    useEffect(() => {
        // Reset the search term when currentWeather changes
        setSearchTerm('');
    }, [currentWeather]);

    
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
        <div className={`container mx-auto p-6 w-auto ${darkMode ?'bg-gradient-to-r from-neutral-700 to-stone-900 ':'bg-gradient-to-br from-white to-slate-600'}`}>
        <div className="flex justify-between items-center">
            <h1 className={`text-[35px]  font-['Poppins'] ${darkMode ?' text-white ':' text-black' }`}>CuacaKu</h1>
            <SearchBar handleInputChange={handleInputChange} handleKeyPress={handleKeyPress} handleSearch={handleSearch} searchTerm={searchTerm}/>
            <ToggleButton darkMode={darkMode} setDarkMode={setDarkMode}/>
        </div>
        <KontenSatu darkMode={darkMode} currentWeather={currentWeather}/>
        <KontenDua darkMode={darkMode} currentWeather={currentWeather} fiveDaysForecast={fiveDaysForecast} hourlyForecast={hourlyForecast}/>
        <KontenTiga currentWeather={currentWeather}/>
        <KontenEmpat currentWeather={currentWeather} darkMode={darkMode} setCurrentWeather={setCurrentWeather} fiveDaysForecast={fiveDaysForecast} hourlyForecast={hourlyForecast}/>
        <KontenLima/>
        <KontenSix currentWeather={currentWeather} darkMode={darkMode}/>
        </div>
    );
}

export default WeatherApp;