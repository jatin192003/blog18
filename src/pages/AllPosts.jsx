import React, { useState } from 'react';
import { usePosts } from '../data/post';
import PostItem from '../components/PostItem';
import Loader from '../components/Loader';

export default function AllPosts() {
  const { posts, loading, error } = usePosts();
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 12;

  if (loading) return <Loader />;
  if (error) return <div>Error: {error}</div>;

  const totalPages = Math.ceil(posts.length / postsPerPage);
  const currentPosts = posts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">All Posts</h1>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {currentPosts.map(post => (
          <PostItem post={post} key={post._id} />
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <button
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 mx-1 bg-gray-700 text-gray-200 rounded hover:bg-gray-600 disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 mx-1 bg-gray-700 text-gray-200 rounded hover:bg-gray-600 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}