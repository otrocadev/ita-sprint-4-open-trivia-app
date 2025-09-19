export const fetchAPI = async (URL: string) => {
  try {
    return await fetch(URL, {
      method: 'GET',
      mode: 'cors',
    }).then((res) => res.json())
  } catch (err) {
    console.error('Error on fetching', err)
    throw err
  }
}
