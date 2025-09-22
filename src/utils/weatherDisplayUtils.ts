import { getCurrentWeather } from 'src/services/wheatherAPI'

const manageWeatherInfoIconDay = (rain: number, snowfall: number) => {
  if (rain === 0 && snowfall === 0) return 'sunny'
  if (rain > 0) return 'rain'
  if (snowfall > 0) return 'snow'
  return 'cloud'
}

const manageWeatherInfoIcon = (weatherInfo: any) => {
  if (weatherInfo.rain === 0 && weatherInfo.snowfall === 0) {
    if (weatherInfo.isDay === 1) return 'sunny'
    if (weatherInfo.isDay === 0) return 'moon'
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
