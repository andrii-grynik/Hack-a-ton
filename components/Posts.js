import React from "react";
import Post from "./Post.js";

export default function Posts({ posts }) {


  const displayPosts = () => {
   return  posts.map((post) => (     
    <Post post={post}  />   
    ))
  }

  return (
    <>
      <ul>
        {displayPosts()}        
      </ul>
    </>
  );
}
