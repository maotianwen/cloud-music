import React from "react";
import styled from "styled-components";
import UserInfo from "@/components/UserInfo";
import { NavLink } from "react-router-dom";

// import Icon from "@/components/Icon";
// const reactRouter = require("react-router-dom");

const SideBarWrapper = styled.div`
  width: 240px;
  background-color: #ededed;
  height: 100%;
  position: fixed;
  top: 60px;
  overflow: auto;
  white-space: pre-wrap;
  .menu-wrapper {
    margin-bottom: 22px;
  }
  a {
    height: 44px;
    display: flex;
    align-items: center;
    padding-left: 14px;
    color: #000000;
    &:hover {
      background-color: #e9eae9;
    }
    &.active {
      color: #d84f47;
      background-color: #e1e1e1;
    }
    img {
      width: 20px;
      height: 20px;
    }
    span {
      margin-left: 14px;
    }
  }
  p {
    font-size: 14px;
    color: grey;
    margin-left: 12px;
    margin-bottom: 18px;
  }
`;

const menu = [
  { text: "发现音乐", url: "findmusic", id: 0, icon: "logo-dark" },
  { text: "私人FM", url: "privatefm", id: 1, icon: "fm" },
  { text: "视频", url: "video", id: 2, icon: "video" },
  { text: "朋友", url: "friend", id: 3, icon: "friend" },
];
const myMusic = [
  { text: "下载管理", url: "download", id: 0, icon: "logo-dark" },
  { text: "我的音乐云盘", url: "cloud", id: 1, icon: "cloud" },
  { text: "我的电台", url: "mybroadcast", id: 2, icon: "broadcast" },
  { text: "我的收藏", url: "collect", id: 3, icon: "collect" },
];

function SideBar(props) {
  return (
    <SideBarWrapper>
      {/* <Icon name="fm" /> */}
      <UserInfo />
      <div className="menu-wrapper">
        {menu.map((item) => (
          <NavLink key={item.id} to={`/${item.url}`}>
            <img
              src={require(`../icons/svg/${item.icon}.svg`)}
              alt={item.text}
            />
            <span>{item.text}</span>
          </NavLink>
        ))}
      </div>
      <p>我的音乐</p>
      <div className="menu-wrapper">
        {myMusic.map((item) => (
          <NavLink key={item.id} to={`/${item.url}`}>
            <img
              src={require(`../icons/svg/${item.icon}.svg`)}
              alt={item.text}
            />
            <span>{item.text}</span>
          </NavLink>
        ))}
      </div>
    </SideBarWrapper>
  );
}

export default React.memo(SideBar);
