import React from 'react';
import { Clock, Award } from 'lucide-react';
import { Exam } from '../../types';

interface UpcomingExamsProps {
  exams: Exam[];
}

const UpcomingExams: React.FC<UpcomingExamsProps> = ({ exams }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Upcoming Exams</h2>
        <a href="#" className="text-sm text-indigo-600 hover:text-indigo-800">View all</a>
      </div>
      
      <div className="space-y-4">
        {exams.map((exam) => (
          <div key={exam.id} className="border-b border-gray-100 pb-4 last:border-b-0 last:pb-0">
            <div className="flex items-start">
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800">{exam.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{exam.description}</p>
                <div className="mt-2 flex flex-wrap gap-2 text-xs text-gray-500">
                  <span className="flex items-center">
                    <Clock size={14} className="mr-1" />
                    {exam.duration} minutes
                  </span>
                  <span className="flex items-center">
                    <Award size={14} className="mr-1" />
                    {exam.certification}
                  </span>
                </div>
                {exam.sponsor && (
                  <div className="mt-2 flex items-center">
                    <span className="text-xs text-gray-500 mr-2">Sponsored by:</span>
                    <img src={exam.sponsor.avatar} alt={exam.sponsor.name} className="h-4 w-auto" />
                  </div>
                )}
              </div>
            </div>
            <div className="mt-3 flex justify-end">
              <button className="text-sm bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1 rounded-md transition-colors">
                Register
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingExams;