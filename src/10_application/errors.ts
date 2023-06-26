
export class AuthError extends Error {
  constructor(message?: string) {
    super(message)
    this.name = 'AuthError'
  }
}
export type ErrorType = AuthError;