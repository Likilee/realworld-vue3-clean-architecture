import type { UniqueId } from "@/shared-kernel"

export type Article = {
  id: UniqueId
  author: UniqueId
  title: ArticleTitle
  description: ArticleDescription
  content: ArticleContent
  tags: ArticleTags
  comments: UniqueId[]
}

export type ArticleTitle = string
export type ArticleContent = string
export type ArticleDescription = string
export type ArticleTag = string
export type ArticleTags = ArticleTag[]