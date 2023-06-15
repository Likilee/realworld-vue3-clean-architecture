import { User } from '@/00_domain/user/type'
import { UniqueId } from '@/shared-kernel'

export interface UserStorageService {
  user?: User
  updateUser(user: User): void
  addFollower(userId: UniqueId): void
  removeFollower(userId: UniqueId): void
  addFavorite(articleId: UniqueId): void
  removeFavorite(articleId: UniqueId): void
}