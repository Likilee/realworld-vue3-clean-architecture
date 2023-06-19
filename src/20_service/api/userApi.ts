import { baseFetcher } from "./baseFetcher"

export type UserApi = {
  login: (requestBody: LoginUserRequest) => Promise<UserResponse>
}
export const userApi: UserApi = {
  login: (requestBody: LoginUserRequest) => {
    return baseFetcher('POST')('users/login', requestBody)
  }
}