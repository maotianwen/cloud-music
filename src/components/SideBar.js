import React from "react";
import styled from "styled-components";

const SideBarWrapper = styled.div`
  width: 240px;
  background-color: #ededed;
  height: 100%;
  position: fixed;
  top: 60px;
  overflow: auto;
  white-space: pre-wrap;
`;

function SideBar(props) {
  return <SideBarWrapper>haha</SideBarWrapper>;
}

export default React.memo(SideBar);
