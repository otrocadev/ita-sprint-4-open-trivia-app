import {
  resetLocalStorageData,
  getCoinsData,
  getLivesData,
  updateCoinsData,
  updateLivesData,
} from 'src/services/localStorage.ts'

import { complimentsPool } from 'src/stored/static-content.ts'

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
  const totalCoins = coinsData + coins
  updateCoinsData(totalCoins)
}

const removeLives = (lives: number) => {
  const livesData = getLivesData()
  updateLivesData(livesData - lives)
  console.log(getLivesData())
}

export const manageResponse = (isCorrect: boolean) => {
  if (isCorrect) {
    addCoins(100)
    return 'correct'
  } else {
    removeLives(1)
    const livesData = getLivesData()
    if (livesData <= 0) {
      return 'game-over'
    }
    return 'incorrect'
  }
}

export const getrandomCompliment = () => {
  const randomIndex = Math.floor(Math.random() * complimentsPool.length)
  return complimentsPool[randomIndex]
}
