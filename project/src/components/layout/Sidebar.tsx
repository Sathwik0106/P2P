import React from 'react';
import { User, Briefcase, BookOpen, Award, Users } from 'lucide-react';
import { currentUser } from '../../data/mockData';

const Sidebar: React.FC = () => {
  return (
    <div className="w-full sm:w-64 bg-white shadow-md rounded-lg overflow-hidden h-fit sticky top-20">
      <div className="p-3 sm:p-4 border-b">
        <div className="flex items-center space-x-2 sm:space-x-3">
          <img src={currentUser.avatar} alt={currentUser.name} className="h-10 w-10 sm:h-12 sm:w-12 rounded-full" />
          <div>
            <h3 className="font-semibold text-gray-800 text-sm sm:text-base">{currentUser.name}</h3>
            <p className="text-xs sm:text-sm text-gray-500">{currentUser.bio?.substring(0, 30)}...</p>
          </div>
        </div>
      </div>
      
      <div className="p-3 sm:p-4 border-b">
        <div className="flex justify-between mb-2">
          <span className="text-xs sm:text-sm text-gray-500">Profile views</span>
          <span className="text-xs sm:text-sm font-medium">142</span>
        </div>
        <div className="flex justify-between">
          <span className="text-xs sm:text-sm text-gray-500">Skill endorsements</span>
          <span className="text-xs sm:text-sm font-medium">74</span>
        </div>
      </div>
      
      <div className="p-3 sm:p-4">
        <h4 className="font-medium text-gray-800 mb-3 text-sm sm:text-base">My Dashboard</h4>
        <ul className="space-y-2">
          <li>
            <a href="#" className="flex items-center text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 p-2 rounded-md transition-colors text-xs sm:text-sm">
              <User size={16} className="mr-2 sm:mr-3" />
              <span>My Profile</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 p-2 rounded-md transition-colors text-xs sm:text-sm">
              <Briefcase size={16} className="mr-2 sm:mr-3" />
              <span>My Applications</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 p-2 rounded-md transition-colors text-xs sm:text-sm">
              <BookOpen size={16} className="mr-2 sm:mr-3" />
              <span>My Learning</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 p-2 rounded-md transition-colors text-xs sm:text-sm">
              <Award size={16} className="mr-2 sm:mr-3" />
              <span>My Certifications</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 p-2 rounded-md transition-colors text-xs sm:text-sm">
              <Users size={16} className="mr-2 sm:mr-3" />
              <span>My Network</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;