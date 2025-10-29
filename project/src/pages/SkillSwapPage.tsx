import React from 'react';
import Sidebar from '../components/layout/Sidebar';
import { skillSwapRequests } from '../data/mockData';
import { ArrowLeftRight, Calendar, Clock } from 'lucide-react';

const SkillSwapPage: React.FC = () => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
    }).format(date);
  };

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
              <h1 className="text-2xl font-bold text-gray-800">Skill Swap   Board</h1>
              <button className="btn-primary">Create New Request</button>
            </div>
            
            <div className="mb-6">
              <div className="flex flex-col md:flex-row gap-4 mb-4">
                <input 
                  type="text" 
                  placeholder="Search skills..." 
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skillSwapRequests.concat(skillSwapRequests).map((request, index) => (
                <div key={`${request.id}-${index}`} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start space-x-3">
                    <img src={request.user.avatar} alt={request.user.name} className="h-12 w-12 rounded-full" />
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
            
            <div className="mt-6 flex justify-center">
              <nav className="flex items-center">
                <button className="px-3 py-1 border border-gray-300 rounded-l-md hover:bg-gray-50">Previous</button>
                <button className="px-3 py-1 border-t border-b border-gray-300 bg-indigo-50 text-indigo-600">1</button>
                <button className="px-3 py-1 border-t border-b border-gray-300 hover:bg-gray-50">2</button>
                <button className="px-3 py-1 border-t border-b border-gray-300 hover:bg-gray-50">3</button>
                <button className="px-3 py-1 border border-gray-300 rounded-r-md hover:bg-gray-50">Next</button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillSwapPage;