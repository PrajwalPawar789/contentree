import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import image from "../images/conte.jpg";

// import IconButton from "@material-ui/core/IconButton";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";

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
  video: {
    // Adjust the styles as needed
    margin: theme.spacing(2, "auto"),
    maxWidth: "560px", // Typical YouTube video width
    height: "315px", // Maintain a 16:9 aspect ratio
  },
  playlistButton: {
    // Styling for the playlist button, adjust as needed
    marginTop: theme.spacing(2),
    backgroundColor: "#4faa00", // Example background color, adjust as needed
    color: "#ffffff", // Button icon color
    "&:hover": {
      backgroundColor: "#3d8b00", // Darker on hover, adjust as needed
    },
  },
}));

function Contentree() {
  const classes = useStyles();
  const videoUrl = "https://www.youtube.com/embed/YOUR_VIDEO_ID";

  const handlePlaylistClick = () => {
    console.log("Playlist button clicked");
    // Implement your playlist functionality here, e.g., opening a new page or a modal
  };

  return (
    <div className={classes.mainheading}>
      <h1 className={classes.heading}>HOW CONTENTREE SAVES YOU TIME</h1>

      <iframe
        className={classes.video}
        src={videoUrl}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Contentree YouTube Video"
      ></iframe>
      {/* <IconButton
        className={classes.playlistButton}
        onClick={handlePlaylistClick}
        aria-label="playlist"
      >
        <PlaylistPlayIcon />
      </IconButton> */}
    </div>
  );
}

export default Contentree;
