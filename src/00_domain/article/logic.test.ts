import { addComment, removeComment } from '@/00_domain/article/logic'
import { Article } from './type'
import { describe, expect, test } from 'vitest'

describe('addComment', () => {
  test('새로운 댓글을 추가한다.', () => {
    // given
    const article: Article = {
      id: '1',
      author: '1',
      title: '제목',
      description: '설명',
      content: '내용',
      tags: ['태그1', '태그2'],
      comments: []
    }
    const newCommentId = '2'

    // when
    const newArticle = addComment(article, newCommentId)

    // then
    expect(newArticle.comments).toEqual(['2'])
  })

  test('기존 댓글 목록에 새로운 댓글을 추가한다.', () => {
    // given
    const article: Article = {
      id: '1',
      author: '1',
      title: '제목',
      description: '설명',
      content: '내용',
      tags: ['태그1', '태그2'],
      comments: ['2']
    }
    const newCommentId = '3'

    // when
    const newArticle = addComment(article, newCommentId)

    // then
    expect(newArticle.comments).toEqual(['2', '3'])
  })
})

describe('removeComment', () => {
  test('댓글을 삭제한다.', () => {
    // given
    const article: Article = {
      id: '1',
      author: '1',
      title: '제목',
      description: '설명',
      content: '내용',
      tags: ['태그1', '태그2'],
      comments: ['2']
    }
    const commentId = '2'

    // when
    const newArticle = removeComment(article, commentId)

    // then
    expect(newArticle.comments).toEqual([])
  })

  test('기존 댓글 목록에서 댓글을 삭제한다.', () => {
    // given
    const article: Article = {
      id: '1',
      author: '1',
      title: '제목',
      description: '설명',
      content: '내용',
      tags: ['태그1', '태그2'],
      comments: ['2', '3']
    }
    const commentId = '2'

    // when
    const newArticle = removeComment(article, commentId)

    // then
    expect(newArticle.comments).toEqual(['3'])
  })
})
