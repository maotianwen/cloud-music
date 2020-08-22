import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Api from "@/api/request";
import Icon from "@/components/Icon";

const PrivateContentWrapper = styled.div`
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
      width: 240px;
      p {
        line-height: 22px;
      }
      img {
        display: block;
        width: 240px;
        height: 100px;
        object-fit: contain;
        margin-bottom: 10px;
        border-radius: 10px;
      }
    }
  }
`;

function PrivateContent(props) {
  let [songList, setSongList] = useState([]);
  const getData = async () => {
    const data = await Api.getPrivateContent(4, 0);
    setSongList([...data.result]);
    console.log(data.result);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <PrivateContentWrapper>
      <div className="header">
        <span className="title">独家放送</span>
        <Icon type="go" className="right-arrow" />
      </div>
      <div className="list">
        {songList.map((item) => (
          <div key={item.id} className="list-item">
            <img src={item.picUrl} alt={item.name} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </PrivateContentWrapper>
  );
}

export default React.memo(PrivateContent);
