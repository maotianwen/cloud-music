import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Api from "@/api/request";
import Time from "@/components/Time";
import { useDispatch } from "react-redux";
import * as actionCreators from "@/store/actionCreators";
import DateFormatter from "../components/DateFormatter";

const PlaylistDetailWrapper = styled.div`
  .left-padding {
    margin-left: 30px;
  }
  span {
    display: inline-block;
    text-overflow: ellipsis;
    &.music-title {
      width: 440px;
    }
    &.singer {
      width: 180px;
    }
    &.album {
      width: 380px;
    }
    &.duration {
      width: 90px;
      margin-left: 36px;
    }
  }
  padding: 20px 0;
  .playlist-header {
    white-space: nowrap;
    margin-bottom: 30px;
    img {
      width: 300px;
      height: 300px;
      border-radius: 14px;
      border: 1px solid grey;
    }
    .vertical-middle {
      display: flex;
      align-items: center;
    }
    .playlist-info {
      display: inline-block;
      vertical-align: top;
      height: 300px;
      padding-top: 4px;
      margin-left: 24px;
      .title {
        font-size: 28px;
        font-weight: bold;
        margin-bottom: 20px;
        span {
          color: #d84f47;
          border-radius: 6px;
          border: 1px solid #d84f47;
          padding: 2px 4px;
          font-size: 14px;
          margin-right: 18px;
        }
      }
      .author-info {
        margin-bottom: 24px;
        img {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          border: none;
        }
        .nickname {
          color: #015bab;
          margin: 0 10px;
        }
      }
      p {
        font-size: 14px;
        margin-bottom: 10px;
        .tags {
          color: #015bab;
        }
        .play-count {
          margin-left: 14px;
        }
      }
    }
    .span-keys {
      text-align-last: justify;
      width: 46px;
      color: #000000;
    }
    .span-values {
      color: #707070;
    }
    .description {
      width: 160px;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
  .main-menu {
    margin-bottom: 12px;
    span {
      font-size: 18px;
      &.comment {
        margin: 0 44px;
      }
    }
  }
  .sub-menu {
    white-space: nowrap;
    margin-bottom: 12px;
    span {
      font-size: 14px;
      color: #707070;
    }
  }
  ul {
    li {
      white-space: nowrap;
      overflow: hidden;
      &:hover {
        cursor: pointer;
        background-color: #e6e6e6;
      }
      span {
        height: 60px;
        line-height: 60px;
      }
    }
  }
`;

function PlaylistDetail(props) {
  const listId = props.location.state || 5141943606;
  const [playlist, setPlayList] = useState(null);
  const dispatch = useDispatch();
  const setPlayingId = (id) => dispatch(actionCreators.setPlayingId(id));

  async function getPlaylistData(id) {
    try {
      const data = await Api.getPlaylistDetail(id);
      console.log(data.playlist);
      setPlayList(data.playlist);
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    getPlaylistData(listId);
  }, [listId]);

  return (
    playlist && (
      <PlaylistDetailWrapper>
        <div className="playlist-header left-padding">
          <img src={playlist.coverImgUrl} alt={playlist.name} />
          <div className="playlist-info">
            <div className="title vertical-middle">
              <span>歌单</span>
              {playlist.name}
            </div>
            <div className="author-info vertical-middle">
              <img
                src={playlist.creator.avatarUrl}
                alt={playlist.creator.nickname}
              />
              <span className="nickname"> {playlist.creator.nickname}</span>
              <span className="span-values">
                <DateFormatter timestamp={playlist.createTime} />
                创建
              </span>
            </div>
            <div className="btn"></div>
            <p>
              <span className="span-keys">标签</span>:
              {playlist.tags.map((item, index, arr) => (
                <span key={index}>
                  <span className="tags">{item}</span>
                  {arr.length > 1 && index !== arr.length - 1 ? "/" : ""}
                </span>
              ))}
            </p>
            <p className="nums">
              <span className="span-keys">歌曲数</span>:
              <span className="span-values">{playlist.tracks.length}</span>
              <span className="play-count span-keys">播放数</span>:
              <span className="span-values"> {playlist.playCount}</span>
            </p>
            <p className="description">
              <span className="span-keys">简介</span>:
              <span className="span-values">{playlist.description}</span>
            </p>
          </div>
        </div>
        <div className="main-menu left-padding">
          <span>歌曲列表</span>
          <span className="comment">评论</span>
          <span>收藏者</span>
        </div>
        <div className="sub-menu left-padding">
          <span className="music-title">音乐标题</span>
          <span className="singer">歌手</span>
          <span className="album">专辑</span>
          <span className="duration">时长</span>
        </div>
        <ul>
          {playlist.tracks.map((item, index) => (
            <li
              key={item.id}
              onDoubleClick={() => {
                setPlayingId(item.id);
                dispatch(actionCreators.setPlayingState(true));
              }}
            >
              <span className="music-title left-padding">{item.name}</span>
              <span className="singer">{item.ar[0].name}</span>
              <span className="album">{item.al.name}</span>
              <span className="duration">
                <Time time={item.dt.toString().slice(0, 3)} />
              </span>
            </li>
          ))}
        </ul>
      </PlaylistDetailWrapper>
    )
  );
}

export default React.memo(PlaylistDetail);
