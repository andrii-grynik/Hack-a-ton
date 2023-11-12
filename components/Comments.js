import React from "react";
import makeStyles from "@mui/styles/makeStyles";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Button from "/components/CustomButtons/Button.js";
import sectionBlogInfoStyle from "/styles/jss/nextjs-material-kit-pro/pages/blogPostSections/sectionBlogInfoStyle.js";
import Media from "/components/Media/Media.js";
import CustomInput from "/components/CustomInput/CustomInput.js";

const useStyles = makeStyles(sectionBlogInfoStyle);

export default function Comments({ comments }) {
  const classes = useStyles();

  const [newComment, setNewComment] = React.useState("");

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

   //NEED HELP HERE
  const handleCommentSubmit = () => {
    console.log("adding comment! ", newComment);
    //NEED TO WORK! make a database call to add new comment to the post

    // if (newComment.trim() !== "") {
    //   const updatedPosts = [...posts];
    //   updatedPosts[postIndex].comments.push(newComment.trim());
    //   setPosts(updatedPosts);
    //   setNewComment("");
    // }
  };
  //NEED HELP UNTIL HERE


  const displayComments = () => {  
  return  comments.map(({ author,details, time }) => (      
    <>   
       <Media
              avatar="/img/faces/card-profile4-square.jpg"
              title={
                <span>
                  {author} <small>· {time}</small>
                </span>
              }
              body={
                <p className={classes.color555}>
                  {details}
                </p>
              }             
            />        
   </>
    ))
  }

  return (
    
    <div className={classes.section}>
      <GridContainer justifyContent="center">
        <GridItem xs={12} sm={10} md={8}>
          <div>
            <h3 className={classes.title}>{comments.length} Comments</h3>
            {displayComments()}           
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