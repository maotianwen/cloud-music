import React from "react";
import styled from "styled-components";

const PlayerWrapper = styled.div`
  position: fixed;
  bottom: 0;
  height: 60px;
  width: 100%;
  background-color: #ffffff;
  box-shadow: 0 4px 0 #000000;
`;

function Player({ text, printHelloWorld }) {
  return <PlayerWrapper onClick={printHelloWorld}>play</PlayerWrapper>;
}

export default React.memo(Player);
