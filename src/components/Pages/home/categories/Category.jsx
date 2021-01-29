import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import { DataContext } from "../../../../Context/DataContext";

const Category = ({ img, title, content, type }) => {
  const history = useHistory();
  const { getMeals } = useContext(DataContext);

  const handleViewBtn = () => {
    getMeals(type, null);

    setTimeout(() => {
      history.push("/recipes");
    }, 200);
  };

  return (
    <div className="categories__section">
      <figure>
        <img src={`/assets/${img}-img.jpg`} alt="" />
      </figure>
      <div className="categories__section--content">
        <h6 className="title">{title}</h6>
        <p className="para">{content}</p>
        <Button onClick={handleViewBtn}>View</Button>
      </div>
    </div>
  );
};

export default Category;
