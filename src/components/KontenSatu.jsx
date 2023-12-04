import humidity_icon from '../assets/humidity.png';
import humidityBlack_icon from '../assets/humidityBlack.png';
import preasureBlack_icon from '../assets/pressure-black.png';
import preasureWhite_icon from '../assets/pressure-white.png';
import sunriseblack_icon from '../assets/sunrise-black.png';
import sunrise_icon from '../assets/sunrise-white.png';
import sunsetblack_icon from '../assets/sunset-black.png';
import sunset_icon from '../assets/sunset-white.png';
import uvBlack_icon from '../assets/uv-black.png';
import uvWhite_icon from '../assets/uv-white.png';
import windBlack_icon from '../assets/wind-black.png';
import wind_icon from '../assets/wind.png';

export default function KontenSatu({ darkMode, currentWeather, getWeatherIcon }) {
    // Gunakan getWeatherIcon di dalam komponen KontenSatu
    const weatherIcon = getWeatherIcon(currentWeather.weatherIcon);

    return (
        <div className="flex flex-col gap-4  w-auto justify-center lg:flex-row mb-4 mt-[90px] mx-auto max-w-8xl">
            <div className={`flex flex-col shadow-xl shadow-black justify-center rounded-[30px] p-8 gap-4  lg:w-1/2 ${darkMode ? ' bg-neutral-600 ' : ' bg-zinc-400'}`}>
                <div className={`kota text-4xl font-bold  text-center${darkMode ? ' text-white ' : ' text-black'}`}>{currentWeather.city}</div>
                <div className={`time text-center text-6xl lg:text-8xl mt-2 font-bold  ${darkMode ? ' text-white ' : ' text-black'}`}>{currentWeather.time}</div>
                <div className={`date text-center text-xl mt-2 font-normal '] ${darkMode ? ' text-white ' : ' text-black'}`}>{currentWeather.date}</div>
            </div>
            <div className={`rounded-[30px] w-full shadow-xl shadow-black mx-auto justify-between flex flex-col lg:flex-row ${darkMode ? 'bg-neutral-600' : 'bg-zinc-400'}`}>
                <div className='flex justify-between p-4 lg:flex-col'>
                    <div className='flex flex-col'>
                        <span className={`text-xl font-bold ${darkMode ? ' text-white ' : ' text-black'}`}>{currentWeather.temperature}</span>
                        <span className={`text-lg font-bold ${darkMode ? ' text-white ' : ' text-black'}`}>Feels like: {currentWeather.feelsLike}</span>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <div className='flex items-center gap-2'>
                            <img src={darkMode ? sunrise_icon : sunriseblack_icon} alt={darkMode ? "Sunrise Icon" : "Black Sunrise Icon"} className='w-10 h-10' />
                            <div className='flex flex-col'>
                                <span className={`text-lg ${darkMode ? ' text-white ' : ' text-black'}`}>Sunrise</span>
                                <span className={`text-lg ${darkMode ? ' text-white ' : ' text-black'}`}>{currentWeather.sunrise}</span>
                            </div>
                        </div>
                        <div className='flex items-center gap-2'>
                            <img src={darkMode ? sunset_icon : sunsetblack_icon} alt={darkMode ? "Sunset Icon" : "Black Sunset Icon"} className='w-10 h-10' />
                            <div className='flex flex-col'>
                                <span className={`text-lg ${darkMode ? ' text-white ' : ' text-black'}`}>Sunset</span>
                                <span className={`text-lg ${darkMode ? ' text-white ' : ' text-black'}`}>{currentWeather.sunset}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center mb-4'>
                    <img src={weatherIcon} alt="Weather Icon" className='w-1/2 h-1/2 lg:w-auto ' />
                    <span className={`text-4xl font-bold ${darkMode ? ' text-white ' : ' text-black'}`}>{currentWeather.weatherDescription}</span>
                </div>
                <div className="flex flex-col w-full lg:w-auto">
                    <div className={`flex p-2 text-center ${darkMode ? 'text-white' : 'text-black'}`}>
                        <div className="flex-1">Humidity</div>
                        <div className="flex-1">Wind Speed</div>
                    </div>
                    <div className="flex items-center p-2 text-center">
                        <div className="flex-1">
                            <div className="flex flex-col items-center">
                                <img src={darkMode ? humidity_icon : humidityBlack_icon} alt={darkMode ? "Humidity Icon" : "Black Humidity Icon"} />
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="flex flex-col items-center">
                                <img src={darkMode ? wind_icon : windBlack_icon} alt={darkMode ? "Wind Icon" : "Black Wind Icon"} />
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center p-2 text-center">
                        <div className="flex-1">
                            <div className={`${darkMode ? 'text-white' : 'text-black'}`}>{currentWeather.humidity}</div>
                        </div>
                        <div className="flex-1">
                            <div className={`${darkMode ? 'text-white' : 'text-black'}`}>{currentWeather.windSpeed}</div>
                        </div>
                    </div>
                    <div className={`flex p-2 text-center ${darkMode ? 'text-white' : 'text-black'}`}>
                        <div className="flex-1">Pressure</div>
                        <div className="flex-1">UV</div>
                    </div>
                    <div className="flex items-center p-2 text-center">
                        <div className="flex-1">
                            <div className="flex flex-col items-center">
                                <img src={darkMode ? preasureWhite_icon : preasureBlack_icon} alt={darkMode ? "Pressure Icon" : "Black Pressure Icon"} />
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="flex flex-col items-center">
                                <img src={darkMode ? uvWhite_icon : uvBlack_icon} alt={darkMode ? "UV Icon" : "Black UV Icon"} />
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center p-2 text-center">
                        <div className="flex-1">
                            <div className={`${darkMode ? 'text-white' : 'text-black'}`}>{currentWeather.pressure}</div>
                        </div>
                        <div className="flex-1">
                            <div className={`${darkMode ? 'text-white' : 'text-black'}`}>{currentWeather.uvIndex}</div>
                        </div>
                    </div>
                </div>


            </div>





        </div>
    )
}