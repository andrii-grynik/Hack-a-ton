import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
import makeStyles from "@mui/styles/makeStyles";
// @mui/icons-material
import Gesture from "@mui/icons-material/Gesture";
import Build from "@mui/icons-material/Build";
// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import InfoArea from "/components/InfoArea/InfoArea.js";

import servicesStyle from "/styles/jss/nextjs-material-kit-pro/pages/aboutUsSections/servicesStyle.js";

const useStyles = makeStyles(servicesStyle);

export default function SectionServices() {
  const classes = useStyles();
  return (
    <div className={classes.services}>
      <GridContainer>
        <GridItem
          md={8}
          sm={8}
          className={classNames(
            classes.mlAuto,
            classes.mrAuto,
            classes.textCenter
          )}
        >
          <h2 className={classes.title}>
            We build awesome products... At least My Momma says so!{" "}
          </h2>
        </GridItem>
      </GridContainer>
    </div>
  );
}
