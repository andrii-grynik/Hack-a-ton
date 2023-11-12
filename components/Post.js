import React from "react";
import makeStyles from "@mui/styles/makeStyles";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Button from "/components/CustomButtons/Button.js";
import Card from "/components/Card/Card.js";
import sectionBlogInfoStyle from "/styles/jss/nextjs-material-kit-pro/pages/blogPostSections/sectionBlogInfoStyle.js";
import Image from 'next/image';
import Comments from "./Comments";

const useStyles = makeStyles(sectionBlogInfoStyle);

export default function Posts({ post }) {
  
  const { title, description, author, category, comments, status } = post;
  
  const [showComment, setShowComment] = React.useState(false);

  const updatePostStatus = () => {
    //make a database call to update status
    console.log("changing post status!")
  }


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
                <h4 className={classes.cardTitle}>{author}</h4>
                <h3 className={classes.cardTitle}>{title}</h3>
                <p className={classes.description}>
                  {description}
                </p>
                <p className={classes.description}>
                  {category}
                </p>
                <p className={classes.description}>
                  {!status && "Not "} Available
                </p>
                {comments && 
                <Button 
                color="primary" 
                round className={classes.footerButtons}
                onClick={()=> setShowComment(!showComment)}
                >
                      {showComment ? "Hide" : "Show"} Comments
                  </Button>}
                
                  {status && <Button 
                color="primary" 
                round className={classes.footerButtons}
                onClick={updatePostStatus}
                >
                  Mark As Unavailable
              </Button>}
              </GridItem>
            </GridContainer>
          </Card>
        </GridItem>
      </GridContainer>
    </div>

      {showComment && <Comments comments={comments} />}
</>

  );
}