import { fetchAPI } from 'src/services/fetchAPI'

const QUOTABLE_API = import.meta.env.PUBLIC_QUOTABLE_API

export const getMotivationalQuote = async () => {
  try {
    return await fetchAPI(QUOTABLE_API)
  } catch (err) {
    console.error('Error on fetching', err)
    throw err
  }
}
