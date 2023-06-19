import { defineStore } from 'pinia'
import { User } from './../../00_domain/user/type'
import { UserStorageService } from '@/10_application/ports'

export const useUserStorageService: UserStorageService = () => {
  return defineStore('user', () => {
    const user = ref<User | undefined>(undefined)
    const updateUser = (user: User) => {
      user.value = user
    }
    return { user, updateUser }
  })
}
