import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Api from "@/api/request";

const SwiperContainer = styled.div`
  overflow: hidden;
  width: 600px;
  box-sizing: border-box;
  .list-wrapper {
    white-space: nowrap;
  }
  .list-item {
    box-sizing: border-box;
    width: 600px;
    border-radius: 24px;
    object-fit: contain;
    display: inline-block;
  }
`;

function Banner(props) {
  let [slideObj, setSlideObj] = useState({
    index: 1,
    allowAnimation: true,
  });
  let [imgArr, setImgArr] = useState([]);

  const nextPage = () => {
    setSlideObj((slideObj) => {
      return slideObj.index === 10
        ? { index: 0, allowAnimation: false }
        : { index: slideObj.index + 1, allowAnimation: true };
    });
  };

  const prePage = () => {
    setSlideObj((slideObj) => {
      return slideObj.index === 0
        ? { index: 10, allowAnimation: false }
        : { index: slideObj.index - 1, allowAnimation: true };
    });
  };

  async function setBannerData() {
    const res = await Api.getBannerRequest();
    setImgArr([
      res.banners[res.banners.length - 1],
      ...res.banners,
      res.banners[0],
    ]);
  }

  useEffect(() => {
    setBannerData();
  }, []);

  let styleObj = {
    transform: `translateX(${-600 * slideObj.index}px)`,
    transition: slideObj.allowAnimation ? "transform 0.4s" : "",
  };
  return (
    <>
      <button onClick={prePage}>pre</button>
      <SwiperContainer>
        <div className="list-wrapper" style={styleObj}>
          {imgArr.map((item, index) => (
            <img
              key={index}
              className="list-item"
              src={item.imageUrl}
              alt={item.typeTitle}
            />
          ))}
        </div>
      </SwiperContainer>
      <button onClick={nextPage}>next</button>
    </>
  );
}

export default React.memo(Banner);
