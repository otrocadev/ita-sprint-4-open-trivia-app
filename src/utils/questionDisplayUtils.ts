import { getQuestionData } from 'src/services/triviaAPI'
import type { QuestionData } from 'src/types/triviaTypes'
import {
  getFailedQuestionFeedBack,
  getrandomCompliment,
  makeComponentVisible,
  manageResponse,
} from 'src/utils/appUtils'

const answeredQuestionDialog = document.getElementById(
  'answered-question-dialog'
)
const cardDialog = document.getElementById('card-dialog')
const headstoneIcon = document.getElementById('headstone-icon')
const confettiIcon = document.getElementById('confetti-icon')
const crossIcon = document.getElementById('cross-icon')
const endgameInfo = document.getElementById('endgame-info')
const correctAnswerInfo = document.getElementById('correct-answer-info')
const incorrectAnswerInfo = document.getElementById('incorrect-answer-info')
const nextQuestionButton = document.getElementById('next-question-button')
const errorDisplayingQuestion = document.getElementById(
  'error-displaying-question'
)

const displayQuestionAnswers = (
  questionData: QuestionData,
  optionsContainer: HTMLElement
) => {
  questionData.possibleAnsers.possibleResponses.forEach((response: string) => {
    const option = document.createElement('button')
    option.className =
      'option-button flex bg-theme-1 w-full gap-2 items-center justify-center border border-shadow-text-color shadow-custom text-principal-text-color px-4 py-2 rounded-md text-shadow-custom text-outline hover:scale-105 transition-transform duration-200 hover:cursor-pointer'
    option.textContent = response
    optionsContainer.appendChild(option)
  })
}

const displayQuestionData = (
  questionData: QuestionData,
  questionText: HTMLElement,
  optionsContainer: HTMLElement
) => {
  questionText!.textContent = questionData.question
  displayQuestionAnswers(questionData, optionsContainer)
}

const manageOptionButtonClases = (button: Element, isCorrect: boolean) => {
  if (isCorrect) {
    button.classList.remove('bg-theme-1')
    button.classList.add('bg-correct')
  } else {
    button.classList.remove('bg-theme-1')
    button.classList.add('bg-incorrect')
  }
}

const restartDialogDisplay = () => {
  answeredQuestionDialog?.classList.add('hidden')
  errorDisplayingQuestion?.classList.add('hidden')
  // reset the dialog component
  nextQuestionButton?.classList.remove('hidden')
  // hide all the info
  endgameInfo?.classList.add('hidden')
  correctAnswerInfo?.classList.add('hidden')
  incorrectAnswerInfo?.classList.add('hidden')
  // erease all the background colors
  cardDialog?.classList.remove('bg-correct')
  cardDialog?.classList.remove('bg-incorrect')
  cardDialog?.classList.remove('bg-theme-2')
  // hide all the icons
  headstoneIcon?.classList.add('hidden')
  confettiIcon?.classList.add('hidden')
  crossIcon?.classList.add('hidden')
}

const manageAnsweredQuestionDialog = async (gameStatus: string) => {
  if (gameStatus === 'game-over') {
    cardDialog?.classList.add('bg-theme-2')
    headstoneIcon?.classList.remove('hidden')
    headstoneIcon?.classList.add('flex')
    endgameInfo?.classList.remove('hidden')
    endgameInfo?.classList.add('flex')
    nextQuestionButton?.classList.add('hidden')
  } else if (gameStatus === 'correct') {
    const randomComplimentDialog = document.getElementById('random-compliment')
    randomComplimentDialog!.textContent = await getrandomCompliment()
    cardDialog?.classList.add('bg-correct')
    confettiIcon?.classList.remove('hidden')
    confettiIcon?.classList.add('flex')
    correctAnswerInfo?.classList.remove('hidden')
    correctAnswerInfo?.classList.add('flex')
  } else if (gameStatus === 'incorrect') {
    const failedQuestionFeedBackDialog = document.getElementById(
      'failed-question-feed-back'
    )
    failedQuestionFeedBackDialog!.textContent =
      await getFailedQuestionFeedBack()
    cardDialog?.classList.add('bg-incorrect')
    crossIcon?.classList.remove('hidden')
    crossIcon?.classList.add('flex')
    incorrectAnswerInfo?.classList.remove('hidden')
    incorrectAnswerInfo?.classList.add('flex')
  }

  answeredQuestionDialog?.classList.remove('hidden')
}

export const printNewQuestion = async () => {
  try {
    const questionData = await getQuestionData()
    const questionCard = document.getElementById('question-card')
    const questionText = document.getElementById('question-text')
    const optionsContainer = document.getElementById('options-container')

    optionsContainer!.innerHTML = ''
    restartDialogDisplay()
    makeComponentVisible(questionCard!)
    displayQuestionData(questionData, questionText!, optionsContainer!)

    // interaction with the buttons once the question is displayed
    let isAlreadyClicked = false
    const responseButtons = document.querySelectorAll('.option-button')
    responseButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
        if (isAlreadyClicked) return
        isAlreadyClicked = true

        const isCorrect =
          index === questionData.possibleAnsers.correctAnswerPosition

        // Change visually the button (red or green)
        manageOptionButtonClases(button, isCorrect)
        setTimeout(async () => {
          await manageAnsweredQuestionDialog(await manageResponse(isCorrect))
        }, 2000)
      })
    })
  } catch (err) {
    errorDisplayingQuestion?.classList.remove('hidden')
    console.error('Error on printing the question', err)
    throw err
  }
}
