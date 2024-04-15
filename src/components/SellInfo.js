import React, { useState } from "react";
import {
  Grid,
  TextField,
  Button,
  Typography,
  Container,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// Use makeStyles hook to create a styles object
const useStyles = makeStyles((theme) => ({
  formField: {
    marginBottom: theme.spacing(2),
  },
  submitButton: {
    marginTop: theme.spacing(2),
  },
  form: {
    paddingTop: "100px",
  },
}));

function SellInfo() {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    message: "",
    email: "",
    request: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Container maxWidth="sm">
      <form className={classes.form} onSubmit={handleSubmit}>
        <Typography variant="h5" component="h1" gutterBottom>
          If you would like to examine, modify, or delete your data, please fill
          out the form below.
        </Typography>
        <p variant="body1" gutterBottom>
          We don't collect any personal information for unregistered users. Any
          information for analytics is anonymized for unregistered users. You
          can sign in here Please let us know if you still have a question using
          this form.
        </p>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              variant="outlined"
              className={classes.formField}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              variant="outlined"
              className={classes.formField}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              variant="outlined"
              className={classes.formField}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              variant="outlined"
              className={classes.formField}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Request"
              name="request"
              value={formData.request}
              onChange={handleChange}
              variant="outlined"
              className={classes.formField}
            />
          </Grid>
        </Grid>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.submitButton}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
}

export default SellInfo;
