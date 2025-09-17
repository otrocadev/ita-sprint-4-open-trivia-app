export interface QuestionResponse {
  type: 'multiple'
  difficulty: 'easy' | 'medium' | 'hard'
  category: string
  question: string
  correct_answer: string
  incorrect_answers: Array<string>
}

export interface TriviaResponse {
  response_code: number
  results: Array<QuestionResponse>
}

export interface QuestionData {
  question: string
  possibleAnsers: {
    possibleResponses: string[]
    correctAnswerPosition: number
  }
}
