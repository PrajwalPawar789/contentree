import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import image from "../images/black.jpg";
import imageUrl from "../images/gine.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundImage: `url(${image})`,
    padding: theme.spacing(15, 0),
  },

  textContainer: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },
  textSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    paddingLeft: "200px",
    textAlign: "left",
    fontFamily: "Barlow",
  },
  heading: {
    color: "White",
    fontSize: "55px",
    margin: "4px 0",
  },

  paragraph: {
    color: "white",
    fontSize: "25px",
    marginTop: "20px",
  },
  paragraph1: {
    color: "white",
    fontSize: "25px",
    marginTop: "20px",
  },
  image: {
    height: "100%",
    paddingLeft: "400px",
  },
}));

function Brand() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6} className={classes.textContainer}>
          <div className={classes.textSection}>
            <h3 className={classes.heading1} style={{ color: "#fff" }}>
              FOR BRANDS
            </h3>
            <h1 className={classes.heading} style={{ color: "white" }}>
              GET YOUR STORY HEARD
            </h1>
            <div>
              <p className={classes.paragraph}>
                Contentree partners with brands to help them tell their
                <br /> story, share impactful content, and serve as trusted
                <br /> advisors to the community.
              </p>
              <p className={classes.paragraph1}>
                Get your content the exposure it deserves. Learn more
                <br />
                about our marketing programs at CONTENTgine.com Open link{" "}
              </p>
            </div>

            {/* <div>
              <Button className={classes.startbtn} variant="contained">
                GET STARTED
              </Button>
            </div> */}
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <img src={imageUrl} alt="solution.png" className={classes.image} />
        </Grid>
      </Grid>
    </div>
  );
}

export default Brand;
