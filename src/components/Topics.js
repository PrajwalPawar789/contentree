import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { useNavigate } from "react-router-dom";
import image from "../images/cloudimg.png";


const useStyles = makeStyles((theme) => ({
  
  root: {
    flexGrow: 1,
    backgroundImage: `url(${image})`,
    padding: theme.spacing(14, 2),
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
  },
  heading: {
    color: "White",
    fontSize: "60px",
    margin: "5px 0",
  },
  youh1: {
    color: "#4faa00",
    fontSize: "50px",
    margin: "5px 0",
  },
  paragraph: {
    color: "white",
    fontSize: "30px",
    marginTop: "20px",
  },
  startbtn: {
    width: "200px",
    height: "50px",
    borderRadius: "10px",
    margin: theme.spacing(1),
    color: "white",
    backgroundColor: "#4faa00",
    fontSize: "25px",
    fontFamily: "Barlow",
  },
}));

function Topics() {
  const classes = useStyles();
  const navigate = useNavigate(); 

 
  const handleGetStartedClick = () => {
    navigate('/signup'); 
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6} className={classes.textContainer}>
          <div className={classes.textSection}>
            <h1 className={classes.heading} style={{ color: "white" }}>
              TOPICS THAT
            </h1>
            <h1 className={classes.heading} style={{ color: "white" }}>
              MATTER TO
            </h1>
            <h1 className={classes.youh1}>YOU</h1>

            <p className={classes.paragraph}>
              Save, share and organize solutions <br />
              into your own custom collections <br />
              for easy on-demand access
            </p>
            <div>
              <Button className={classes.startbtn} variant="contained" onClick={handleGetStartedClick}>
                GET STARTED
              </Button>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          {/* <img src={imageUrl} alt="solution.png" className={classes.image} /> */}
        </Grid>
      </Grid>
    </div>
  );
}

export default Topics;
