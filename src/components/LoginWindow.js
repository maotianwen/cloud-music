import React from "react";
import styled from "styled-components";

const LoginWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 340px;
  height: 480px;
  background-color: #fff;
  border-radius: 24px;
  border: 1px solid black;
`;

let show = false;
function LoginWindow(props) {
  return (
    show && (
      <LoginWrapper>
        <input />
        <input type="password" />
      </LoginWrapper>
    )
  );
}
export default React.memo(LoginWindow);
