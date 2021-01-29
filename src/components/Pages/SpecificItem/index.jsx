import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import Tooltip from "@material-ui/core/Tooltip";
import { DataContext } from "../../../Context/DataContext";

const useStyles = makeStyles({
  media: {
    height: 400,
  },
});

const SpecificPage = () => {
  const { id } = useParams();
  const {
    state: { specificData, bookmarks },
    getSpecificMeal,
    addBookmark,
    setBookmark,
    clearSingleBookmark,
    setSpecificMeal,
  } = useContext(DataContext);
  const history = useHistory();
  const classes = useStyles();
  const localName = "specificRecipe";
  const [isBookmark, setIsBookmark] = useState(false);
  const findIsAlreadyBookmarked = bookmarks.findIndex(
    item => item.idMeal == id
  );

  const handleBookMark = () => {
    setIsBookmark(prev => !prev);

    if (!isBookmark) {
      addBookmark(specificData);
    } else {
      clearSingleBookmark(id);
    }
  };

  const checkIsPresent = children =>
    specificData[children] ? specificData[children] : ".....";

  /**related to retriving and saving paricular api data  */
  useEffect(() => {
    let localData = localStorage.getItem(localName);

    if (localData && JSON.parse(localData).length) {
      setSpecificMeal(JSON.parse(localData));
    } else {
      getSpecificMeal(id);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(localName, JSON.stringify(specificData));
  }, [specificData]);

  /**related to retriving and saving paricular api data ends */
  useEffect(() => {
    const localData = localStorage.getItem("bookmarkrecipe");
    if (localData && JSON.parse(localData).length) {
      setBookmark(JSON.parse(localData));
    }
  }, []);

  useEffect(() => {
    findIsAlreadyBookmarked != -1 && setIsBookmark(true);
    if (bookmarks.length) {
      localStorage.setItem("bookmarkrecipe", JSON.stringify(bookmarks));
    }
  }, [bookmarks]);

  const ingredients = () => {
    const item = [];

    for (let i = 1; i <= 20; i++) {
      if (specificData) {
        if (`${specificData[`strIngredient${i}`]}`) {
          item.push({
            ingredient: `${specificData[`strIngredient${i}`]}`,
            measure: `${specificData[`strMeasure${i}`]}`,
          });
        }
      }
    }
    return item;
  };

  return (
    <>
      <Container maxWidth="md" className="specificRecipe">
        <div>
          <Button
            variant="contained"
            className="backBtn"
            onClick={() => history.push("/recipes")}>
            Back to recipes
          </Button>
        </div>

        <Grid container>
          <Grid item sm={12}>
            <Card>
              {checkIsPresent("strMealThumb") && (
                <CardMedia
                  className={classes.media}
                  image={checkIsPresent("strMealThumb")}
                  title="Contemplative Reptile"
                />
              )}

              <CardContent>
                <Typography variant="h4" className="specificRecipe__title">
                  {checkIsPresent("strMeal")}
                </Typography>

                <div className="iconContainer" onClick={handleBookMark}>
                  <Tooltip
                    title={
                      !isBookmark ? "Add to Bookmarks" : "Remove from Bookmarks"
                    }
                    placement="right-start">
                    {isBookmark ? (
                      <BookmarkIcon style={{ fontSize: 30 }} />
                    ) : (
                      <BookmarkBorderIcon style={{ fontSize: 30 }} />
                    )}
                  </Tooltip>
                </div>

                <div>
                  <Typography variant="h6" className="category">
                    category:-
                    <span style={{ fontSize: "1rem", marginLeft: 10 }}>
                      {checkIsPresent("strCategory")}
                    </span>
                  </Typography>
                </div>

                <div>
                  <Typography variant="h6" className="intro">
                    Instructions:-
                  </Typography>
                  <Typography className="para">
                    {checkIsPresent("strInstructions")}
                  </Typography>
                </div>

                <div>
                  <Typography
                    variant="h6"
                    className="name"
                    style={{ marginTop: "1rem" }}>
                    Ingredients and measures:-
                  </Typography>

                  <div className="displayRecipeItems">
                    {ingredients().length
                      ? ingredients().map(({ ingredient, measure }, i) => (
                          <h5 key={i}>
                            <span className="ingredients">{ingredient}</span>-
                            <span className="measures">{measure}</span>
                          </h5>
                        ))
                      : "..."}
                  </div>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
export default SpecificPage;
