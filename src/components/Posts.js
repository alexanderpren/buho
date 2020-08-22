import React, { useState, useEffect } from "react";

export default function Posts({ getPosts, listPosts }) {
  useEffect(() => {
    getPosts();
  });

  return (
    <div>
      <h1>holaaaaa posts</h1>
    </div>
  );
}
