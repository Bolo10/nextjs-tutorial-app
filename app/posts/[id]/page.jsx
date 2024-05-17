import React from 'react';
import PostPage from '../page';
import { Suspense } from 'react';
async function loadPost(postId) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
  );
  const data = await res.json();
  console.log(data);
  return data;
}

async function PostId({ params }) {
  console.log(params);
  const post = await loadPost(params.postId);
  return (
    <div>
      <h1>
        {post.id}
        {post.title}
      </h1>
      <p>{post.body}</p>
      <hr />

      <h3>Otras Publicaciones</h3>

      <Suspense fallback="Cargando Publicaciones">
        <PostPage />
      </Suspense>
    </div>
  );
}

export default PostId;
