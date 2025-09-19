import { fetchAPI } from 'src/services/fetchAPI'
import type { MotivationalQuoteResponse } from 'src/types/motivationTypes'

const QUOTABLE_API = import.meta.env.PUBLIC_QUOTABLE_API

export const getMotivationalQuote = async () => {
  try {
    const quoteResponse = await fetchAPI(QUOTABLE_API)
    return formatMotivationalQuote(quoteResponse)
  } catch (err) {
    console.error('Error on fetching', err)
    throw err
  }
}

const formatMotivationalQuote = (quote: MotivationalQuoteResponse) => {
  return quote.content
}
