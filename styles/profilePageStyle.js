import {
  container,
  title,
} from "/styles/jss/nextjs-material-kit-pro.js";

import imagesStyle from "/styles/jss/nextjs-material-kit-pro/imagesStyles.js";

const profilePageStyle = {
  container,
  ...imagesStyle,
  profile: {
    textAlign: "center",
    "& img": {
      maxWidth: "160px",
      width: "100%",
      margin: "0 auto",
      transform: "translate3d(0, 15%, 0)"
    }
  },
  textCenter: {
    textAlign: "center !important"
  },
  title: {
    ...title,
    position: "relative",
    marginTop: "30px",
    marginBottom: "10px",
    minHeight: "32px",
    textDecoration: "none"
  },
  list: {
    display: "inline-block",
    textAlign: "center"
  },
  listItem: {
    padding: "4px 0",
    justifyContent: "center"
  },
  icon: {
    width: "18px",
    height: "18px",
    margin: "0 4px",
    position: "relative"
  },
  contact: {
    margin: "0"
  }
};

export default profilePageStyle;
