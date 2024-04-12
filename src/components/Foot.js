import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useNavigate } from "react-router-dom";
import LinkedInIcon from "@material-ui/icons/LinkedIn"; 

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "#213848;",
    color: "#ffffff",
    padding: theme.spacing(14, 0),
  },
  footerSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Barlow",
  },
  link: {
    color: "#ffffff",
    fontFamily: "Barlow",
    fontSize: "22px",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  btn: {
    width: "200px",
    height: "50px",
    borderRadius: "10px",
    margin: theme.spacing(1),
    color: "white",
    backgroundColor: "#4faa00",
    fontSize: "18px",
    "&:focus, &:hover, &:active": {
      backgroundColor: "#4faa00",
    },
    "&:focus": {
      outline: "none",
    },
  },
  followUploadText: {
    fontSize: "22px",
    fontFamily: "Barlow",
  },
  socialLink: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    textDecoration: 'none',
    marginTop: theme.spacing(2), 
    "&:hover": {
      textDecoration: "underline",
    },
  },
  linkedInIcon: {
    marginRight: theme.spacing(1),
    fontSize: '35px',
  },
}));

function Foot() {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate("/signup");
  };


  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4} className={classes.footerSection}>
            <Typography variant="h6" gutterBottom>
              B2B solutions from all vendors in all industries aggregated and
              curated in an easy-to-use discovery platform
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} className={classes.footerSection}>
            {/* Reintegrate the navigation links */}
            <a href="/" className={classes.link}>
              Blogs
            </a>
            <a href="#services" className={classes.link}>
              Vendor Centers
            </a>
            <a href="#contact" className={classes.link}>
              Solution Sets
            </a>
            <a href="/about-us" className={classes.link}>
              About us
            </a>
            <a href="#contact" className={classes.link}>
              Contact Us
            </a>
          </Grid>
          <Grid item xs={12} sm={4} className={classes.footerSection}>
           
            <a href="https://www.linkedin.com/company/contentree/" className={classes.socialLink} target="_blank" rel="noopener noreferrer">
              <LinkedInIcon className={classes.linkedInIcon} />
              Follow us on LinkedIn
            </a>
            
            <Typography variant="body2" className={classes.followUploadText}>
              Upload your Assets
            </Typography>
            <Button className={classes.btn} onClick={handleGetStartedClick}>JOIN CONTENTREE</Button>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}

export default Foot;
