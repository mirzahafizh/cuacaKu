import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

import sunrise_icon from '../assets/2.png';
import sunset_icon from '../assets/3.png';
import search_icon from '../assets/9349901.png';
import uv_icon from '../assets/UV1.png';
import clear_icon from '../assets/clear.png';
import cloud_icon from '../assets/cloud.png';
import drizzle_icon from '../assets/drizzle.png';
import humidity_icon from '../assets/humidity.png';
import navigation_icon from '../assets/navigation 1.png';
import rain_icon from '../assets/rain.png';
import snow_icon from '../assets/snow.png';
import tekanan_icon from '../assets/untitled design.png';
import wind_icon from '../assets/wind.png';
import run_icon from '../assets/run.png';
import uv1_icon from '../assets/matahari.png';
import pakaian_icon from '../assets/pakaian.png';
import temp_icon from '../assets/temp.png';
import payung_icon from '../assets/payung.png';

const WeatherApp = () => {
  return (
    <div class='container mx-auto p-6 bg-gradient-to-r from-neutral-700 to-stone-900 min-h-screen bg-cover'>
      <div className='flex flex-col md:flex-row items-center justify-center space-x-4'>
        <input
          type='text'
          className='cityInput border border-gray-300 rounded-full px-4 py-2 mb-4 md:mb-0'
          placeholder='search'
        />
        <div
          className='search-icon'
          onClick={() => {
            search();
          }}
          style={{ cursor: 'pointer' }}
        >
          <img src={search_icon} alt='Search Icon' className='w-6 h-6 text-white' />
        </div>
      </div>
      <div className='flex gap-4 mt-10 ml-[80px]'>
      <div className="w-[510px] h-[330px] relative">
                <div className="w-[510px] h-[330px] left-0 top-0 absolute bg-neutral-600 rounded-[30px]" />
                    <div className="w-[296px] h-[228px] left-[107px] top-[54px] absolute">
                        <div className="left-[13px] top-0 absolute text-white text-4xl font-bold font-['Poppins']">Karang Joang</div>
                        <div className="w-[296px] left-0 top-[82px] absolute text-center text-white text-8xl font-bold font-['Poppins']">21:00</div>
                        <div className="left-[61px] top-[198px] absolute text-white text-xl font-normal font-['Poppins']">Thursday, 23 Aug</div>
                    </div>
                </div>
                <div className="current-forecast w-[780px]  bg-neutral-600 rounded-xl shadow-md flex ml-5">
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
            <div className="konten-dua">
                <div className="flex">
                <div className="w-[420px] h-[400px] relative mt-[20px] shadow-xl ml-[80px]">
                    <div className="w-[420px] h-[400px] left-0 top-[16px] absolute bg-neutral-600 rounded-[30px]" />
                    <div className="w-[420px] h-[400px] left-0 top-0 absolute">
                        <div className="w-[370px] left-[30px] top-[308px] absolute">
                            <div className="w-[163px] h-[50px] left-[207px] top-[24px] absolute text-white text-xl font-semibold font-['Poppins']">Tuesday, 5 Sep</div>
                            <div className="w-[62px] h-[50px] left-[103px] top-[24px] absolute text-center text-white text-2xl font-semibold font-['Poppins']">16°C</div>
                            <img className="w-[60px] h-[60px] left-0 top-[24px] absolute" src={rain_icon} />
                        </div>
                        <div className="w-[370px] h-[60px] left-[30px] top-[248px] absolute">
                            <div className="w-[163px] h-[60px] left-[207px] top-[24px] absolute text-center text-white text-xl font-semibold font-['Poppins']">Monday, 4 Sep</div>
                            <div className="w-[62px] h-[60px] left-[103px] top-[24px] absolute text-center text-white text-2xl font-semibold font-['Poppins']">18°C</div>
                            <img className="w-[60px] h-[60px] left-0 top-[24px] absolute" src={cloud_icon} />
                        </div>
                        <div className="w-[370px] h-[60px] left-[30px] top-[188px] absolute">
                            <div className="w-[163px] h-[60px] left-[207px] top-[24px] absolute text-center text-white text-xl font-semibold font-['Poppins']">Sunday, 3 Sep</div>
                            <div className="w-[62px] h-[60px] left-[103px] top-[24px] absolute text-center text-white text-2xl font-semibold font-['Poppins']">27°C</div>
                            <img className="w-[60px] h-[60px] left-0 top-[24px] absolute" src={clear_icon} />
                        </div>
                        <div className="w-[370px] h-[60px] left-[30px] top-[128px] absolute">
                            <div className="w-[163px] h-[60px] left-[207px] top-[24px] absolute text-center text-white text-xl font-semibold font-['Poppins']">Saturday, 2 Sep</div>
                            <div className="w-[62px] h-[60px] left-[103px] top-[24px] absolute text-center text-white text-2xl font-semibold font-['Poppins']">22°C</div>
                            <img className="w-[60px] h-[60px] left-0 top-[24px] absolute" src={drizzle_icon} />
                        </div>
                        <div className="w-[370px] h-[60px] left-[30px] top-[68px] absolute">
                            <div className="w-[163px] h-[60px] left-[207px] top-[24px] absolute text-center text-white text-xl font-semibold font-['Poppins']">Friday, 1 Sep</div>
                            <div className="w-[62px] h-[60px] left-[103px] top-[24px] absolute text-center text-white text-2xl font-semibold font-['Poppins']">20°C</div>
                            <img className="w-[60px] h-[60px] left-0 top-[24px] absolute" src={snow_icon} />
                        </div>
                        <div className="w-72 h-[50px] left-[63px] top-[18px] absolute text-center text-white text-[32px] font-bold font-['Poppins'] mt-2">5 Days Forecast:</div>
                    </div>
                </div>
                <div className="w-[870px] h-[400px] relative bg-neutral-600 rounded-[30px] shadow-xl ml-[50px] mt-[40px]">
                    <div className="w-[130px] h-[270px] left-[660px] top-[80px] absolute ">
                        <div className="w-[130px] h-[270px] left-0 top-0 absolute bg-neutral-700 rounded-[40px]" />
                        <div className="w-[69px] h-[95px] left-[33px] top-[157px] absolute">
                            <div className="left-0 top-[65px] absolute text-white text-xl font-bold font-['Poppins']">3km/h</div>
                            <img className="w-[55px] h-[55px] left-[4px] top-0 absolute" src={navigation_icon} />
                        </div>
                        <div className="w-20 h-[111px] left-[28px] top-[42px] absolute">
                            <div className="left-[12px] top-[81px] absolute text-white text-xl font-bold font-['Poppins']">22°C</div>
                            <img className="w-20 h-20 left-0 top-0 absolute" src={clear_icon} />
                        </div>
                        <div className="left-[31px] top-[13px] absolute text-white text-2xl font-bold font-['Poppins']">00:00</div>
                    </div>
                    <div className="w-[130px] h-[270px] left-[515px] top-[80px] absolute">
                        <div className="w-[130px] h-[270px] left-0 top-0 absolute bg-neutral-700 rounded-[40px]" />
                        <div className="w-[75.13px] h-[105.07px] left-[29.93px] top-[146.93px] absolute">
                            <div className="left-[3.07px] top-[75.07px] absolute text-white text-xl font-bold font-['Poppins']">3km/h</div>
                            <img className="w-[55px] h-[55px] left-[27.50px] top-0 absolute origin-top-left rotate-[30deg]" src={navigation_icon} />
                        </div>
                        <div className="w-20 h-[111px] left-[25px] top-[42px] absolute">
                            <div className="left-[15px] top-[81px] absolute text-white text-xl font-bold font-['Poppins']">25°C</div>
                            <img className="w-20 h-20 left-0 top-0 absolute" src={clear_icon} />
                        </div>
                        <div className="left-[31px] top-[13px] absolute text-white text-2xl font-bold font-['Poppins']">21:00</div>
                    </div>
                    <div className="w-[130px] h-[270px] left-[370px] top-[80px] absolute">
                        <div className="w-[130px] h-[270px] left-0 top-0 absolute bg-neutral-700 rounded-[40px]" />
                        <div className="w-[68px] h-[95px] left-[34px] top-[157px] absolute">
                            <div className="left-0 top-[65px] absolute text-white text-xl font-bold font-['Poppins']">2km/h</div>
                            <img className="w-[55px] h-[55px] left-[3px] top-0 absolute" src={navigation_icon} />
                        </div>
                        <div className="w-20 h-[111px] left-[25px] top-[42px] absolute">
                            <div className="left-[16px] top-[81px] absolute text-white text-xl font-bold font-['Poppins']">27°C</div>
                            <img className="w-20 h-20 left-0 top-0 absolute" src={clear_icon} />
                        </div>
                        <div className="left-[31px] top-[13px] absolute text-white text-2xl font-bold font-['Poppins']">18:00</div>
                    </div>
                    <div className="w-[130px] h-[270px] left-[225px] top-[80px] absolute">
                        <div className="w-[130px] h-[270px] left-0 top-0 absolute bg-neutral-700 rounded-[40px]" />
                        <div className="w-[83px] h-[105px] left-[18px] top-[147px] absolute">
                            <div className="left-[15px] top-[75px] absolute text-white text-xl font-bold font-['Poppins']">2km/h</div>
                            <img className="w-[55px] h-[55px] left-0 top-[27.50px] absolute origin-top-left rotate-[-30deg]" src={navigation_icon} />
                        </div>
                        <div className="w-20 h-[111px] left-[25px] top-[42px] absolute">
                            <div className="left-[15px] top-[81px] absolute text-white text-xl font-bold font-['Poppins']">27°C</div>
                            <img className="w-20 h-20 left-0 top-0 absolute" src={clear_icon} />
                        </div>
                        <div className="left-[31px] top-[13px] absolute text-white text-2xl font-bold font-['Poppins']">15:00</div>
                    </div>
                    <div className="w-[130px] h-[270px] left-[80px] top-[80px] absolute">
                        <div className="w-[130px] h-[270px] left-0 top-0 absolute bg-neutral-700 rounded-[40px]" />
                        <div className="w-[69px] h-[95px] left-[33px] top-[157px] absolute">
                            <div className="left-0 top-[65px] absolute text-white text-xl font-bold font-['Poppins']">3km/h</div>
                            <img className="w-[55px] h-[55px] left-[5px] top-0 absolute" src={navigation_icon} />
                        </div>
                        <div className="w-20 h-[110px] left-[25px] top-[42px] absolute">
                            <div className="left-[15px] top-[80px] absolute text-white text-xl font-bold font-['Poppins']">26°C</div>
                            <img className="w-20 h-20 left-0 top-0 absolute" src={clear_icon} />
                        </div>
                        <div className="left-[31px] top-[13px] absolute text-white text-2xl font-bold font-['Poppins']">12:00</div>
                    </div>
                    <div className="left-[306px] top-[13px] absolute text-white text-[32px] font-bold font-['Poppins']">Hourly Forecast:</div>
                </div>
                </div>
        </div>
        <div className='flex mt-5'>
        <div className="name-content">
            <div className="w-[200px] h-[40px] left-[20px] relative mt-[20px] shadow-xl ml-[80px] flex items-center text-center">
                <div className="w-[200px] h-[40px] left-[20px] top-[16px] absolute bg-fuchsia-950 bg-opacity-40 rounded-[11px]" />
                    <div className="absolute inset-y-0 left-[20px] top-[16px] w-full h-full flex items-center justify-center text-white font-bold text-sm">
                        Parkiran Cuaca
                    </div>
                </div>
            </div>
        </div>
        <div className="konten-tiga">
                    <div className="flex ">
                    <div className="w-[1340px] h-[400px] relative mt-[20px] shadow-xl ml-[80px]">
                        <div className="w-[1340px] h-[400px] left-0 top-[16px] absolute bg-neutral-600 rounded-[30px]" />
                        <div className="w-[1340px] h-[400px] left-0 top-0 absolute">
                            <div className="w-[370px] left-[30px] top-[308px] absolute">
                                <div className="w-[163px] h-[50px] left-[207px] top-[24px] absolute text-white text-xl font-semibold font-['Poppins']">Tuesday, 5 Sep</div>
                                <div className="w-[62px] h-[50px] left-[103px] top-[24px] absolute text-center text-white text-2xl font-semibold font-['Poppins']">16°C</div>
                                <img className="w-[60px] h-[60px] left-0 top-[24px] absolute" src={rain_icon} />
                            </div>
                            <div className="w-[370px] h-[60px] left-[30px] top-[248px] absolute">
                                <div className="w-[163px] h-[60px] left-[207px] top-[24px] absolute text-center text-white text-xl font-semibold font-['Poppins']">Monday, 4 Sep</div>
                                <div className="w-[62px] h-[60px] left-[103px] top-[24px] absolute text-center text-white text-2xl font-semibold font-['Poppins']">18°C</div>
                                <img className="w-[60px] h-[60px] left-0 top-[24px] absolute" src={cloud_icon} />
                            </div>
                            <div className="w-[370px] h-[60px] left-[30px] top-[188px] absolute">
                                <div className="w-[163px] h-[60px] left-[207px] top-[24px] absolute text-center text-white text-xl font-semibold font-['Poppins']">Sunday, 3 Sep</div>
                                <div className="w-[62px] h-[60px] left-[103px] top-[24px] absolute text-center text-white text-2xl font-semibold font-['Poppins']">27°C</div>
                                <img className="w-[60px] h-[60px] left-0 top-[24px] absolute" src={clear_icon} />
                            </div>
                            <div className="w-[370px] h-[60px] left-[30px] top-[128px] absolute">
                                <div className="w-[163px] h-[60px] left-[207px] top-[24px] absolute text-center text-white text-xl font-semibold font-['Poppins']">Saturday, 2 Sep</div>
                                <div className="w-[62px] h-[60px] left-[103px] top-[24px] absolute text-center text-white text-2xl font-semibold font-['Poppins']">22°C</div>
                                <img className="w-[60px] h-[60px] left-0 top-[24px] absolute" src={drizzle_icon} />
                            </div>
                            <div className="w-[370px] h-[60px] left-[30px] top-[68px] absolute">
                                <div className="w-[163px] h-[60px] left-[207px] top-[24px] absolute text-center text-white text-xl font-semibold font-['Poppins']">Friday, 1 Sep</div>
                                <div className="w-[62px] h-[60px] left-[103px] top-[24px] absolute text-center text-white text-2xl font-semibold font-['Poppins']">20°C</div>
                                <img className="w-[60px] h-[60px] left-0 top-[24px] absolute" src={snow_icon} />
                            </div>
                            <div className="w-72 h-[50px] left-[63px] top-[18px] absolute text-center text-white text-[32px] font-bold font-['Poppins'] mt-2">5 Days Forecast:</div>
                        </div>
                    </div>
                    </div>
        </div>
        <div className='flex mt-5'>
        <div className="name-content">
            <div className="w-[270px] h-[40px] left-[20px] relative mt-[20px] shadow-xl ml-[80px] flex items-center text-center">
                <div className="w-[270px] h-[40px] left-[20px] top-[16px] absolute bg-fuchsia-950 bg-opacity-40 rounded-[11px]" />
                    <div className="absolute inset-y-0 left-[20px] top-[16px] w-full h-full flex items-center justify-center text-white font-bold text-sm">
                        Kesehatan dan Keselamatan
                    </div>
                </div>
            </div>
        </div>
        <div className="konten-empat">
        <div className="flex">
            <div className="w-[1340px] h-[850px] relative mt-[20px] shadow-xl ml-[80px]">
                <div className="w-[1340px] h-[850px] left-0 top-[16px] absolute bg-neutral-600 rounded-[30px]">
                    {/* Tombol */}
                    <button
                        className="w-[300px] h-[40px] absolute right-[20px] top-[20px] bg-fuchsia-950 bg-opacity-40 text-white rounded-3xl font-semibold"
                        onClick={() => {
                            // Logika yang dijalankan saat tombol diklik
                            console.log('Button Clicked!');
                        }}
                    >
                        Lihat prakiraan lengkapnya<span className="ml-2">&#62;</span>
                    </button>

                    <div className='flex mt-10'>
                        {/* Tabel List */}
                        <div className="w-[90%] mt-10 ml-4 mx-auto">
                            {/* List 1 */}
                            <div className="bg-neutral-700 p-4 mb-4 rounded-3xl flex justify-between items-center">
                                <div className="flex items-center mb-2">
                                    <img className="w-10 h-10 mr-6" src={payung_icon} alt="payung Icon" />
                                    <div className="text-white font-poppins text-xl">Payung</div>
                                </div>
                                <div className="flex items-center">
                                    <div className="mr-4 text-white font-poppins text-xl">Diperlukan</div> {/* Menambahkan ukuran font yang sedikit lebih besar */}
                                    <div className="rounded-full h-4 w-4 mr-2 bg-yellow-500"></div> {/* Bulatan hijau */}
                                </div>
                            </div>

                            {/* List 2 */}
                            <div className="bg-neutral-700 p-4 mb-4 rounded-3xl flex justify-between items-center">
                                <div className="flex items-center mb-2">
                                    <img className="w-10 h-10 mr-6" src={run_icon} alt="run Icon" />
                                    <div className="text-white font-poppins text-xl">Luar Ruangan</div>
                                </div>
                                <div className="flex items-center">
                                    <div className="mr-4 text-white font-poppins text-xl">Sangat Kurang</div> {/* Menambahkan ukuran font yang sedikit lebih besar */}
                                    <div className="rounded-full h-4 w-4 mr-2 bg-red-500"></div> {/* Bulatan hijau */}
                                </div>
                            </div>

                            {/* List 3 */}
                            <div className="bg-neutral-700 p-4 mb-4 rounded-3xl flex justify-between items-center">
                                <div className="flex items-center mb-2">
                                    <img className="w-10 h-10 mr-6" src={uv1_icon} alt="payung Icon" />
                                    <div className="text-white font-poppins text-xl">Indeks UV</div>
                                </div>
                                <div className="flex items-center">
                                    <div className="mr-4 text-white font-poppins text-xl">Ekstrem</div> {/* Menambahkan ukuran font yang sedikit lebih besar */}
                                    <div className="rounded-full h-4 w-4 mr-2 bg-red-500"></div> {/* Bulatan hijau */}
                                </div>
                            </div>

                            {/* List 4 */}
                            <div className="bg-neutral-700 p-4 mb-4 rounded-3xl flex justify-between items-center">
                                <div className="flex items-center mb-2">
                                    <img className="w-10 h-10 mr-6" src={pakaian_icon} alt="payung Icon" />
                                    <div className="text-white font-poppins text-xl">Pakaian</div>
                                </div>
                                <div className="flex items-center">
                                    <div className="mr-4 text-white font-poppins text-xl">Celana Pendek</div> {/* Menambahkan ukuran font yang sedikit lebih besar */}
                                    <div className="rounded-full h-4 w-4 mr-2 bg-yellow-500"></div> {/* Bulatan hijau */}
                                </div>
                            </div>

                            {/* List 5 */}
                            <div className="bg-neutral-700 p-4 mb-4 rounded-3xl flex justify-between items-center">
                                <div className="flex items-center mb-2">
                                    <img className="w- h-10 mr-10 ml-3" src={temp_icon} alt="payung Icon" />
                                    <div className="text-white font-poppins text-xl">Sengatan Panas</div>
                                </div>
                                <div className="flex items-center">
                                    <div className="mr-4 text-white font-poppins text-xl">Bahaya</div> {/* Menambahkan ukuran font yang sedikit lebih besar */}
                                    <div className="rounded-full h-4 w-4 mr-2 bg-red-400"></div> {/* Bulatan hijau */}
                                </div>
                            </div>

                            {/* List 6 */}
                            <div className="bg-neutral-700 p-4 mb-4 rounded-3xl flex justify-between items-center">
                                <div className="flex items-center mb-2">
                                    <img className="w- h-10 mr-10 ml-3" src={temp_icon} alt="payung Icon" />
                                    <div className="text-white font-poppins text-xl">Angin Dingin</div>
                                </div>
                                <div className="flex items-center">
                                    <div className="mr-4 text-white font-poppins text-xl">Aman</div> {/* Menambahkan ukuran font yang sedikit lebih besar */}
                                    <div className="rounded-full h-4 w-4 mr-2 bg-green-500"></div> {/* Bulatan hijau */}
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  );
};

export default WeatherApp;
