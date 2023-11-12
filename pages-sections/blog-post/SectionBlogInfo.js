import React, { useState } from "react";
import makeStyles from "@mui/styles/makeStyles";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Card from "/components/Card/Card.js";
import CardAvatar from "/components/Card/CardAvatar.js";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import sectionBlogInfoStyle from "/styles/jss/nextjs-material-kit-pro/pages/blogPostSections/sectionBlogInfoStyle.js";

const useStyles = makeStyles(sectionBlogInfoStyle);

const mockPosts = [
  {
    name: "Alice Johnson",
    postText: "Loving the new coffee shop in town! Best latte ever.",
    imageUrl: "https://via.placeholder.com/150",
    comments: [],
  },
  {
    name: "Bob Smith",
    postText: "Just finished a 5k run. Feeling great!",
    imageUrl: "https://via.placeholder.com/150",
    comments: [],
  },
  {
    name: "Willy Dodge",
    postText: "Just finished a 5k run. Feeling great!",
    imageUrl: "https://via.placeholder.com/150",
    comments: [],
  },
  {
    name: "Michael Jordan",
    postText: "I am a baller!",
    imageUrl: "https://via.placeholder.com/150",
    comments: [],
  },
  {
    name: "Bob The Sponge",
    postText: "Mmmmm, StarFish!",
    imageUrl: "https://via.placeholder.com/150",
    comments: [],
  },
];

export default function SectionBlogInfo() {
  const classes = useStyles();
  const [posts, setPosts] = useState(mockPosts);
  const [newComment, setNewComment] = useState("");
  const [selectedPost, setSelectedPost] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleCommentSubmit = (postIndex) => {
    if (newComment.trim() !== "") {
      const updatedPosts = [...posts];
      updatedPosts[postIndex].comments.push(newComment.trim());
      setPosts(updatedPosts);
      setNewComment("");
    }
  };

  const handleClick = (postIndex, event) => {
    setSelectedPost(postIndex);
    setAnchorEl(event.currentTarget); // Set the anchor element for the Menu
  };

  const handleClose = () => {
    setSelectedPost(null);
    setAnchorEl(null); // Reset the anchor element when closing the Menu
  };

  return (
    <div className={classes.section}>
      <GridContainer justifyContent="center">
        {posts.map((post, index) => (
          <GridItem xs={12} sm={10} md={8} key={index}>
            <Card plain profile className={classes.card}>
              <GridContainer>
                <GridItem xs={12} sm={2} md={2}>
                  <CardAvatar plain profile>
                    <img src={post.imageUrl} alt={post.name} />
                  </CardAvatar>
                </GridItem>
                <GridItem xs={12} sm={8} md={8}>
                  <h4 className={classes.cardTitle}>{post.name}</h4>
                  <p className={classes.description}>{post.postText}</p>

                  <TextField
                    label="Add a comment"
                    value={newComment}
                    onChange={handleCommentChange}
                    style={{ width: "70%", margin: "auto" }}
                  />

                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleCommentSubmit(index)}
                  >
                    Submit Comment
                  </Button>
                  <Button
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={(e) => handleClick(index, e)}
                  >
                    View Comments
                  </Button>
                  <Button
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={() => handleClick(index, e)}
                  >
                    API
                  </Button>

                  <Menu
                    id="simple-menu"
                    anchorEl={selectedPost === index ? anchorEl : null}
                    keepMounted
                    open={selectedPost === index}
                    onClose={handleClose}
                  >
                    {post.comments.map((comment, commentIndex) => (
                      <MenuItem key={commentIndex} onClick={handleClose}>
                        {comment}
                      </MenuItem>
                    ))}
                  </Menu>
                </GridItem>
              </GridContainer>
            </Card>
          </GridItem>
        ))}
      </GridContainer>
    </div>
  );
}
