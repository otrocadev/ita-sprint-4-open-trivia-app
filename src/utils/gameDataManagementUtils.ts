import { resetLocalStorageData } from 'src/services/localStorage.ts'
import { gameData } from 'src/stored/gameData.ts'

const emitGameDataUpdate = () => {
  if (typeof window === 'undefined') return
  const event = new CustomEvent('gameData:update', {
    detail: { coins: gameData.coins, lives: gameData.lives },
  })
  window.dispatchEvent(event)
}

export const getGameStorageData = () => {
  const coins = gameData.coins
  const lives = gameData.lives

  return {
    coins,
    lives,
  }
}

export const getCoinsData = () => {
  const coins = gameData.coins
  return coins
}

export const updateCoinsData = (coins: number) => {
  gameData.coins = coins
  emitGameDataUpdate()
}

export const getLivesData = () => {
  const lives = gameData.lives
  return lives
}

export const updateLivesData = (lives: number) => {
  gameData.lives = lives
  emitGameDataUpdate()
}

export const resetGameStorageData = () => {
  gameData.coins = 0
  gameData.lives = 3
  resetLocalStorageData()
  emitGameDataUpdate()
}
