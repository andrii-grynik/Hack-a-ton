/*eslint-disable*/
import React, { useState, useEffect } from "react";

import Layout from "../components/Layout";
import Posts from "../components/Posts";
// nodejs library that concatenates classes
import classNames from "classnames";
import makeStyles from "@mui/styles/makeStyles";
// @mui/icons-material
import PhoneIcon from '@mui/icons-material/Phone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LanguageIcon from '@mui/icons-material/Language';
// core components
import { List, ListItem } from "@mui/material";
import Clearfix from "/components/Clearfix/Clearfix.js";

import profilePageStyle from "/styles/profilePageStyle.js";

const useStyles = makeStyles(profilePageStyle);

export default function ProfilePage({ postList }) {
  const [loggedIn, setLoggedIn] = useState(() => {
    let value = false;
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("loggedIn");
      if (saved !== null) {
        if (saved === "true") {
          value = true;
        }
      }
    }
    return value;
  });
  useEffect(() => {
    localStorage.setItem("loggedIn", JSON.stringify(loggedIn));
  }, [loggedIn]);

  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );

  return (
    <Layout>
      <div className={classes.container}>
        <div className={classes.profile}>
          <img
            src="/img/faces/christian.jpg"
            alt="..."
            className={imageClasses}
          />
          <div className={classes.name}>
            <h3 className={classes.title}>Christian Louboutin</h3>
            <List className={classes.list}>
              <ListItem className={classes.listItem}>
                <PhoneIcon className={classes.icon} />
                <p className={classes.contact}>+11111111111</p>
              </ListItem>
              <ListItem className={classes.listItem}>
                <AlternateEmailIcon className={classes.icon} />
                <p className={classes.contact}>christian.louboutin@gmail.com</p>
              </ListItem>
              <ListItem className={classes.listItem}>
                <LanguageIcon className={classes.icon} />
                <p className={classes.contact}>Calgary, AB</p>
              </ListItem>
            </List>
          </div>
        </div>
      </div>
      <Clearfix />

      <br />
      <Posts posts={postList} />
    </Layout>
  );
}

export async function getStaticProps() {
  let comments = [
    { author: "user3", details: "I like this!", time: "3 days ago" },
    { author: "user4", details: "Where can I collect this item from?", time: "4 mins ago" }];

  let postList = [
    { title: "Free Plastic!", description: "I have lots of free Plastic! Feel free to come collect it!", category: "Plastics", author: "user1", status: false, comments: comments },
  ];

  return {
    props: { postList },
  };
}