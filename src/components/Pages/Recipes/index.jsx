import React from "react";
import DisplayContainer from "./DisplayRecipes";
import Header from "./Header/Header";

const RecipesPage = () => {
  return (
    <div className="recipes">
      <Header />
      <DisplayContainer />
    </div>
  );
};

export default RecipesPage;
