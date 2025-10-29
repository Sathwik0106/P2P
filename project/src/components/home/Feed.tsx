import React from 'react';
import { ThumbsUp, MessageSquare, Share2, MoreHorizontal } from 'lucide-react';
import { Post as PostType } from '../../types';
import { likePost, commentPost, sharePost } from '../../services/posts';

interface FeedProps {
  posts: PostType[];
  onChange?: (posts: PostType[]) => void;
}

const Feed: React.FC<FeedProps> = ({ posts, onChange }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  };

  const getPostTypeLabel = (type: string) => {
    switch (type) {
      case 'achievement':
        return 'Shared an achievement';
      case 'job':
        return 'Posted a job opportunity';
      case 'skill-swap':
        return 'Looking for a skill swap';
      case 'question':
        return 'Asked a question';
      default:
        return 'Shared a post';
    }
  };

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <div key={post.id} className="bg-white rounded-lg shadow-md p-4">
          <div className="flex justify-between items-start">
            <div className="flex items-start space-x-3">
              <img src={post.author.avatar} alt={post.author.name} className="h-10 w-10 rounded-full" />
              <div>
                <h3 className="font-semibold text-gray-800">{post.author.name}</h3>
                <p className="text-xs text-gray-500">{getPostTypeLabel(post.type)} • {formatDate(post.createdAt)}</p>
              </div>
            </div>
            <button className="text-gray-500 hover:text-gray-700">
              <MoreHorizontal size={20} />
            </button>
          </div>
          
          <div className="mt-3">
            <p className="text-gray-800">{post.content}</p>
            {post.media && (
              <div className="mt-3">
                <img src={post.media} alt="Post media" className="rounded-lg w-full h-auto" />
              </div>
            )}
          </div>
          
          <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center space-x-1">
              <span className="bg-indigo-100 text-indigo-600 p-1 rounded-full">
                <ThumbsUp size={14} />
              </span>
              <span>{post.likes}</span>
            </div>
            <div className="flex space-x-4">
              <span>{post.comments} comments</span>
              <span>{post.shares} shares</span>
            </div>
          </div>
          
          <div className="mt-4 pt-3 border-t border-gray-100 flex justify-between">
            <button
              onClick={() => {
                likePost(post.id);
                onChange?.(posts.map((p) => (p.id === post.id ? { ...p, likes: p.likes + 1 } : p)));
              }}
              className="flex items-center text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 px-3 py-1 rounded-md transition-colors"
            >
              <ThumbsUp size={18} className="mr-2" />
              <span>Like</span>
            </button>
            <button
              onClick={() => {
                commentPost(post.id);
                onChange?.(posts.map((p) => (p.id === post.id ? { ...p, comments: p.comments + 1 } : p)));
              }}
              className="flex items-center text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 px-3 py-1 rounded-md transition-colors"
            >
              <MessageSquare size={18} className="mr-2" />
              <span>Comment</span>
            </button>
            <button
              onClick={() => {
                sharePost(post.id);
                onChange?.(posts.map((p) => (p.id === post.id ? { ...p, shares: p.shares + 1 } : p)));
              }}
              className="flex items-center text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 px-3 py-1 rounded-md transition-colors"
            >
              <Share2 size={18} className="mr-2" />
              <span>Share</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feed;