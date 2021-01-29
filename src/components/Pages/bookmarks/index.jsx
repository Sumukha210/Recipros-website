import React, { useContext, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { DataContext } from "../../../Context/DataContext";
import CustomCard from "../../common/CustomCard";

const Bookmarks = () => {
  const {
    state: { bookmarks },
    setBookmark,
  } = useContext(DataContext);

  useEffect(() => {
    const localData = localStorage.getItem("bookmarkrecipe");
    if (localData && JSON.parse(localData).length) {
      setBookmark(JSON.parse(localData));
    }
  }, []);

  return (
    <div className="bookmark">
      {bookmarks.length ? (
        <Grid container justify="flex-start" spacing={2}>
          {bookmarks.map(({ strMealThumb, idMeal, strMeal }) => (
            <CustomCard
              img={strMealThumb}
              key={idMeal}
              name={strMeal}
              id={idMeal}
            />
          ))}
        </Grid>
      ) : (
        <Typography className="message" variant="h4">
          You are not bookmarked any recipes...
        </Typography>
      )}
    </div>
  );
};

export default Bookmarks;
