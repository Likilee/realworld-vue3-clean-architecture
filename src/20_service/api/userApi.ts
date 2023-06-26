import { GenericErrorModel, LoginUserRequest, NewUserRequest, UserResponse } from './model'
import { baseFetcher } from './baseFetcher'

export type UserApi = {
  signUp: (requestBody: NewUserRequest) => Promise<UserResponse | GenericErrorModel>
  signIn: (requestBody: LoginUserRequest) => Promise<UserResponse | GenericErrorModel>
}
export const userApi: UserApi = {
  signUp: (requestBody: NewUserRequest) => {
    return baseFetcher('POST')('users', requestBody)
  },
  signIn: (requestBody: LoginUserRequest) => {
    return baseFetcher('POST')('users/login', requestBody)
  }
}
