import navigation_icon from '../assets/navigation.png';

export default function KontenDua({darkMode,currentWeather,fiveDaysForecast,hourlyForecast,getWeatherIcon}){
    const weatherIconFiveDays = currentWeather.dummy5DaysForecast.map((forecast) =>
        getWeatherIcon(forecast.weatherIcon)
    );
    const weatherIconHourly = currentWeather.hourlyForecastData.map((data) =>
        getWeatherIcon(data.weatherIcon)
    );

    

    return(
                <div className="flex ">
                <div className="w-[420px] h-[400px] relative mt-[20px] shadow-xl ml-[80px]">
                    <div className={`w-[420px] h-[400px] left-0 top-[16px] absolute rounded-[30px] shadow-xl shadow-black ${darkMode ? 'bg-neutral-600 text-white' : 'bg-zinc-400 text-black'}`} />
                    <div className="w-[420px] h-[400px] left-0 top-0 absolute flex flex-col justify-between">
                        <div className={`w-72 h-[50px] left-[63px] top-[18px]  absolute text-center text-[32px] font-bold font-['Poppins'] mt-2 ${darkMode ?' text-white ':' text-black'}`}>
                            5 Days Forecast:
                        </div>
                        <div className="flex flex-col gap-3 ml-[15px] mt-[75px]">
                            {currentWeather &&
                                currentWeather.dummy5DaysForecast.map((forecast, index) => (
                                    <div
                                        key={index}
                                        className="w-[370px] h-[50px] ml-[30px] flex items-center"
                                    >
                                        <img
                                            className="w-[60px] h-[60px]"
                                            src={weatherIconFiveDays[index]}
                                            alt="Weather Icon"
                                        />
                                        <div className={`w-[62px] text-center  text-2xl font-semibold font-['Poppins']  ${darkMode ?' text-white ':' text-black'}`}>
                                            {forecast.temperature}
                                        </div>
                                        <div className={`w-[163px] text-xl ml-[30px] font-semibold font-['Poppins']${darkMode ?' text-white ':' text-black'}`}>
                                            {forecast.date}
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
                <div className={`w-[870px] h-[400px] relative rounded-[30px] shadow-xl shadow-black ml-[50px] mt-[40px] flex items-center  ${darkMode ?' bg-neutral-600 text-white':' bg-zinc-400 text-black'}`}>
                    <div className="left-[306px] top-[13px] absolute  text-[32px] font-bold font-['Poppins']">
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
                            <div className={`w-[130px] h-[270px] left-0 top-0 absolute rounded-[40px] shadow-xl shadow-black border-1 border-neutral  ${darkMode ?' bg-neutral-500 ':' bg-zinc-300'}`} />
                            <div className="w-20 h-[111px] left-[28px] top-[42px] absolute">
                                <div className="left-[12px] top-[81px] absolute  text-xl font-bold font-['Poppins']">
                                    {data.temperature}
                                </div>
                                <img src={weatherIconHourly[index]} alt="Weather Icon" className="ml-[-3px]" />
                                <img
                                    src={navigation_icon}
                                    alt="Navigation Icon"
                                    className="mt-7 ml-[10px]"
                                />
                            </div>
                            <div className="left-[35px] top-[13px] absolute  text-2xl font-bold font-['Poppins']">
                                {data.time}
                            </div>
                            <div className="left-[35px] top-[180px] mt-[34px] absolute  text-xl font-bold font-['Poppins']">
                                {data.windSpeed}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            </div>
    )
}