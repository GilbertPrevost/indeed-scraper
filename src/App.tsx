import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import JobCard from './components/JobCard';
import { mockJobs } from './data/mockJobs';
import { Job } from './types/job';

function App() {
  const [jobs, setJobs] = useState<Job[]>(mockJobs);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>(mockJobs);

  const handleSearch = (query: string, location: string) => {
    const filtered = jobs.filter(job => 
      job.title.toLowerCase().includes(query.toLowerCase()) &&
      job.location.toLowerCase().includes(location.toLowerCase())
    );
    setFilteredJobs(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            Job Search Platform
          </h1>
          <p className="text-xl text-gray-600">
            Find your next career opportunity
          </p>
        </header>

        <SearchBar onSearch={handleSearch} />

        <div>
          {filteredJobs.length === 0 ? (
            <div className="text-center text-gray-600 py-12">
              No jobs found. Try a different search.
            </div>
          ) : (
            filteredJobs.map(job => (
              <JobCard key={job.id} job={job} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
