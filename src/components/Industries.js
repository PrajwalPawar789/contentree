import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  mainheading: {
    textAlign: "center",
    padding: theme.spacing(10, 2),
    color: "Black",
  },
  heading: {
    marginBottom: theme.spacing(4),
    fontSize: "40px",
  },
}));

function Industries() {
  const classes = useStyles();

  return (
    <div className={classes.mainheading}>
      <h1 className={classes.heading}>
        B2B SOLUTIONS ACROSS ALL INDUSTRIES, VENDORS AND
        <br /> PRODUCT CATEGORIES
      </h1>
    </div>
  );
}

export default Industries;
