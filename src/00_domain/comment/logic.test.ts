import { User } from '@/00_domain/user/type'
import { Comment, CommentContent } from './type'
import { currentDatetime } from '@/lib/datetime'
import { describe } from 'vitest'

// export function createComment(userId: User['id'], content: CommentContent): Comment {
//   return {
//     author: userId,
//     content,
//     createdAt: currentDatetime()
//   }
// }

//test createComment
// describe('createComment', () => {
//   it('should create a comment', () => {
//     const userId = 'userId'
//     const content = 'content'
//     const comment: Comment = {
//       author: userId,
//       content,

