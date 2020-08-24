import { createStore } from "redux";
import * as actionTypes from "./constants";

//reducer
const initialState = {
  currentPageIndex: 0,
  playingId: 33894312,
  playingState: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.changePageIndex:
      return {
        ...state,
        currentPageIndex: action.data,
      };
    case actionTypes.setPlayingId:
      return {
        ...state,
        playingId: action.id,
      };
    case actionTypes.setPlayingState:
      return {
        ...state,
        playingState: action.state,
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
