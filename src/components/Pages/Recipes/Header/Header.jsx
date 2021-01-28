import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import SearchBar from "../SearchBar";
import MenuBar from "../MenuBar";

const CustomSelct = () => {
  return (
    <Container maxWidth="md">
      <Grid container alignItems="center" justify="center">
        <Grid item sm={9} xs={8}>
          <SearchBar />
        </Grid>

        <Grid item sm={3} xs={4}>
          <MenuBar />
        </Grid>
      </Grid>
    </Container>
  );
};

export default CustomSelct;
