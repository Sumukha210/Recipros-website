import React, { useContext, useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Search from "@material-ui/icons/Search";
import { useDebounce } from "@react-hook/debounce";
import { DataContext } from "../../../../Context/DataContext";

const SearchBar = () => {
  const [inputVal, setInputVal] = useState("");
  const [searchQuery, setSearchQuery] = useDebounce("", 500);
  const { getMeals } = useContext(DataContext);

  const handleInput = e => {
    setInputVal(e.target.value);
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    searchQuery.length && getMeals(null, searchQuery);
  }, [searchQuery]);

  const handleSubmit = e => {
    e.preventDefault();
    searchQuery.length && getMeals(null, e.target.textInput.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          placeholder="enter the recipe name..."
          variant="filled"
          name="textInput"
          value={inputVal}
          onChange={handleInput}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
        />
      </form>
    </>
  );
};

export default SearchBar;
