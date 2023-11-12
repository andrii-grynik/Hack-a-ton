import React, { useEffect } from "react";
import Layout from "../components/Layout";
import Posts from "../components/Posts";
import Categories from "../components/Categories";
import PostForm from "../components/custom/PostForm";
import axios from 'axios';
import { getPosts } from "../database/posts";

export default function Index({ postFromDb}) {
  const [currentCategory, setCurrentCategory] = React.useState(0);
  
  console.log("postFromDb after fetching: ", postFromDb);

  useEffect(() => {    
    //NEED TO WORK! Refresh list of post based on category selected
    const category = categories[currentCategory].toLocaleLowerCase();
    console.log("currentCategory: ",category );
    // const response = axios
    //   .get("/api/posts/", {
    //     params: {
    //       category: category
    //     }
    //   })
    //   .then((result) => {
    //   console.log("result: ", result);
    //   })
    //   .catch(err => console.error(err));   
  },[currentCategory])


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

  let postFromDb = [];
  try {
    const result = await getPosts();
    postFromDb = JSON.parse(JSON.stringify(result));    
  } catch (err) {
    postFromDb = [];
    console.log("err: ",err);
  }

  return {
    props: { postFromDb },
  };
}