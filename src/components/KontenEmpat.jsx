
export default function KontenEmpat({currentWeather,setCurrentWeather,darkMode,getWeatherIcon}){

    const weatherIconNight = getWeatherIcon(currentWeather.weatherIconNight);
    const weatherIcon = getWeatherIcon(currentWeather.weatherIcon);


    return (
        <div className={`flex justify-center shadow-xl shadow-black gap-8 mt-4 w-full mx-auto px-6 pt-4 pb-2 rounded-[30px] lg:max-w-8xl lg:gap-52${darkMode ? ' bg-neutral-600 text-white ' : ' bg-zinc-400 text-black'}`}>
            <div className='flex flex-col items-center'>
                <div className="text-center text-lg md:text-[32px] lg:text-[32px] font-bold  mb-2">30 Kamis | Day</div>
                <div className="flex items-center">
                    <div className="">
                        <div className="text-right text-md md:text-2xl lg:text-2xl font-semibold ">{currentWeather.temperature}</div>
                        <div className="text-right opacity-50 text-md md:text-2xl lg:text-2xl font-semibold ">{currentWeather.temperature}</div>
                    </div>
                    <img className="w-20 h-16 md:w-24 md:h-24 lg:w-28 lg:h-24" src={weatherIcon} alt="Rain Icon" />
                </div>
                <div className="flex gap-2 items-center p-2">
                    <div className="">
                        <div className="text-center  text-md font-semibold ">Humidity</div>
                        <div className="text-center  text-lg font-semibold ">{currentWeather.humidity}</div>
                    </div>
                    <div className="">
                        <div className="text-center  text-md font-semibold ">Visibility</div>
                        <div className="text-center  text-lg font-semibold ">10 km</div>
                    </div>
                </div>
                <div className="flex gap-2 items-center p-2">
                    <div className="">
                        <div className="text-center  text-md font-semibold ">Air Pressure</div>
                        <div className="text-center  text-lg font-semibold ">{currentWeather.pressure}</div>
                    </div>
                    <div className="">
                        <div className="text-center  text-md font-semibold ">Wind</div>
                        <div className="text-center  text-lg font-semibold ">{currentWeather.windSpeed}</div>
                    </div>
                </div>
            </div>

            <div className='flex flex-col items-center'>
                <div className="text-center text-lg md:text-[32px] lg:text-[32px] font-bold  mb-2">30 Kamis | Night</div>
                <div className="flex items-center">
                    <div className="">
                        <div className="text-right text-md md:text-2xl lg:text-2xl font-semibold ">{currentWeather.tempNight}</div>
                        <div className="text-right opacity-50 text-md md:text-2xl lg:text-2xl font-semibold ">{currentWeather.tempNight}</div>
                    </div>
                    <img className="w-20 h-16 md:w-24 md:h-24 lg:w-28 lg:h-24" src={weatherIconNight} alt="Rain Icon" />
                </div>
                <div className="flex gap-2 items-center p-2">
                    <div className="">
                        <div className="text-center  text-md ">Humidity</div>
                        <div className="text-center  text-lg ">{currentWeather.humidityNight}</div>
                    </div>
                    <div className="">
                        <div className="text-center  text-md ">Visibility</div>
                        <div className="text-center  text-lg ">10 km</div>
                    </div>
                </div>
                <div className="flex gap-2 items-center p-2">
                    <div className="">
                        <div className="text-center  text-md ">Air Pressure</div>
                        <div className="text-center  text-lg ">{currentWeather.pressureNight}</div>
                    </div>
                    <div className="">
                        <div className="text-center  text-md ">Wind</div>
                        <div className="text-center  text-lg ">{currentWeather.windSpeedNight}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}