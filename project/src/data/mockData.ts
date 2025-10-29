import { User, Post, Job, SkillSwapRequest, Mentor, Exam } from '../types';

export const currentUser: User = {
  id: '1',
  name: 'Alex Johnson',
  email: 'alex@example.com',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  bio: 'Computer Science student passionate about web development and AI',
  role: 'student',
  skills: [
    { id: '1', name: 'JavaScript', level: 'advanced', endorsements: 24 },
    { id: '2', name: 'React', level: 'intermediate', endorsements: 18 },
    { id: '3', name: 'Python', level: 'advanced', endorsements: 32 },
  ],
  certifications: [
    { id: '1', name: 'Web Development Fundamentals', issuer: 'SkillSwap', issueDate: '2023-05-15', verified: true },
    { id: '2', name: 'Introduction to Machine Learning', issuer: 'Google', issueDate: '2023-08-10', verified: true },
  ],
  followers: 156,
  following: 89,
};

export const users: User[] = [
  currentUser,
  {
    id: '2',
    name: 'Sarah Miller',
    email: 'sarah@example.com',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    bio: 'Data Science enthusiast with a passion for AI and machine learning',
    role: 'student',
    skills: [
      { id: '1', name: 'Python', level: 'expert', endorsements: 45 },
      { id: '2', name: 'Data Analysis', level: 'advanced', endorsements: 38 },
      { id: '3', name: 'Machine Learning', level: 'intermediate', endorsements: 22 },
    ],
    followers: 210,
    following: 115,
  },
  {
    id: '3',
    name: 'Google',
    email: 'careers@google.com',
    avatar: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png',
    bio: 'Our mission is to organize the world\'s information and make it universally accessible and useful.',
    role: 'company',
    followers: 1500000,
    following: 0,
  },
  {
    id: '4',
    name: 'Microsoft',
    email: 'careers@microsoft.com',
    avatar: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31',
    bio: 'Empowering every person and every organization on the planet to achieve more.',
    role: 'company',
    followers: 1200000,
    following: 0,
  },
];

export const posts: Post[] = [
  {
    id: '1',
    author: users[1],
    content: 'Just completed my Machine Learning certification! Excited to apply these skills to real-world problems.',
    media: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    likes: 124,
    comments: 18,
    shares: 5,
    createdAt: '2023-10-15T14:30:00Z',
    type: 'achievement',
  },
  {
    id: '2',
    author: users[2],
    content: 'Google is looking for talented software engineering interns for Summer 2024! Apply now and join our team to work on cutting-edge technology.',
    likes: 356,
    comments: 42,
    shares: 78,
    createdAt: '2023-10-14T10:15:00Z',
    type: 'job',
  },
  {
    id: '3',
    author: currentUser,
    content: 'Looking for someone to teach me React Native in exchange for Python tutoring. Anyone interested?',
    likes: 45,
    comments: 12,
    shares: 3,
    createdAt: '2023-10-13T16:45:00Z',
    type: 'skill-swap',
  },
  {
    id: '4',
    author: users[3],
    content: 'Microsoft is sponsoring a new certification program on Azure Cloud Services. Free for the first 1000 students who register!',
    media: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    likes: 892,
    comments: 134,
    shares: 215,
    createdAt: '2023-10-12T09:20:00Z',
    type: 'general',
  },
];

export const jobs: Job[] = [
  {
    id: '1',
    title: 'Software Engineering Intern',
    company: users[2],
    location: 'Mountain View, CA (Remote Option)',
    type: 'internship',
    description: 'Join Google\'s engineering team for a 12-week internship program where you\'ll work on real products used by billions of people.',
    requirements: [
      'Currently pursuing a BS, MS or PhD in Computer Science or related field',
      'Experience with one or more programming languages (e.g., Java, C++, Python)',
      'Strong problem-solving and analytical skills',
    ],
    postedAt: '2023-10-10T08:00:00Z',
    deadline: '2023-12-15T23:59:59Z',
    applicants: 1245,
  },
  {
    id: '2',
    title: 'Data Science Intern',
    company: users[3],
    location: 'Redmond, WA (Hybrid)',
    type: 'internship',
    description: 'Work with Microsoft\'s data science team to analyze large datasets and develop machine learning models to solve real-world problems.',
    requirements: [
      'Currently pursuing a MS or PhD in Computer Science, Statistics, or related field',
      'Experience with Python, R, or similar data analysis tools',
      'Knowledge of machine learning algorithms and statistical methods',
    ],
    postedAt: '2023-10-08T10:30:00Z',
    deadline: '2023-12-01T23:59:59Z',
    applicants: 876,
  },
  {
    id: '3',
    title: 'Full Stack Developer',
    company: users[2],
    location: 'New York, NY',
    type: 'full-time',
    description: 'Develop and maintain web applications using modern JavaScript frameworks and backend technologies.',
    requirements: [
      'BS or MS in Computer Science or related field',
      'At least 3 years of experience with JavaScript, React, and Node.js',
      'Experience with cloud platforms (GCP preferred)',
    ],
    postedAt: '2023-10-05T14:15:00Z',
    deadline: '2023-11-30T23:59:59Z',
    applicants: 543,
  },
];

export const skillSwapRequests: SkillSwapRequest[] = [
  {
    id: '1',
    user: currentUser,
    skillToLearn: 'React Native',
    skillToTeach: 'Python',
    description: 'Looking to build mobile apps with React Native. Can teach Python fundamentals through advanced topics in exchange.',
    availability: 'Weekends, 2-3 hours per session',
    createdAt: '2023-10-13T16:45:00Z',
    status: 'open',
  },
  {
    id: '2',
    user: users[1],
    skillToLearn: 'JavaScript',
    skillToTeach: 'Data Analysis with Python',
    description: 'Want to improve my JavaScript skills. Can teach data analysis using pandas, numpy, and matplotlib in return.',
    availability: 'Weekday evenings, 1-2 hours per session',
    createdAt: '2023-10-11T19:20:00Z',
    status: 'open',
  },
];

export const topMentors: Mentor[] = [
  {
    id: '1',
    user: users[1],
    skills: [
      { id: '1', name: 'Python', level: 'expert', endorsements: 45 },
      { id: '2', name: 'Data Analysis', level: 'advanced', endorsements: 38 },
      { id: '3', name: 'Machine Learning', level: 'intermediate', endorsements: 22 },
    ],
    rating: 4.9,
    reviews: 78,
    students: 124,
  },
  {
    id: '2',
    user: {
      id: '5',
      name: 'David Chen',
      email: 'david@example.com',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      bio: 'Full Stack Developer with 5 years of experience. Passionate about teaching and mentoring.',
      role: 'student',
      followers: 345,
      following: 102,
    },
    skills: [
      { id: '1', name: 'JavaScript', level: 'expert', endorsements: 67 },
      { id: '2', name: 'React', level: 'expert', endorsements: 59 },
      { id: '3', name: 'Node.js', level: 'advanced', endorsements: 41 },
    ],
    rating: 4.8,
    reviews: 92,
    students: 156,
  },
];

export const upcomingExams: Exam[] = [
  {
    id: '1',
    title: 'Web Development Fundamentals',
    description: 'Test your knowledge of HTML, CSS, and JavaScript fundamentals.',
    duration: 60, // minutes
    passingScore: 70,
    certification: 'Web Development Fundamentals Certificate',
    sponsor: users[2],
  },
  {
    id: '2',
    title: 'Introduction to Machine Learning',
    description: 'Assess your understanding of basic machine learning concepts and algorithms.',
    duration: 90, // minutes
    passingScore: 75,
    certification: 'Machine Learning Fundamentals Certificate',
    sponsor: users[3],
  },
];

export const trendingSkills = [
  { name: 'React', count: 1245 },
  { name: 'Python', count: 1120 },
  { name: 'Machine Learning', count: 987 },
  { name: 'Data Analysis', count: 876 },
  { name: 'JavaScript', count: 765 },
];