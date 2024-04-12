import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import imageUrl from "../images/pages.png";
import Button from "@material-ui/core/Button";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#f2f2f2",
    padding: theme.spacing(15, 0),
  },

  textSection: {
    display: "flex",
    fontFamily: "Barlow",
    flexDirection: "column",
    alignItems: "flex-start",
    textAlign: "left",
  },
  heading: {
    color: "#4faa00",
    fontSize: "50px",
    margin: "8px 0",
    marginTop: "100px",
  },
  heading1: {
    color: "#4faa00",
    fontSize: "50px",
    margin: "8px 0",
  },
  paragraph: {
    color: "black",
    fontSize: "20px",
    marginTop: "10px",
  },
  vendors: {
    width: "150px",
    height: "50px",
    borderRadius: "10px",
    margin: theme.spacing(1),
    color: "white",
    backgroundColor: "#4faa00",
    fontSize: "18px",
    fontFamily: "Barlow",
  },
  image: {
    width: "60%",
    borderRadius: "5px",
    paddingLeft: "250px",
  },
}));

function Inbox() {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate("/signup");
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6}>
          <img src={imageUrl} alt="solution.png" className={classes.image} />
        </Grid>
        <Grid item xs={12} sm={6} className={classes.textContainer}>
          <div className={classes.textSection}>
            <h1 className={classes.heading} style={{ color: "#4faa00" }}>
              SOLUTION-BASED <br />
              CONTENT IN YOUR <br /> INBOX
            </h1>

            <p className={classes.paragraph}>
              Get weekly updates highlighting important industry trends, case
              <br /> studies and research reports on the specific
              <br /> topics you’re interested in.
            </p>
            <div>
              <Button
                className={classes.vendors}
                variant="contained"
                onClick={handleGetStartedClick}
              >
                GET STARTED
              </Button>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Inbox;
