"use client";

import { useEffect, useState } from "react";
import PostCard from "../components/post";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5253/api/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <div className="new-post">
        <div className="new-post-header">
          <img className="new-post-img" src="{{profilePhotoUrl}}" alt="Profile Picture"/>
          <input type="text" className="new-post-send-input" placeholder="Write something..." />

        </div>
        <button className="new-post-send-button">Submit</button>
      </div>

      <div className="posts-container">
        {posts.map((post: any) => (
          <PostCard key={post.id} post={post} likes={post.likes ?? []} />

        ))}
      </div>
    </>
  );
}
