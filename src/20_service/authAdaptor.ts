import { User } from './../00_domain/user/type'
import { SignUpDTO } from './../10_application/ports'
import { NewUserRequest, UserResponse } from './api/model'
import { userApi } from './api/userApi'
import { AuthService } from '../10_application/ports'

export const useAuthService = (): AuthService => {
  const auth: AuthService = {
    signUp: async (requestBody) => {
      try {
        const res = await userApi.signUp(convertSignUpDTOtoNewUserRequest(requestBody))
        if ('user' in res)
          return convertUserResponseToUser(res)
        throw new Error(res.errors.body.join(', '))
      }
      catch (e) {
        if (e instanceof Error)
          throw new Error(e.message)
        throw new Error('Unknown error')
      }
    }
  }
  return auth;
}

type convertSignUpDTOtoNewUserRequest = (data: SignUpDTO) => NewUserRequest
const convertSignUpDTOtoNewUserRequest: convertSignUpDTOtoNewUserRequest = (data) => {
  return {
    user: {
      username: data.name,
      email: data.email,
      password: data.password
    }
  }
}

type convertUserResponseToUser = (res: UserResponse) => User
const convertUserResponseToUser: convertUserResponseToUser = (res) => {
  return {
    id: res.user.username,
    name: res.user.username,
    email: res.user.email,
    favorites: [],
    followings: [],
    profile: {
      avatarUrl: res.user.image,
      bio: res.user.bio
    }
  }
}
