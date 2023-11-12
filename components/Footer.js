/* eslint-disable */
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
import makeStyles from '@mui/styles/makeStyles';
// @mui/icons-material
import BugReportIcon from '@mui/icons-material/BugReport';

import styles from "/styles/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const { children, theme, big, className } = props;
  const classes = useStyles();
  const themeType =
    theme === "transparent" || theme == undefined ? false : true;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes[theme]]: themeType,
    [classes.big]: big || children !== undefined,
    [className]: className !== undefined
  });

  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <a
            href="/about-us"
            className={classes.block}
          >
            About us
          </a>
        </div>
        <div className={classes.right}>
          &copy; {1900 + new Date().getYear()} , made by{" "}
          <BugReportIcon className={classes.icon} />{" "}
          MaddBuggs.
        </div>
        <div className={classes.clearFix} />
      </div>
    </footer>
  );
}

Footer.propTypes = {
  theme: PropTypes.oneOf(["dark", "white", "transparent"]),
  big: PropTypes.bool
};
