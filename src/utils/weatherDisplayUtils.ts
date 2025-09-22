import { getCurrentWeather } from 'src/services/wheatherAPI'
import type { CurrentWeatherInfo } from 'src/types/weatherInfoTypes'

const manageWeatherInfoIcon = (weatherInfo: CurrentWeatherInfo) => {
  if (weatherInfo.rain == 0 && weatherInfo.snowfall == 0) {
    if (weatherInfo.is_day == 1) return 'sunny'
    if (weatherInfo.is_day == 0) return 'moon'
  }
  if (weatherInfo.rain > 0) return 'rain'
  if (weatherInfo.snowfall > 0) return 'snow'
  return 'cloud'
}

export const printWeatherInfo = async () => {
  const weatherInfo = await getCurrentWeather()

  const weatherInfoElement = document.getElementById('weather-info')
  weatherInfoElement!.textContent = weatherInfo.temperature + '°C'

  const weatherIconElement = document.getElementById(
    'weather-icon'
  ) as HTMLImageElement
  const imageSource =
    '/src/assets/icons/' + manageWeatherInfoIcon(weatherInfo) + '.svg'
  weatherIconElement.src = imageSource
}
