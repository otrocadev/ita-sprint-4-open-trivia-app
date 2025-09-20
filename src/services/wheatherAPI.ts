import { fetchAPI } from './fetchAPI'
import { getLocation } from './getLocation'

const OPEN_METEO_API_BASE_URL = import.meta.env.PUBLIC_OPEN_METEO_API

export const getCurrentWheader = async () => {
  try {
    const { latitude, longitude } = await getLocation()
    const params = 'current=is_day,rain,temperature_2m,snowfall'
    const currentWeatherEndpoint = `${OPEN_METEO_API_BASE_URL}?latitude=${latitude}&longitude=${longitude}&${params}`
    const currentWeatherData = await fetchAPI(currentWeatherEndpoint)
    console.log('Current weather data:', currentWeatherData)
  } catch (error) {
    console.error(error)
  }
}
