export const getLocalStorageData = () => {
  const coins = window.localStorage.getItem('coins')
  const lives = window.localStorage.getItem('lives')

  return {
    coins,
    lives,
  }
}

export const getCoinsData = () => {
  const coins = window.localStorage.getItem('coins')
  return parseInt(coins!)
}

export const updateCoinsData = (coins: number) => {
  window.localStorage.setItem('coins', coins.toString())
}

export const resetLocalStorageData = () => {
  window.localStorage.setItem('coins', '0')
  window.localStorage.setItem('lives', '3')
}
