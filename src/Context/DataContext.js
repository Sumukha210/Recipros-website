import axios from "axios";
import React, { createContext, useReducer, useState, useEffect } from "react";
import {
  ADD__BOOKMARKS,
  CLEAR_SINGLE_BOOKMARK,
  DATA_ERROR,
  DATA_LOADING,
  GET_ALL_DATA,
  GET_SPECIFIC_DATA,
  CLEAR_ALL_BOOKMARKS,
  SET__BOOKMARKS,
} from "./ActionTypes";
import { DataReducer } from "./DataReducer";

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const URL = `https://www.themealdb.com/api/json/v1/1`;
  const [state, dispatch] = useReducer(DataReducer, intialState);
  const localName = "meals";

  //get all the meals from api
  const getMeals = async (categoryName, searchTerm) => {
    const {
      data: { meals },
    } = await axios.get(
      categoryName
        ? `${URL}/filter.php?c=${categoryName}`
        : `${URL}/search.php?s=${searchTerm}`
    );

    if (meals) {
      dispatch({ type: GET_ALL_DATA, payload: meals });
    } else {
      dispatch({ type: DATA_ERROR, payload: "Meal not found" });
    }
  };

  //get meals by by id
  const getSpecificMeal = async id => {
    dispatch({ type: DATA_LOADING });
    const {
      data: { meals },
    } = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );

    meals.length && dispatch({ type: GET_SPECIFIC_DATA, payload: meals[0] });
  };

  const setSpecificMeal = payload => {
    dispatch({ type: GET_SPECIFIC_DATA, payload });
  };

  //add bookmark
  const addBookmark = payload => {
    dispatch({ type: ADD__BOOKMARKS, payload });
  };

  //set bookmark
  const setBookmark = payload => {
    dispatch({ type: SET__BOOKMARKS, payload });
  };

  //clear single bookmark by id
  const clearSingleBookmark = payload => {
    dispatch({ type: CLEAR_SINGLE_BOOKMARK, payload });
  };

  //clear all bookmarks
  const clearAllBookmarks = () => {
    dispatch({ type: CLEAR_ALL_BOOKMARKS });
  };

  useEffect(() => {
    let localData = localStorage.getItem(localName);

    if (localData && JSON.parse(localData).length) {
      dispatch({ type: GET_ALL_DATA, payload: JSON.parse(localData) });
    } else {
      getMeals("Vegetarian");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(localName, JSON.stringify(state.data));
  }, [state.data]);

  return (
    <DataContext.Provider
      value={{
        state,
        getMeals,
        addBookmark,
        setBookmark,
        clearSingleBookmark,
        clearAllBookmarks,
        getSpecificMeal,
        setSpecificMeal,
      }}>
      {children}
    </DataContext.Provider>
  );
};

const intialState = {
  data: [],
  specificData: {},
  bookmarks: [],
  loading: false,
  error: "",
};
