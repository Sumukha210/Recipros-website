import React from "react";
import Grid from "@material-ui/core/Grid";
import ChooseUsCard from "./ChooseCard";

const ChooseUs = () => {
  return (
    <>
      <div className="chooseUs">
        <h1 className="main__title">why to choose us:-</h1>

        <Grid container className="section" spacing={6}>
          <ChooseUsCard img="1" content="Search wide range of recipes" />
          <ChooseUsCard img="2" content="More 2000 food varieties" />
          <ChooseUsCard img="3" content="largest platform for recipians" />
        </Grid>
      </div>
    </>
  );
};

export default ChooseUs;
