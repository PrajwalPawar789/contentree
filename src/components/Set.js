import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import imageUrl from "../images/solution.png";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(25, 2),
  },
  image: {
    maxWidth: "100%",
    height: "auto",
    backgroundImage: `url(${imageUrl})`,
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
    textAlign: "left",
    fontFamily: "Barlow",
  },
  heading: {
    color: "#4faa00",
    fontSize: "55px",
    margin: "5px 0",
  },
  paragraph: {
    color: "black",
    fontSize: "25px",
    fontFamily: "Barlow",
    marginTop: "20px",
  },
  buttonexplore: {
    width: "250px",
    height: "50px",
    borderRadius: "10px",
    margin: theme.spacing(1),
    color: "white",
    backgroundColor: "#4faa00",
    fontSize: "18px",
    fontFamily: "Barlow",
  },
}));

function Set() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6}>
          <img src={imageUrl} alt="solution.png" className={classes.image} />
        </Grid>
        <Grid item xs={12} sm={6} className={classes.textContainer}>
          <div className={classes.textSection}>
            <h1 className={classes.heading} style={{ color: "#4faa00" }}>
              CURATED
            </h1>
            <h1 className={classes.heading} style={{ color: "black" }}>
              SOLUTION
            </h1>
            <h1 className={classes.heading} style={{ color: "black" }}>
              SETS
            </h1>
            <p className={classes.paragraph}>
              Save time with our uniquely organized <br />
              collections of tried and tested solutions to <br />
              industry challenges.
            </p>
            <div>
              <Button className={classes.buttonexplore} variant="contained">
                EXPLORE SOLUTION SETS
              </Button>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Set;
