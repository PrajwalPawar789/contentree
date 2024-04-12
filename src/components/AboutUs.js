import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import image from "../images/abouthero.jpg";
import Button from "@material-ui/core/Button";
import { useNavigate } from "react-router-dom"; 
import Heading from "./Heading";
import Library from "./Library";
import Contentree from "./Contentree";
import Inbox from "./Inbox";
import Brand from "./Brand";
import Footer from "./Footer";
import Foot from "./Foot";

const useStyles = makeStyles((theme) => ({
  solutionsContainer: {
    textAlign: "start",
    padding: theme.spacing(14, 2),
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "end",
    color: "Black",
    paddingLeft: "200px",
  },
  title: {
    color: "white",
    fontSize: "20px",
    fontFamily: "Barlow"
  },
  subtitle: {
    fontSize: "24px",
    color: "white",
    fontFamily: "Barlow"
  },
  button: {
    width: "150px",
    height: "44px",
    borderRadius: "15px",
    margin: theme.spacing(1),
    fontSize: "22px",
  },
  getstarted: {
    color: "white",
    backgroundColor: "#4faa00;",
    "&:hover": {
      backgroundColor: "darkviolet",
    },
  },
  heading11: {
    fontSize: "55px",
    color: "white",
    fontFamily: "Barlow"
  },
}));

function AboutUs() {
  const classes = useStyles();
  const navigate = useNavigate(); // Use the useNavigate hook

  // Define the function that will handle the redirection
  const handleSignUpClick = () => {
    navigate('/signup'); // Adjust the '/signup' path as needed based on your routing setup
  };

  return (
    <>
      <div className={classes.solutionsContainer}>
        <h3 className={classes.title}>ABOUT US</h3>
        <h1 className={classes.heading11}>
          STOP SEARCHING.
          <br />
          START LEARNING
        </h1>
        <p className={classes.subtitle}>
          Don't waste hours dealing with endless Google searches and <br />
          unorganized Vendor directories. Find the case studies and <br />
          industry research you need in minutes.
        </p>
        <Button
          className={`${classes.button} ${classes.getstarted}`}
          variant="contained"
          onClick={handleSignUpClick} 
        >
          SIGN UP
        </Button>
      </div>
      <div>
        <Heading />
        <Library />
        <Contentree />
        <Inbox />
        <Brand />
        <Foot />
        <Footer />
      </div>
    </>
  );
}

export default AboutUs;
