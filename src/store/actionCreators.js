import * as actionTypes from "./constants";

const changePageIndex = (data) => ({
  type: actionTypes.changePageIndex,
  data,
});

export { changePageIndex };
