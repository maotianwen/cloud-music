import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Api from "@/api/request";
import Icon from "@/components/Icon";
import Time from "@/components/Time";
import { useSelector, useDispatch } from "react-redux";
import * as actionCreators from "@/store/actionCreators";

const PlayerWrapper = styled.div`
  position: fixed;
  display: flex;
  width: 100%;
  align-items: center;
  bottom: 0;
  height: 75px;
  padding-left: 10px;
  width: 100%;
  background-color: #ffffff;
  box-shadow: 0 4px 0 #000000;
  .progress-bar {
    height: 2px;
    background-color: #d84f47;
    position: absolute;
    top: 0;
    left: 0;
    transition: width 0.2s;
  }
  img {
    width: 50px;
    height: 50px;
    border-radius: 6px;
  }
  .song-info {
    margin-left: 12px;
    height: 45px;
    p {
      color: grey;
      font-size: 10px;
      margin-top: 14px;
    }
    .song-name {
      font-size: 15px;
      text-overflow: ellipsis;
    }
    .singer-name {
      font-size: 10px;
      vertical-align: middle;
      color: grey;
      text-overflow: ellipsis;
    }
  }
  .main-panel {
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 280px;

    .play-pause {
      transform: scale(1.4);
    }
    .prev {
      transform: rotateY(180deg);
      fill: #d84f47;
    }
    .next {
      fill: #d84f47;
    }
  }
`;

function Player({ id, playingState }) {
  const [musicUrl, setMusicUrl] = useState(null);
  const [musicDetail, setMusicDetail] = useState({});
  const [song, setSong] = useState({ currentTime: "00:00", totalTime: "" });
  const audioDOM = useRef(null);
  id = useSelector((state) => state.playingId);
  playingState = useSelector((state) => state.playingState);
  let dispatch = useDispatch();
  function controlPlayState() {
    if (audioDOM.current.paused) {
      audioDOM.current.play();
      dispatch(actionCreators.setPlayingState(true));
    } else {
      audioDOM.current.pause();
      dispatch(actionCreators.setPlayingState(false));
    }
  }

  function updateTime() {
    setSong({
      currentTime: audioDOM.current.currentTime,
      totalTime: audioDOM.current.duration,
    });
  }
  async function getMusicUrl(id) {
    const data = await Api.getMusicUrl(id);
    console.log(data.data[0].url);
    setMusicUrl(data.data[0].url);
  }

  async function getMusicDetail(id) {
    const data = await Api.getMusicDetail(id);
    console.log(data.songs[0]);
    setMusicDetail(data.songs[0]);
    setSong({
      currentTime: 0,
      totalTime: data.songs[0].dt.toString().slice(0, 3),
    });
  }

  useEffect(() => {
    getMusicDetail(id);
    getMusicUrl(id);
  }, [id]);

  return (
    musicDetail.name && (
      <PlayerWrapper>
        <div
          className="progress-bar"
          style={{ width: `${(song.currentTime / song.totalTime) * 100}%` }}
        ></div>
        <img src={musicDetail.al.picUrl} alt={musicDetail.name} />
        <div className="song-info">
          <span className="song-name">{musicDetail.name}</span>
          <span className="singer-name"> - {musicDetail.al.name}</span>
          <p>
            <Time time={song.currentTime} /> / <Time time={song.totalTime} />
          </p>
        </div>
        <audio
          src={musicUrl}
          ref={audioDOM}
          onTimeUpdate={updateTime}
          autoPlay={playingState}
        ></audio>
        <div className="main-panel">
          <Icon type="nextsong" className="prev" />
          {!playingState ? (
            <Icon
              type="play"
              clickEvent={controlPlayState}
              className="play-pause"
            />
          ) : (
            <Icon
              type="pause"
              clickEvent={controlPlayState}
              className="play-pause"
            />
          )}
          <Icon type="nextsong" className="next" />
        </div>
        <div className="side-panel"></div>
      </PlayerWrapper>
    )
  );
}

export default React.memo(Player);
