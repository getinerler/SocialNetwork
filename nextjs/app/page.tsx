"use client";

import { useEffect, useState } from "react";
import PostCard from "../components/post/post";
import "./globals.css";
import { getUser, isLoggedIn } from "../lib/auth";
import { user } from "@shared/types/user";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");

  let profilePhotoUrl;
  const user = getUser();
  console.log(user);
  if (user && user.photo) {
    profilePhotoUrl = user.photo;
  }
  useEffect(() => {
    getPosts();
  }, []);

  function getPosts() {
    let url = "http://localhost:5253/api/posts";
    if (isLoggedIn()) {
      let user = getUser();
      url += `?userId=${user?.id}`;
    } 
    
    fetch(url)
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error(error));
  }

  async function sendPost() {
    let text = (document.querySelector(".newPostSendInput") as HTMLInputElement).value;
    let user: user = JSON.parse(localStorage.getItem("user")?.toString() ?? "{}");
    let model = { id: user.id, text: text };
    try {
      const response = await fetch("http://localhost:5253/api/posts/saveNewPost", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify(model),
      });

      if (!response.ok) {
          setError(response.statusText || "An unexpected error occurred.");
          return;
      }
      getPosts();
    } catch (error) {
      setError(error instanceof Error ? error.message : "An unexpected error occurred.");
    }
  }

  return (
    <>
      <div className="newPost">
        <div className="newPostHeader">
          <img className="newPostImg" src={profilePhotoUrl} alt="Profile Picture"/>
          <input type="text" className="newPostSendInput" placeholder="Write something..." />

        </div>
        <button onClick={() => sendPost()} className="newPostSendButton">Submit</button>
      </div>

      <div className="postsContainer">
        {posts.map((post: any) => (
          <PostCard key={post.id} post={post} likes={post.likes ?? []} />
        ))}
      </div>
    </>
  );
}
