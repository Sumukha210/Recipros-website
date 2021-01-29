import {
  DATA_ERROR,
  DATA_LOADING,
  GET_ALL_DATA,
  GET_SPECIFIC_DATA,
  CLEAR_ALL_BOOKMARKS,
  CLEAR_SINGLE_BOOKMARK,
  ADD__BOOKMARKS,
  SET__BOOKMARKS,
} from "./ActionTypes";

export const DataReducer = (state, action) => {
  switch (action.type) {
    case GET_ALL_DATA:
      return {
        ...state,
        loading: false,
        error: "",
        data: [...action.payload],
      };

    case GET_SPECIFIC_DATA:
      return {
        ...state,
        specificData: { ...action.payload },
        loading: false,
      };

    case ADD__BOOKMARKS:
      // let findMeal = state.data.find(item => item.idMeal == action.payload);
      return {
        ...state,
        bookmarks: [...state.bookmarks, action.payload],
      };

    case SET__BOOKMARKS:
      return {
        ...state,
        bookmarks: [...action.payload],
      };

    case CLEAR_ALL_BOOKMARKS:
      return {
        ...state,
        bookmarks: [],
      };

    case CLEAR_SINGLE_BOOKMARK:
      return {
        ...state,
        bookmarks: [
          ...state.bookmarks.filter(item => item.idMeal != action.payload),
        ],
      };

    case DATA_LOADING:
      return {
        ...state,
        loading: true,
      };

    case DATA_ERROR:
      return {
        data: [],
        specificData: {},
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
