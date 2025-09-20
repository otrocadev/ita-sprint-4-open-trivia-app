export const getLocation = (): Promise<{
  latitude: number
  longitude: number
}> => {
  return new Promise((resolve, reject) => {
    try {
      if (!navigator.geolocation) {
        throw new Error('Geolocation is not supported by this browser')
      }
      navigator.geolocation.getCurrentPosition((position) => {
        resolve({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        })
      })
    } catch (error) {
      reject(error)
    }
  })
}
