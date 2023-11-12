import React, { useEffect, useState} from "react";
import Layout from "../components/Layout";
import Posts from "../components/Posts";
import Categories from "../components/Categories";
import PostForm from "../components/custom/PostForm";
import axios from 'axios';
import { getPosts } from "../database/posts";
import makeStyles from '@mui/styles/makeStyles';
import styles from "/styles/jss/nextjs-material-kit-pro/pages/ecommerceSections/blogStyle.js";
import GridContainer from "/components/Grid/GridContainer.js";

import PropTypes from "prop-types";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import FormatAlignLeft from "@mui/icons-material/FormatAlignLeft";
import Favorite from "@mui/icons-material/Favorite";
import Header from "/components/Header/Header.js";
import HeaderLinks from "/components/Header/HeaderLinks.js";
import Parallax from "/components/Parallax/Parallax.js";
import Footer from "/components/Footer/Footer.js";
import GridItem from "/components/Grid/GridItem.js";
import Button from "/components/CustomButtons/Button.js";
// sections for this page
import SectionText from "/pages-sections/blog-post/SectionText.js";
import SectionBlogInfo from "/pages-sections/blog-post/SectionBlogInfo.js";
import SectionComments from "/pages-sections/blog-post/SectionComments.js";
import SectionSimilarStories from "/pages-sections/blog-post/SectionSimilarStories.js";

import gpt from "./gpt";

import blogPostPageStyle from "/styles/jss/nextjs-material-kit-pro/pages/blogPostPageStyle.js";


const useStyles = makeStyles(styles);
const useStyles2 = makeStyles(blogPostPageStyle);

export default function Index({ postFromDb}) {

  //chat gpt stuff
  const [response, setResponse] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const prompt = `What are some best practices for living a sustainable life?`;

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
      const responseText = data.choices[0].text;

      setResponse(responseText);
    } catch (error) {
      console.error("Error:", error);
      setResponse(`Failed to get a response. Error: ${error.message}`);
    }
  };

  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });

  //post stuff
  const classes = useStyles();
  const [currentCategory, setCurrentCategory] = React.useState(0);
  const [allPost, setAllPost] = useState([]);
  
  
  useEffect(() => {    
    
    //NEED TO WORK! Refresh list of post based on category selected
    const category = categories[currentCategory].toLocaleLowerCase();
    
  console.log("Fetching daata for : ", category);
    const response = axios
      .get("/api/posts/", {
        params: {
          category: category == "all"? "": category
        }
      })
      .then((result) => {

      console.log("category fetch result: ", result.data);
        setAllPost(result.data);
        if (allPost.length<=0) {
          console.log("should show error")
        }
      })
      .catch(err => console.error(err));   
  },[currentCategory])


  return (
    <Layout>
    <div>      
      {/* <Parallax image="/img/sus.png" filter="dark"> */}
        <div className={classes.container}>
          <GridContainer justifyContent="center">
            <GridItem md={8} className={classes.textCenter}>
              <h1 className={classes.title}>Dont let it go to Waste!</h1>
              <h4 className={classes.subtitle}>If you want to learn new way to stay substainable click below!</h4>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
               <Button onClick={handleSubmit}  className={classes.floatRight}>Get Sustainable Living Tips</Button>
                {response && (
                  <div
                    style={{
                      maxWidth: "600px",
                      padding: "20px",
                      border: "1px solid #ddd",
                      borderRadius: "5px",
                      backgroundColor: "rgba(0, 0, 0, 0.7)", // semi-transparent dark background
                      color: "white",
                      backdropFilter: "blur(10px)", // blur effect on the background
                      // Additional styles for better text visibility and layout
                      boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
                      textAlign: "center",
                      margin: "auto",
                      marginTop: "20px",
                    }}
                  >
                    <strong>Hello there!</strong>
                    <p>{response}</p>
                  </div>
                )}
              </div>
            </GridItem>
          </GridContainer>
        </div>
      {/* </Parallax> */}

      <div className={classes.main}>
        <div className={classes.container}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '-3rem' }}>
            <PostForm />
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
          </div>
          <SectionSimilarStories />
        </div>          
      </div>      
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
    console.log("err: ",err);
  }

  return {
    props: { postFromDb },
  };
}