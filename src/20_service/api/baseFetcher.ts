const baseUrl = 'https://api.realworld.io/api'

export const baseFetcher = (method: Method) => async (path: string, requestBody?: unknown) => {
  const response = await fetch(`${baseUrl}/${path}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: requestBody ? JSON.stringify(requestBody) : undefined,
  })
  return await response.json()
}
