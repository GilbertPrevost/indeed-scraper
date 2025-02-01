import React from 'react';
import { MapPin, Building2, DollarSign, Calendar } from 'lucide-react';
import { Job } from '../types/job';

interface JobCardProps {
  job: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-4 hover:shadow-xl transition-shadow duration-300">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-xl font-bold text-gray-800 mb-2">{job.title}</h2>
          <div className="flex items-center text-gray-600 mb-2">
            <Building2 className="mr-2 w-5 h-5" />
            <span>{job.company}</span>
          </div>
        </div>
        <a 
          href={job.url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-600 hover:underline"
        >
          View Details
        </a>
      </div>
      
      <div className="mt-4 space-y-2 text-gray-700">
        <div className="flex items-center">
          <MapPin className="mr-2 w-5 h-5 text-gray-500" />
          <span>{job.location}</span>
        </div>
        {job.salary && (
          <div className="flex items-center">
            <DollarSign className="mr-2 w-5 h-5 text-green-500" />
            <span>{job.salary}</span>
          </div>
        )}
        <div className="flex items-center">
          <Calendar className="mr-2 w-5 h-5 text-gray-500" />
          <span>Posted on {job.datePosted}</span>
        </div>
      </div>
      
      <p className="mt-4 text-gray-700 line-clamp-3">
        {job.description}
      </p>
    </div>
  );
};

export default JobCard;
