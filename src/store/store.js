import { createStore } from "redux";
import * as actionTypes from "./constants";

//reducer
const initialState = {
  text: "Helo",
  currentPageIndex: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.changePageIndex:
      return {
        text: "helo",
        currentPageIndex: action.data,
      };
    default:
      return initialState;
  }
};

let store = createStore(reducer);

export default store;
