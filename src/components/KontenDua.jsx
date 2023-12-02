import navigation_icon from '../assets/navigation.png';
import rain_icon from '../assets/rain.png';

export default function KontenDua({ darkMode, currentWeather, fiveDaysForecast, hourlyForecast }) {
    return (
        <div className="flex flex-col w-auto justify-between lg:flex-row max-w-5xl mx-auto gap-4 w-auto">
            <div className={`flex flex-col w-full mb-4 justify-center items-center w max-w-5xl rounded-[30px] p-4 lg:w-auto ${darkMode ? 'bg-neutral-600 text-white' : 'bg-zinc-400 text-black'}`} >
                <div className={`${darkMode ? 'text-white' : 'text-black'} text-lg mb-4 sm:text-xl`}>
                    5 Days Forecast:
                </div>
                <div className="flex flex-col flex-wrap">
                    {currentWeather &&
                        currentWeather.dummy5DaysForecast.map((forecast, index) => (
                            <div
                                key={index}
                                className="text-xs justify-between gap-4 items-center sm:text-sm flex  md:text-base lg:text-lg xl:text-xl"
                            >
                                <img
                                    className="w-12 h-12"
                                    src={forecast.weatherIcon}
                                    alt="Weather Icon"
                                />
                                <div className={`${darkMode ? 'text-white' : 'text-black'}  text-xs sm:text-sm mt-1`}>
                                    {forecast.temperature}
                                </div>
                                <div className={`${darkMode ? 'text-white' : 'text-black'} text-xs sm:text-sm mt-1`}>
                                    {forecast.date}
                                </div>
                            </div>
                        ))}
                </div>
            </div>
            <div className={`flex flex-col w-full mb-4 justify-center items-center w max-w-5xl rounded-[30px] p-4 lg:4/5 h-auto ${darkMode ? ' bg-neutral-600 text-white' : ' bg-zinc-400 text-black'}`}>
                <div className={`${darkMode ? 'text-white' : 'text-black'} text-lg mb-4 sm:text-xl`}>
                    Hourly Forecast:
                </div>
                <div className="flex gap-3 justify-center flex-wrap">
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
                                    <img src={rain_icon} alt="Weather Icon" className="w-12 h-12 sm:w-16 sm:h-16" />
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