import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WeatherApp from './pages/WeatherApp.jsx';
import Rekomendasi from './pages/KesehatanKeselamatan.jsx';
import Aktifitas from './pages/Aktifitas.jsx';

function App() {
  const [darkMode, setDarkMode] = useState(true)
  return (
      // <WeatherApp darkMode={darkMode} setDarkMode={setDarkMode}/>
      <Router>
        <Routes>
          <Route path='/' element={<WeatherApp darkMode={darkMode} setDarkMode={setDarkMode}/>} />
          <Route path='/Rekomendasi' element={<Rekomendasi darkMode={darkMode} setDarkMode={setDarkMode}/>}/>
          <Route path='/Aktifitas' element={<Aktifitas darkMode={darkMode} setDarkMode={setDarkMode}/>}/>
        </Routes>
      </Router>
  );
}

export default App