import React from "react";
import makeStyles from "@mui/styles/makeStyles";
// @mui/icons-material
import TrendingUp from "@mui/icons-material/TrendingUp";
// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Card from "/components/Card/Card.js";
import CardHeader from "/components/Card/CardHeader.js";
import CardBody from "/components/Card/CardBody.js";
import Info from "/components/Typography/Info.js";
import Success from "/components/Typography/Success.js";
import Danger from "/components/Typography/Danger.js";

import sectionSimilarStoriesStyle from "/styles/jss/nextjs-material-kit-pro/pages/blogPostSections/sectionSimilarStoriesStyle.js";

const useStyles = makeStyles(sectionSimilarStoriesStyle);

export default function SectionSimilarStories() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem md={12}>
            <h2 className={classes.title + " " + classes.textCenter}>
              Local Sustainability board
            </h2>
            <br />
            <GridContainer>
              <GridItem xs={12} sm={4} md={4}>
                <Card blog>
                  <CardHeader image>
                    <a href="https://www.calgary.ca/waste/drop-off/community-recycling-depots.html">
                      <img src="/img/rcycle.png" alt="..." />
                    </a>
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage: "url('/img/examples/blog6.jpg')",
                        opacity: "1",
                      }}
                    />
                  </CardHeader>
                  <CardBody>
                    <Info>
                      <h6>Community recycling depot locations</h6>
                    </Info>
                    <h4 className={classes.cardTitle}>
                      <a>
                        Lets help the world to be a better place... Starting
                        with your community!
                      </a>
                    </h4>
                    <p className={classes.description}></p>
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={4} md={4}>
                <Card blog>
                  <CardHeader image>
                    <a href="https://www.sustainablecalgary.org/">
                      <img src="/img/susCal.png" alt="..." />
                    </a>
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage: "url('/img/examples/blog8.jpg')",
                        opacity: "1",
                      }}
                    />
                  </CardHeader>
                  <CardBody>
                    <Success>
                      <h6>Ways to improve Sustainability in Calgary</h6>
                    </Success>
                    <h4 className={classes.cardTitle}>
                      <a>
                        Last year, Sustainable Calgary prototyped the Connaught
                        Open Street where we transformed part of 10th Street
                        into a public space. This innovative project was
                        brainstormed by students at Connaught School who wanted
                        to make walking and wheeling to school safer and more
                        fun for everyone.
                      </a>
                    </h4>
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={4} md={4}>
                <Card blog>
                  <CardHeader image>
                    <a href="https://www.calgary.ca/planning/projects/green-buildings.html">
                      <img src="/img/greenB.png" alt="..." />
                    </a>
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage: "url('/img/examples/blog7.jpg')",
                        opacity: "1",
                      }}
                    />
                  </CardHeader>
                  <CardBody>
                    <Danger>
                      <h6>
                        <TrendingUp /> See how Calgary builds green!
                      </h6>
                    </Danger>
                    <h4 className={classes.cardTitle}>
                      <a>
                        The City of Calgary is committed to taking action to
                        reduce the cost of operating our buildings while
                        addressing our goals to improve the long-term resilience
                        of infrastructure such as administrative buildings,
                        water treatment plants, composting facilities, and
                        recreation centres.
                      </a>
                    </h4>
                  </CardBody>
                </Card>
              </GridItem>
            </GridContainer>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
