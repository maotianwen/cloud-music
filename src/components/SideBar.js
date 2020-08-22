import React from "react";
import styled from "styled-components";
import UserInfo from "@/components/UserInfo";
import { NavLink } from "react-router-dom";
import Icon from "@/components/Icon";
import * as actionCreators from "@/store/actionCreators";
import { useSelector, useDispatch } from "react-redux";

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
    &.isactive {
      color: #d84f47;
      background-color: #e1e1e1;
      svg {
        fill: #d84f47;
      }
    }
    img {
      width: 20px;
      height: 20px;
    }
    span {
      margin-left: 14px;
    }
    /* .isactive {
      fill: #d84f47;
    } */
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
  { text: "下载管理", url: "download", id: 4, icon: "download" },
  { text: "我的音乐云盘", url: "cloud", id: 5, icon: "cloud" },
  { text: "我的电台", url: "mybroadcast", id: 6, icon: "broadcast" },
  { text: "我的收藏", url: "collect", id: 7, icon: "collect" },
];

function SideBar({ currentPageIndex, changeIndex }) {
  let dispatch = useDispatch();
  currentPageIndex = useSelector((state) => {
    return state.currentPageIndex;
  });
  changeIndex = (index) => {
    return dispatch(actionCreators.changePageIndex(index));
  };
  return (
    <SideBarWrapper>
      <UserInfo />
      <div className="menu-wrapper">
        {menu.map((item) => (
          <NavLink
            key={item.id}
            to={`/${item.url}`}
            onClick={() => changeIndex(item.id)}
            className={currentPageIndex === item.id ? "isactive" : ""}
            replace
          >
            <Icon type={item.icon} />
            <span>{item.text}</span>
          </NavLink>
        ))}
      </div>
      <p>我的音乐</p>
      <div className="menu-wrapper">
        {myMusic.map((item) => (
          <NavLink
            key={item.id}
            to={`/${item.url}`}
            onClick={() => changeIndex(item.id)}
            className={currentPageIndex === item.id ? "isactive" : ""}
            replace
          >
            <Icon type={item.icon} />
            <span>{item.text}</span>
          </NavLink>
        ))}
      </div>
    </SideBarWrapper>
  );
}

export default React.memo(SideBar);
