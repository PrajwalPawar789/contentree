import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import image from "../images/conte.jpg";

const useStyles = makeStyles((theme) => ({
  mainheading: {
    textAlign: "center",
    padding: theme.spacing(10, 2),
    color: "white",
    backgroundImage: `url(${image})`,
    fontFamily: "Barlow",
  },
  heading: {
    marginBottom: theme.spacing(4),
    fontSize: "40px",
  },
}));

function Contentree() {
  const classes = useStyles();

  return (
    <div className={classes.mainheading}>
      <h1 className={classes.heading}>
      HOW CONTENTREE SAVES YOU TIME
      </h1>
    </div>
  );
}

export default Contentree;
