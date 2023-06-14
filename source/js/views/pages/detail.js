import UrlParser from '../../routes/url-parser';
import WeatherWithUs from '../../render-api/weather-with-us-api';
import { detailInfoTemplate } from '../templates/template-weather';

const Detail = {
  async render() {
    return `
          <detail-weather></detail-weather>
          <div class="location-container" id="likeButtonContainer"> 
          </div>
      `;
  },
  // async render() {
  //   return `
  //         <detail-weather></detail-weather>
  //         <div class="location-container" id="likeButtonContainer">
  //           <button class="location-button">
  //             <i data-feather="map-pin"></i><span>Remember Im Here</span>
  //           </button>
  //         </div>
  //     `;
  // },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const detailPageApi = await WeatherWithUs.detailPage(url.id);
    const detailInfo = document.querySelector('.detail-info__weather');

    detailPageApi.forEach((weather) => {
      detailInfo.innerHTML += detailInfoTemplate(weather);
    });
    console.log(detailPageApi);
  },
};

export default Detail;
