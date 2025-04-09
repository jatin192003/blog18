import { posts } from '../data/post';
import React from 'react';
import PostItem from '../components/PostItem';

export default function Home() {
  return (
    <div className="p-4 h-screen">
      <h1 className="text-3xl font-bold mb-4">18+ Articles</h1>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        {posts.slice(0, 6).map(post => (
          <PostItem post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
}
