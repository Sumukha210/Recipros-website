import React from "react";
import Spinner from "@material-ui/core/CircularProgress";
import makeStyles from "@material-ui/styles/makeStyles";

const useStyles = makeStyles({
  root: {
    minHeight: "80vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

const CustomSpinner = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Spinner />
    </div>
  );
};

export default CustomSpinner;
