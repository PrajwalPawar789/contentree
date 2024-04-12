import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
// import imageUrl from "../images/solution.png";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#f2f2f2",
    padding: theme.spacing(15, 0),
  },

  textContainer: {
    display: "flex",
    justifyContent: "start",
    width: "100%",
  },
  textSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    textAlign: "left",
  },
  heading: {
    color: "#4faa00",
    fontSize: "70px",
    margin: "5px 0",
    fontFamily: "Barlow",
  },
  paragraph: {
    color: "black",
    fontSize: "30px",
    marginTop: "20px",
    fontFamily: "Barlow",
  },
  vendors: {
    width: "250px",
    height: "50px",
    borderRadius: "10px",
    margin: theme.spacing(1),
    color: "white",
    backgroundColor: "#4faa00",
    fontSize: "23px",
    fontFamily: "Barlow",
  },
}));

function Vendors() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6}>
          {/* <img src={imageUrl} alt="solution.png" className={classes.image} /> */}
        </Grid>
        <Grid item xs={12} sm={6} className={classes.textContainer}>
          <div className={classes.textSection}>
            <h1 className={classes.heading} style={{ color: "#4faa00" }}>
              TRUSTED
            </h1>
            <h1 className={classes.heading} style={{ color: "black" }}>
              VENDORS
            </h1>

            <p className={classes.paragraph}>
              Learn from reputable B2B brands 
              about the products and solutions <br />
              that can help your business grow
            </p>
            <div>
              <Button className={classes.vendors} variant="contained">
                EXPLORE VENDORS
              </Button>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Vendors;
