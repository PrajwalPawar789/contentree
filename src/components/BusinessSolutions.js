import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import image from "../images/B2B.gif";
import Button from "@material-ui/core/Button";
import { useNavigate } from "react-router-dom"; // Make sure to import useNavigate
import Footer from "./Footer";
import Industries from "./Industries";
import Set from "./Set";
import Topics from "./Topics";
import Foot from "./Foot";
import Vendors from "./Vendors";

const useStyles = makeStyles((theme) => ({
  solutionsContainer: {
    textAlign: "center",
    padding: theme.spacing(25, 2),
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "Black",
    fontFamily: "Barlow"
  },
  title: {
    marginBottom: theme.spacing(4),
    fontSize: "67px",
  },
  subtitle: {
    fontSize: "25px",
  },
  button: {
    width: "153px",
    fontFamily: "Barlow",
    height: "44px",
    borderRadius: "10px",
    margin: theme.spacing(1),
    fontSize: "18px",
  },
  getstarted: {
    color: "white",
    backgroundColor: "#4faa00;",
    "&:hover": {
      backgroundColor: "darkviolet",
    },
  },
}));

function BusinessSolutions() {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleLearnMoreClick = () => {
    navigate("/about-us");
  };

  // Adding a function to handle the click for the "GET STARTED" button
  const handleGetStartedClick = () => {
    navigate("/signup"); // Update this to your signup page's route
  };

  return (
    <>
      <div className={classes.solutionsContainer}>
        <h1 className={classes.title} style={{ color: "black" }}>
          SOLUTIONS FOR EVERY
          <br />
          BUSINESS CHALLENGE
        </h1>
        <p className={classes.subtitle} style={{ color: "black" }}>
          The world’s largest FREE library of B2B content curated to help you find
          <br />
          the right solutions faster
        </p>
        <Button
          className={`${classes.button} ${classes.getstarted}`}
          variant="contained"
          onClick={handleGetStartedClick} // Add onClick event to the "GET STARTED" button
        >
          GET STARTED
        </Button>
        <Button
          className={classes.button}
          variant="contained"
          color="default"
          onClick={handleLearnMoreClick}
        >
          LEARN MORE
        </Button>
      </div>
      <Industries />
      <Set />
      <Topics />
      <Vendors />
      <Foot />
      <Footer />
    </>
  );
}

export default BusinessSolutions;
