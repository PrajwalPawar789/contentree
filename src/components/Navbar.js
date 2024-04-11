import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles,
  IconButton,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  navButtons: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  SignButton: {
    backgroundColor: "#4faa00",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#3d8b00",
    },
  },
  bButton: {
    color: "#8b959c",
  },
  input: {
    width: "100%",
  },
}));

function Navbar() {
  const classes = useStyles();
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the form from refreshing the page
    alert(`Search for: ${searchTerm}`); // For demonstration: show an alert with the search term
    // Implement search functionality here
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            My App
          </Typography>
          <form onSubmit={handleSubmit}>
            <input
              className="input"
              type="text"
              placeholder="Search solutions, topics and vendors"
              value={searchTerm}
              onChange={handleInputChange}
            />
          </form>
          <SearchIcon className="searchIcon" />

          <div className={classes.navButtons}>
            <Button className={classes.bButton} color="inherit">
              Solution Sets
            </Button>
            <Button className={classes.bButton} color="inherit">
              Newsletters
            </Button>
            <Button className={classes.bButton} color="inherit">
              Login
            </Button>
            <Button className={classes.SignButton} color="inherit">
              Sign Up
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
