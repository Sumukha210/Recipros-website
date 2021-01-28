import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Search from "@material-ui/icons/Search";
import { useDebounce } from "@react-hook/debounce";

const SearchBar = () => {
  const [inputVal, setInputVal] = useState("");
  const [searchQuery, setSearchQuery] = useDebounce("", 700);

  const handleInput = e => {
    setInputVal(e.target.value);
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    console.log("searchQuery", searchQuery);
  }, [searchQuery]);

  const handleSubmit = e => {
    e.preventDefault();
    console.log("submit", e.target.textInput.value);
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
