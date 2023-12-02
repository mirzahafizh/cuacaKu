import uv1_icon from '../assets/UV1.png';
import pakaian_icon from '../assets/pakaian.png';
import payung_icon from '../assets/payung.png';
import run_icon from '../assets/run.png';
import temp_icon from '../assets/temp.png';

function rekomendasiPakaian(uvIndex) {
    let payung = '';
    let luarRuangan = '';
    let indeksUV = '';
    let pakaian = '';
    let sengatanPanas = '';
    let anginDingin = '';

    if (uvIndex >= 0 && uvIndex <= 2) {
        payung = 'Diperlukan';
        luarRuangan = 'Aman';
        indeksUV = 'Rendah';
        pakaian = 'Gunakan pakaian yang nyaman dan berlapis';
        sengatanPanas = 'Aman';
        anginDingin = 'Ekstrem';
    } else if (uvIndex >= 3 && uvIndex <= 5) {
        indeksUV = 'Sedang';
        payung = 'Diperlukan';
        luarRuangan = 'Kurang';
        sengatanPanas = 'Bahaya';
        anginDingin = 'Aman';
        pakaian = 'Gunakan pakaian yang nyaman, berlapis, dan pelindung';
    } else if (uvIndex >= 6 && uvIndex <= 7) {
        indeksUV = 'Tinggi';
        payung = 'Diperlukan';
        luarRuangan = 'Sangat Kurang';
        sengatanPanas = 'Bahaya';
        anginDingin = 'Aman';
        pakaian = 'Gunakan pakaian yang nyaman, berlapis, dan pelindung';
    } else if (uvIndex >= 8 && uvIndex <= 10) {
        indeksUV = 'Sangat Tinggi';
        payung = 'Diperlukan';
        luarRuangan = 'Sangat Kurang';
        sengatanPanas = 'Bahaya';
        anginDingin = 'Aman';
        pakaian = 'Gunakan pakaian yang nyaman, berlapis, pelindung, dan hindari pakaian gelap';
    } else if (uvIndex >= 11) {
        indeksUV = 'Ekstrem';
        payung = 'Diperlukan';
        luarRuangan = 'Sangat Kurang';
        sengatanPanas = 'Bahaya';
        anginDingin = 'Ekstrem';
        pakaian = 'Gunakan pakaian yang nyaman, berlapis, pelindung, dan hindari pakaian gelap serta topi ';
    }
    

    return {
        payung,
        luarRuangan,
        indeksUV,
        pakaian,
        sengatanPanas,
        anginDingin
    };
}

