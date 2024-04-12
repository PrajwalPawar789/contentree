import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  Container,
  Typography,
  TextField,
  Checkbox,
  FormControlLabel,
} from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn'; // Correctly import LinkedIn Icon
import image from "../images/register.png";


const useStyles = makeStyles((theme) => ({
  formContainer: {
    marginTop: theme.spacing(19),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  
    
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  fontSize: '1rem',
    backgroundColor: "#4a90e2",
    color: "white", 
    '&:hover': {
      backgroundColor: "#357abd", 
    },
  },
  linkedInButton: {
    margin: theme.spacing(2, 0),
    fontSize: '1rem',
    fontFamily: 'Barlow',
    backgroundColor: "#0077b5",
    color: "white",
    // '&:hover': {
    //   backgroundColor: "#005c93",
    // }
  },
}));

function SignUp() {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAgreementChecked, setIsAgreementChecked] = useState(false);
  const [isTermsAgreed, setIsTermsAgreed] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
  
    console.log('Form Submitted', { email, password, isAgreementChecked, isTermsAgreed });
  };

  return (
    <Container className={classes.mainform} component="main" maxWidth="xs">
      <div className={classes.formContainer}>
        <Typography component="h1" variant="h5">
          Sign up for your free account.<br />
          Already have an account? Sign in
        </Typography>
        <Button
          variant="contained"
          startIcon={<LinkedInIcon />}
          className={classes.linkedInButton}
          onClick={() => window.location.href = 'https://www.linkedin.com'}
        >
          Sign Up with LinkedIn
        </Button>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <FormControlLabel
          control={<Checkbox color="primary" checked={isAgreementChecked} onChange={(e) => setIsAgreementChecked(e.target.checked)} />}
          label="By clicking this checkbox you confirm that you are 18 years of age or older."
        />
        <FormControlLabel
          control={<Checkbox color="primary" checked={isTermsAgreed} onChange={(e) => setIsTermsAgreed(e.target.checked)} />}
          label="By clicking this checkbox you agree to the Terms of Service & Privacy Policy."
        />
        <Button 
          type="submit"
          fullWidth
          variant="contained"
          className={classes.submit}
          onClick={handleSubmit}
          disabled={!isAgreementChecked || !isTermsAgreed}
        >
          Sign Up
        </Button>
      </div>
    </Container>
  );
}

export default SignUp;
