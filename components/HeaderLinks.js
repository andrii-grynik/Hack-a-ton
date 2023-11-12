/* eslint-disable */
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import makeStyles from "@mui/styles/makeStyles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Hidden from "@mui/material/Hidden";

// core components
import Button from "/components/CustomButtons/Button.js";

import styles from "/styles/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks() {
  const router = useRouter();
  const [loggedIn, setLoggedIn] = useState(() => {
    let value = false;
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("loggedIn");
      if (saved !== null) {
        if (saved === "true") {
          value = true;
        }
      }
    }
    return value;
  });
  useEffect(() => {
    localStorage.setItem("loggedIn", JSON.stringify(loggedIn));
  }, [loggedIn]);

  const classes = useStyles();

  const logout = () => {
    setLoggedIn(false);
    router.push("/");
  };

  return (
    <List className={classes.list + " " + classes.mlAuto}>
      {!loggedIn && (
        <>
          <ListItem className={classes.listItem}>
            <Hidden lgDown>
              <Button
                color={"white"}
                className={classes.navButton}
                round
                onClick={() => setLoggedIn(true)}
              >
                Login
              </Button>
            </Hidden>
            <Hidden mdUp>
              <Button
                color={"info"}
                className={classes.navButton}
                round
                onClick={() => setLoggedIn(true)}
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
        </>
      )}

      {loggedIn && (
        <>
          <ListItem className={classes.listItem}>
            <Hidden lgDown>
              <Button
                href="/my-profile"
                color={"white"}
                className={classes.navButton}
                round
              >
                Profile
              </Button>
            </Hidden>
            <Hidden mdUp>
              <Button
                href="/my-profile"
                color={"info"}
                className={classes.navButton}
                round
              >
                Profile
              </Button>
            </Hidden>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Hidden lgDown>
              <Button
                color={"white"}
                className={classes.navButton}
                round
                onClick={logout}
              >
                Logout
              </Button>
            </Hidden>
            <Hidden mdUp>
              <Button
                color={"info"}
                className={classes.navButton}
                round
                onClick={logout}
              >
                Logout
              </Button>
            </Hidden>
          </ListItem>
        </>
      )}
    </List>
  );
}
