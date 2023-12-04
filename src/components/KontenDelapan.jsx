import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import mendaki_icon from '../assets/mendaki.png';
import piknin_icon from '../assets/piknik.png';
import bintang_icon from '../assets/telescop.png';
import run_icon from '../assets/run.png';
import sepeda_icon from '../assets/sepeda.png';
import kebun_icon from '../assets/kebun.png';
import recommendationsData from '../data/pakaianRecommendations.json';

function rekomendasiPakaian(uvIndex) {
  const recommendation = recommendationsData.recommendations.find(
    (range) => uvIndex >= range.uvIndexRange[0] && uvIndex <= range.uvIndexRange[1]
  );

  if (recommendation) {
    return {
        indeksUV: recommendation.indeksUV,
        mendaki: recommendation.mendaki,
        lari: recommendation.lari,
        piknik: recommendation.piknik,
        melihatBintang: recommendation.melihatBintang,
        bersepeda: recommendation.bersepeda,
        berkebun: recommendation.berkebun,
        dindeksUV: recommendation.dindeksUV,
        dmendaki: recommendation.dmendaki,
        dlari: recommendation.dlari,
        dpiknik: recommendation.dpiknik,
        dmelihatBintang: recommendation.dmelihatBintang,
        dbersepeda: recommendation.dbersepeda,
        dberkebun: recommendation.dberkebun
    };
  }

  return {
    indeksUV: '',
    mendaki : '',
    lari : '',
    piknik : '',
    melihatBintang :'' ,
    bersepeda : '',
    berkebun: '', 
    dindeksUV: '',
    dmendaki: '',
    dlari: '',
    dpiknik: '',
    dmelihatBintang: '',
    dbersepeda: '',
    dberkebun: ''
    
  };
}

