import React, { useEffect, useRef } from "react";
import Button from "@material-ui/core/Button";
import makeStyle from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import { useHistory } from "react-router-dom";

const useStyles = makeStyle({
  root: {
    backgroundColor: "#ff950a",
    color: "white",
    padding: "0.4rem 3rem",
    fontSize: "1.1rem",
    fontWeight: "bold",
    letterSpacing: "2px",
    marginTop: "1rem",

    "&:hover": {
      backgroundColor: "#ffc50a",
    },
  },
});

const Hero = () => {
  const classes = useStyles();
  const history = useHistory();
  const videoRef = useRef();

  const handleBtn = () => history.push("/recipes");

  useEffect(() => {
    videoRef.current.playbackRate = 0.4;
  }, []);

  return (
    <div className="hero">
      <div className="hero__screen">
        <video
          src="/assets/hero.mp4"
          ref={videoRef}
          autoPlay
          loop
          muted></video>
        <div className="overlay"></div>
        <div className="hero__content">
          <Grid container justify="center">
            <Grid item xs={12} md={8} lg={7}>
              <h1 className="hero__content--title">
                <span>Recipros,</span> the World’s best platform to find recipes
              </h1>
              <Button
                onClick={handleBtn}
                variant="contained"
                className={classes.root}>
                View
              </Button>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Hero;
