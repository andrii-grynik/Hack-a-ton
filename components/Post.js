import React from "react";
import makeStyles from "@mui/styles/makeStyles";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Button from "/components/CustomButtons/Button.js";
import Card from "/components/Card/Card.js";
import sectionBlogInfoStyle from "/styles/jss/nextjs-material-kit-pro/pages/blogPostSections/sectionBlogInfoStyle.js";
import Media from "/components/Media/Media.js";
import CustomInput from "/components/CustomInput/CustomInput.js";
import Image from 'next/image';

const useStyles = makeStyles(sectionBlogInfoStyle);

export default function Posts({post}) {

  const { title, description, author, category, comments,status } = post;
  
  const [showComment, setShowComment] = React.useState(false);

  return(
    <>   
      <SectionBlogInfo 
        title={title} 
        description={description} 
        author={author} 
        category={category} 
        hasComment={comments? true: false}
        toggleShowComment={setShowComment}
        toggleStatus={showComment}
      />
      {showComment &&  <SectionComments comments={comments}/>  }             
  </>
  )
}


function SectionBlogInfo({ title, description, author, category, hasComment,toggleShowComment,toggleStatus }) {

  const classes = useStyles();
  return (
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
                  {!toggleStatus && "Not "} Available
                </p>
                {hasComment && 
                <Button 
                color="primary" 
                round className={classes.footerButtons}
                onClick={() => toggleShowComment(!toggleStatus)}
                >
                  Show Comments
              </Button>}
              </GridItem>
            </GridContainer>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}

function SectionComments({ comments }) {
  
  const classes = useStyles();

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
              />
            }
            footer={
              <Button color="primary" round className={classes.footerButtons}>
                Post comment
              </Button>
            }
          />
        </GridItem>
      </GridContainer>
    </div>
  );
}
