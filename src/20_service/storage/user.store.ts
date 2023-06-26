import { defineStore } from 'pinia'
import { User } from './../../00_domain/user/type'

export const useUserStore = defineStore('user', () => {
  const user = ref<User | undefined>(undefined)
  const updateUser = (userData: User) => {
    user.value = userData
  }
  return { user, updateUser }
})
