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
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex items-center mb-4">
        <TrendingUp size={20} className="text-indigo-600 mr-2" />
        <h2 className="text-lg font-semibold text-gray-800">Trending Skills</h2>
      </div>
      
      <div className="space-y-3">
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="w-6 h-6 flex items-center justify-center bg-indigo-100 text-indigo-600 rounded-full text-xs font-medium">
                {index + 1}
              </span>
              <span className="ml-3 text-gray-800">{skill.name}</span>
            </div>
            <span className="text-sm text-gray-500">{skill.count} people</span>
          </div>
        ))}
      </div>
      
      <div className="mt-4 pt-3 border-t border-gray-100">
        <a href="#" className="block text-center text-sm text-indigo-600 hover:text-indigo-800">
          Explore all skills
        </a>
      </div>
    </div>
  );
};

export default TrendingSkills;