import React, { useState } from 'react';
import { Search, MapPin, Filter } from 'lucide-react';

interface SearchBarProps {
  onSearch: (query: string, location: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [jobQuery, setJobQuery] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(jobQuery, location);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
      <form onSubmit={handleSubmit} className="flex space-x-4">
        <div className="flex-grow relative">
          <input
            type="text"
            placeholder="Job title, keywords, or company"
            value={jobQuery}
            onChange={(e) => setJobQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
        
        <div className="flex-grow relative">
          <input
            type="text"
            placeholder="City, state, zip or remote"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
        
        <button 
          type="submit" 
          className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors flex items-center"
        >
          <Search className="mr-2" /> Search
        </button>
        
        <button 
          type="button" 
          className="bg-gray-100 text-gray-700 px-4 py-3 rounded-md hover:bg-gray-200 transition-colors flex items-center"
        >
          <Filter className="mr-2" /> Filters
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
