const baseUrl = 'https://api.realworld.io/api'

type Method = 'GET' | 'POST' | 'PUT' | 'DELETE'

export const baseFetcher = (method: Method) => async (path: string, requestBody?: unknown) => {
  const response = await fetch(`${baseUrl}/${path}`, {
    method,
    headers: {
      'Content-Type': 'application/json'
    },
    body: requestBody ? JSON.stringify(requestBody) : undefined,
  })

  if (response.ok) return await response.json()
  else throw new Error(response.statusText)
}
