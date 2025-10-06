export type WeatherCondition = {
  description: string;
  img: string;
};

export const weather_conditions: Record<number, WeatherCondition> = {
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
