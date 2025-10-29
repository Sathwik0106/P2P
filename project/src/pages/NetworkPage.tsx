import React from 'react';
import Sidebar from '../components/layout/Sidebar';
import { users } from '../data/mockData';

const NetworkPage: React.FC = () => {
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
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Your Network</h1>
            <p className="text-gray-600 mb-6">Connect with students, mentors, and companies to expand your learning and career opportunities.</p>
            
            <div className="flex flex-wrap gap-4 mb-6">
              <button className="btn-primary">Find Connections</button>
              <button className="btn-outline">Import Contacts</button>
              <button className="btn-outline">Invitations (3)</button>
            </div>
            
            <div className="border-t border-gray-200 pt-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">People you may know</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {users.filter(user => user.id !== '1').map(user => (
                  <div key={user.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      <img src={user.avatar} alt={user.name} className="h-12 w-12 rounded-full" />
                      <div>
                        <h3 className="font-semibold text-gray-800">{user.name}</h3>
                        <p className="text-sm text-gray-500">{user.bio?.substring(0, 60)}...</p>
                        <div className="mt-2">
                          <button className="text-sm bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1 rounded-md transition-colors mr-2">
                            Connect
                          </button>
                          <button className="text-sm border border-gray-300 hover:bg-gray-50 text-gray-700 px-3 py-1 rounded-md transition-colors">
                            Ignore
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NetworkPage;