import { storage } from './storage';

const FOLLOWING_KEY = 'app.network.following.v1';

export const getFollowingIds = (): string[] => storage.getOrSet<string[]>(FOLLOWING_KEY, []);

export const toggleFollow = (userId: string): string[] => {
  return storage.update<string[]>(FOLLOWING_KEY, (cur) => {
    const list = cur ?? [];
    return list.includes(userId) ? list.filter((x) => x !== userId) : [userId, ...list];
  });
};
