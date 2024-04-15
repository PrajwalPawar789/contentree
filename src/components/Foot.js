import React, { useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useNavigate } from "react-router-dom";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "#213848;",
    color: "#ffffff",
    padding: theme.spacing(9, 0),
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
    fontSize: "15px",
    fontFamily: "Barlow",
  },
  socialLink: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    textDecoration: "none",
    marginTop: theme.spacing(2),
    "&:hover": {
      textDecoration: "underline",
    },
  },
  linkedInIcon: {
    marginRight: theme.spacing(1),
    fontSize: "30px",
  },
  uploadButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    backgroundColor: "transparent",
    boxShadow: "none",
    "&:hover": {
      backgroundColor: "transparent",
      boxShadow: "none",
    },
  },
  uploadIcon: {
    marginLeft: theme.spacing(1),
    fontSize: "24px",
  },
}));

function Foot() {
  const classes = useStyles();
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const handleGetStartedClick = () => {
    navigate("/signup");
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleUploadAssetsClick = () => {
    navigate("/signup");
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (!file) {
      return;
    }

    console.log(file);
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
            <a href="mailto:contact@example.com" className={classes.link}>
              Contact Us
            </a>
          </Grid>
          <Grid item xs={12} sm={4} className={classes.footerSection}>
            <a
              href="https://www.linkedin.com/company/contentree/"
              className={classes.socialLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Follow us on LinkedIn
              <LinkedInIcon className={classes.linkedInIcon} />
            </a>

            <Button
              onClick={handleUploadAssetsClick}
              className={classes.uploadButton}
            >
              <Typography variant="body2" className={classes.followUploadText}>
                Upload your Assets
              </Typography>
              <CloudUploadIcon className={classes.uploadIcon} />
            </Button>
            <Button className={classes.btn} onClick={handleGetStartedClick}>
              JOIN CONTENTREE
            </Button>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}

export default Foot;
