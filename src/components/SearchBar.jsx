import search_icon from '../assets/search.png';
export default function SearchBar({searchTerm,handleInputChange,handleKeyPress,handleSearch}){


    return(
<div className="flex items-center border border-gray-300 bg-white rounded-full px-4 py-2 shadow-md">
    <div onClick={() => handleSearch(searchTerm)} style={{ cursor: 'pointer' }}>
        <img src={search_icon} alt="Search Icon" className="w-6 h-6 text-white" />
    </div>
    <input
        type="text"
        className="pl-4 flex-grow focus:outline-none"
        placeholder="Search"
        value={searchTerm}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
    />
</div>



    )
}