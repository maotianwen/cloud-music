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
  font-weight: bold;
  span {
    font-size: 16px;
    margin-left: 14px;
    opacity: 0.5;
    &:hover {
      opacity: 0.8;
      cursor: pointer;
    }
  }
`;

const menu = ["个性推荐", "歌单", "主播电台", "排行榜", "歌手", "最新音乐"];

function Header(props) {
  return (
    <HeadWrapper>
      {menu.map((item, index) => (
        <span key={index}>{item}</span>
      ))}
    </HeadWrapper>
  );
}

export default React.memo(Header);
