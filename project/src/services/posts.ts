import { storage, genId } from './storage';
import { posts as seedPosts } from '../data/mockData';
import type { Post, User } from '../types';

const KEY = 'app.posts.v1';

const ensure = (): Post[] => storage.getOrSet<Post[]>(KEY, seedPosts);

export const getPosts = (): Post[] => ensure().slice().sort((a, b) => +new Date(b.createdAt) - +new Date(a.createdAt));

export const addPost = (author: User, content: string, type: Post['type'] = 'general', media?: string): Post => {
  const newPost: Post = {
    id: genId(),
    author,
    content,
    media,
    likes: 0,
    comments: 0,
    shares: 0,
    createdAt: new Date().toISOString(),
    type,
  };
  const updated = storage.update<Post[]>(KEY, (cur) => [newPost, ...(cur ?? ensure())]);
  return newPost;
};

const updatePostById = (id: string, patch: Partial<Post>) => {
  const next = storage.update<Post[]>(KEY, (cur) => {
    const list = cur ?? ensure();
    return list.map((p) => (p.id === id ? { ...p, ...patch } : p));
  });
  return next.find((p) => p.id === id);
};

export const likePost = (id: string) => {
  const post = ensure().find((p) => p.id === id);
  if (!post) return;
  updatePostById(id, { likes: (post.likes ?? 0) + 1 });
};

export const commentPost = (id: string) => {
  const post = ensure().find((p) => p.id === id);
  if (!post) return;
  updatePostById(id, { comments: (post.comments ?? 0) + 1 });
};

export const sharePost = (id: string) => {
  const post = ensure().find((p) => p.id === id);
  if (!post) return;
  updatePostById(id, { shares: (post.shares ?? 0) + 1 });
};
