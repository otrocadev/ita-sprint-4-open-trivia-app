import {
  resetLocalStorageData,
  getCoinsData,
  updateCoinsData,
} from 'src/services/localStorage.ts'

export const decodeHtml = (html: string) => {
  html = html.replace(/&quot;/g, '"')
  html = html.replace(/&#039;/g, "'")
  html = html.replace(/&amp;/g, '&')
  html = html.replace(/&lt;/g, '<')
  html = html.replace(/&gt;/g, '>')
  html = html.replace(/&nbsp;/g, ' ')
  html = html.replace(/&ndash;/g, '-')
  html = html.replace(/&ouml/g, 'ö')
  return html
}

export const restartGame = () => {
  resetLocalStorageData()
  window.location.reload()
}

const addCoins = (coins: number) => {
  const coinsData = getCoinsData()
  updateCoinsData(coinsData + coins)
}

export const manageResponse = (isCorrect: boolean) => {
  if (isCorrect) {
    addCoins(100)
  }
}
