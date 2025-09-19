export interface InsultResponse {
  error: boolean
  args: {
    lang: string
    template: string
  }
  insult: string
}
