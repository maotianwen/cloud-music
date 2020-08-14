// import { fromJS } from "immutable";
import Api from "@/api/request";
import * as actionTypes from "./actionTypes";

function actionTest(data) {
  return {
    type: actionTypes.TEST,
    data: data,
  };
}

export { actionTest };
