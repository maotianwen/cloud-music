import React, { useState } from "react";
import Banner from "@/components/Banner";
import { connect } from "react-redux";
import * as actionTypes from "./store/actionCreators";

function Recommend(props) {
  // const { testList } = props;
  // const { testDispatch } = props;

  return (
    <div>
      <Banner />
      {/* <button onClick={testDispatch}>redux测试</button> */}
      {/* {testList.map((item, index) => (
        <p key={index}>{item}</p>
      ))} */}
    </div>
  );
}

// const mapStateToProps = (state) => ({
//   testList: state.testList,
// });
// const mapDispatchToProps = (dispatch) => {
//   return {
//     testDispatch() {
//       dispatch(actionTypes.actionTest());
//     },
//   };
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(React.memo(Recommend));

export default React.memo(Recommend);
