import React from "react";
import Category from "./Category";

const Categories = () => {
  return (
    <>
      <div className="categories">
        <h1 className="categories__title">try our diffrent categories:- </h1>

        <div className="categories__container">
          <Category
            img="pasta"
            title="pasta"
            content="Pasta is a staple food of traditional Italian cuisine, with the first reference dating to 1154 in Sicily. Over 100 varieties of pasta's recipes are available"
          />

          <Category
            img="deserts"
            content=" Over 100 varities of   biscuits, cakes, cookies, custards, gelatins, ice creams, pastries, pies, puddings, and sweet soups, and tarts are availble"
            title="deserts"
          />

          <Category
            img="veg"
            title="Vegetarian"
            content="There are variations of the diet as well: an ovo-lacto vegetarian diet includes both eggs and dairy products, an ovo-vegetarian diet includes eggs but not dairy products."
          />

          <Category
            img="seaFood"
            title="sea food"
            content="Over 300 varities of  fish and shellfish. Shellfish include various species of molluscs, crustaceans, and echinoderms are available"
          />
        </div>
      </div>
    </>
  );
};

export default Categories;
