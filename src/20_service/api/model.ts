export type LoginUser = {
  email: string
  password: string
}

export type LoginUserRequest = {
  user: LoginUser
}

export type NewUser = {
  username: string
  email: string
  password: string
}

export type NewUserRequest = {
  user: NewUser
}

export type User = {
  email: string
  token: string
  username: string
  bio: string
  image: string
}

export type UserResponse = {
  user: User
}

export type UpdateUser = {
  email?: string
  password?: string
  username?: string
  bio?: string
  image?: string
}

export type UpdateUserRequest = {
  user: UpdateUser
}

export type Profile = {
  username: string
  bio: string
  image: string
  following: boolean
}

export type ProfileResponse = {
  profile: Profile
}

export type ProfilesResponse = {
  profiles: Profile[]
}

export type Article = {
  slug: string
  title: string
  description: string
  body: string
  tagList: string[]
  createdAt: string
  updatedAt: string
  favorited: boolean
  favoritesCount: number
  author: Profile
}