import React from "react";
import styled from "styled-components";

const UserInfoStyle = styled.div`
  height: 50px;
  font-size: 16px;
`;

function UserInfo(props) {
  return <UserInfoStyle>少年问呵呵</UserInfoStyle>;
}

export default React.memo(UserInfo);