export default function KontenDelapan({ currentWeather, darkMode }) {
  const uvIndex = currentWeather.uvIndex || 0;
  const {
    indeksUV,
    mendaki,
    lari,
    piknik,
    melihatBintang,
    bersepeda,
    berkebun,
    dindeksUV,
    dmendaki,
    dlari,
    dpiknik,
    dmelihatBintang,
    dbersepeda,
    dberkebun
  } = rekomendasiPakaian(uvIndex);

  const [accordionState, setAccordionState] = useState({
    indeksUV: false,
    mendaki: false,
    lari: false,
    piknik: false,
    melihatBintang: false,
    bersepeda: false,
    berkebun: false,
    dindeksUV: false,
    dmendaki: false,
    dlari: false,
    dpiknik: false,
    dmelihatBintang: false,
    dbersepeda: false,
    dberkebun: false
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
              navigate('/Rekomendasi');
              console.log('Button Clicked!');
            }}
          >
            Kesehatan & Keselamatan<span className="ml-2">&#62;</span>
          </button>
        </div>

        {/* List 1 */}
        <div className={`p-4 m-2 rounded-3xl flex flex-col justify-between items-center ${darkMode ? ' bg-neutral-700 ' : ' bg-zinc-500 '}`}>
            <div className="flex items-center mb-2">
                <img className=" h-10 mr-6 filter invert" src={mendaki_icon} alt="run Icon" />
                <div className="text-white font-poppins text-md lg:text-xl">Mendaki</div>
            </div>
          <div className="flex items-center justify-end ml-auto w-1/3 h-auto">
            <div className="mr-4 text-white font-poppins text-left text-sm lg:text-xl">{mendaki}</div>
            <div className={`rounded-full h-4 w-4 mr-2 ${indeksUV === 'Rendah' ? 'bg-green-500' : indeksUV === 'Sedang' ? 'bg-yellow-500' : 'bg-red-500'}`}></div>
          </div>
          {accordionState.payung && (
            <div className="text-white font-poppins text-md lg:text-xl mt-2">
                {dmendaki}
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
        <div className={`p-4 m-2 rounded-3xl flex flex-col justify-between items-center ${darkMode ? ' bg-neutral-700 ' : ' bg-zinc-500 '}`}>
            <div className="flex items-center mb-2">
                <img className=" h-10 mr-6" src={run_icon} alt="run Icon" />
                <div className="text-white font-poppins text-md lg:text-xl">Lari</div>
            </div>
          <div className="flex items-center justify-end ml-auto w-1/3 h-auto">
            <div className="mr-4 text-white font-poppins text-left text-sm lg:text-xl">{lari}</div>
            <div className="rounded-full h-4 w-4 mr-2 bg-red-500"></div>
          </div>
          {accordionState.luarRuangan && (
            <div className="text-white font-poppins text-md lg:text-xl mt-2">
              {dlari}
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
        <div className={`p-4 m-2 rounded-3xl flex flex-col justify-between items-center ${darkMode ? ' bg-neutral-700 ' : ' bg-zinc-500 '}`}>
            <div className="flex items-center mb-2">
                <img className=" h-10 mr-6 filter invert" src={piknin_icon} alt="run Icon" />
                <div className="text-white font-poppins text-md lg:text-xl">Piknik</div>
            </div>
          <div className="flex items-center justify-end ml-auto w-1/3 h-auto">
            <div className="mr-4 text-white font-poppins text-left text-sm lg:text-xl">{piknik}</div>
            <div className={`rounded-full h-4 w-4 mr-2 ${indeksUV === 'Rendah' ? 'bg-green-500' : indeksUV === 'Sedang' ? 'bg-yellow-500' : 'bg-red-500'}`}></div>
          </div>
          {accordionState.indeksUV && (
            <div className="text-white font-poppins text-md lg:text-xl mt-2">
              {dpiknik}
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
        <div className={`p-4 m-2 rounded-3xl flex flex-col justify-between items-center ${darkMode ? ' bg-neutral-700 ' : ' bg-zinc-500 '}`}>
            <div className="flex items-center mb-2">
                <img className=" h-10 mr-6 filter invert" src={bintang_icon} alt="run Icon" />
                <div className="text-white font-poppins text-md lg:text-xl">Melihat Bintang</div>
            </div>
          <div className="flex items-center justify-end ml-auto h-auto">
            <div className="mr-4 text-white font-poppins text-right text-sm lg:text-xl">{melihatBintang}</div>
            <div className="rounded-full h-4 w-4 mr-2 bg-red-500"></div>
          </div>
          {accordionState.pakaian && (
            <div className="text-white font-poppins text-md lg:text-xl mt-2">
              {dmelihatBintang}
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
        <div className={`p-4 m-2 rounded-3xl flex flex-col justify-between items-center ${darkMode ? ' bg-neutral-700 ' : ' bg-zinc-500 '}`}>
            <div className="flex items-center mb-2">
                <img className=" h-10 mr-6 filter invert" src={sepeda_icon} alt="run Icon" />
                <div className="text-white font-poppins text-md lg:text-xl">Bersepeda</div>
            </div>
          <div className="flex items-center justify-end ml-auto w-1/3 h-auto">
            <div className="mr-4 text-white font-poppins text-left text-sm lg:text-xl">{bersepeda}</div>
            <div className={`rounded-full h-4 w-4 mr-2 ${indeksUV === 'Rendah' ? 'bg-green-500' : indeksUV === 'Sedang' ? 'bg-yellow-500' : 'bg-red-500'}`}></div>
          </div>
          {accordionState.sengatanPanas && (
            <div className="text-white font-poppins text-md lg:text-xl mt-2">
              {dbersepeda}
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
        <div className={`p-4 m-2 rounded-3xl flex flex-col justify-between items-center ${darkMode ? ' bg-neutral-700 ' : ' bg-zinc-500 '}`}>
            <div className="flex items-center mb-2">
                <img className=" h-10 mr-6 filter invert" src={kebun_icon} alt="run Icon" />
                <div className="text-white font-poppins text-md lg:text-xl">Berkebun</div>
            </div>
          <div className="flex items-center justify-end ml-auto w-1/3 h-auto">
            <div className="mr-4 text-white font-poppins text-left text-sm lg:text-xl">{berkebun}</div>
            <div className={`rounded-full h-4 w-4 mr-2 ${indeksUV === 'Ekstrem' ? 'bg-red-500' : 'bg-green-500'}`}></div>
          </div>
          {accordionState.anginDingin && (
            <div className="text-white font-poppins text-md lg:text-xl mt-2">
              {dberkebun}
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
