import { useState } from 'react';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AgeGate from './components/AgeGate';
import Home from './pages/Home';
import PostDetail from './pages/PostDetail';
import AllPosts from './pages/AllPosts';

function App() {
  const [isVerified, setIsVerified] = useState(false);

  if (!isVerified) return <AgeGate onVerified={() => setIsVerified(true)} />;

  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen" >
      <Router>
        <header className="bg-gray-900 text-gray-200 p-4 flex justify-between items-center">
          <Link to="/"><img src="https://res.cloudinary.com/dg0p7iygi/image/upload/v1744206334/hi6dwun45c6bhonjfxfe.svg" alt="" className="h-8" /></Link>
          <nav className="flex space-x-4">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/all-posts" className="hover:underline">All Posts</Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:_id" element={<PostDetail />} />
          <Route path="/all-posts" element={<AllPosts />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
