import UrlParser from "../../routes/url-parser";
import WeatherWithUs from "../../render-api/weather-with-us-api";

const Detail = {
  async render() {
    return `
          <detail-weather></detail-weather>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const detailPageApi = await WeatherWithUs.detailPage(url.id);
    console.log(detailPageApi);
  },
};

export default Detail;
