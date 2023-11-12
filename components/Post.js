import React, { useEffect, useState } from "react";
import makeStyles from "@mui/styles/makeStyles";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Button from "/components/CustomButtons/Button.js";
import Card from "/components/Card/Card.js";
import sectionBlogInfoStyle from "/styles/jss/nextjs-material-kit-pro/pages/blogPostSections/sectionBlogInfoStyle.js";
import Image from 'next/image';
import Comments from "./Comments";
// import { getComments } from "../database/comments";


const useStyles = makeStyles(sectionBlogInfoStyle);

export default function Posts({ post }) {

  const [comments, setComments] = useState([]);
  const [updateComment, setUpdateComment] = useState(false);
  const { _id, title, description, author, category, available } = post;

  const [showComment, setShowComment] = React.useState(false);

  // //NEED HELP HERE
  // useEffect(async() => {
  //   console.log("here to fetch comment!, ", _id);
  //   console.log("here to fetch comment!, ", typeof(_id));

  //   let allComemnts = [];
  // try {
  //   const result = await getComments(_id);
  //   allComemnts = JSON.parse(JSON.stringify(result));
  // } catch (err) {
  //   allComemnts = [];
  //   console.log("err: ",err);
  //   }    

  //   console.log("allComemnts! ", allComemnts);
  //   setComments(allComemnts);
  //   setUpdateComment(false);
  // },[updateComment])
  //  //NEED HELP UNTIL HERE

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
                  <a href={"/user/" + author.id}><h4 className={classes.cardTitle}>{author.name}</h4></a>
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