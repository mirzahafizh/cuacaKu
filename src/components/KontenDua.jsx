import navigation_icon from '../assets/navigation.png';

export default function KontenDua({darkMode,currentWeather,fiveDaysForecast,hourlyForecast,getWeatherIcon}){
    const weatherIconFiveDays = currentWeather.dummy5DaysForecast.map((forecast) =>
        getWeatherIcon(forecast.weatherIcon)
    );
    const weatherIconHourly = currentWeather.hourlyForecastData.map((data) =>
        getWeatherIcon(data.weatherIcon)
    );
    return (
        <div className="flex flex-col w-auto gap-2 justify-between lg:flex-row max-w-8xl ">
            <div className={`flex flex-col shadow-xl  shadow-black w-full justify-center items-center max-w-8xl rounded-[30px] p-4 lg:w-1/3 mb-4 mr-6 ${darkMode ? 'bg-neutral-600 text-white' : 'bg-zinc-400 text-black'}`} >
                <div className={`${darkMode ? 'text-white' : 'text-black'} text-lg mb-4 sm:text-xl`}>
                    5 Days Forecast:
                </div>
                <div className="flex flex-col flex-wrap w-full ">
                    {currentWeather &&
                        currentWeather.dummy5DaysForecast.map((forecast, index) => (
                            <div
                                key={index}
                                className="text-xs justify-between   items-center sm:text-sm flex  md:text-base lg:text-lg xl:text-xl"
                            >
                                <img
                                    className="w-16 h-16 "
                                    src={weatherIconFiveDays[index]}
                                    alt="Weather Icon"
                                />
                                <div className={`${darkMode ? 'text-white' : 'text-black'}  ml-[-70px] w-1/3 text-right  text-xl sm:text-xl mt-1`}>
                                    {forecast.temperature}
                                </div>
                                <div className={`${darkMode ? 'text-white' : 'text-black'} w-1/3 text-right text-xl sm:text-xl mt-1`}>
                                    {forecast.date}
                                </div>
                            </div>
                        ))}
                </div>
            </div>

            <div className={`flex flex-col shadow-xl shadow-black w-full mb-4 justify-center border-1 items-center w max-w-5xl rounded-[30px] p-4 lg:w-2/3 h-auto ${darkMode ? ' bg-neutral-600 text-white' : ' bg-zinc-400 text-black'}`}>
                <div className={`${darkMode ? 'text-white' : 'text-black'} mt-[-30px] text-lg mb-4 sm:text-xl`}>
                    Hourly Forecast:
                </div>
                <div className="flex gap-3 justify-center flex-wrap mt-[30px]">
                    {currentWeather &&
                        currentWeather.hourlyForecastData.map((data, index) => (
                            <div
                                key={index}
                                className="flex text-xs h-auto sm:text-sm"
                            >
                                <div className={`flex flex-col items-center rounded-[25px] p-2 ${darkMode ? ' bg-neutral-500 ' : ' bg-zinc-300'}`}>
                                    <div className={`${darkMode ? 'text-white' : 'text-black'} text-xs sm:text-sm mt-1`}>
                                        {data.time}
                                    </div>
                                    <img src={weatherIconHourly[index]} alt="Weather Icon" className="w-12 h-12 sm:w-16 sm:h-16" />
                                    <div className="">
                                        {data.temperature}
                                    </div>

                                    <img
                                        src={navigation_icon}
                                        alt="Navigation Icon"
                                        className=""
                                    />
                                    <div className={`${darkMode ? 'text-white' : 'text-black'} text-xs sm:text-sm mt-1`}>
                                        {data.windSpeed}
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div >
    )
}