import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import uv1_icon from '../assets/UV1.png';
import pakaian_icon from '../assets/pakaian.png';
import payung_icon from '../assets/payung.png';
import run_icon from '../assets/run.png';
import temp_icon from '../assets/temp.png';
import recommendationsData from '../data/pakaianRecommendations.json';

function rekomendasiPakaian(uvIndex) {
  const recommendation = recommendationsData.recommendations.find(
    (range) => uvIndex >= range.uvIndexRange[0] && uvIndex <= range.uvIndexRange[1]
  );

  if (recommendation) {
    return {
      payung: recommendation.payung,
      luarRuangan: recommendation.luarRuangan,
      indeksUV: recommendation.indeksUV,
      pakaian: recommendation.pakaian,
      sengatanPanas: recommendation.sengatanPanas,
      anginDingin: recommendation.anginDingin,
      dpayung: recommendation.dpayung,
        dluarRuangan: recommendation.dluarRuangan,
        dindeksUV: recommendation.dindeksUV,
        dpakaian: recommendation.dpakaian,
        dsengatanPanas: recommendation.dsengatanPanas,
        danginDingin: recommendation.danginDingin
    };
  }

  return {
    payung: '',
    luarRuangan: '',
    indeksUV: '',
    pakaian: '',
    sengatanPanas: '',
    anginDingin: '',
    dpayung: '',
    dluarRuangan: '',
    dindeksUV: '',
    dpakaian: '',
    dsengatanPanas: '',
    danginDingin: ''

  };
}

