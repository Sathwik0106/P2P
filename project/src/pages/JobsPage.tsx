import React from 'react';
import Sidebar from '../components/layout/Sidebar';
import { jobs } from '../data/mockData';
import { Briefcase, MapPin, Clock, Users } from 'lucide-react';

const JobsPage: React.FC = () => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
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
              <h1 className="text-2xl font-bold text-gray-800">Job Opportunities</h1>
              <div className="flex gap-2">
                <button className="btn-outline">Saved Jobs</button>
                <button className="btn-outline">Applied Jobs</button>
              </div>
            </div>
            
            <div className="mb-6">
              <div className="flex flex-col md:flex-row gap-4 mb-4">
                <input 
                  type="text" 
                  placeholder="Search jobs..." 
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
                <select className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
                  <option value="">All Job Types</option>
                  <option value="internship">Internship</option>
                  <option value="full-time">Full-time</option>
                  <option value="part-time">Part-time</option>
                  <option value="contract">Contract</option>
                </select>
                <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-md transition-colors">
                  Search
                </button>
              </div>
            </div>
            
            <div className="space-y-6">
              {jobs.concat(jobs).map((job, index) => (
                <div key={`${job.id}-${index}`} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start space-x-4">
                    <img src={job.company.avatar} alt={job.company.name} className="h-12 w-12 rounded-md" />
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <h3 className="font-semibold text-gray-800 text-lg">{job.title}</h3>
                        <button className="text-gray-400 hover:text-gray-600">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                          </svg>
                        </button>
                      </div>
                      <p className="text-sm text-gray-600">{job.company.name}</p>
                      <div className="mt-2 flex flex-wrap gap-2 text-xs text-gray-500">
                        <span className="flex items-center">
                          <MapPin size={14} className="mr-1" />
                          {job.location}
                        </span>
                        <span className="flex items-center">
                          <Briefcase size={14} className="mr-1" />
                          {job.type}
                        </span>
                        <span className="flex items-center">
                          <Clock size={14} className="mr-1" />
                          Posted {formatDate(job.postedAt)}
                        </span>
                        {job.applicants && (
                          <span className="flex items-center">
                            <Users size={14} className="mr-1" />
                            {job.applicants} applicants
                          </span>
                        )}
                      </div>
                      <p className="mt-3 text-sm text-gray-700">{job.description}</p>
                      <div className="mt-3">
                        <h4 className="text-sm font-medium text-gray-700">Requirements:</h4>
                        <ul className="mt-1 list-disc list-inside text-sm text-gray-600">
                          {job.requirements.map((req, i) => (
                            <li key={i}>{req}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-end">
                    <button className="text-sm bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md transition-colors">
                      Apply Now
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

export default JobsPage;