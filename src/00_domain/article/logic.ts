import { UniqueId } from '@/shared-kernel'
import { Article } from './type'

export function addComment(article: Article, newCommentId: UniqueId) {
  return {...article, comments: [...article.comments, newCommentId]}
}

export function removeComment(article: Article, commentId: UniqueId) {
  return {...article, comments: article.comments.filter(id => id !== commentId)}
}
