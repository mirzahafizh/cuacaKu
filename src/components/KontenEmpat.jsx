
export default function KontenEmpat({currentWeather,setCurrentWeather,darkMode}){
    return(
        <div className="konten-tiga ">
            <div className="flex ">
                <div className={`w-[1340px] h-[400px] relative mt-[20px] shadow-xl rounded-[30px] ml-[80px]  shadow-black ${darkMode ?'  text-white ':' text-black'}`}>
                    <div className={`w-[1340px] h-[400px] left-0 top-0 absolute rounded-[30px] ${darkMode ?' bg-neutral-600 text-white ':' bg-zinc-400 text-black'}`}>
                        {/* Row Pertama */}
                        <div className="w-[200px] h-[93px] ml-44 mt-24 mb-4">
                            <img className="w-[90x] h-[90px] absolute" src={rain_icon} alt="Rain Icon" />
                            <div className="ml-4">
                                <div className="text-right  text-2xl font-semibold font-['Poppins']">{currentWeather.temperature}</div>
                                <div className="text-right  opacity-50 text-2xl font-semibold font-['Poppins']">{currentWeather.temperature}</div>
                            </div>
                        </div>

                        {/* Row Kedua */}
                        <div className="w-[250px] h-[80px] left-[100px] top-[5px] mb-2 ml-36 flex items-center">
                            <div className="ml-4 ">
                                <div className="text-center  text-xl font-semibold font-['Poppins']">Humidity</div>
                                <div className="text-center  text-2xl font-semibold font-['Poppins']">{currentWeather.humidity}</div>
                            </div>
                            <div className="ml-14">
                                <div className="text-center  text-xl font-semibold font-['Poppins']">Visibility</div>
                                <div className="text-center  text-2xl font-semibold font-['Poppins']">10 km</div>
                            </div>
                        </div>
                        {/* Row Ketiga */}
                        <div className="w-[300px] h-[80px] left-[100px] top-[5px] ml-32 flex items-center ">
                            <div className="ml-4">
                                <div className="text-center  text-xl font-semibold font-['Poppins']">Air Pressure</div>
                                <div className="text-center  text-2xl font-semibold font-['Poppins']">{currentWeather.pressure}</div>
                            </div>
                            {/* Wind */}
                            <div className="ml-14">
                                <div className="text-center  text-xl font-semibold font-['Poppins']">Wind</div>
                                <div className="text-center  text-2xl font-semibold font-['Poppins']">{currentWeather.windSpeed}</div>
                            </div>
                        </div>
                    </div>
                    {/* Tulisan "5 Days Forecast:" di atas */}
                    <div className="w-72 left-[63px] top-[18px] absolute text-center  text-[32px] font-bold font-['Poppins'] mt-2">30 Kamis | Day</div>

                    <div className="w-[500px] h-[400px] left-[750px] top-0 absolute">
                        {/* Row Pertama */}
                        <div className="w-[200px] h-[93px] ml-32 mt-24 mb-4">
                            <img className="w-[90x] h-[90px] absolute" src={rain_night_icon} alt="Rain Night Icon" />
                            <div className="ml-4">
                                <div className="text-right  text-2xl font-semibold font-['Poppins']">{currentWeather.tempNight}</div>
                                <div className="text-right  opacity-50 text-2xl font-semibold font-['Poppins']">{currentWeather.tempNight}</div>
                            </div>
                        </div>

            <div className='flex flex-col items-center'>
                <div className="text-center text-lg md:text-[32px] lg:text-[32px] font-bold  mb-2">30 Kamis | Night</div>
                <div className="flex items-center">
                    <div className="">
                        <div className="text-right text-md md:text-2xl lg:text-2xl font-semibold ">{currentWeather.tempNight}</div>
                        <div className="text-right opacity-50 text-md md:text-2xl lg:text-2xl font-semibold ">{currentWeather.tempNight}</div>
                    </div>
                    <img className="w-20 h-16 md:w-24 md:h-24 lg:w-28 lg:h-24" src={rain_night_icon} alt="Rain Icon" />
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