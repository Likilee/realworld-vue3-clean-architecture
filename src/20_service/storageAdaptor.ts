import { useUserStore } from './storage/user.store'
import { UserStorageService } from '@/10_application/ports'

type StorageService = {
  user: UserStorageService
}

export function useStorageService(
  type: keyof StorageService
): StorageService[keyof StorageService] {
  switch (type) {
    case 'user':
      return useUserStorageService()
    default:
      throw new Error('Invalid type')
  }
}

function useUserStorageService(): UserStorageService {
  const userStore = useUserStore()
  return userStore
}
