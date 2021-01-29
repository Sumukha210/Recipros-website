import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { DataContext } from "../../../../Context/DataContext";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(2),
    width: "100%",
  },
  select: {
    width: "100%",
  },
}));

const MenuBar = () => {
  const [selectVal, setSelectVal] = useState("");
  const [categories, setCategories] = useState([]);
  const classes = useStyles();
  const { getMeals } = useContext(DataContext);
  let localName = "categories";

  const handleSelect = e => {
    setSelectVal(e.target.value);
  };

  const getCategories = async () => {
    const {
      data: { meals },
    } = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/list.php?c=list`
    );
    meals.length && setCategories(meals);
  };

  useEffect(() => {
    let localData = localStorage.getItem(localName);

    if (localData && JSON.parse(localData).length) {
      setCategories(JSON.parse(localData));
    } else {
      getCategories();
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(localName, JSON.stringify(categories));
  }, [categories]);

  useEffect(() => {
    if (selectVal.length && selectVal != "none") {
      getMeals(selectVal);
    }
  }, [selectVal]);

  return (
    <>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="select">Category</InputLabel>
        <Select
          className={classes.select}
          id="select"
          placeholder="category"
          variant="filled"
          value={selectVal}
          onChange={handleSelect}>
          {categories.length ? (
            categories.slice(1).map(({ strCategory }, i) => (
              <MenuItem key={i} value={strCategory}>
                {strCategory}
              </MenuItem>
            ))
          ) : (
            <MenuItem value="none">
              <em>None</em>
            </MenuItem>
          )}
        </Select>
      </FormControl>
    </>
  );
};

export default MenuBar;
