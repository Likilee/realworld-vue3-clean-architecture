import { describe, expect, it, test } from 'vitest'
import { User, UserProfile } from './type'
import { followOtherUser, unfollowOtherUser, updateProfile } from './logic'

describe('updateProfile', () => {
  test('새로운 프로필을 입력하면 기존 프로필을 업데이트합니다.', () => {
    const user: User = {
      id: '1',
      name: '이름',
      email: '이메일',
      profile: {
        avatarUrl: '아바타',
        bio: '바이오'
      },
      followers: []
    }
    const newProfile: UserProfile = {
      avatarUrl: '새로운 아바타',
      bio: '새로운 바이오'
    }
    const updatedUser = updateProfile(user, newProfile)
    expect(updatedUser.profile.avatarUrl).toBe('새로운 아바타')
    expect(updatedUser.profile.bio).toBe('새로운 바이오')
  })
})

describe('followOtherUser', () => {
  test('다른 유저를 팔로우하면 팔로잉 목록에 추가합니다.', () => {
    const user: User = {
      id: '1',
      name: '이름',
      email: '이메일',
      profile: {
        avatarUrl: '아바타',
        bio: '바이오'
      },
      followers: []
    }

    const updatedUser = followOtherUser(user, 'user2')
    expect(updatedUser.followers.length).toBe(1)
    expect(updatedUser.followers[0]).toBe('user2')
  })
})

describe('unfollowOtherUser', () => {
  test('다른 유저를 언팔로우하면 팔로잉 목록에서 제거합니다.', () => {
    const user: User = {
      id: '1',
      name: '이름',
      email: '이메일',
      profile: {
        avatarUrl: '아바타',
        bio: '바이오'
      },
      followers: ['user2']
    }
    const updatedUser = unfollowOtherUser(user, 'user2')
    expect(updatedUser.followers.length).toBe(0)
  })
})
