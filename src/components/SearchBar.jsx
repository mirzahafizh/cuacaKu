import search_icon from '../assets/search.png';
export default function SearchBar({searchTerm,handleInputChange,handleKeyPress,handleSearch}){


    return(
    <div className="flex  items-center justify-center space-x-4">
            <input
                type="text"
                className="cityInput border border-gray-300 rounded-full px-4 py-2"
                placeholder="search"
                value={searchTerm}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}  // Add this line to handle 'Enter' key press
            />
            <div className="search-icon" onClick={() => handleSearch(searchTerm)} style={{ cursor: 'pointer' }}>
                <img src={search_icon} alt="Search Icon" className="w-6 h-6 text-white" />
            </div>
        </div>
    )
}
