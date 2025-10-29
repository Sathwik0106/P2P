import React from 'react';
import { User, Briefcase, BookOpen, Award, Users } from 'lucide-react';
import { currentUser } from '../../data/mockData';

const Sidebar: React.FC = () => {
  return (
    <div className="hidden lg:block w-64 bg-white shadow-md rounded-lg overflow-hidden h-fit sticky top-20">
      <div className="p-4 border-b">
        <div className="flex items-center space-x-3">
          <img src={currentUser.avatar} alt={currentUser.name} className="h-12 w-12 rounded-full" />
          <div>
            <h3 className="font-semibold text-gray-800">{currentUser.name}</h3>
            <p className="text-sm text-gray-500">{currentUser.bio?.substring(0, 30)}...</p>
          </div>
        </div>
      </div>
      
      <div className="p-4 border-b">
        <div className="flex justify-between mb-2">
          <span className="text-sm text-gray-500">Profile views</span>
          <span className="text-sm font-medium">142</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-gray-500">Skill endorsements</span>
          <span className="text-sm font-medium">74</span>
        </div>
      </div>
      
      <div className="p-4">
        <h4 className="font-medium text-gray-800 mb-3">My Dashboard</h4>
        <ul className="space-y-2">
          <li>
            <a href="#" className="flex items-center text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 p-2 rounded-md transition-colors">
              <User size={18} className="mr-3" />
              <span className="text-sm">My Profile</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 p-2 rounded-md transition-colors">
              <Briefcase size={18} className="mr-3" />
              <span className="text-sm">My Applications</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 p-2 rounded-md transition-colors">
              <BookOpen size={18} className="mr-3" />
              <span className="text-sm">My Learning</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 p-2 rounded-md transition-colors">
              <Award size={18} className="mr-3" />
              <span className="text-sm">My Certifications</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 p-2 rounded-md transition-colors">
              <Users size={18} className="mr-3" />
              <span className="text-sm">My Network</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;