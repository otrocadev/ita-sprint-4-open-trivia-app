interface QuestionResponse {
  type: 'multiple'
  difficulty: 'easy' | 'medium' | 'hard'
  category: string
  question: string
  correct_answer: string
  incorrect_answers: Array<string>
}

export interface TriviaResponse {
  question: {
    response_code: number
    results: Array<QuestionResponse>
  }
}
