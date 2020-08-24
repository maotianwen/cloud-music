import * as actionTypes from "./constants";

const changePageIndex = (data) => ({
  type: actionTypes.changePageIndex,
  data,
});

const setPlayingId = (id) => ({
  type: actionTypes.setPlayingId,
  id,
});

const setPlayingState = (state) => ({
  type: actionTypes.setPlayingState,
  state,
});

export { changePageIndex, setPlayingId, setPlayingState };
