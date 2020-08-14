// import { fromJS } from "immutable";
// import { combineReducers } from "redux";
import * as actionTypes from "./actionTypes";

const defaultState = {
  testList: [1, 2, 3],
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.TEST:
      return [4, 5, 6, ...state];
    default:
      return state;
  }
};
