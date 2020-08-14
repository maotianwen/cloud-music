import { axiosInstance } from "./config";

// export const getBannerRequest = () => {
//   return axiosInstance.get("/banner");
// };

// export const getRecommendListRequest = () => {
//   return axiosInstance.get("/personalized");
// };

export default {
  getBannerRequest() {
    return axiosInstance.get("/banner");
  },
  getRecommendListRequest() {
    return axiosInstance.get("/personalized");
  },
  loginByMobile(phone, password) {
    return axiosInstance.get(
      `/login/cellphone?phone=${phone}&password=${password}`
    );
  },
  // type地区类型ID 全部:0 华语:7 欧美:96 日本:8 韩国:16
  getNewSongs(type) {
    return axiosInstance.get(`/top/song?type=${type}`);
  },
};
