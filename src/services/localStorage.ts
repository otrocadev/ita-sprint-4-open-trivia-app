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
