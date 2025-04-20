import { Link } from 'react-router-dom';
import React from 'react';

export default function PostItem({ post }) {
  return (
    <Link to={`/post/${post._id}`} key={post._id} className="bg-gray-800 rounded shadow p-3 hover:shadow-lg transition text-gray-200">
      <div className="aspect-w-16 aspect-h-9 mb-2">
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-full object-cover rounded"
          loading="lazy"
        />
      </div>
      <h2 className="text-lg font-semibold">{post.title}</h2>
    </Link>
  );
}
