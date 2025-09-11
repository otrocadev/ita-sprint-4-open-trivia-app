import type { QuestionResponse } from 'src/types/triviaTypes'

export const getPossibleResponses = (questionData: QuestionResponse) => {
  let possibleResponses = [...questionData.incorrect_answers]

  // Generating a random position to insert the correct answer in the possibleAnsers array
  const correctAnswerPosition = Math.floor(Math.random() * 4)
  possibleResponses.splice(
    correctAnswerPosition,
    0,
    questionData.correct_answer
  )

  return possibleResponses
}
