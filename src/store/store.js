import { createStore } from "redux";
import * as actionTypes from "./constants";

//reducer
const initialState = {
  currentPageIndex: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.changePageIndex:
      return {
        currentPageIndex: action.data,
      };
    default:
      return initialState;
  }
};

let store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : undefined
);

export default store;
