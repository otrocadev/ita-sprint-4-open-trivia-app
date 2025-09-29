import { gameData } from '../stored/gameData.ts'
import { userResults } from '../stored/gameData'
import type { QuestionData } from '../types/triviaTypes'

export const emitGameDataUpdate = () => {
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
  try {
    gameData.coins = 0
    gameData.lives = 3
    emitGameDataUpdate()
  } catch (error) {
    console.error('Error resetting game storage data:', error)
  }
}

export const addUserResult = (
  questionData: QuestionData,
  userResponse: string,
  isCorrect: boolean
) => {
  const correctAnswerIndex = questionData.possibleAnsers.correctAnswerPosition
  userResults.push({
    question: questionData.question,
    possibleAnswers: questionData.possibleAnsers.possibleResponses,
    userAnswer: userResponse,
    correctAnswer:
      questionData.possibleAnsers.possibleResponses[correctAnswerIndex] ?? '',
    anseredCorrectly: isCorrect,
  })
  console.log(userResults)
}

export const showNotification = (toastType: string) => {
  const toastSuccess = document.getElementById(`${toastType}`)
  toastSuccess?.classList.remove('hidden')
}
