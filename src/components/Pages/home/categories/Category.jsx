import React from "react";
import Button from "@material-ui/core/Button";

const Category = ({ img, title, content, path }) => {
  return (
    <div className="categories__section">
      <figure>
        <img src={`/assets/${img}-img.jpg`} alt="" />
      </figure>
      <div className="categories__section--content">
        <h6 className="title">{title}</h6>
        <p className="para">{content}</p>
        <Button>View</Button>
      </div>
    </div>
  );
};

export default Category;
