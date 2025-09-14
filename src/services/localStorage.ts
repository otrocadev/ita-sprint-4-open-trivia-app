export const getLocalStorageData = () => {
  const coins = window.localStorage.getItem('coins')
  const lives = window.localStorage.getItem('lives')

  return {
    coins,
    lives,
  }
}

export const setLocalStorageData = (coins: string, lives: string) => {
  window.localStorage.setItem('coins', coins)
  window.localStorage.setItem('lives', lives)
}
