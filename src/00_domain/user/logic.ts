import { UniqueId } from "@/shared-kernel";
import { User, UserProfile } from "./type";

export const updateProfile = (user: User, newProfile: UserProfile): User => {
  return {
    ...user,
    profile: newProfile,
  };
};


export const followOtherUser = (user: User, otherUserId: UniqueId): User => {
  return {
    ...user,
    followers: [...user.followers, otherUserId],
  };
}

export const unfollowOtherUser = (user: User, otherUserId: UniqueId): User => {
  return {
    ...user,
    followers: user.followers.filter((follower) => follower !== otherUserId),
  };
}