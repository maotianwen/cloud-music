import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Api from "@/api/request";
import Icon from "@/components/Icon";

const PlayerWrapper = styled.div`
  position: fixed;
  bottom: 0;
  height: 60px;
  width: 100%;
  background-color: #ffffff;
  box-shadow: 0 4px 0 #000000;
`;

function Player(props) {
  let [musicUrl, setMusicUrl] = useState(null);
  async function getMusicUrl(id) {
    const data = await Api.getMusicUrl(id);
    console.log(data.data[0].url);
    setMusicUrl(data.data[0].url);
  }

  return (
    <PlayerWrapper>
      {/* <img src={} alt={} /> */}
      <button onClick={() => getMusicUrl(33894312)}>test</button>
      <div className="song-info">
        <span>主标题</span>
        <span>副标题</span>
      </div>
      <audio src={musicUrl} autoPlay></audio>
      <div className="main-panel"></div>
      <div className="side-panel"></div>
    </PlayerWrapper>
  );
}

export default React.memo(Player);
