import { useState } from 'react';
import { Link } from 'react-router-dom';
import { posts } from '../data/post';
import React from 'react';

export default function AllPosts() {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const totalPages = Math.ceil(posts.length / postsPerPage);
  const currentPosts = posts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">All Posts</h1>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        {currentPosts.map(post => (
          <Link to={`/post/${post.slug}`} key={post.id} className="bg-gray-800 rounded shadow p-4 hover:shadow-lg transition text-gray-200">
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover mb-2 rounded" />
            <h2 className="text-xl font-semibold">{post.title}</h2>
          </Link>
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