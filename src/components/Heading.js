import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  mainheading: {
    textAlign: "center",
    padding: theme.spacing(14, 2),
    color: "Black",
  },
  heading: {
    color: "#000",
    margin: "0 auto",
    textAlign: "center",
    fontSize: "40px",
    fontFamily: "Barlow",
  },
}));

function Heading() {
  const classes = useStyles();

  return (
    <div className={classes.mainheading}>
      <h1 className={classes.heading}>
        CONTENTREE aggregates and curates B2B research 
        <br /> assets from across the internet into one easy-to-use
        <br /> discovery platform, helping you find the right solutions
        <br /> for your business faster.
      </h1>
    </div>
  );
}

export default Heading;
