import React from 'react';
import humidity_icon from '../assets/humidity.png';
import wind_icon from '../assets/wind.png';
import wicon from './WeatherSearch';


function HourlyForecast() {
    return (
        <div className="hourly-forecast bg-gray-400 rounded-md flex gap-4 w-[1100px] h-[350px] overflow-y-auto">
            <div className='flex flex-col items-center justify-center bg-gray-700 p-4 rounded-xl shadow-lg w-[170px] h-[300px] mt-[25px] ml-[35px]'>
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
    );
}


export default HourlyForecast;
