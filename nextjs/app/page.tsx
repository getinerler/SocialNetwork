"use client";

import { useEffect, useState } from "react";
import PostCard from "../components/post/post";
import "./globals.css";
import { getUser } from "../lib/auth";

export default function Home() {
  const [posts, setPosts] = useState([]);
  let profilePhotoUrl;
  const user = getUser();
  console.log(user);
  if (user && user.photo) {
    profilePhotoUrl = user.photo;
  }
  useEffect(() => {
    fetch("http://localhost:5253/api/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <div className="newPost">
        <div className="newPostHeader">
          <img className="newPostImg" src={profilePhotoUrl} alt="Profile Picture"/>
          <input type="text" className="newPostSendInput" placeholder="Write something..." />

        </div>
        <button className="newPostSendButton">Submit</button>
      </div>

      <div className="postsContainer">
        {posts.map((post: any) => (
          <PostCard key={post.id} post={post} likes={post.likes ?? []} />
        ))}
      </div>
    </>
  );
}
