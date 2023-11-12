import React from "react";
import Layout from "../components/Layout";
import Posts from "../components/Posts";
import Categories from "../components/Categories";
import PostForm from "../components/custom/PostForm";
import { getPosts } from "../database/posts";
import { getComments } from "../database/comments";

export default function Index({ postFromDb,allComemnts}) {
  const [currentCategory, setCurrentCategory] = React.useState(0);

  //NEED TO WORK! Refresh list of post based on category selected
  console.log("currentCategory: ", currentCategory);

  console.log("postFromDb after fetching: ", postFromDb);
  console.log("allComemnts after fetching: ", allComemnts);

  return (
    <Layout>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '-3rem' }}>
        <PostForm />
      </div>
      <Categories updateCurrentCategory={setCurrentCategory} />
      <Posts posts={postFromDb} />
    </Layout>
  );
}

const categories = ["All", "Food", "Clothing", "Furniture", "Electronic", "Others"];

export async function getStaticProps() {
  //NEED TO WORK! Replace with database retrieval of post & comment
  //get all Post
  //map each post
  //get Comment for each post
  
  let postFromDb = [];
  let allComemnts = [];
  try {
    const result = await getPosts();
    postFromDb = JSON.parse(JSON.stringify(result));

    const result2 = await getComments(postFromDb[0]._id);
      allComemnts = JSON.parse(JSON.stringify(result2));
    
  } catch (err) {
    postFromDb = [];
    console.log("err: ",err);
  }

  // let comments = [
  //   { author: "user3", details: "I like this!", time: "3 days ago" },
  //   { author: "user4", details: "Where can I collect this item from?", time: "4 mins ago" }];

  // let comments1 = [
  //   { author: "user3", details: "I like this!", time: "3 days ago" }];

  // let postList = [
  //   { title: "Free Plastic!", description: "I have lots of free Plastic! Feel free to come collect it!", category: "Plastics", author: "user1", status: false, comments: comments },
  //   { title: "Free Food!", description: "I have lots of free food! Feel free to come collect it!", category: "Food", author: "user2", status: true },
  //   { title: "Free Food!", description: "I have lots of free food! Feel free to come collect it!", category: "Food", author: "user2", status: true, comments: comments1 }];

  return {
    props: { postFromDb,allComemnts },
  };
}