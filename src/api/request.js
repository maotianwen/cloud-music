import { axiosInstance } from "./config";

export default {
  getBannerRequest() {
    return axiosInstance.get("/banner");
  },
  //获取推荐歌单(可选参数limit,默认30)
  getRecommendListRequest(limit) {
    return axiosInstance.get(`/personalized?limit=${limit}`);
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
  //独家放送
  getPrivateContent(limit, offset) {
    return axiosInstance.get(
      `/personalized/privatecontent/list?limit=${limit}&offset=${offset}`
    );
  },
  //获取音乐url
  getMusicUrl(id) {
    return axiosInstance.get(`/song/url?id=${id}`);
  },
  //获取歌曲详情
  getMusicDetail(ids) {
    return axiosInstance.get(`/song/detail?ids=${ids}`);
  },
  //喜欢歌曲
  likeTheSong(id) {
    return axiosInstance.get(`/like?id=${id}`);
  },
  //获取歌单详情
  getPlaylistDetail(id) {
    return axiosInstance.get(`/playlist/detail?id=${id}`);
  },
};
