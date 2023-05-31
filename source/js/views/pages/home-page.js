import Hero from "../../components/main-content/home-page/hero-section";
import WeatherWithUs from "../../render-api/weather-with-us-api";
import { homeWeatherTemplate } from "../templates/template-weather";

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
    let weatherContainer = document.querySelector(".weather-cards");

    // kalo ini orinya

    // homePageApi.forEach((weather) => {
    //   weatherContainer.innerHTML += homeWeatherTemplate(weather);
    // });

    // ini untuk sementara,karena lag banget coo laptop gua langsung ngehit 900++ api
    for (let i = 0; i <= 10; i++) {
      weatherContainer.innerHTML += homeWeatherTemplate(homePageApi[i]);
    }
  },
};

export default HomePage;
