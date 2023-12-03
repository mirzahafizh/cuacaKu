import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { default as React, useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import SearchBar from '../components/SearchBar';
import ToggleButton from '../components/ToggleButton';
import dummyData from '../data/dummyData.json';
import KontenTujuh from '../components/KontenTujuh'

import clear_icon from '../assets/clear.png';
import cloud_icon from '../assets/cloud.png';
import drizzle_icon from '../assets/drizzle.png';
import rain_icon from '../assets/rain.png';
import snow_icon from '../assets/snow.png';

const getWeatherIcon = (iconCode) => {
    switch (iconCode) {
        case 1:
            return snow_icon;
        case 2:
            return clear_icon;
        case 3:
            return rain_icon;
        case 4:
            return drizzle_icon;
        case 5:
            return cloud_icon;
        default:
            return clear_icon ; // Ganti dengan ikon default atau atur penanganan lainnya
        }
    };
    

const Rekomendasi = ({darkMode,setDarkMode}) => {

    const [searchTerm, setSearchTerm] = useState('');
    const [currentWeather, setCurrentWeather] = useState(dummyData.dummyCurrentWeatherJakarta);
    const [hourlyForecast, setHourlyForecast] = useState(dummyData.dummyCurrentWeatherJakarta.hourlyForecastData);
    const [fiveDaysForecast, setFiveDaysForecast] = useState(dummyData.dummyCurrentWeatherJakarta.dummy5DaysForecast);
    const weatherIconCode = currentWeather.weatherIcon; // Mengasumsikan currentWeather berisi kode ikon cuaca

    const weatherIcon = getWeatherIcon(weatherIconCode);

    
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    const handleGoToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
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
                setCurrentWeather(dummyData.dummyCurrentWeatherJakarta);
                set5DaysForecast(dummyData.dummyCurrentWeatherJakarta.dummy5DaysForecastJakarta);
                setHourlyForecast(dummyData.dummyCurrentWeatherJakarta.hourlyForecastDataJakarta);
                break;
            case 'sydney':
                setCurrentWeather(dummyData.dummyCurrentWeatherSydney);
                set5DaysForecast(dummyData.dummyCurrentWeatherSydney.dummy5DaysForecastSydney);
                setHourlyForecast(dummyData.dummyCurrentWeatherJakarta.hourlyForecastDataJakarta);


                break;
            case 'new york':
                setCurrentWeather(dummyCurrentWeatherNewYork);
                set5DaysForecast(dummyData.dummyCurrentWeatherNewYork.dummy5DaysForecastNewYork);
                setHourlyForecast(dummyData.dummyCurrentWeatherNewYork.hourlyForecastDataNewYork);


                break;
            case 'tokyo':
                setCurrentWeather(dummyData.dummyCurrentWeatherTokyo);
                set5DaysForecast(dummyData.dummyCurrentWeatherTokyo.dummy5DaysForecastTokyo);
                setHourlyForecast(dummyData.dummyCurrentWeatherTokyo.hourlyForecastDataTokyo);


                break;
            case 'london':
                setCurrentWeather(dummyData.dummyCurrentWeatherLondon);
                set5DaysForecast(dummyData.dummyCurrentWeatherLondon.dummy5DaysForecastJakarta);
                setHourlyForecast(dummyData.dummyCurrentWeatherLondon.hourlyForecastDataLondon);


                break;
            default:
                // Handle the case where the city is not found
                setCurrentWeather(null);
                break;
        }

        
    };

    const navigate = useNavigate();

    const handleTitleClick = () => {
        navigate('/');
    };

    return (
        <div className={`min-h-screen ${darkMode ? 'bg-gradient-to-r from-neutral-700 to-stone-900' : 'bg-gradient-to-br from-white to-slate-600'}`}>
          <div className="container mx-auto p-6 w-auto">
            <div className="flex flex-col max-w-8xl mx-auto w-full">
              <div className="flex flex-col md:flex-row justify-between items-center md:gap-4">
                <h1 className={`text-4xl md:text-5xl text-[Poppins] text-center mb-4 md:mb-0 ${darkMode ? 'text-white' : 'text-black'}`}onClick={handleTitleClick}>CuacaKu</h1>
                <SearchBar handleInputChange={handleInputChange} handleKeyPress={handleKeyPress} handleSearch={handleSearch} searchTerm={searchTerm} />
                <ToggleButton darkMode={darkMode} setDarkMode={setDarkMode} />
              </div>
            </div>
            <div className={`rounded-[11px] mt-16 shadow-xl shadow-black text-center mx-auto text-white font-bold text-xl p-1 lg:max-w-5xl lg:w-72 w-full${darkMode ? ' bg-neutral-600 ' : ' bg-zinc-400'}`}>
              Kesehatan & Keselamatan
            </div>
            <KontenTujuh currentWeather={currentWeather} darkMode={darkMode} />
      
            <div className={`fixed bottom-8 right-8 bg-blue-500 text-white p-2 rounded-full cursor-pointer`} onClick={handleGoToTop}>
              <FaArrowUp size={20} />
            </div>
          </div>
        </div>
      );
      
}

export default Rekomendasi;