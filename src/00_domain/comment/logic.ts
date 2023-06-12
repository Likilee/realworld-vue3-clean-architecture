import { User } from '@/00_domain/user/type'
import { Comment, CommentContent } from './type'
import { currentDatetime } from '@/lib/datetime'

export function createComment(userId: User['id'], content: CommentContent): Comment {
  return {
    author: userId,
    content,
    createdAt: currentDatetime()
  }
}
