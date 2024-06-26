import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: '#182c3a',
    padding: theme.spacing(9, 0),
    marginTop: 'auto',
    textAlign: 'center',
    color: '#ffffff',
   
  },
  link: { 
    color: '#ffffff',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));

function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Typography style={{fontFamily: 'Barlow'}} variant="subtitle1" align="center" component="p">
          © 2024 Contentree. All Rights Reserved | 
          <a href="/privacy" className={classes.link}>Privacy and Cookies</a> | 
          <a href="/term" className={classes.link}>Legal</a> | 
          <a href="/sell-info" className={classes.link}>Do not sell my info</a>
        </Typography>
      </Container>
    </footer>
  );
}

export default Footer;
