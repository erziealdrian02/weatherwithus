import CONFIG from "./config";

const API_ENDPOINT = {
  HOME_PAGE: CONFIG.BASE_URL,
  ABOUT_US: CONFIG.DATA_AUTHOR,
  DETAIL: (id) => `https://ibnux.github.io/BMKG-importer/cuaca/${id}.json`,
};

export default API_ENDPOINT;
