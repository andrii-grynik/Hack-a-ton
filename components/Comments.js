import React, { useEffect, useState } from "react";
import makeStyles from "@mui/styles/makeStyles";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Button from "/components/CustomButtons/Button.js";
import sectionBlogInfoStyle from "/styles/jss/nextjs-material-kit-pro/pages/blogPostSections/sectionBlogInfoStyle.js";
import Media from "/components/Media/Media.js";
import CustomInput from "/components/CustomInput/CustomInput.js";
import axios from "axios";

const useStyles = makeStyles(sectionBlogInfoStyle);

export default function Comments({ comments, postId }) {
  const classes = useStyles();
  // console.log("got the comments! ",comments)
  const [newComment, setNewComment] = React.useState("");
  const [commentsList, setCommentsList] = useState(comments);
  const [commentsLength, setCommentsLength] = useState(comments.length);

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  //NEED HELP HERE
  const handleCommentSubmit = () => {
    const commentData = {
      postId: postId,
      text: newComment,
      author: {
        id: 1,
        name: 'John Doe',
        profileImage: 'profileImageUrl',
        itemsDonated: 20,
        itemsReceived: 10,
        points: 200
      }
    };
    console.log("adding comment! ", commentData);
    setCommentsList(prevComments => [...prevComments, commentData]);
    setCommentsLength(commentsList.length + 1);

    axios.post('/api/comments', commentData)
      .then(response => {
        // Handle the response here
        console.log(response.data);
        console.log(commentsList);

      })
      .catch(error => {
        // Handle errors here
        console.error("error fetching comments:", error);
      });
    //NEED TO WORK! make a database call to add new comment to the post

    // if (newComment.trim() !== "") {
    //   const updatedPosts = [...posts];
    //   updatedPosts[postIndex].comments.push(newComment.trim());
    //   setPosts(updatedPosts);
    //   setNewComment("");
    // }
  };
  //NEED HELP UNTIL HERE
  const commentsListElement = commentsList.map(({ author, text }) => (
    <Media
      avatar="/img/faces/card-profile4-square.jpg"
      title={
        <span>
          {author.name}
          {/* <small>· {time}</small> */}
        </span>
      }
      body={
        <p className={classes.color555}>
          {text}
        </p>
      }
    />
  ));

  return (

    <div className={classes.section}>
      <GridContainer justifyContent="center">
        <GridItem xs={12} sm={10} md={8}>
          <div>
            <h3 className={classes.title}>{commentsLength} Comments</h3>
            {commentsListElement}
          </div>
          <Media
            avatar="/img/faces/card-profile6-square.jpg"
            body={
              <CustomInput
                labelText=" Write your comment..."
                id="nice"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  multiline: true,
                  rows: 1,
                }}
                updateChanges={handleCommentChange}
              />
            }
            footer={
              <Button
                onClick={handleCommentSubmit}
                color="primary"
                round
                className={classes.footerButtons}
              >
                Post comment
              </Button>
            }
          />
        </GridItem>
      </GridContainer>
    </div>
  );
}