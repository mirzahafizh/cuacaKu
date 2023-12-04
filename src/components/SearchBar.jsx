import search_icon from '../assets/search.png';

export default function SearchBar({ searchTerm, handleInputChange, handleKeyPress, handleSearch }) {
    return (
        <div className="flex flex-col items-center justify-center space-y-4  md:flex-row md:space-x-4">
            <div className="relative w-full md:w-full">
                <input
                    type="text"
                    className="cityInput border border-gray-300 rounded-full px-4 py-2 w-full md:w-96 pl-10"  // Menambahkan padding kiri untuk menyisipkan ruang ikon
                    placeholder="Search"
                    value={searchTerm}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                />
                <div className="search-icon absolute right-3 top-1/2 transform -translate-y-1/2" onClick={() => handleSearch(searchTerm)} style={{ cursor: 'pointer' }}>
                    <img src={search_icon} alt="Search Icon" className="w-6 h-6 text-white" />
                </div>
            </div>
        </div>
    );
}
