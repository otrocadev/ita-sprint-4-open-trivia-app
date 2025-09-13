const BASE_URL = 'https://opentdb.com/api.php?amount=1&type=multiple'

export const getQuestion = async () => {
  try {
    return await fetch(BASE_URL).then((res) => res.json())
  } catch (err) {
    console.error('Error on fetching the question:', err)
    throw err
  }
}
