import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NetworkPage from './pages/NetworkPage';
import SkillSwapPage from './pages/SkillSwapPage';
import JobsPage from './pages/JobsPage';
import ExamsPage from './pages/ExamsPage';
import Navbar from './components/layout/Navbar';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/network" element={<NetworkPage />} />
          <Route path="/skill-swap" element={<SkillSwapPage />} />
          <Route path="/jobs" element={<JobsPage />} />
          <Route path="/exams" element={<ExamsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;