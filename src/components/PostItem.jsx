import { Link } from 'react-router-dom';
import React from 'react';

export default function PostItem({ post }) {
  return (
    <Link to={`/post/${post.slug}`} key={post.id} className="bg-gray-800 rounded shadow p-3 hover:shadow-lg transition text-gray-200">
      <img src={post.image} alt={post.title} className="w-full h-48 object-cover mb-2 rounded" />
      <h2 className="text-xl font-semibold">{post.title}</h2>
    </Link>
  );
}
