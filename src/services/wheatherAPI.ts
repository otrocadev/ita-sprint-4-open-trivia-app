import { fetchAPI } from './fetchAPI'
import { getLocation } from './getLocation'
import type { WeatherInfo } from 'src/types/weatherInfoTypes'

const OPEN_METEO_API_BASE_URL = import.meta.env.PUBLIC_OPEN_METEO_API
const params = 'current=is_day,rain,temperature_2m,snowfall'

export const getCurrentWeather = async () => {
  try {
    const { latitude, longitude } = await getLocation()
    const currentWeatherEndpoint = `${OPEN_METEO_API_BASE_URL}?latitude=${latitude}&longitude=${longitude}&${params}`
    const currentWeatherData = await fetchAPI(currentWeatherEndpoint)
    console.log(currentWeatherData)
    return formatWeatherInfo(currentWeatherData)
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const formatWeatherInfo = (weatherInfo: WeatherInfo) => {
  const wheatherInfo = {
    temperature: weatherInfo.current.temperature_2m,
    is_day: weatherInfo.current.is_day,
    rain: weatherInfo.current.rain,
    snowfall: weatherInfo.current.snowfall,
  }
  return wheatherInfo
}
