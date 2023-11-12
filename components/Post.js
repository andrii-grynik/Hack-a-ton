import React, { useEffect, useState } from "react";
import makeStyles from "@mui/styles/makeStyles";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Button from "/components/CustomButtons/Button.js";
import Card from "/components/Card/Card.js";
import sectionBlogInfoStyle from "/styles/jss/nextjs-material-kit-pro/pages/blogPostSections/sectionBlogInfoStyle.js";
import Image from 'next/image';
import Comments from "./Comments";
const axios = require('axios');
// import { getComments } from "../database/comments";


const useStyles = makeStyles(sectionBlogInfoStyle);

export default function Posts({ post }) {

  const [comments, setComments] = useState([]);
  const [updateComment, setUpdateComment] = useState(false);
  const { _id, title, description, author, category, available } = post;

  const [showComment, setShowComment] = React.useState(false);

  //NEED HELP HERE
  useEffect(() => {
    const postId = _id; // Replace this with your actual postId

    axios.get('/api/comments', {
      params: {
        postId: postId
      }
    })
      .then(response => {
        // Handle the response here
        console.log(response.data);
      })
      .catch(error => {
        // Handle errors here
        console.error(error);
      });

    setUpdateComment(false);
  }, [updateComment]);
  //NEED HELP UNTIL HERE

  const updatePostStatus = () => {
    //NEED TO WORK! make a database call to update status of post
    console.log("changing post status!");
    setUpdateComment(true);
  };


  const classes = useStyles();
  return (
    <>
      <div className={classes.section}>
        <GridContainer justifyContent="center">
          <GridItem xs={12} sm={10} md={8}>
            <Card plain profile className={classes.card}>
              <GridContainer>
                <GridItem xs={12} sm={4} md={4}>
                  <Image
                    src="/img/examples/bg2.jpg"
                    alt="Item for recycling"
                    width={500}
                    height={500}
                  />
                </GridItem>
                <GridItem xs={12} sm={8} md={8}>
                  <h4 className={classes.cardTitle}>{author.name}</h4>
                  <h3 className={classes.cardTitle}>{title}</h3>
                  <p className={classes.description}>
                    {description}
                  </p>
                  <p className={classes.description}>
                    {category}
                  </p>
                  <p className={classes.description}>
                    {!available && "Not "} Available
                  </p>
                  {/* {comments && 
                <Button 
                color="primary" 
                round className={classes.footerButtons}
                onClick={()=> setShowComment(!showComment)}
                >
                      {showComment ? "Hide" : "Show"} Comments
                  </Button>}
                 */}
                  {available && <Button
                    color="primary"
                    round className={classes.footerButtons}
                    onClick={updatePostStatus}
                  >
                    Mark As Unavailable
                    {/* Show "Mark As Unavailable" button only to the owner of the post  */}
                  </Button>}
                </GridItem>
              </GridContainer>
            </Card>
          </GridItem>
        </GridContainer>
      </div>

      {/* {showComment && <Comments comments={comments} />} */}
    </>

  );
}