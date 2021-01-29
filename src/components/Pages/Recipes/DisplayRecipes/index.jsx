import React, { useContext } from "react";
import Grid from "@material-ui/core/Grid";
import { DataContext } from "../../../../Context/DataContext";
import CustomCard from "../../../common/CustomCard";
import CustomSpinner from "../../../common/CustomSpinner";

const DisplayContainer = () => {
  const { state } = useContext(DataContext);
  return (
    <div className="displayContainer">
      <Grid container spacing={2} justify="center" alignItems="center">
        {state.data.length
          ? state.data.map(({ strMeal, strMealThumb, idMeal }) => (
              <CustomCard
                img={strMealThumb}
                id={idMeal}
                key={idMeal}
                name={strMeal}
              />
            ))
          : []}

        {state.loading && <CustomSpinner />}
        {state.error && <p>{state.error}</p>}
      </Grid>
    </div>
  );
};

export default DisplayContainer;
