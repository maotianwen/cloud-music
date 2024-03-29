import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Api from "@/api/request";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.css";
import Icon from "@/components/Icon";

const SwiperContainer = styled.div`
  margin-bottom: 20px;
  .btn {
    width: 30px;
    height: 30px;
    position: absolute;
    z-index: 4;
    top: 44%;
    fill: #000000;
    opacity: 0.4;
    &:hover {
      cursor: pointer;
    }
    &.hidden {
      display: none;
    }
    &.next {
      right: 0;
      transform: translateY(-50%);
    }
    &.prev {
      transform: rotateY(180deg) translateY(-50%);
    }
  }
  .swiper-container {
    padding-bottom: 30px;
    .swiper-slide {
      img {
        width: 100%;
      }
    }
  }
  .swiper-pagination {
    position: absolute;
    bottom: 0;
    .swiper-pagination-bullet-active {
      background-color: #d84f47;
    }
  }
`;
SwiperCore.use([Navigation, Pagination, Autoplay]);

function Banner(props) {
  let [imgArr, setImgArr] = useState([]);
  const [hidden, setHidden] = useState(true);
  async function setBannerData() {
    const res = await Api.getBannerRequest();
    setImgArr([...res.banners]);
  }

  useEffect(() => {
    setBannerData();
  }, []);
  return (
    <SwiperContainer
      onMouseEnter={() => setHidden(false)}
      onMouseLeave={() => setHidden(true)}
    >
      {imgArr.length && (
        <Swiper
          navigation={{
            nextEl: ".next",
            prevEl: ".prev",
          }}
          pagination={{ el: ".swiper-pagination", type: "bullets" }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
        >
          {imgArr.map((item) => (
            <SwiperSlide key={item.imageUrl}>
              <img src={item.imageUrl} alt={item.typeTitle} />
            </SwiperSlide>
          ))}
          <div className="swiper-pagination"></div>
          <Icon type="go" className={`prev btn ${hidden && "hidden"}`} />
          <Icon type="go" className={`next btn ${hidden && "hidden"}`} />
        </Swiper>
      )}
    </SwiperContainer>
  );
}

export default React.memo(Banner);
