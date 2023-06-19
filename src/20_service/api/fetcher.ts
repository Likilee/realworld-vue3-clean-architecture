import { UserApi, userApi } from "./userApi";

type ApiMap = {
  user: UserApi
}

export function fetcher<T extends keyof ApiMap>(domain: T): ApiMap[T] {
  switch (domain) {
    case 'user':
      return userApi
    case 'profile':
      return Profile
  }
}
