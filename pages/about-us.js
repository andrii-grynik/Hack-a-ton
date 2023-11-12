/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
import makeStyles from "@mui/styles/makeStyles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
// @mui/icons-material
import Favorite from "@mui/icons-material/Favorite";
// core components
import Header from "/components/Header/Header.js";
import HeaderLinks from "/components/Header/HeaderLinks.js";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Parallax from "/components/Parallax/Parallax.js";
import Footer from "/components/Footer/Footer.js";
// sections for this page

import SectionTeam from "/pages-sections/about-us/SectionTeam.js";
import SectionServices from "/pages-sections/about-us/SectionServices.js";
import SectionOffice from "/pages-sections/about-us/SectionOffice.js";
import SectionContact from "/pages-sections/about-us/SectionContact.js";

import aboutUsStyle from "/styles/jss/nextjs-material-kit-pro/pages/aboutUsStyle.js";

const useStyles = makeStyles(aboutUsStyle);

export default function AboutUsPage() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div>
      <Header
        brand="Our Name goes Here!"
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 300,
          color: "info",
        }}
      />
      <Parallax image="/img/sus.png" small>
        <div className={classes.container}>
          <GridContainer justifyContent="center">
            <GridItem
              md={8}
              sm={8}
              className={classNames(
                classes.mlAuto,
                classes.mrAuto,
                classes.textCenter
              )}
            ></GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <SectionTeam />
          <SectionServices />
          <SectionOffice />
          <SectionContact />
        </div>
      </div>
      <Footer
        content={
          <div>
            <div className={classes.right}>
              &copy; {1900 + new Date().getYear()} , made with{" "}
              <Favorite className={classes.icon} /> by{" "}
              <a
                href="https://www.creative-tim.com?ref=njsmkp-about-us"
                target="_blank"
              >
                MaddBuggs
              </a>{" "}
            </div>
          </div>
        }
      />
    </div>
  );
}
