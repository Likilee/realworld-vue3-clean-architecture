import { User, UserName } from '@/00_domain/user/type'
import { Email, Password } from '@/shared-kernel'

export interface UserStorageService {
  user?: User
  updateUser(user: User): void
}


export type SignUpDTO = {
  name: UserName
  email: Email
  password: Password
}
export interface AuthService {
  signUp(data: SignUpDTO): Promise<User>
  // signIn()
}
