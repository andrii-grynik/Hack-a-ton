import React, { useState } from "react";
import axios from 'axios';
import makeStyles from '@mui/styles/makeStyles';
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Button from "/components/CustomButtons/Button.js";
import Media from "/components/Media/CustomMedia.js";
import CustomInput from "/components/CustomInput/CustomInput.js";
import style from "/styles/jss/nextjs-material-kit-pro/pages/componentsSections/contentAreas.js";

const useStyles = makeStyles(style);

export default function PostForm() {
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleImageUpload = () => {
    // Trigger the hidden file input
    document.getElementById("imageInput").click();
  };

  const handleFileChange = (event) => {
    // Handle the selected file
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handlePostComment = async () => {
    // Prepare data to send to the API handler
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("image", selectedFile);

    // Send formData to your API handler
    const response = await axios.post('/api/posts', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    if (response.status === 201) {
      console.log('Post created successfully. Post ID:', response.data.postId);
    } else {
      console.error('Failed to create post:', response.statusText);
    }
  };

  return (
    <Media
      body={
        <div>
          <GridContainer>
            <GridItem xs={12} sm={6} md={6}>
              <CustomInput
                id="title"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  placeholder: "Item Name",
                  value: title,
                  onChange: handleTitleChange
                }}
              />
            </GridItem>
          </GridContainer>
          <CustomInput
            id="description"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              multiline: true,
              rows: 3,
              placeholder: " Write some description about the item",
              value: description,
              onChange: handleDescriptionChange
            }}
          />
          {/* Hidden file input */}
          <input
            id="imageInput"
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
        </div>
      }
      footer={
        <div className={classes.signInButton} style={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* Button to trigger image upload */}
          <Button color="tumblr" className={classes.floatRight} onClick={handleImageUpload}>
            Upload Image
          </Button>
          <Button color="primary" className={classes.floatRight} onClick={handlePostComment}>
            Create Post
          </Button>
        </div>
      }
    />
  );
}
