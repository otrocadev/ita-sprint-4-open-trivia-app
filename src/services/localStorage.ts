import { gameData } from 'src/stored/gameData.ts'
import {
  showNotification,
  emitGameDataUpdate,
} from 'src/utils/gameDataManagementUtils.ts'

export const resetLocalStorageData = () => {
  window.localStorage.setItem('coins', '0')
  window.localStorage.setItem('lives', '3')
}

export const getLocalStorageData = () => {
  const coins = window.localStorage.getItem('coins')
  const lives = window.localStorage.getItem('lives')

  return {
    coins,
    lives,
  }
}

export const saveGameToLocalStorage = () => {
  try {
    window.localStorage.setItem('coins', gameData.coins.toString())
    window.localStorage.setItem('lives', gameData.lives.toString())
    showNotification('toast-game-saved')
  } catch (error) {
    console.error('Error saving game to localStorage:', error)
  }
}

export const loadGameFromLocalStorage = () => {
  try {
    const { coins, lives } = getLocalStorageData()
    gameData.coins = parseInt(coins || '0')
    gameData.lives = parseInt(lives || '3')
    emitGameDataUpdate()
    showNotification('toast-game-loaded')
  } catch (error) {
    console.error('Error loading game from localStorage:', error)
  }
}