export default function KontenTujuh({ currentWeather, darkMode }) {
  const uvIndex = currentWeather.uvIndex || 0;
  const {
    payung,
    luarRuangan,
    indeksUV,
    pakaian,
    sengatanPanas,
    anginDingin,
    dpayung,
    dluarRuangan,
    dindeksUV,
    dpakaian,
    dsengatanPanas,
    danginDingin
  } = rekomendasiPakaian(uvIndex);

  const [accordionState, setAccordionState] = useState({
    payung: false,
    luarRuangan: false,
    indeksUV: false,
    pakaian: false,
    sengatanPanas: false,
    anginDingin: false,
    dpayung: false,
    dluarRuangan: false,
    dindeksUV: false,
    dpakaian: false,
    dsengatanPanas: false,
    danginDingin: false
  });

  const toggleAccordion = (item) => {
    setAccordionState((prevState) => ({
      ...prevState,
      [item]: !prevState[item]
    }));
  };

  const navigate = useNavigate();

  return (
    <div className={`mt-4 max-w-8xl mx-auto shadow-xl shadow-black rounded-[30px] ${darkMode ? 'bg-neutral-600' : 'bg-zinc-400'}`}>
      <div className='flex flex-col p-2 '>
        <div className="m-2 rounded-3xl 3xl flex justify-between items-center">
          <button
            className="bg-fuchsia-950 text-white px-4 py-2 rounded-full font-semibold ml-auto w-full lg:w-auto"
            onClick={() => {
              navigate('/Aktifitas');
              console.log('Button Clicked!');
            }}
          >
            Aktifitas<span className="ml-2">&#62;</span>
          </button>
        </div>

        {/* List 1 */}
        <div className={`bg-neutral-700 p-4 m-2 rounded-3xl flex flex-col justify-between items-center ${darkMode ? ' bg-neutral-600 ' : ' bg-zinc-500 '}`}>
            <div className="flex items-center mb-2">
                <img className=" h-10 mr-6" src={payung_icon} alt="run Icon" />
                <div className="text-white font-poppins text-md lg:text-xl">Payung</div>
            </div>
          <div className="flex items-center justify-end ml-auto w-1/3 h-auto">
            <div className="mr-4 text-white font-poppins text-left text-sm lg:text-xl">{payung}</div>
            <div className={`rounded-full h-4 w-4 mr-2 ${indeksUV === 'Rendah' ? 'bg-green-500' : indeksUV === 'Sedang' ? 'bg-yellow-500' : 'bg-red-500'}`}></div>
          </div>
          {accordionState.payung && (
            <div className="text-white font-poppins text-md lg:text-xl mt-2">
              {dpayung}
            </div>
          )}
          <button
            className="mt-2 text-yellow-500"
            onClick={() => toggleAccordion('payung')}
          >
            {accordionState.payung ? 'Hide Details' : 'Show Details'}
          </button>
        </div>

        {/* List 2 */}
        <div className={`bg-neutral-700 p-4 m-2 rounded-3xl flex flex-col justify-between items-center ${darkMode ? ' bg-neutral-600 ' : ' bg-zinc-500 '}`}>
            <div className="flex items-center mb-2">
                <img className=" h-10 mr-6" src={run_icon} alt="run Icon" />
                <div className="text-white font-poppins text-md lg:text-xl">Luar Ruangan</div>
            </div>
          <div className="flex items-center justify-end ml-auto w-1/3 h-auto">
            <div className="mr-4 text-white font-poppins text-left text-sm lg:text-xl">{luarRuangan}</div>
            <div className="rounded-full h-4 w-4 mr-2 bg-red-500"></div>
          </div>
          {accordionState.luarRuangan && (
            <div className="text-white font-poppins text-md lg:text-xl mt-2">
              {dluarRuangan}
            </div>
          )}
          <button
            className="mt-2 text-yellow-500"
            onClick={() => toggleAccordion('luarRuangan')}
          >
            {accordionState.luarRuangan ? 'Hide Details' : 'Show Details'}
          </button>
        </div>

        {/* List 3 */}
        <div className={`bg-neutral-700 p-4 m-2 rounded-3xl flex flex-col justify-between items-center ${darkMode ? ' bg-neutral-600 ' : ' bg-zinc-500 '}`}>
            <div className="flex items-center mb-2">
                <img className=" h-10 mr-6" src={uv1_icon} alt="run Icon" />
                <div className="text-white font-poppins text-md lg:text-xl">Indeks UV</div>
            </div>
          <div className="flex items-center justify-end ml-auto w-1/3 h-auto">
            <div className="mr-4 text-white font-poppins text-left text-sm lg:text-xl">{indeksUV}</div>
            <div className={`rounded-full h-4 w-4 mr-2 ${indeksUV === 'Rendah' ? 'bg-green-500' : indeksUV === 'Sedang' ? 'bg-yellow-500' : 'bg-red-500'}`}></div>
          </div>
          {accordionState.indeksUV && (
            <div className="text-white font-poppins text-md lg:text-xl mt-2">
              {dindeksUV}
            </div>
          )}
          <button
            className="mt-2 text-yellow-500"
            onClick={() => toggleAccordion('indeksUV')}
          >
            {accordionState.indeksUV ? 'Hide Details' : 'Show Details'}
          </button>
        </div>

        {/* List 4 */}
        <div className={`bg-neutral-700 p-4 m-2 rounded-3xl flex flex-col justify-between items-center ${darkMode ? ' bg-neutral-600 ' : ' bg-zinc-500 '}`}>
            <div className="flex items-center mb-2">
                <img className=" h-10 mr-6" src={pakaian_icon} alt="run Icon" />
                <div className="text-white font-poppins text-md lg:text-xl">Pakaian</div>
            </div>
          <div className="flex items-center justify-end ml-auto h-auto">
            <div className="mr-4 text-white font-poppins text-right text-sm lg:text-xl">{pakaian}</div>
            <div className="rounded-full h-4 w-4 mr-2 bg-red-500"></div>
          </div>
          {accordionState.pakaian && (
            <div className="text-white font-poppins text-md lg:text-xl mt-2">
              {dpakaian}
            </div>
          )}
          <button
            className="mt-2 text-yellow-500"
            onClick={() => toggleAccordion('pakaian')}
          >
            {accordionState.pakaian ? 'Hide Details' : 'Show Details'}
          </button>
        </div>

        {/* List 5 */}
        <div className={`bg-neutral-700 p-4 m-2 rounded-3xl flex flex-col justify-between items-center ${darkMode ? ' bg-neutral-600 ' : ' bg-zinc-500 '}`}>
            <div className="flex items-center mb-2">
                <img className=" h-10 mr-6" src={temp_icon} alt="run Icon" />
                <div className="text-white font-poppins text-md lg:text-xl">Sengatan Panas</div>
            </div>
          <div className="flex items-center justify-end ml-auto w-1/3 h-auto">
            <div className="mr-4 text-white font-poppins text-left text-sm lg:text-xl">{sengatanPanas}</div>
            <div className={`rounded-full h-4 w-4 mr-2 ${indeksUV === 'Rendah' ? 'bg-green-500' : indeksUV === 'Sedang' ? 'bg-yellow-500' : 'bg-red-500'}`}></div>
          </div>
          {accordionState.sengatanPanas && (
            <div className="text-white font-poppins text-md lg:text-xl mt-2">
              {dsengatanPanas}
            </div>
          )}
          <button
            className="mt-2 text-yellow-500"
            onClick={() => toggleAccordion('sengatanPanas')}
          >
            {accordionState.sengatanPanas ? 'Hide Details' : 'Show Details'}
          </button>
        </div>

        {/* List 6 */}
        <div className={`bg-neutral-700 p-4 m-2 rounded-3xl flex flex-col justify-between items-center ${darkMode ? ' bg-neutral-600 ' : ' bg-zinc-500 '}`}>
            <div className="flex items-center mb-2">
                <img className=" h-10 mr-6" src={temp_icon} alt="run Icon" />
                <div className="text-white font-poppins text-md lg:text-xl">Angin Dingin</div>
            </div>
          <div className="flex items-center justify-end ml-auto w-1/3 h-auto">
            <div className="mr-4 text-white font-poppins text-left text-sm lg:text-xl">{anginDingin}</div>
            <div className={`rounded-full h-4 w-4 mr-2 ${indeksUV === 'Ekstrem' ? 'bg-red-500' : 'bg-green-500'}`}></div>
          </div>
          {accordionState.anginDingin && (
            <div className="text-white font-poppins text-md lg:text-xl mt-2">
              {danginDingin}
            </div>
          )}
          <button
            className="mt-2 text-yellow-500"
            onClick={() => toggleAccordion('anginDingin')}
          >
            {accordionState.anginDingin ? 'Hide Details' : 'Show Details'}
          </button>
        </div>
      </div>
    </div>
  );
}
