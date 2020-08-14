import React from "react";
import styled from "styled-components";

const SvgStyle = styled.svg`
  width: 26px;
  height: 26px;
`;

function Icon(props) {
  return (
    <SvgStyle className={props.className}>
      <use xlinkHref={`#icon-${props.type}`}></use>
    </SvgStyle>
  );
}
export default Icon;
