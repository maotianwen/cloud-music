import React from "react";
import styled from "styled-components";

const HeadWrapper = styled.div`
  background-color: #d84f47;
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  color: #ffffff;
  font-size: 24px;
  font-weight: bold;
`;
function Header(props) {
  return <HeadWrapper>hello world</HeadWrapper>;
}

export default React.memo(Header);
