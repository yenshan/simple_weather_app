import { useState, useEffect } from 'react'
import { getPrefectureData } from './prefectures.js';
import './WeatherDisplay.css'

const initial_weather_info = {
  weather_code: 0,
  temperature: '',
  today_temperature_max: 0,
  today_temperature_min: 0,
}

function getOpenMetroAPI(params) {
    let url = "https://api.open-meteo.com/v1/forecast?"
    url += `latitude=${params.latitude}`;
    url += `&longitude=${params.longitude}`;
    url += "&daily=" + params.daily.join(',');
    url += "&current=" + params.current.join(',');
    return url;
}

export function WeatherDisplay({prefecture}) {
  const [weather, setWeather] = useState(initial_weather_info);

  useEffect(()=>{
    const pinfo = getPrefectureData(prefecture);
    const params = {
        latitude: pinfo.lat,
        longitude: pinfo.lon,
        daily: ["temperature_2m_max", "temperature_2m_min"],
        current: ["weather_code", "temperature_2m"],
    }

    // Open-Meteo API エンドポイント
    const url = getOpenMetroAPI(params);
    console.log(`url = ${url}`);

    // APIからデータを取得
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        const today = new Date().toISOString().split("T")[0];
        const idx = data.daily.time.indexOf(today);
        setWeather({
            weather_code: data.current.weather_code,
            temperature: data.current.temperature_2m,
            today_temperature_max: data.daily.temperature_2m_max[idx],
            today_temperature_min: data.daily.temperature_2m_min[idx],
        });
      })
  },[prefecture]);

  return (
    <div className="weatherDisplay">
      <section>
        <img 
          src={"./weather_icons/" + weather_conditions[weather.weather_code].img +".png"} 
          width={100}
        />
        <label className="temperature">{weather.temperature}°C</label>
      </section>
      <section className="description">
        <p>{weather_conditions[weather.weather_code].description}</p>
      </section>
      <section>
        <p className="status">
          <label className="statusTitle">High</label>
          <label>{weather.today_temperature_max}°C</label>
        </p>
        <p className="status">
          <label className="statusTitle">Low</label>
          <label>{weather.today_temperature_min}°C</label>
        </p>
      </section>
    </div>
  )
}

const weather_conditions = {
  0: { description: "Clear sky", img: "01_0_clear_sky" },
  1: { description: "Mainly clear", img: "02_1_2_3_cloud_variants" },
  2: { description: "Partly cloudy", img: "03_cloud" },
  3: { description: "Overcast", img: "03_cloud" },
  45: { description: "Fog", img: "04_45_48_fog" },
  48: { description: "Depositing rime fog", img: "04_45_48_fog" },
  51: { description: "Drizzle: Light intensity", img: "05_drizzle" },
  53: { description: "Drizzle: Moderate intensity", img: "05_drizzle" },
  55: { description: "Drizzle: Dense intensity", img: "05_drizzle" },
  56: { description: "Freezing Drizzle: Light intensity", img: "06_freezing_drizzle" },
  57: { description: "Freezing Drizzle: Dense intensity", img: "06_freezing_drizzle" },
  61: { description: "Rain: Slight intensity", img: "07_61_63_65_rain" },
  63: { description: "Rain: Moderate intensity", img: "07_61_63_65_rain" },
  65: { description: "Rain: Heavy intensity", img: "07_61_63_65_rain" },
  66: { description: "Freezing Rain: Light intensity", img: "07_61_63_65_rain" },
  67: { description: "Freezing Rain: Heavy intensity", img: "07_61_63_65_rain" },
  71: { description: "Snow fall: Slight intensity", img: "08_71_73_75_snow" },
  73: { description: "Snow fall: Moderate intensity", img: "08_71_73_75_snow" },
  75: { description: "Snow fall: Heavy intensity", img: "08_71_73_75_snow" },
  77: { description: "Snow grains", img: "09_77_snow_grains" },
  80: { description: "Rain showers: Slight", img: "10_80_81_82_rain_showers" },
  81: { description: "Rain showers: Moderate", img: "10_80_81_82_rain_showers" },
  82: { description: "Rain showers: Violent", img: "10_80_81_82_rain_showers" },
  85: { description: "Snow showers: Slight", img: "11_85_86_snow_showers" },
  86: { description: "Snow showers: Heavy", img: "11_85_86_snow_showers" },
  95: { description: "Thunderstorm: Slight or moderate", img: "16_95_96_99_thunder" },
  96: { description: "Thunderstorm with slight hail", img: "16_95_96_99_thunder" },
  99: { description: "Thunderstorm with heavy hail", img: "16_95_96_99_thunder" },
};
