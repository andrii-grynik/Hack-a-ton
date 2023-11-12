/* eslint-disable */
import React from "react";

import makeStyles from "@mui/styles/makeStyles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Hidden from "@mui/material/Hidden";

// core components
import Button from "/components/CustomButtons/Button.js";

import styles from "/styles/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks() {
  const classes = useStyles();

  return (
    <List className={classes.list + " " + classes.mlAuto}>
      <ListItem className={classes.listItem}>
        <Hidden lgDown>
          <Button
            href="#"
            color={"white"}
            className={classes.navButton}
            round
          >
            Login
          </Button>
        </Hidden>
        <Hidden mdUp>
          <Button
            href="#"
            color={"info"}
            className={classes.navButton}
            round
          >
            Login
          </Button>
        </Hidden>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Hidden lgDown>
          <Button
            href="#"
            color={"white"}
            className={classes.navButton}
            round
          >
            Registration
          </Button>
        </Hidden>
        <Hidden mdUp>
          <Button
            href="#"
            color={"info"}
            className={classes.navButton}
            round
          >
            Registration
          </Button>
        </Hidden>
      </ListItem>
    </List>
  );
}
