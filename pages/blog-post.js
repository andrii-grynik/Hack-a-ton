/*eslint-disable*/ import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
import makeStyles from "@mui/styles/makeStyles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
// @mui/icons-material
import FormatAlignLeft from "@mui/icons-material/FormatAlignLeft";
import Favorite from "@mui/icons-material/Favorite";
// core components
import Header from "/components/Header/Header.js";
import HeaderLinks from "/components/Header/HeaderLinks.js";
import Parallax from "/components/Parallax/Parallax.js";
import Footer from "/components/Footer/Footer.js";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Button from "/components/CustomButtons/Button.js";
// sections for this page
import SectionText from "/pages-sections/blog-post/SectionText.js";
import SectionBlogInfo from "/pages-sections/blog-post/SectionBlogInfo.js";
import SectionComments from "/pages-sections/blog-post/SectionComments.js";
import SectionSimilarStories from "/pages-sections/blog-post/SectionSimilarStories.js";

import gpt from "./gpt";

import blogPostPageStyle from "/styles/jss/nextjs-material-kit-pro/pages/blogPostPageStyle.js";

const useStyles = makeStyles(blogPostPageStyle);

export default function BlogPostPage() {
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
  const classes = useStyles();
  return (
    <div>
      <Header
        brand="NextJS Material Kit PRO"
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 300,
          color: "info",
        }}
      />
      <Parallax image="/img/sus.png" filter="dark">
        <div className={classes.container}>
          <GridContainer justifyContent="center">
            <GridItem md={8} className={classes.textCenter}>
              <h1 className={classes.title}>Dont let it go to Waste!</h1>
              <h4 className={classes.subtitle}>Share, Donate, Trade, LOVE!</h4>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <form onSubmit={handleSubmit} style={{ margin: "20px" }}>
                  <button type="submit">Get Sustainable Living Tips</button>
                </form>
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
      </Parallax>
      <div className={classes.main}>
        <div className={classes.container}>
          <SectionBlogInfo />
          {/* <SectionComments /> */}
        </div>
      </div>
      <SectionSimilarStories />

      <Footer
        content={
          <div>
            <div className={classes.left}>
              <List className={classes.list}>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.creative-tim.com/?ref=njsmkp-blog-post"
                    target="_blank"
                    className={classes.block}
                  >
                    Creative Tim
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.creative-tim.com/presentation?ref=njsmkp-blog-post"
                    target="_blank"
                    className={classes.block}
                  >
                    About us
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://blog.creative-tim.com/?ref=njsmkp-blog-post"
                    target="_blank"
                    className={classes.block}
                  >
                    Blog
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.creative-tim.com/license?ref=njsmkp-blog-post"
                    target="_blank"
                    className={classes.block}
                  >
                    Licenses
                  </a>
                </ListItem>
              </List>
            </div>
            <div className={classes.right}>
              &copy; {1900 + new Date().getYear()} , made with{" "}
              <Favorite className={classes.icon} /> by{" "}
              <a
                href="https://www.creative-tim.com?ref=njsmkp-blog-post"
                target="_blank"
              >
                Creative Tim
              </a>{" "}
              for a better web.
            </div>
          </div>
        }
      />
    </div>
  );
}
