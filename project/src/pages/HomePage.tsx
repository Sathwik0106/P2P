import React, { useEffect, useState } from 'react';
import Sidebar from '../components/layout/Sidebar';
import CreatePost from '../components/home/CreatePost';
import Feed from '../components/home/Feed';
import JobListings from '../components/home/JobListings';
import SkillSwapBoard from '../components/home/SkillSwapBoard';
import TrendingSkills from '../components/home/TrendingSkills';
import TopMentors from '../components/home/TopMentors';
import UpcomingExams from '../components/home/UpcomingExams';
import { jobs, skillSwapRequests, trendingSkills, topMentors, upcomingExams } from '../data/mockData';
import { getPosts } from '../services/posts';
import type { Post } from '../types';

const HomePage: React.FC = () => {
  const [feedPosts, setFeedPosts] = useState<Post[]>([]);

  useEffect(() => {
    setFeedPosts(getPosts());
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Sidebar */}
        <div className="lg:w-1/4">
          <Sidebar />
        </div>
        
        {/* Main Content */}
        <div className="lg:w-2/4 space-y-6">
          <CreatePost onPostCreated={() => setFeedPosts(getPosts())} />
          <Feed posts={feedPosts} onChange={setFeedPosts} />
        </div>
        
        {/* Right Sidebar */}
        <div className="lg:w-1/4 space-y-6">
          <JobListings jobs={jobs.slice(0, 2)} />
          <SkillSwapBoard requests={skillSwapRequests} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
            <TrendingSkills skills={trendingSkills} />
            <TopMentors mentors={topMentors} />
            <UpcomingExams exams={upcomingExams} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;