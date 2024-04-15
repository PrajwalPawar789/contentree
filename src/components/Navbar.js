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
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    cursor: "pointer", // Add cursor pointer for better UX
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
  appBar: {
    minHeight: "64px",
  },
}));

function Navbar() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleLoginClick = () => {
    navigate("/login");
  };
  const handleSignUpClick = () => {
    navigate("/signup");
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Search for: ${searchTerm}`);
  };

  const handleMenuClick = () => {
    navigate("/");
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={handleMenuClick}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            className={classes.title}
            onClick={handleMenuClick}
          >
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
            <Button
              className={classes.bButton}
              color="inherit"
              onClick={handleLoginClick}
            >
              Login
            </Button>
            <Button
              className={classes.SignButton}
              color="inherit"
              onClick={handleSignUpClick}
            >
              Sign Up
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
