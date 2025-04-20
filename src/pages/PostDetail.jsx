import { useParams } from 'react-router-dom';
import { usePosts } from '../data/post';
import React from 'react';
import Loader from '../components/Loader';
import AdsteraaBanner3 from '../ads/AdsterraBanner3';

export default function PostDetail() {
  const { _id } = useParams();
  const { posts, loading, error } = usePosts();

  if (loading) return <Loader />;
  if (error) return <div className="p-4">Error: {error}</div>;

  const post = posts.find(p => p._id === _id);

  if (!post) return <div className="p-4">Post not found</div>;

  const renderContent = (content) => {
    return content.split('\n').map((line, index) => {
      const linkRegex = /(https?:\/\/[^\s]+)/g;
      const parts = line.split(linkRegex);

      return (
        <p key={index} className="mb-4">
          {parts.map((part, i) =>
            linkRegex.test(part) ? (
              <a
                key={i}
                href={part}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                {part}
              </a>
            ) : (
              part
            )
          )}
        </p>
      );
    });
  };

  return (
    <div className="p-4 max-w-2xl mx-auto bg-gray-900 text-gray-200">
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <img src={post.imageUrl} alt={post.title} className="mb-4 rounded" />
      <AdsteraaBanner3/>
      <div>{renderContent(post.content)}</div>
    </div>
  );
}
