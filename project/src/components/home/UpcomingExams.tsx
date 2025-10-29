import React, { useState } from 'react';
import { Clock, Award } from 'lucide-react';
import { Exam } from '../../types';
import { getRegisteredExamIds, toggleRegisterExam } from '../../services/exams';

interface UpcomingExamsProps {
  exams: Exam[];
}

const UpcomingExams: React.FC<UpcomingExamsProps> = ({ exams }) => {
  const [registered, setRegistered] = useState<string[]>(getRegisteredExamIds());
  return (
    <div className="bg-white rounded-lg shadow-md p-3 sm:p-4">
      <div className="flex justify-between items-center mb-3 sm:mb-4">
        <h2 className="text-base sm:text-lg font-semibold text-gray-800">Upcoming Exams</h2>
        <a href="#" className="text-xs sm:text-sm text-indigo-600 hover:text-indigo-800">View all</a>
      </div>
      
      <div className="space-y-3 sm:space-y-4">
        {exams.map((exam) => (
          <div key={exam.id} className="border-b border-gray-100 pb-3 sm:pb-4 last:border-b-0 last:pb-0">
            <div className="flex items-start">
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800 text-sm sm:text-base">{exam.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">{exam.description}</p>
                <div className="mt-2 flex flex-wrap gap-1 sm:gap-2 text-xs text-gray-500">
                  <span className="flex items-center">
                    <Clock size={12} className="mr-1" />
                    {exam.duration} minutes
                  </span>
                  <span className="flex items-center">
                    <Award size={12} className="mr-1" />
                    {exam.certification}
                  </span>
                </div>
                {exam.sponsor && (
                  <div className="mt-2 flex items-center">
                    <span className="text-xs text-gray-500 mr-1 sm:mr-2">Sponsored by:</span>
                    <img src={exam.sponsor.avatar} alt={exam.sponsor.name} className="h-3 w-auto sm:h-4" />
                  </div>
                )}
              </div>
            </div>
            <div className="mt-2 sm:mt-3 flex justify-end">
              <button
                onClick={() => setRegistered(toggleRegisterExam(exam.id))}
                className={`text-xs sm:text-sm ${registered.includes(exam.id) ? 'bg-green-600 hover:bg-green-700' : 'bg-indigo-600 hover:bg-indigo-700'} text-white px-2 sm:px-3 py-1 rounded-md transition-colors`}
              >
                {registered.includes(exam.id) ? 'Registered' : 'Register'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingExams;