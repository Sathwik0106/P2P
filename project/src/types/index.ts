export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  bio?: string;
  role: 'student' | 'company';
  skills?: Skill[];
  certifications?: Certification[];
  followers?: number;
  following?: number;
}

export interface Skill {
  id: string;
  name: string;
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  endorsements?: number;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  verified: boolean;
}

export interface Post {
  id: string;
  author: User;
  content: string;
  media?: string;
  likes: number;
  comments: number;
  shares: number;
  createdAt: string;
  type: 'achievement' | 'question' | 'general' | 'job' | 'skill-swap';
}

export interface Job {
  id: string;
  title: string;
  company: User;
  location: string;
  type: 'internship' | 'full-time' | 'part-time' | 'contract';
  description: string;
  requirements: string[];
  postedAt: string;
  deadline?: string;
  applicants?: number;
}

export interface SkillSwapRequest {
  id: string;
  user: User;
  skillToLearn: string;
  skillToTeach: string;
  description: string;
  availability: string;
  createdAt: string;
  status: 'open' | 'matched' | 'completed';
}

export interface Mentor {
  id: string;
  user: User;
  skills: Skill[];
  rating: number;
  reviews: number;
  students: number;
  hourlyRate?: number;
}

export interface Exam {
  id: string;
  title: string;
  description: string;
  duration: number;
  passingScore: number;
  certification: string;
  sponsor?: User;
}