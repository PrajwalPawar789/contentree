import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import image from "../images/B2B.gif";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  solutionsContainer: {
    textAlign: "center",
    padding: theme.spacing(25, 2),
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "Black",
  },
  title: {
    marginBottom: theme.spacing(4),
    fontSize: "60px",
  },
  subtitle: {
    fontSize: "24px",
  },
  button: {
    width: "153px",
    height: "44px",
    borderRadius: "50px",
    margin: theme.spacing(1),
  },
  getstarted: {
    color: "white",
    backgroundColor: "#4faa00;",
    '&:hover': {
      backgroundColor: "darkviolet", 
    },
  },
}));

function BusinessSolutions() {
  const classes = useStyles();

  return (
    <div className={classes.solutionsContainer}>
      <h1 className={classes.title}>
        SOLUTIONS FOR EVERY
        <br />
        BUSINESS CHALLENGE
      </h1>
      <p className={classes.subtitle}>
        The world’s largest FREE library of B2B content curated to help you find
        <br />
        the right solutions faster
      </p>
      <Button className={`${classes.button} ${classes.getstarted}`} variant="contained">
        GET STARTED
      </Button>
      <Button className={classes.button} variant="contained" color="default">
        LEARN MORE
      </Button>
    </div>
  );
}

export default BusinessSolutions;
