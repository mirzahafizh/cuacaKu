export default function KontenLima(currentWeather) {
    return(
        <div className="name-content">
            <div className="w-[250px] h-[40px] left-[20px] relative mt-[20px] shadow-xl ml-[80px] flex items-center text-center">
                <div className="w-[250px] h-[40px] left-[20px] top-[16px] absolute bg-fuchsia-950 bg-opacity-40 rounded-[11px]" />
                    <div className="absolute inset-y-0 left-[20px] top-[16px] w-full h-full flex items-center justify-center text-white font-bold text-xl">
                        Prakiraan Cuaca
                    </div>
                </div>
        </div>
        )
}
