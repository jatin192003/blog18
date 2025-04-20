import React from 'react';
import PostItem from '../components/PostItem';
import { usePosts } from '../data/post';
import Loader from '../components/Loader';

export default function Home() {
  const { posts, loading, error } = usePosts();

  if (loading) return <Loader />;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">18+ Articles</h1>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {posts.slice(0, 6).map(post => (
          <PostItem post={post} key={post._id} />
        ))}
      </div>
    </div>
  );
}
