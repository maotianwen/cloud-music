import React, { useState } from "react";
import Banner from "@/components/Banner";
import * as actionTypes from "./store/actionCreators";
import RecommendList from "@/components/RecommendList";
import PrivateContent from "@/components/PrivateContent";
import styled from "styled-components";

const RecommendWrapper = styled.div`
  padding: 18px 34px 160px 34px;
`;

function Recommend(props) {
  // const { testList } = props;
  // const { testDispatch } = props;

  return (
    <RecommendWrapper>
      <Banner />
      <RecommendList />
      <PrivateContent />
    </RecommendWrapper>
  );
}

export default React.memo(Recommend);
