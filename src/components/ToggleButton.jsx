import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ToggleButton({ darkMode, setDarkMode }) {
    return (
        <button
            onClick={() => {
                setDarkMode(!darkMode);
            }}
            className="flex items-center justify-center w-14 h-11 bg-gray-300 rounded-full p-1 focus:outline-none md:w-20 md:h-10 mt-4"
        >
            <div className={`w-6 h-6 md:w-8 md:h-8 bg-white rounded-full shadow-md transform duration-300 ease-in-out flex items-center justify-center ${darkMode ? 'translate-x-3' : 'translate-x-[-12px]'}`}>
                <FontAwesomeIcon icon={darkMode ? faMoon : faSun} className={`text-yellow-500 text-sm md:text-lg ${darkMode ? 'ml-2' : 'mr-1'}`} />
            </div>
        </button>
    );
}
