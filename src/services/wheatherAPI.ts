import { fetchAPI } from './fetchAPI'
import { getLocation } from './getLocation'

const OPEN_METEO_API_BASE_URL = import.meta.env.PUBLIC_OPEN_METEO_API
const params = 'current=is_day,rain,temperature_2m,snowfall'

export const getCurrentWeather = async () => {
  try {
    const { latitude, longitude } = await getLocation()
    const currentWeatherEndpoint = `${OPEN_METEO_API_BASE_URL}?latitude=${latitude}&longitude=${longitude}&${params}`
    const currentWeatherData = await fetchAPI(currentWeatherEndpoint)
    return formatWeatherInfo(currentWeatherData)
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const formatWeatherInfo = (weatherInfo: any) => {
  const wheatherInfo = {
    temperature: weatherInfo.current.temperature_2m,
    isDay: weatherInfo.current.is_day,
    rain: weatherInfo.current.rain.toFixed(2),
    snowfall: weatherInfo.current.snowfall.toFixed(2),
  }
  return wheatherInfo
}
