import React, { useState } from 'react';
import { Image, FileText, Video, Send } from 'lucide-react';
import { currentUser } from '../../data/mockData';

const CreatePost: React.FC = () => {
  const [postContent, setPostContent] = useState('');
  const [postType, setPostType] = useState<'general' | 'skill-swap' | 'question'>('general');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Post content:', postContent);
    console.log('Post type:', postType);
    // Implement post creation logic
    setPostContent('');
    setPostType('general');
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <div className="flex items-start space-x-3">
        <img src={currentUser.avatar} alt={currentUser.name} className="h-10 w-10 rounded-full" />
        <div className="flex-1">
          <form onSubmit={handleSubmit}>
            <textarea
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
              placeholder="Share something with your network..."
              rows={3}
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
            ></textarea>
            
            <div className="flex items-center justify-between mt-3">
              <div className="flex space-x-2">
                <button
                  type="button"
                  className={`p-2 rounded-md ${postType === 'general' ? 'bg-indigo-100 text-indigo-600' : 'text-gray-500 hover:bg-gray-100'}`}
                  onClick={() => setPostType('general')}
                >
                  <FileText size={20} />
                </button>
                <button
                  type="button"
                  className={`p-2 rounded-md ${postType === 'skill-swap' ? 'bg-indigo-100 text-indigo-600' : 'text-gray-500 hover:bg-gray-100'}`}
                  onClick={() => setPostType('skill-swap')}
                >
                  <Image size={20} />
                </button>
                <button
                  type="button"
                  className={`p-2 rounded-md ${postType === 'question' ? 'bg-indigo-100 text-indigo-600' : 'text-gray-500 hover:bg-gray-100'}`}
                  onClick={() => setPostType('question')}
                >
                  <Video size={20} />
                </button>
              </div>
              <button
                type="submit"
                disabled={!postContent.trim()}
                className={`px-4 py-2 rounded-md ${
                  postContent.trim() ? 'bg-indigo-600 hover:bg-indigo-700 text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                <span className="flex items-center">
                  <Send size={16} className="mr-2" />
                  Post
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;