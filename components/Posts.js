import React from "react";
import Post from "./Post.js";
import { Box } from "@mui/material";

export default function Posts({ posts }) {


  const displayPosts = () => {
    return posts.map((post) => (
      <Post post={post} />
    ));
  };

  return (
    <Box sx={{ display: 'grid' }}>
      {displayPosts()}
    </Box>
  );
}
