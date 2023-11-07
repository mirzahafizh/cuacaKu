import React from 'react';
import humidity_icon from '../assets/humidity.png';
import wind_icon from '../assets/wind.png';
import wicon from './Search';

function CurrentWeather() {
    return (
        <div className='flex gap-4 mt-10 ml-8'>
            <div className='flex flex-col items-center justify-center bg-gray-400 p-4 rounded-xl shadow-lg w-[350px] h-[350px] '>
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
        </div>
    );
}

export default CurrentWeather;
