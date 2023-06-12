import type { DateTimeString, UniqueId } from "@/shared-kernel"

export type Comment = {
  author: UniqueId
  createdAt: DateTimeString
  content: CommentContent
}

export type CommentContent = string