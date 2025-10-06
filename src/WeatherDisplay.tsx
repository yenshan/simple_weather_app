import { useState, useEffect } from 'react'
import type { Prefecture } from './prefectures';
import { getPrefectureData } from './prefectures';
import { weather_conditions } from './weather_conditions';
import './WeatherDisplay.css'

export type WebAPIParams = {
  latitude: number | undefined,
  longitude: number | undefined,
  daily: Array<string>,
  current: Array<string>,
}

type WeatherInfo = {
  weather_code: number;
  temperature: number;
  today_temperature_max: number;
  today_temperature_min: number;
};

const initial_weather_info: WeatherInfo = {
  weather_code: 0,
  temperature: 0,
  today_temperature_max: 0,
  today_temperature_min: 0,
}

function getOpenMetroAPI(params: WebAPIParams): string {
    // Open-Meteo API エンドポイント
    let url = "https://api.open-meteo.com/v1/forecast?"
    url += `latitude=${params.latitude}`;
    url += `&longitude=${params.longitude}`;
    url += "&daily=" + params.daily.join(',');
    url += "&current=" + params.current.join(',');
    return url;
}

export function WeatherDisplay({prefecture}: {prefecture:string}) {
  const [weather, setWeather] = useState<WeatherInfo>(initial_weather_info);

  useEffect(()=>{
    const pinfo: Prefecture | undefined = getPrefectureData(prefecture);
    const params: WebAPIParams = {
        latitude: pinfo?.lat,
        longitude: pinfo?.lon,
        daily: ["temperature_2m_max", "temperature_2m_min"],
        current: ["weather_code", "temperature_2m"],
    }

    const url = getOpenMetroAPI(params);

    // APIからデータを取得
    fetch(url)
      .then(response => response.json())
      .then(data => {
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

