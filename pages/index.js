import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Posts from "../components/Posts";
import Categories from "../components/Categories";
import PostForm from "../components/custom/PostForm";
import axios from 'axios';
import { getPosts } from "../database/posts";
import classNames from "classnames";
import makeStyles from '@mui/styles/makeStyles';
import styles from "/styles/jss/nextjs-material-kit-pro/pages/ecommerceSections/blogStyle.js";
import GridContainer from "/components/Grid/GridContainer.js";

const useStyles = makeStyles(styles);
export default function Index({ postFromDb }) {
  const classes = useStyles();
  const [currentCategory, setCurrentCategory] = React.useState(0);
  const [allPost, setAllPost] = useState([]);

  const addPost = (post) => {
    console.log(post);
    const newPosts = [post, ...allPost];
    setAllPost(newPosts);
  };

  useEffect(() => {

    //NEED TO WORK! Refresh list of post based on category selected
    const category = categories[currentCategory].toLocaleLowerCase();

    console.log("Fetching data for : ", category);
    const response = axios
      .get("/api/posts/", {
        params: {
          category: category == "all" ? "" : category
        }
      })
      .then((result) => {

        console.log("category fetch result: ", result.data);
        setAllPost(result.data);
        if (allPost.length <= 0) {
          console.log("should show error");
        }
      })
      .catch(err => console.error(err));
  }, [currentCategory]);


  return (
    <Layout>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '-3rem' }}>
        <PostForm addPost={addPost} />
      </div>
      <Categories updateCurrentCategory={setCurrentCategory} />
      <Posts posts={allPost} />
      {allPost.length <= 0 &&
        <GridContainer justifyContent="center">
          <h4 justifyContent="center"
            className={classes.cardTitle}
          >
            There are no posts in this category
          </h4>
        </GridContainer>}
    </Layout>
  );
}

const categories = ["All", "Food", "Clothing", "Furniture", "Electronic", "Other"];

export async function getStaticProps() {

  let postFromDb = [];
  try {
    const result = await getPosts();
    postFromDb = JSON.parse(JSON.stringify(result));
  } catch (err) {
    postFromDb = [];
    console.log("err: ", err);
  }

  return {
    props: { postFromDb },
  };
}