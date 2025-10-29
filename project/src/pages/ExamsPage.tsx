import React, { useEffect, useState } from 'react';
import Sidebar from '../components/layout/Sidebar';
import { getExams, getRegisteredExamIds, toggleRegisterExam } from '../services/exams';
import type { Exam } from '../types';
import { Clock, Award, Calendar, CheckCircle } from 'lucide-react';

const ExamsPage: React.FC = () => {
  const [exams, setExams] = useState<Exam[]>([]);
  const [registered, setRegistered] = useState<string[]>([]);

  useEffect(() => {
    setExams(getExams());
    setRegistered(getRegisteredExamIds());
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Sidebar */}
        <div className="lg:w-1/4">
          <Sidebar />
        </div>
        
        {/* Main Content */}
        <div className="lg:w-3/4">
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-gray-800">Exams & Certifications</h1>
              <div className="flex gap-2">
                <button className="btn-outline">My Certifications</button>
                <button className="btn-outline">Registered Exams</button>
              </div>
            </div>
            
            <div className="mb-6">
              <div className="flex flex-col md:flex-row gap-4 mb-4">
                <input 
                  type="text" 
                  placeholder="Search exams..." 
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
                <select className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
                  <option value="">All Categories</option>
                  <option value="programming">Programming</option>
                  <option value="design">Design</option>
                  <option value="business">Business</option>
                  <option value="language">Languages</option>
                </select>
                <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-md transition-colors">
                  Search
                </button>
              </div>
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Upcoming Exams</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {exams.map((exam, index) => (
                  <div key={`${exam.id}-${index}`} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
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
                          <span className="flex items-center">
                            <Calendar size={14} className="mr-1" />
                            Next session: Oct 30, 2023
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
                      <button
                        onClick={() => setRegistered(toggleRegisterExam(exam.id))}
                        className={`text-sm ${registered.includes(exam.id) ? 'bg-green-600 hover:bg-green-700' : 'bg-indigo-600 hover:bg-indigo-700'} text-white px-3 py-1 rounded-md transition-colors`}
                      >
                        {registered.includes(exam.id) ? 'Registered' : 'Register'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Your Certifications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-800">Web Development Fundamentals</h3>
                    <CheckCircle size={20} className="text-emerald-500" />
                  </div>
                  <p className="text-sm text-gray-600 mt-1">Issued by LitHive on May 15, 2023</p>
                  <div className="mt-3 flex justify-end">
                    <button className="text-sm border border-gray-300 hover:bg-gray-50 text-gray-700 px-3 py-1 rounded-md transition-colors">
                      View Certificate
                    </button>
                  </div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-800">Introduction to Machine Learning</h3>
                    <CheckCircle size={20} className="text-emerald-500" />
                  </div>
                  <p className="text-sm text-gray-600 mt-1">Issued by Google on August 10, 2023</p>
                  <div className="mt-3 flex justify-end">
                    <button className="text-sm border border-gray-300 hover:bg-gray-50 text-gray-700 px-3 py-1 rounded-md transition-colors">
                      View Certificate
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamsPage;