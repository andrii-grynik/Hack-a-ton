import React from "react";
import classNames from "classnames";
import makeStyles from "@mui/styles/makeStyles";
import Favorite from "@mui/icons-material/Favorite";
import Header from "/components/Header/Header.js";
import HeaderLinks from "/components/HeaderLinks.js";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Parallax from "/components/Parallax/Parallax.js";
import Footer from "/components/Footer/Footer.js";
import SectionTeam from "/pages-sections/about-us/SectionTeam.js";
import SectionServices from "/pages-sections/about-us/SectionServices.js";
import SectionOffice from "/pages-sections/about-us/SectionOffice.js";
import SectionContact from "/pages-sections/about-us/SectionContact.js";
import aboutUsStyle from "/styles/jss/nextjs-material-kit-pro/pages/aboutUsStyle.js";
import Layout from "../components/Layout";

const useStyles = makeStyles(aboutUsStyle);

export default function AboutUsPage() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    
    <Layout>
    <div>
      
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
      
    </div>
    </Layout>
  );
}
