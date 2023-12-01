import { useState } from 'react';
import WeatherApp from './pages/WeatherApp.jsx';

function App() {
  const [darkMode, setDarkMode] = useState(true)
  return (
      <WeatherApp darkMode={darkMode} setDarkMode={setDarkMode}/>
  );
}

export default App
