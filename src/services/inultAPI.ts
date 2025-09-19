import { fetchAPI } from 'src/services/fetchAPI'
import type { InsultResponse } from 'src/types/insultTypes'

const LIB_INSULT_API = import.meta.env.PUBLIC_LIB_INSULT_API

export const getInsult = async () => {
  try {
    const insultResponse = await fetchAPI(LIB_INSULT_API)
    return formatInsult(insultResponse)
  } catch (err) {
    console.error('Error on fetching', err)
    throw err
  }
}

const formatInsult = (API_response: InsultResponse) => {
  return API_response.insult
}
