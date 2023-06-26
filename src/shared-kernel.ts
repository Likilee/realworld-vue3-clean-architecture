export type Email = string
export type UniqueId = string
export type DateTimeString = string
export type Password = string

export type Brand<K, T> = K & { __brand: T }
