import React, { useState } from 'react';
import { Star, Users } from 'lucide-react';
import { Mentor } from '../../types';
import { getFollowingIds, toggleFollow } from '../../services/network';

interface TopMentorsProps {
  mentors: Mentor[];
}

const TopMentors: React.FC<TopMentorsProps> = ({ mentors }) => {
  const [following, setFollowing] = useState<string[]>(getFollowingIds());
  return (
    <div className="bg-white rounded-lg shadow-md p-3 sm:p-4">
      <div className="flex justify-between items-center mb-3 sm:mb-4">
        <h2 className="text-base sm:text-lg font-semibold text-gray-800">Top Mentors</h2>
        <a href="#" className="text-xs sm:text-sm text-indigo-600 hover:text-indigo-800">View all</a>
      </div>
      
      <div className="space-y-3 sm:space-y-4">
        {mentors.map((mentor) => (
          <div key={mentor.id} className="flex items-start space-x-2 sm:space-x-3">
            <img src={mentor.user.avatar} alt={mentor.user.name} className="h-10 w-10 sm:h-12 sm:w-12 rounded-full" />
            <div className="flex-1">
              <h3 className="font-semibold text-gray-800 text-sm sm:text-base">{mentor.user.name}</h3>
              <div className="flex items-center mt-1">
                <div className="flex items-center text-yellow-400">
                  <Star size={14} className="sm:w-4 sm:h-4" fill="currentColor" />
                  <span className="ml-1 text-xs sm:text-sm text-gray-700">{mentor.rating}</span>
                </div>
                <span className="mx-1 sm:mx-2 text-gray-300">•</span>
                <div className="flex items-center text-gray-500 text-xs sm:text-sm">
                  <Users size={12} className="mr-1" />
                  {mentor.students} students
                </div>
              </div>
              <div className="mt-2 flex flex-wrap gap-1">
                {mentor.skills.slice(0, 3).map((skill) => (
                  <span key={skill.id} className="px-2 py-1 bg-indigo-50 text-indigo-600 text-xs rounded-full">
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
            <button
              onClick={() => setFollowing(toggleFollow(mentor.user.id))}
              className={`text-xs sm:text-sm ${following.includes(mentor.user.id) ? 'bg-green-600 hover:bg-green-700' : 'bg-indigo-600 hover:bg-indigo-700'} text-white px-2 sm:px-3 py-1 rounded-md transition-colors`}
            >
              {following.includes(mentor.user.id) ? 'Following' : 'Connect'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopMentors;