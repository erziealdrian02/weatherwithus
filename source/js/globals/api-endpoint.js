import CONFIG from './config';

const API_ENDPOINT = {
  HOME_PAGE: CONFIG.BASE_URL,
  ABOUT_US: CONFIG.DATA_AUTHOR,
  DETAIL: (id) => `https://ibnux.github.io/BMKG-importer/cuaca/${id}.json`,
  IMAGE_WEATHER: (id) => `https://ibnux.github.io/BMKG-importer/icon/${id}.png`,
  IMAGE_PROV: (propinsi) => `https://www.bmkg.go.id/asset/img/icon-prov/${propinsi}.png`,
};

export default API_ENDPOINT;
