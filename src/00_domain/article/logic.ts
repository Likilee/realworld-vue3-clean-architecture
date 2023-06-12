import { Comment } from '@/00_domain/comment/type'
import { Article } from './type'

export function addComment(article: Article, comment: Comment) {
  return {...article, comments: [...article.comments, comment.id]}
}

export function removeComment(article: Article, commentId: Comment['id']) {
  return {...article, comments: article.comments.filter(id => id !== commentId)}
}
