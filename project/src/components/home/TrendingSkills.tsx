import React from 'react';
import { TrendingUp } from 'lucide-react';

interface TrendingSkill {
  name: string;
  count: number;
}

interface TrendingSkillsProps {
  skills: TrendingSkill[];
}

const TrendingSkills: React.FC<TrendingSkillsProps> = ({ skills }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-3 sm:p-4">
      <div className="flex items-center mb-3 sm:mb-4">
        <TrendingUp size={16} className="text-indigo-600 mr-1 sm:mr-2" />
        <h2 className="text-base sm:text-lg font-semibold text-gray-800">Trending Skills</h2>
      </div>
      
      <div className="space-y-2 sm:space-y-3">
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center bg-indigo-100 text-indigo-600 rounded-full text-xs font-medium">
                {index + 1}
              </span>
              <span className="ml-2 sm:ml-3 text-gray-800 text-sm sm:text-base">{skill.name}</span>
            </div>
            <span className="text-xs sm:text-sm text-gray-500">{skill.count} people</span>
          </div>
        ))}
      </div>
      
      <div className="mt-3 sm:mt-4 pt-2 sm:pt-3 border-t border-gray-100">
        <a href="#" className="block text-center text-xs sm:text-sm text-indigo-600 hover:text-indigo-800">
          Explore all skills
        </a>
      </div>
    </div>
  );
};

export default TrendingSkills;