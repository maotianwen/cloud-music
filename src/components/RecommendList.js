import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Api from "@/api/request";
import Icon from "@/components/Icon";
import { useHistory } from "react-router";

const RecommendListWrapper = styled.div`
  margin-bottom: 32px;
  .header {
    display: flex;
    align-items: center;
    margin-bottom: 18px;
    .title {
      letter-spacing: 2px;
    }
    .right-arrow {
      width: 16px;
      height: 16px;
    }
  }
  .list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .list-item {
      margin-bottom: 24px;
      width: 200px;
      &:hover {
        cursor: pointer;
      }
      img {
        display: block;
        width: 200px;
        height: 200px;
        margin-bottom: 10px;
        border-radius: 10px;
      }
      p {
        line-height: 22px;
        font-size: 14px;
      }
    }
  }
`;

function RecommendList(props) {
  const hashHistory = useHistory();
  let [songList, setSongList] = useState([]);
  const getData = async () => {
    const data = await Api.getRecommendListRequest(10);
    setSongList([...data.result]);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <RecommendListWrapper>
      <div className="header">
        <span className="title">推荐歌单</span>
        <Icon type="go" className="right-arrow" />
      </div>
      <div className="list">
        {songList.map((item) => (
          <div
            key={item.id}
            className="list-item"
            onClick={() => {
              hashHistory.push({ pathname: "/playlistdetail", state: item.id });
            }}
          >
            <img src={item.picUrl} alt={item.name} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </RecommendListWrapper>
  );
}

export default React.memo(RecommendList);
