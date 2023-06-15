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

    const keys = ["propinsi"];
    const filteredData = homePageApi.filter((value, index, self) => self.findIndex((v) => keys.every((k) => v[k] === value[k])) === index);
    filteredData.forEach((data) => {
      if (data.propinsi === "Banten") return;
      weatherContainer.innerHTML += homeWeatherTemplate(data);
    });
  },
};

export default HomePage;
