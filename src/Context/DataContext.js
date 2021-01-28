import React, { createContext, useReducer } from "react";
import { DataReducer } from "./DataReducer";

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const intialState = {
    data: [],
    specificData: {},
    loading: false,
    error: "",
  };

  const [state, dispatch] = useReducer(DataReducer, intialState);

  return <DataContext.Provider value={state}>{children}</DataContext.Provider>;
};
