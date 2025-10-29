import React from 'react';
import { Star, Users } from 'lucide-react';
import { Mentor } from '../../types';

interface TopMentorsProps {
  mentors: Mentor[];
}

const TopMentors: React.FC<TopMentorsProps> = ({ mentors }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Top Mentors</h2>
        <a href="#" className="text-sm text-indigo-600 hover:text-indigo-800">View all</a>
      </div>
      
      <div className="space-y-4">
        {mentors.map((mentor) => (
          <div key={mentor.id} className="flex items-start space-x-3">
            <img src={mentor.user.avatar} alt={mentor.user.name} className="h-12 w-12 rounded-full" />
            <div className="flex-1">
              <h3 className="font-semibold text-gray-800">{mentor.user.name}</h3>
              <div className="flex items-center mt-1">
                <div className="flex items-center text-yellow-400">
                  <Star size={16} fill="currentColor" />
                  <span className="ml-1 text-sm text-gray-700">{mentor.rating}</span>
                </div>
                <span className="mx-2 text-gray-300">•</span>
                <div className="flex items-center text-gray-500 text-sm">
                  <Users size={14} className="mr-1" />
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
            <button className="text-sm bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1 rounded-md transition-colors">
              Connect
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopMentors;