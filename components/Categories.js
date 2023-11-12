import sectionPillsStyle from "/styles/jss/nextjs-material-kit-pro/pages/blogPostsSections/sectionPillsStyle.js";
import React from "react";
import makeStyles from "@mui/styles/makeStyles";
import Tooltip from "@mui/material/Tooltip";
import FormatAlignLeft from "@mui/icons-material/FormatAlignLeft";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Card from "/components/Card/Card.js";
import CardBody from "/components/Card/CardBody.js";
import Button from "/components/CustomButtons/Button.js";
import classNames from "classnames";
import PropTypes from "prop-types";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import styles from "/styles/jss/nextjs-material-kit-pro/components/navPillsStyle.js";

const useStyles = makeStyles(sectionPillsStyle);

const Categories = ({updateCurrentCategory}) => {
  const classes = useStyles();

  const updateCategory = (selectedCategory) => {
    updateCurrentCategory(selectedCategory)
  }

  return ( 

    <div className={classes.section}>
    <GridContainer justifyContent="center">
      <GridItem xs={12} sm={12} md={8} className={classes.textCenter}>
        <NavPills
          updateCategory={updateCategory}
          alignCenter
          tabs={[
            {
              tabButton: "All",
              tabContent: "",
            },
            {
              tabButton: "Food",
              tabContent: "",
            },
            {
              tabButton: "Clothing",
              tabContent: "",
            },
            {
              tabButton: "Furniture",
              tabContent: "",
            },
            {
              tabButton: "Electronic",
              tabContent: "",
            },
            {
              tabButton: "Others",
              tabContent: "",
            },
          ]}
        />
      </GridItem>
    </GridContainer>   
  </div>
   );
}
 
export default Categories;



const useStyless = makeStyles(styles);

function NavPills(props) {
  const [active, setActive] = React.useState(props.active);
  const handleChange = (event, active) => {
    setActive(active);
    props.updateCategory(active)
  };
  const { tabs, color, horizontal, alignCenter } = props;
  const classes = useStyless();
  const flexContainerClasses = classNames({
    [classes.flexContainer]: true,
    [classes.horizontalDisplay]: horizontal !== undefined
  });
  const tabButtons = (
    <Tabs
      classes={{
        root: classes.root,
        fixed: classes.fixed,
        flexContainer: flexContainerClasses,
        indicator: classes.displayNone
      }}
      value={active}
      onChange={handleChange}
      centered={alignCenter}
    >
      {tabs.map((prop, key) => {
        var icon = {};
        if (prop.tabIcon !== undefined) {
          icon["icon"] = <prop.tabIcon className={classes.tabIcon} />;
        }
        const pillsClasses = classNames({
          [classes.pills]: true,
          [classes.horizontalPills]: horizontal !== undefined,
          [classes.pillsWithIcons]: prop.tabIcon !== undefined
        });
        return (
          <Tab
            label={prop.tabButton}
            key={key}
            {...icon}
            classes={{
              root: pillsClasses,
              label: classes.label,
              selected: classes[color]
            }}
          />
        );
      })}
    </Tabs>
  );
  const tabContent = (
    <div className={classes.contentWrapper}>
      {tabs.map((prop, key) => {
        if (key !== active) {
          return null;
        } else {
          return (
            <div className={classes.tabContent} key={key}>
              {prop.tabContent}
            </div>
          );
        }
      })}
    </div>
  );
  return horizontal !== undefined ? (
    <GridContainer>
      <GridItem {...horizontal.tabsGrid}>{tabButtons}</GridItem>
      <GridItem {...horizontal.contentGrid}>{tabContent}</GridItem>
    </GridContainer>
  ) : (
    <div>
      {tabButtons}
      {tabContent}
    </div>
  );
}

NavPills.defaultProps = {
  active: 0,
  color: "primary"
};

NavPills.propTypes = {
  // index of the default active pill
  active: PropTypes.number,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      tabButton: PropTypes.string,
      tabIcon: PropTypes.object,
      tabContent: PropTypes.node
    })
  ).isRequired,
  color: PropTypes.oneOf([
    "primary",
    "warning",
    "danger",
    "success",
    "info",
    "rose"
  ]),
  horizontal: PropTypes.shape({
    tabsGrid: PropTypes.object,
    contentGrid: PropTypes.object
  }),
  alignCenter: PropTypes.bool
};
