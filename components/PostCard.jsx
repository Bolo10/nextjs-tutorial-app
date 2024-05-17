'use client';

import Link from 'next/link';

// RCC react client component
function PostCard({ post }) {
  return (
    <div className="bg-gray-950 p-10">
      <Link href={`/posts/${post.id}`}>
        <h3 className="text-xl font-bold mb-4">
          {post.id}
          {post.title}
        </h3>
      </Link>
      <h3>
        {post.id} {post.title}
      </h3>
      <p className="text-slate-300">{post.body}</p>

      <button>Button </button>
    </div>
  );
}

export default PostCard;
