import { fetchAPI } from 'src/services/fetchAPI'
import { decodeHtml } from 'src/utils/appUtils'
import type { TriviaResponse } from 'src/types/triviaTypes.ts'
import type { QuestionResponse } from 'src/types/triviaTypes'

const TRIVIA_API_BASE_URL = import.meta.env.PUBLIC_TRIVIA_API
const amountOfQuestions = 1
const questionType = 'multiple'

const TRIVIA_QUESTION_ENDPOINT = `${TRIVIA_API_BASE_URL}?amount=${amountOfQuestions}&type=${questionType}`

export const getPossibleAnswers = (questionData: QuestionResponse) => {
  let possibleResponses = [...questionData.incorrect_answers]

  // Generating a random position to insert the correct answer in the possibleAnsers array
  const correctAnswerPosition = Math.floor(Math.random() * 4)
  possibleResponses.splice(
    correctAnswerPosition,
    0,
    questionData.correct_answer
  )

  return { possibleResponses, correctAnswerPosition }
}

const formatQuestionData = (questionData: TriviaResponse) => {
  try {
    if (!questionData) {
      throw new Error('No question data available')
    }
    if (!questionData.results?.[0]) {
      throw new Error('No options available found')
    }
    const question = decodeHtml(questionData.results?.[0].question)
    const possibleAnsers = getPossibleAnswers(questionData.results?.[0]!)
    return { question, possibleAnsers }
  } catch (err) {
    console.error('Error on formatting the question data:', err)
    throw err
  }
}

export const getQuestionData = async () => {
  try {
    const questionData = await fetchAPI(TRIVIA_QUESTION_ENDPOINT)
    return formatQuestionData(questionData)
  } catch (err) {
    console.error('Error on fetching the question data:', err)
    throw err
  }
}
