import { fetchAPI } from 'src/services/fetchAPI'

const LIB_INSULT_API = import.meta.env.PUBLIC_LIB_INSULT_API

export const getLibInsult = async () => {
  try {
    return await fetchAPI(LIB_INSULT_API)
  } catch (err) {
    console.error('Error on fetching', err)
    throw err
  }
}
