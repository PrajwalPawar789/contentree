import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import imageUrl from "../images/library.jpg";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(15, 0),
    backgroundColor: "#f2f2f2",
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
    fontSize: "60px",
    margin: "4px 0",
  },

  paragraph: {
    color: "black",
    fontSize: "25px",
    marginTop: "20px",
  },
  startbtn: {
    width: "200px",
    height: "50px",
    borderRadius: "10px",
    margin: theme.spacing(1),
    color: "white",
    backgroundColor: "#4faa00",
    fontSize: "22px",
  },
  image: {
    width: "60%",
    borderRadius: "5px",
    paddingLeft: "100px",
    
  },
}));

function Library() {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate("/signup");
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6} className={classes.textContainer}>
          <div className={classes.textSection}>
            <h1 className={classes.heading} style={{ color: "#4faa00" }}>
              A DIGITAL CONTENT
            </h1>
            <h1 className={classes.heading} style={{ color: "#4faa00" }}>
              LIBRARY,
            </h1>
            <h1 className={classes.heading} style={{ color: "#4faa00" }}>
              CUSTOMIZED BY YOU
            </h1>

            <p className={classes.paragraph}>
              Organize research into your own custom lists.
              <br /> Save content for later. Share it with your
              <br /> colleagues. It’s all free with your myContentree
              <br /> account.
            </p>
            <div>
              <Button
                className={classes.startbtn}
                variant="contained"
                onClick={handleGetStartedClick}
              >
                GET STARTED
              </Button>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <img src={imageUrl} alt="solution.png" className={classes.image} />
        </Grid>
      </Grid>
    </div>
  );
}

export default Library;
