import React, { useState } from 'react';
import { Briefcase, MapPin, Clock, Users } from 'lucide-react';
import { Job } from '../../types';
import { applyToJob, getAppliedJobIds } from '../../services/jobs';

interface JobListingsProps {
  jobs: Job[];
}

const JobListings: React.FC<JobListingsProps> = ({ jobs }) => {
  const [appliedIds, setAppliedIds] = useState<string[]>(getAppliedJobIds());
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    }).format(date);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Recent Job Opportunities</h2>
        <a href="#" className="text-sm text-indigo-600 hover:text-indigo-800">View all</a>
      </div>
      
      <div className="space-y-4">
        {jobs.map((job) => (
          <div key={job.id} className="border-b border-gray-100 pb-4 last:border-b-0 last:pb-0">
            <div className="flex items-start space-x-3">
              <img src={job.company.avatar} alt={job.company.name} className="h-10 w-10 rounded-md" />
              <div>
                <h3 className="font-semibold text-gray-800">{job.title}</h3>
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
              </div>
            </div>
            <div className="mt-3 flex justify-end">
              <button
                onClick={() => setAppliedIds(applyToJob(job.id))}
                className={`text-sm ${appliedIds.includes(job.id) ? 'bg-green-600 hover:bg-green-700' : 'bg-indigo-600 hover:bg-indigo-700'} text-white px-3 py-1 rounded-md transition-colors`}
              >
                {appliedIds.includes(job.id) ? 'Applied' : 'Apply Now'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobListings;