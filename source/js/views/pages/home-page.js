// import Hero from '../../components/main-content/home-page/hero-section';
import WeatherWithUs from '../../render-api/weather-with-us-api';
import { filteredWeather, searchWeather } from '../templates/template-weather';

const HomePage = {
  async render() {
    return `
        <hero-custom> </hero-custom>
        <current-weather>
        </current-weather>
    `;
  },

  async afterRender() {
    const homePageApi = await WeatherWithUs.homePage();
    const weatherContainer = document.querySelector('.weather-cards');
    const weatherSearchContainer = document.getElementById('weather-search');

    filteredWeather(homePageApi, weatherContainer);
    searchWeather(weatherSearchContainer, homePageApi, weatherContainer);
  },
};

export default HomePage;
