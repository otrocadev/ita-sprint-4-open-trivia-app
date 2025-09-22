export type WeatherInfo = {
  current: {
    interval: number
    is_day: number
    rain: number
    snowfall: number
    temperature_2m: number
    time: string
  }
  current_units: {
    interval: string
    is_day: string
    rain: string
    snowfall: string
    temperature_2m: string
    time: string
  }
  elevation: number
  generationtime_ms: number
  latitude: number
  longitude: number
  timezone: string
  timezone_abbreviation: string
  utc_offset_seconds: number
}

export type CurrentWeatherInfo = {
  is_day: number
  rain: number
  snowfall: number
  temperature: number
}
