import PostCard from '@/components/PostCard';
import React from 'react';
import './Post.css';
async function loadPosts() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();
  console.log(data);
  return data;
}

async function PostId() {
  const posts = await loadPosts();
  return (
    <div className="grid">
      {posts.map((post) => (
        <PostCard post={post} key={post.id} />
      ))}
    </div>
  );
}

export default PostId;
