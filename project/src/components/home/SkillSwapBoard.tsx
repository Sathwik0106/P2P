import React from 'react';
import { ArrowLeftRight, Calendar, Clock } from 'lucide-react';
import { SkillSwapRequest } from '../../types';

interface SkillSwapBoardProps {
  requests: SkillSwapRequest[];
}

const SkillSwapBoard: React.FC<SkillSwapBoardProps> = ({ requests }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
    }).format(date);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Skill Swap Board</h2>
        <a href="#" className="text-sm text-indigo-600 hover:text-indigo-800">View all</a>
      </div>
      
      <div className="space-y-4">
        {requests.map((request) => (
          <div key={request.id} className="border-b border-gray-100 pb-4 last:border-b-0 last:pb-0">
            <div className="flex items-start space-x-3">
              <img src={request.user.avatar} alt={request.user.name} className="h-10 w-10 rounded-full" />
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800">{request.user.name}</h3>
                <div className="mt-2 flex items-center text-sm">
                  <span className="font-medium text-emerald-600">{request.skillToTeach}</span>
                  <ArrowLeftRight size={16} className="mx-2 text-gray-400" />
                  <span className="font-medium text-indigo-600">{request.skillToLearn}</span>
                </div>
                <p className="mt-2 text-sm text-gray-700">{request.description}</p>
                <div className="mt-2 flex flex-wrap gap-2 text-xs text-gray-500">
                  <span className="flex items-center">
                    <Calendar size={14} className="mr-1" />
                    Posted {formatDate(request.createdAt)}
                  </span>
                  <span className="flex items-center">
                    <Clock size={14} className="mr-1" />
                    {request.availability}
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-3 flex justify-end">
              <button className="text-sm bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1 rounded-md transition-colors">
                Connect
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-4 pt-3 border-t border-gray-100">
        <button className="w-full py-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-600 font-medium rounded-md transition-colors">
          Create Skill Swap Request
        </button>
      </div>
    </div>
  );
};

export default SkillSwapBoard;