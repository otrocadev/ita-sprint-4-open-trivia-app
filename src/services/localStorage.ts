import { gameData } from 'src/stored/gameData.ts'

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
    console.log('Game saved to localStorage')
  } catch (error) {
    console.error('Error saving game to localStorage:', error)
  }
}
