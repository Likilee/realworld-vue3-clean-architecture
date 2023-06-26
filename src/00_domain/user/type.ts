import type { Email, UniqueId } from '@/shared-kernel'

export type User = {
  id: UniqueId
  name: UserName
  email: Email
  profile: UserProfile
  followers: UniqueId[]
}

export type UserName = string

export type UserBio = string

export type UserProfile = {
  avatarUrl: string
  bio: string
}