export default function KontenSix({ currentWeather, darkMode }) {
    const uvIndex = currentWeather.uvIndex || 0;

    const {
        payung,
        luarRuangan,
        indeksUV,
        pakaian,
        sengatanPanas,
        anginDingin
    } = rekomendasiPakaian(uvIndex);

    return (
        <div className="kontenSix">
            <div className="flex flex-col w-auto justify-between lg:flex-row max-w-5xl mx-auto gap-4 w-auto">
                <div className="w-full h-[850px] relative mt-[20px] mb-24 shadow-xl">
                    <div className={`w-full h-[850px] left-0 top-[16px] absolute shadow-xl shadow-black rounded-[30px] ${darkMode ? 'bg-neutral-600 ' : 'bg-zinc-400'}`}>
                        {/* Rest of your code remains unchanged */}
                        <button
                            className="w-[50%] sm:w-[50%] md:w-[40%] lg:w-[30%] xl:w-[24%] h-[40px] absolute right-[20px] top-[20px] bg-fuchsia-950 bg-opacity-40 text-white rounded-3xl font-semibold"
                            onClick={() => {
                                console.log('Button Clicked!');
                            }}
                        >
                            Lihat prakiraan lengkapnya<span className="ml-2">&#62;</span>
                        </button>
                        <div className="flex mt-10">
                        <div className="w-[90%] mt-10 ml-4 mx-auto">
                            {/* List 1 */}
                            <div className="bg-neutral-700 p-4 mb-4 rounded-3xl flex justify-between items-center">
                                <div className="flex items-center mb-2">
                                    <img className="w-10 h-10 mr-6" src={payung_icon} alt="payung Icon" />
                                    <div className="text-white font-poppins text-sm">Payung</div>
                                </div>
                                <div className="flex items-center">
                                    <div className="mr-4 text-white font-poppins text-sm">{payung}</div> {/* Menambahkan ukuran font yang sedikit lebih besar */}
                                    <div className={`rounded-full h-4 w-4 mr-2 ${indeksUV === 'Rendah' ? 'bg-green-500' : indeksUV === 'Sedang' ? 'bg-yellow-500' : 'bg-red-500'}`}></div> {/* Bulatan hijau */}
                                </div>
                            </div>
                            {/* List 2 */}
                            <div className="bg-neutral-700 p-4 mb-4 rounded-3xl flex justify-between items-center">
                                <div className="flex items-center mb-2">
                                    <img className="w-10 h-10 mr-6" src={run_icon} alt="run Icon" />
                                    <div className="text-white font-poppins text-sm">Luar Ruangan</div>
                                </div>
                                <div className="flex items-center">
                                    <div className="mr-4 text-white font-poppins text-sm">{luarRuangan}</div> {/* Menambahkan ukuran font yang sedikit lebih besar */}
                                    <div className="rounded-full h-4 w-4 mr-2 bg-red-500"></div> {/* Bulatan hijau */}
                                </div>
                            </div>

                            {/* List 3 */}
                            <div className="bg-neutral-700 p-4 mb-4 rounded-3xl flex justify-between items-center">
                                <div className="flex items-center mb-2">
                                    <img className="w-10 h-10 mr-6" src={uv1_icon} alt="payung Icon" />
                                    <div className="text-white font-poppins text-sm">Indeks UV</div>
                                </div>
                                <div className="flex items-center">
                                    <div className="mr-4 text-white font-poppins text-sm">{indeksUV}</div> {/* Menambahkan ukuran font yang sedikit lebih besar */}
                                    <div className={`rounded-full h-4 w-4 mr-2 ${indeksUV === 'Rendah' ? 'bg-green-500' : indeksUV === 'Sedang' ? 'bg-yellow-500' : 'bg-red-500'}`}></div> {/* Bulatan hijau */}
                                </div>
                            </div>

                            {/* List 4 */}
                            <div className="bg-neutral-700 p-4 mb-4 rounded-3xl flex justify-between items-center">
                                <div className="flex items-center mb-2">
                                    <img className="w-10 h-10 mr-6" src={pakaian_icon} alt="payung Icon" />
                                    <div className="text-white font-poppins text-sm">Pakaian</div>
                                </div>
                                <div className="flex items-center">
                                    <div className="mr-4 ml-10 text-white font-poppins text-sm">{pakaian}</div> {/* Menambahkan ukuran font yang sedikit lebih besar */}
                                    <div className={`rounded-full h-4 w-4 mr-2 ${indeksUV === 'Rendah' ? 'bg-green-500' : indeksUV === 'Sedang' ? 'bg-yellow-500' : 'bg-red-500'}`}></div> {/* Bulatan hijau */}
                                </div>
                            </div>

                            {/* List 5 */}
                            <div className="bg-neutral-700 p-4 mb-4 rounded-3xl flex justify-between items-center">
                                <div className="flex items-center mb-2">
                                    <img className="w- h-10 mr-10 ml-3" src={temp_icon} alt="payung Icon" />
                                    <div className="text-white font-poppins text-sm">Sengatan Panas</div>
                                </div>
                                <div className="flex items-center">
                                    <div className="mr-4 text-white font-poppins text-sm">{sengatanPanas}</div> {/* Menambahkan ukuran font yang sedikit lebih besar */}
                                    <div className={`rounded-full h-4 w-4 mr-2 ${indeksUV === 'Rendah' ? 'bg-green-500' : indeksUV === 'Sedang' ? 'bg-yellow-500' : 'bg-red-500'}`}></div> {/* Bulatan hijau */}
                                </div>
                            </div>

                            {/* List 6 */}
                            <div className="bg-neutral-700 p-4 mb-4 rounded-3xl flex justify-between items-center">
                                <div className="flex items-center mb-2">
                                    <img className="w- h-10 mr-10 ml-3" src={temp_icon} alt="payung Icon" />
                                    <div className="text-white font-poppins text-sm">Angin Dingin</div>
                                </div>
                                <div className="flex items-center">
                                    <div className="mr-4 text-white font-poppins text-sm">{anginDingin}</div> {/* Menambahkan ukuran font yang sedikit lebih besar */}
                                    <div className={`rounded-full h-4 w-4 mr-2 ${indeksUV === 'Rendah' ? 'bg-green-500' : indeksUV === 'Sedang' ? 'bg-yellow-500' : 'bg-red-500'}`}></div> {/* Bulatan hijau */}
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}