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

    return(
        <div className="flex gap-4 mt-10 ml-[80px] ">
            <div className="w-[510px] h-[330px] relative flex flex-col items-center justify-center ">
                <div className={`w-[510px] h-[330px] left-0 top-0 absolute rounded-[30px] shadow-xl shadow-black ${darkMode ?' bg-neutral-600 ':' bg-zinc-400'}`} />
                <div className="w-[296px] h-[228px] left-[107px] top-[54px] absolute flex flex-col items-center justify-center">
                    <div className={`kota text-4xl font-bold  font-['Poppins'] ${darkMode ?' text-white ':' text-black'}`}>{currentWeather.city}</div>
                    <div className={`time text-center text-[60px] mt-2 font-bold font-['Poppins'] ${darkMode ?' text-white ':' text-black'}`}>{currentWeather.time}</div>
                    <div className={`date text-center text-xl mt-2 font-normal font-['Poppins'] ${darkMode ?' text-white ':' text-black' }`}>{currentWeather.date}</div>
                </div>
            </div>
                <div className={`current-forecast w-[780px] rounded-xl shadow-xl flex ml-5  shadow-black${darkMode ?' bg-neutral-600 ':' bg-zinc-400'}`}>
                    <div className="main-current">
                        <div className={`current-temp text-[50px] font-bold ml-5 mt-3 ${darkMode ?' text-white ':' text-black' }`} >{currentWeather.temperature}</div>
                        <div className={`feels-like text-[20px] font-bold ml-5 flex ${darkMode ?' text-white ':' text-black' }`}> Feels like:
                            <div className={`feels-like-temp font-bold ml-1 ${darkMode ?' text-white ':' text-black' }`}>{currentWeather.feelsLike}</div>
                        </div>
                        <div className="sunrise flex">
                            <img className="w-[50px] h-[50px] mt-5 ml-8"  src={darkMode ? sunrise_icon : sunriseblack_icon} alt={darkMode ? "Sunrise Icon" : "Black Sunrise Icon"} />
                            <div className="flex flex-col">
                                <div className={`sunrise-text mt-5 ml-2 font-bold  ${darkMode ?' text-white ':' text-black' }  `}>Sunrise</div>
                                <div className={`sunrise-time ml-2  ${darkMode ?' text-white ':' text-black' } `}>{currentWeather.sunrise}</div>
                            </div>
                        </div>
                        <div className="sunset flex">
                            <img className="w-[50px] h-[50px] mt-5 ml-8" src={darkMode ? sunset_icon : sunsetblack_icon} alt={darkMode ? "Sunset Icon" : "Black Sunset Icon"} />
                            <div className="flex flex-col">
                                <div className={`sunset-text mt-5 ml-2 font-bold  ${darkMode ?' text-white ':' text-black' } `}>Sunset</div>
                                <div className={`sunset-time ml-2 ${darkMode ?' text-white ':' text-black' } `}>{currentWeather.sunset}</div>
                            </div>
                        </div>
                    </div>
                    <div className="current-weather ml-[70px]">
                        <img src={weatherIcon} alt="" />
                        <div className={`weather-text text-[50px] font-bold ml-[40px] font-['Poppins'] ${darkMode ?' text-white ':' text-black' }`}>{currentWeather.weatherDescription}</div>
                    </div>
                    <div className="detail ml-[70px] ">
                        <div className="w-[247px] h-[328px] relative">
                            <div className="w-[107.40px] left-[131px] top-[172px] absolute">
                                <div className="w-[107.40px] h-[73.05px] left-0 top-[65.90px] absolute">
                                    <div className={`w-[107.40px] h-[32.20px] left-0 top-[40.86px] absolute text-center  text-base font-medium font-['Poppins']  ${darkMode ?' text-white ':' text-black' }`}>UV</div>
                                    <div className={`w-[104.57px] h-[40.67px] left-[2.48px] top-0 absolute text-center text-xl font-semibold font-['Poppins']  ${darkMode ?' text-white ':' text-black' }`}>{currentWeather.uvIndex}</div>
                                </div>
                                <img className="w-[58px] h-[58px] left-[26px] top-0 absolute" src={darkMode ? uvWhite_icon : uvBlack_icon} alt={darkMode ? "Uv Icon" : "Black UV Icon"} />
                            </div>
                            <div className="w-[113.94px] left-[-0px] top-[172px] absolute">
                                <div className="w-[113.94px] h-[73.05px] left-0 top-[65.90px] absolute">
                                    <div className={`w-[113.30px] h-[32.19px] left-[-0px] top-[40.86px] absolute text-center  text-base font-medium font-['Poppins'] ${darkMode ?' text-white ':' text-black' }`}>Pressure</div>
                                    <div className={`w-[110.32px] h-[40.67px] left-[3.62px] top-[-0px] absolute text-center text-xl font-semibold font-['Poppins'] ${darkMode ?' text-white ':' text-black' }`}>{currentWeather.pressure}</div>
                                </div>
                                <img className="w-[58px] h-[58px] left-[28px] top-0 absolute" src={darkMode ? preasureWhite_icon : preasureBlack_icon} alt={darkMode ? "Preasure Icon" : "Black Preasure Icon"} />
                            </div>
                            <div className="w-[107.40px] left-[131px] top-[21px] absolute">
                                <div className="w-[107.40px] h-[73.05px] left-0 top-[64.90px] absolute">
                                    <div className={`w-[107.40px] h-[32.20px] left-0 top-[40.86px] absolute text-center  text-base font-medium font-['Poppins'] ${darkMode ?' text-white ':' text-black' } `}>Wind Speed</div>
                                    <div className={`w-[104.57px] h-[40.67px] left-[2.48px] top-[-0px] absolute text-center  text-xl font-semibold font-['Poppins'] ${darkMode ?' text-white ':' text-black' } `}>{currentWeather.windSpeed}</div>
                                </div>
                                <img className="w-[60px] h-[59.24px] left-[25px] top-0 absolute" src={darkMode ? wind_icon : windBlack_icon} alt={darkMode ? "Wind Icon" : "Black Wind Icon"} />
                            </div>
                            <div className="w-[113.94px] h-[132.95px] left-0 top-[26px] absolute">
                                <div className="w-[113.94px] h-[73.05px] left-0 top-[59.90px] absolute">
                                    <div className={`w-[113.30px] h-[32.19px] left-[-0px] top-[40.86px] absolute text-center  text-base font-medium font-['Poppins'] ${darkMode ?' text-white ':' text-black' } `}>Humidity</div>
                                    <div className={`w-[110.32px] h-[40.67px] left-[3.62px] top-[-0px] absolute text-center  text-xl font-semibold font-['Poppins'] ${darkMode ?' text-white ':' text-black' }`}>{currentWeather.humidity}</div>
                                </div>
                                <img className="w-[60px] h-[50.13px] left-[29px] top-0 absolute"  src={darkMode ? humidity_icon : humidityBlack_icon} alt={darkMode ? "Humidity Icon" : "Black Humidity Icon"} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}