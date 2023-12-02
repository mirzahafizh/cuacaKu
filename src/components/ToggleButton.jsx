import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ToggleButton({ darkMode, setDarkMode }) {
    return (
        <button
            onClick={() => {
                setDarkMode(!darkMode);
            }}
            className="flex items-center justify-center w-20 h-10 bg-gray-300 rounded-full p-1 focus:outline-none"
        >
            <div className={`w-8 h-8 bg-white rounded-full shadow-md transform duration-300 ease-in-out flex items-center justify-center ${darkMode ? 'translate-x-5' : 'translate-x-[-20px]'}`}>
                <FontAwesomeIcon icon={darkMode ? faMoon : faSun} className={`text-yellow-500 text-lg ${darkMode ? 'ml-3' : 'mr-2'}`} />
            </div>
        </button>
    );
}
