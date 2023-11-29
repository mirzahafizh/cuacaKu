import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

import sunrise_icon from '../assets/2.png';
import sunset_icon from '../assets/3.png';
import search_icon from '../assets/9349901.png';
import uv_icon from '../assets/UV1.png';
import humidity_icon from '../assets/humidity.png';
import rain_icon from '../assets/rain.png';
import tekanan_icon from '../assets/untitled design.png';
import wind_icon from '../assets/wind.png';

const WeatherApp = () => {


    return (
        <div className='container mx-auto p-6 bg-gray-500'>
            <div className='flex items-center justify-center space-x-4'>
                <input type="text" className='cityInput border border-gray-300 rounded-full px-4 py-2' placeholder='search' />
                <div className="search-icon" onClick={() => { search() }} style={{ cursor: 'pointer' }}>
                    <img src={search_icon} alt="Search Icon" className="w-6 h-6 text-white" />
                </div>
            </div>
            <div className="flex gap-4 mt-10 ml-[80px]">
                <div className='flex flex-col items-center justify-center bg-gray-400 p-4 rounded-xl shadow-lg w-[510px] h-[330px]'>
                    <div className='mb-4'>
                        <img src='' alt="" className="w-16 h-16" />
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
                <div className="current-forecast w-[780px]  bg-gray-400 rounded-xl shadow-md flex ml-5">
                    <div className="main-current">
                        <div className="current-temp text-[50px] font-bold text-white ml-5 mt-3" >24°C</div>
                        <div className="feels-like text-[20px] font-bold text-white ml-5 flex"> Feels like:
                            <div className="feels-like-temp font-bold ml-1">22°C</div>
                        </div>
                        <div className="sunrise flex">
                            <img className="w-[50px] h-[50px] mt-5 ml-8" src={sunrise_icon} />
                            <div className="flex flex-col">
                                <div className="sunrise-text mt-5 ml-2 font-bold text-white ">Sunrise</div>
                                <div className="sunrise-time ml-2 text-white ">06.00</div>
                            </div>
                        </div>
                        <div className="sunset flex">
                            <img className="w-[50px] h-[50px] mt-5 ml-8" src={sunset_icon} />
                            <div className="flex flex-col">
                                <div className="sunset-text mt-5 ml-2 font-bold text-white ">Sunset</div>
                                <div className="sunset-time ml-2 text-white ">06.00</div>
                            </div>
                        </div>
                    </div>
                    <div className="current-weather ml-[70px]">
                        <img src={rain_icon} alt="" />
                        <div className="weather-text text-[50px] font-bold text-white ml-[40px] font-['Poppins']">Hujan</div>
                    </div>
                    <div className="detail ml-[70px] ">
                        <div className="w-[247px] h-[328px] relative">
                            <div className="w-[107.40px] left-[131px] top-[172px] absolute">
                                <div className="w-[107.40px] h-[73.05px] left-0 top-[65.90px] absolute">
                                    <div className="w-[107.40px] h-[32.20px] left-0 top-[40.86px] absolute text-center text-white text-base font-medium font-['Poppins']">UV</div>
                                    <div className="w-[104.57px] h-[40.67px] left-[2.48px] top-0 absolute text-center text-white text-xl font-semibold font-['Poppins']">8</div>
                                </div>
                                <img className="w-[58px] h-[58px] left-[26px] top-0 absolute" src={uv_icon} />
                            </div>
                            <div className="w-[113.94px] left-[-0px] top-[172px] absolute">
                                <div className="w-[113.94px] h-[73.05px] left-0 top-[65.90px] absolute">
                                    <div className="w-[113.30px] h-[32.19px] left-[-0px] top-[40.86px] absolute text-center text-white text-base font-medium font-['Poppins']">Pressure</div>
                                    <div className="w-[110.32px] h-[40.67px] left-[3.62px] top-[-0px] absolute text-center text-white text-xl font-semibold font-['Poppins']">1005hPa</div>
                                </div>
                                <img className="w-[58px] h-[58px] left-[28px] top-0 absolute" src={tekanan_icon} />
                            </div>
                            <div className="w-[107.40px] left-[131px] top-[21px] absolute">
                                <div className="w-[107.40px] h-[73.05px] left-0 top-[64.90px] absolute">
                                    <div className="w-[107.40px] h-[32.20px] left-0 top-[40.86px] absolute text-center text-white text-base font-medium font-['Poppins']">Wind Speed</div>
                                    <div className="w-[104.57px] h-[40.67px] left-[2.48px] top-[-0px] absolute text-center text-white text-xl font-semibold font-['Poppins']">2km/h</div>
                                </div>
                                <img className="w-[60px] h-[59.24px] left-[25px] top-0 absolute" src={wind_icon} />
                            </div>
                            <div className="w-[113.94px] h-[132.95px] left-0 top-[26px] absolute">
                                <div className="w-[113.94px] h-[73.05px] left-0 top-[59.90px] absolute">
                                    <div className="w-[113.30px] h-[32.19px] left-[-0px] top-[40.86px] absolute text-center text-white text-base font-medium font-['Poppins']">Humidity</div>
                                    <div className="w-[110.32px] h-[40.67px] left-[3.62px] top-[-0px] absolute text-center text-white text-xl font-semibold font-['Poppins']">99%</div>
                                </div>
                                <img className="w-[60px] h-[50.13px] left-[29px] top-0 absolute" src={humidity_icon} />
                            </div>
                        </div>
                    </div>

                    

                </div>
            </div>
            <div className="hourly-forecast bg-gray-400 rounded-md flex gap-4 w-[2000px] h-[350px] overflow-y-auto mt-5 w-auto">
                    <div className='flex flex-col items-center justify-center bg-gray-700 p-4 rounded-xl shadow-lg w-[200px] h-[300px] mt-[25px] ml-[35px]'>
                        <div className='weather-image-card mt-3 mb-1'>
                            <img src='' alt="" className="w-16 h-16" />
                        </div>
                        <div className="weather-temp-card-15 text-3xl font-bold text-white">24°C</div>
                        <div className="weather-time-card-15 text-md font-bold text-white">00:00</div>
                        <div className="flex flex-col items-center mt-4">
                            <div className="flex items-center justify-center">
                                <div className="flex flex-col items-center text-center">
                                    <img src={humidity_icon} alt="Humidity Icon" className="w-[20px] h-[25px]" />
                                    <div className="humidity-percent-card-15 mt-2 text-xs text-white">64%</div>
                                    <div className="text-white text-[9px]">Humidity</div>
                                </div>
                                <div className="flex flex-col w-[65px] items-center ml-4 text-center">
                                    <img src={wind_icon} alt="Wind Icon" className="w-6 h-6" />
                                    <div className="wind-rate-card-15 mt-2 text-xs text-white">18 km/h</div>
                                    <div className="text-white text-[9px]">Wind Speed</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-center bg-gray-700 p-4 rounded-xl shadow-lg w-[200px] h-[300px] mt-[25px] ml-[5px]'>
                        <div className='weather-image-card mt-3 mb-1'>
                            <img src='' alt="" className="w-16 h-16" />
                        </div>
                        <div className="weather-temp-card-18 text-3xl font-bold text-white">24°C</div>
                        <div className="weather-time-card-18 text-md font-bold text-white">03:00</div>
                        <div className="flex flex-col items-center mt-4">
                            <div className="flex items-center justify-center">
                                <div className="flex flex-col  items-center text-center">
                                    <img src={humidity_icon} alt="Humidity Icon" className="w-[20px] h-[25px]" />
                                    <div className="humidity-percent-card-18 mt-2 text-xs text-white">64%</div>
                                    <div className="text-white text-[9px]">Humidity</div>
                                </div>
                                <div className="flex flex-col  w-[65px] items-center ml-4 text-center">
                                    <img src={wind_icon} alt="Wind Icon" className="w-6 h-6" />
                                    <div className="wind-rate-card-18 mt-2 text-xs text-white">18 km/h</div>
                                    <div className="text-white text-[9px]">Wind Speed</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-center bg-gray-700 p-4 rounded-xl shadow-lg w-[200px] h-[300px] mt-[25px] ml-[5px]'>
                        <div className='weather-image-card mt-3 mb-1'>
                            <img src='' alt="" className="w-16 h-16" />
                        </div>
                        <div className="weather-temp-card-21 text-3xl font-bold text-white">24°C</div>
                        <div className="weather-time-card-21 text-md font-bold text-white">06:00</div>
                        <div className="flex flex-col items-center mt-4">
                            <div className="flex items-center justify-center">
                                <div className="flex flex-col items-center text-center">
                                    <img src={humidity_icon} alt="Humidity Icon" className="w-[20px] h-[25px]" />
                                    <div className="humidity-percent-card-21 mt-2 text-xs text-white">64%</div>
                                    <div className="text-white text-[9px]">Humidity</div>
                                </div>
                                <div className="flex flex-col w-[65px] items-center ml-4 text-center">
                                    <img src={wind_icon} alt="Wind Icon" className="w-6 h-6" />
                                    <div className="wind-rate-card-21 mt-2 text-xs text-white">18 km/h</div>
                                    <div className="text-white text-[9px]">Wind Speed</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-center bg-gray-700 p-4 rounded-xl shadow-lg w-[200px] h-[300px] mt-[25px] ml-[5px]'>
                        <div className='weather-image-card mt-3 mb-1'>
                            <img src='' alt="" className="w-16 h-16" />
                        </div>
                        <div className="weather-temp-card-0 text-3xl font-bold text-white">24°C</div>
                        <div className="weather-time-card-0 text-md font-bold text-white">09:00</div>
                        <div className="flex flex-col items-center mt-4">
                            <div className="flex items-center justify-center">
                                <div className="flex flex-col items-center text-center">
                                    <img src={humidity_icon} alt="Humidity Icon" className="w-[20px] h-[25px]" />
                                    <div className="humidity-percent-card-0 mt-2 text-xs text-white">64%</div>
                                    <div className="text-white text-[9px]">Humidity</div>
                                </div>
                                <div className="flex flex-col w-[65px] items-center ml-4 text-center">
                                    <img src={wind_icon} alt="Wind Icon" className="w-6 h-6" />
                                    <div className="wind-rate-card-0 mt-2 text-xs text-white">18 km/h</div>
                                    <div className="text-white text-[9px]">Wind Speed</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className='flex flex-col items-center justify-center bg-gray-700 p-4 rounded-xl shadow-lg w-[200px] h-[300px] mt-[25px] ml-[5px]'>
                        <div className='weather-image-card mt-3 mb-1'>
                            <img src='' alt="" className="w-16 h-16" />
                        </div>
                        <div className="weather-temp-card-3 text-3xl font-bold text-white">24°C</div>
                        <div className="weather-time-card-3 text-md font-bold text-white">12:00</div>
                        <div className="flex flex-col items-center mt-4">
                            <div className="flex items-center justify-center">
                                <div className="flex flex-col items-center text-center">
                                    <img src={humidity_icon} alt="Humidity Icon" className="w-[20px] h-[25px]" />
                                    <div className="humidity-percent-card-3 mt-2 text-xs text-white">64%</div>
                                    <div className="text-white text-[9px]">Humidity</div>
                                </div>
                                <div className="flex flex-col w-[65px] items-center ml-4 text-center">
                                    <img src={wind_icon} alt="Wind Icon" className="w-6 h-6" />
                                    <div className="wind-rate-card-3 mt-2 text-xs text-white">18 km/h</div>
                                    <div className="text-white text-[9px]">Wind Speed</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-center bg-gray-700 p-4 rounded-xl shadow-lg w-[200px] h-[300px] mt-[25px] ml-[5px]'>
                        <div className='weather-image-card mt-3 mb-1'>
                            <img src='' alt="" className="w-16 h-16" />
                        </div>
                        <div className="weather-temp-card-6 text-3xl font-bold text-white">24°C</div>
                        <div className="weather-time-card-6 text-md font-bold text-white">15:00</div>
                        <div className="flex flex-col items-center mt-4">
                            <div className="flex items-center justify-center">
                                <div className="flex flex-col items-center text-center">
                                    <img src={humidity_icon} alt="Humidity Icon" className="w-[20px] h-[25px]" />
                                    <div className="humidity-percent-card-6 mt-2 text-xs text-white">64%</div>
                                    <div className="text-white text-[9px]">Humidity</div>
                                </div>
                                <div className="flex flex-col w-[65px] items-center ml-4 text-center">
                                    <img src={wind_icon} alt="Wind Icon" className="w-6 h-6" />
                                    <div className="wind-rate-card-6 mt-2 text-xs text-white">18 km/h</div>
                                    <div className="text-white text-[9px]">Wind Speed</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-center bg-gray-700 p-4 rounded-xl shadow-lg w-[200px] h-[300px] mt-[25px] ml-[5px]'>
                        <div className='weather-image-card mt-3 mb-1'>
                            <img src='' alt="" className="w-16 h-16" />
                        </div>
                        <div className="weather-temp-card-9 text-3xl font-bold text-white">24°C</div>
                        <div className="weather-time-card-9 text-md font-bold text-white">18:00</div>
                        <div className="flex flex-col items-center mt-4">
                            <div className="flex items-center justify-center">
                                <div className="flex flex-col items-center text-center">
                                    <img src={humidity_icon} alt="Humidity Icon" className="w-[20px] h-[25px]" />
                                    <div className="humidity-percent-card-9 mt-2 text-xs text-white">64%</div>
                                    <div className="text-white text-[9px]">Humidity</div>
                                </div>
                                <div className="flex flex-col w-[65px] items-center ml-4 text-center">
                                    <img src={wind_icon} alt="Wind Icon" className="w-6 h-6" />
                                    <div className="wind-rate-card-9 mt-2 text-xs text-white">18 km/h</div>
                                    <div className="text-white text-[9px]">Wind Speed</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-center bg-gray-700 p-4 rounded-xl shadow-lg w-[200px] h-[300px] mt-[25px] ml-[5px] mr-[25px]'>
                        <div className='weather-image-card mt-3 mb-1'>
                            <img src='' alt="" className="w-16 h-16" />
                        </div>
                        <div className="weather-temp-card-12 text-3xl font-bold text-white">24°C</div>
                        <div className="weather-time-card-12 text-md font-bold text-white">21:00</div>
                        <div className="flex flex-col items-center mt-4">
                            <div className="flex items-center justify-center">
                                <div className="flex flex-col items-center text-center">
                                    <img src={humidity_icon} alt="Humidity Icon" className="w-[20px] h-[25px]" />
                                    <div className="humidity-percent-card-12 mt-2 text-xs text-white">64%</div>
                                    <div className="text-white text-[9px]">Humidity</div>
                                </div>
                                <div className="flex flex-col w-[65px] items-center ml-4 text-center">
                                    <img src={wind_icon} alt="Wind Icon" className="w-6 h-6" />
                                    <div className="wind-rate-card-12 mt-2 text-xs text-white">18 km/h</div>
                                    <div className="text-white text-[9px]">Wind Speed</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default WeatherApp;