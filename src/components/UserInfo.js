import React from "react";
import styled from "styled-components";

const UserInfoStyle = styled.div`
  display: flex;
  align-items: center;
  height: 70px;
  font-size: 16px;
  .avatar {
    border-radius: 50%;
    border: 1px solid black;
    width: 34px;
    height: 34px;
    margin: 0 12px;
  }
  .show-detail {
    border: 8px solid transparent;
    border-left-color: black;
    border-top-width: 4px;
    border-bottom-width: 4px;
    margin-left: 18px;
  }
`;

function UserInfo(props) {
  return (
    <UserInfoStyle>
      <div className="avatar"></div>
      暂不支持登录 - -<i className="show-detail"></i>
    </UserInfoStyle>
  );
}

export default React.memo(UserInfo);
