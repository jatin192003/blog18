import { useParams } from 'react-router-dom';
import { posts } from '../data/post';
import React from 'react';

export default function PostDetail() {
  const { slug } = useParams();
  const post = posts.find(p => p.slug === slug);

  if (!post) return <div className="p-4">Post not found</div>;

  return (
    <div className="p-4 max-w-2xl mx-auto bg-gray-900 text-gray-200">
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <img src={post.image} alt={post.title} className="mb-4 rounded" />
      <p>{post.content}</p>
    </div>
  );
}
