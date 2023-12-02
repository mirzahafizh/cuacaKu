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
        pakaian = 'Gunakan pakaian yang nyaman, berlapis, pelindung, ';
    } else if (uvIndex >= 11) {
        indeksUV = 'Ekstrem';
        payung = 'Diperlukan';
        luarRuangan = 'Sangat Kurang';
        sengatanPanas = 'Bahaya';
        anginDingin = 'Ekstrem';
        pakaian = 'Gunakan pakaian yang nyaman, berlapis, serta topi ';
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
    // Misalnya, uvIndex diperoleh dari prop currentWeather
    const uvIndex = currentWeather.uvIndex || 0;

    // Mendapatkan rekomendasi pakaian berdasarkan uvIndex
    const {
        payung,
        luarRuangan,
        indeksUV,
        pakaian,
        sengatanPanas,
        anginDingin
    } = rekomendasiPakaian(uvIndex);


    return (
        <div className={` mt-4  max-w-8xl mx-auto shadow-xl shadow-black rounded-[30px] ${darkMode ? ' bg-neutral-600 ' : ' bg-zinc-400'}`}>

            <div className='flex flex-col p-2 '>
                <div className="bg-neutral-700 p-4 m-2 rounded-3xl flex justify-between items-center">
                    <div className="flex items-center mb-2">
                        <img className="w-10 h-10 mr-6" src={payung_icon} alt="payung Icon" />
                        <div className="text-white font-poppins text-md lg:text-xl">Payung</div>
                    </div>
                    <div className="flex items-center">
                        <div className="mr-4 text-white font-poppins text-md lg:text-xl">{payung}</div> {/* Menambahkan ukuran font yang sedikit lebih besar */}
                        <div className={`rounded-full h-4 w-4 mr-2 ${indeksUV === 'Rendah' ? 'bg-green-500' : indeksUV === 'Sedang' ? 'bg-yellow-500' : 'bg-red-500'}`}></div> {/* Bulatan hijau */}
                    </div>
                </div>

                {/* List 2 */}
                <div className="bg-neutral-700 p-4 m-2 rounded-3xl flex justify-between items-center">
                    <div className="flex items-center mb-2">
                        <img className="w-10 h-10 mr-6" src={run_icon} alt="run Icon" />
                        <div className="text-white font-poppins text-md lg:text-xl">Luar Ruangan</div>
                    </div>
                    <div className="flex items-center">
                        <div className="mr-4 text-white font-poppins text-md lg:text-xl">{luarRuangan}</div> {/* Menambahkan ukuran font yang sedikit lebih besar */}
                        <div className="rounded-full h-4 w-4 mr-2 bg-red-500"></div> {/* Bulatan hijau */}
                    </div>
                </div>

                {/* List 3 */}
                <div className="bg-neutral-700 p-4 m-2 rounded-3xl flex justify-between items-center">
                    <div className="flex items-center mb-2">
                        <img className="w-10 h-10 mr-6" src={uv1_icon} alt="payung Icon" />
                        <div className="text-white font-poppins text-md lg:text-xl">Indeks UV</div>
                    </div>
                    <div className="flex items-center">
                        <div className="mr-4 text-white font-poppins text-md lg:text-xl">{indeksUV}</div> {/* Menambahkan ukuran font yang sedikit lebih besar */}
                        <div className={`rounded-full h-4 w-4 mr-2 ${indeksUV === 'Rendah' ? 'bg-green-500' : indeksUV === 'Sedang' ? 'bg-yellow-500' : 'bg-red-500'}`}></div> {/* Bulatan hijau */}
                    </div>
                </div>

                {/* List 4 */}
                <div className="bg-neutral-700 p-4 m-2 rounded-3xl flex justify-between items-center">
                    <div className="flex items-center mb-2 w-1/2">
                        <img className="w-10 h-10 mr-6" src={pakaian_icon} alt="payung Icon" />
                        <div className="text-white font-poppins text-md lg:text-xl">Pakaian</div>
                    </div>
                    <div className="flex items-center h-auto ">
                        <div className="mr-1 text-white  font-poppins text-sm lg:text-xl">{pakaian}</div> {/* Menambahkan ukuran font yang sedikit lebih besar */}
                        <div className={`rounded-full h-4 w-4 mr-2 ${indeksUV === 'Rendah' ? 'bg-green-500' : indeksUV === 'Sedang' ? 'bg-yellow-500' : 'bg-red-500'}`}></div> {/* Bulatan hijau */}
                    </div>
                </div>

                {/* List 5 */}
                <div className="bg-neutral-700 p-4 m-2 rounded-3xl flex justify-between items-center">
                    <div className="flex items-center mb-2">
                        <img className="w- h-10 mr-10 ml-3" src={temp_icon} alt="payung Icon" />
                        <div className="text-white font-poppins text-xl">Sengatan Panas</div>
                    </div>
                    <div className="flex items-center">
                        <div className="mr-4 text-white font-poppins text-xl">{sengatanPanas}</div> {/* Menambahkan ukuran font yang sedikit lebih besar */}
                        <div className={`rounded-full h-4 w-4 mr-2 ${indeksUV === 'Rendah' ? 'bg-green-500' : indeksUV === 'Sedang' ? 'bg-yellow-500' : 'bg-red-500'}`}></div> {/* Bulatan hijau */}
                    </div>
                </div>

                {/* List 6 */}
                <div className="bg-neutral-700 p-4 m-2 rounded-3xl flex justify-between items-center">
                    <div className="flex items-center mb-2">
                        <img className="w- h-10 mr-10 ml-3" src={temp_icon} alt="payung Icon" />
                        <div className="text-white font-poppins text-xl">Angin Dingin</div>
                    </div>
                    <div className="flex items-center">
                        <div className="mr-4 text-white font-poppins text-xl">{anginDingin}</div> {/* Menambahkan ukuran font yang sedikit lebih besar */}
                        <div className={`rounded-full h-4 w-4 mr-2 ${indeksUV === 'Rendah' ? 'bg-green-500' : indeksUV === 'Sedang' ? 'bg-yellow-500' : 'bg-red-500'}`}></div> {/* Bulatan hijau */}
                    </div>
                </div>

            </div>
        </div>
    );

}