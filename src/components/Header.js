import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

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

const menu = [
  ["个性推荐", "歌单", "主播电台", "排行榜", "歌手", "最新音乐"],
  [""],
  ["视频", "MV"],
  ["动态", "发动态"],
  ["已下载单曲", "已下载节目", "正在下载"],
  ["我的音乐云盘"],
  ["我的电台"],
  ["专辑", "歌手", "视频", "专栏"],
];

function Header({ currentPageIndex }) {
  return (
    <HeadWrapper>
      {menu[currentPageIndex].map((item, index) => (
        <span key={index}>{item}</span>
      ))}
    </HeadWrapper>
  );
}

function mapStateToProps(state) {
  return {
    currentPageIndex: state.currentPageIndex,
  };
}

export default connect(mapStateToProps)(React.memo(Header));
