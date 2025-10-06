import { useState, useEffect } from 'react'
import { prefecturesData } from './prefectures.js';
import { WeatherDisplay } from './WeatherDisplay.js';
import './App.css'

function App() {
  const [selPrefecture, setSelPrefecture] = useState("東京都");

  function handleSelectChange(e) {
    console.log(e.target.value);
    setSelPrefecture(e.target.value);
  }

  return (
    <div className="weather">
      <h1>Weather</h1>
      <select
        className="prefectureSelector"
        name="prefectures"
        value={selPrefecture}
        onChange={handleSelectChange}
      >
        {prefecturesData.map(p => {
          return (
            <option key={p.name} value={p.name}>
              {p.name}
            </option>
          )
        })}
      </select>
      <WeatherDisplay prefecture={selPrefecture} />
    </div>
  );
}


export default App
