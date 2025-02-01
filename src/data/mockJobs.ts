import { Job } from '../types/job';

export const mockJobs: Job[] = [
  {
    id: '1',
    title: 'Senior Software Engineer',
    company: 'Tech Innovations Inc.',
    location: 'San Francisco, CA',
    salary: '$150,000 - $180,000',
    description: 'We are seeking a talented Senior Software Engineer to join our cutting-edge team...',
    datePosted: '2024-02-15',
    url: 'https://example.com/job/1'
  },
  {
    id: '2',
    title: 'Frontend React Developer',
    company: 'WebSolutions LLC',
    location: 'Remote',
    salary: '$120,000 - $145,000',
    description: 'Looking for an experienced React developer to build modern web applications...',
    datePosted: '2024-02-10',
    url: 'https://example.com/job/2'
  },
  // Add more mock jobs
];
