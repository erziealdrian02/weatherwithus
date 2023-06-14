// import Hero from '../../components/main-content/home-page/hero-section';
import WeatherWithUs from '../../render-api/weather-with-us-api';
import { homeWeatherTemplate } from '../templates/template-weather';
import API_ENDPOINT from '../../globals/api-endpoint';

function formatProvinceName(province) {
  let formattedName = province.replace(/([A-Z])/g, '-$1');
  formattedName = formattedName.toLowerCase();
  if (formattedName.startsWith('-')) {
    formattedName = formattedName.substring(1);
    if (formattedName === 'd-k-i-jakarta') {
      formattedName = 'dki-jakarta';
    } else if (formattedName === 'd-i-yogyakarta') {
      formattedName = 'di-yogyakarta';
    } else if (formattedName === 'bangka-belitung') {
      formattedName = 'kepulauan-bangka-belitung';
    }
  }
  return formattedName;
}

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

    const keys = ['propinsi'];
    // eslint-disable-next-line max-len
    const filteredData = homePageApi.filter(
      (value, index, self) => self.findIndex((v) => keys.every((k) => v[k] === value[k]))
            === index,
    );
    filteredData.forEach((data) => {
      if (data.propinsi === 'Banten') return;
      const formattedPropinsi = formatProvinceName(data.propinsi);
      // eslint-disable-next-line no-param-reassign
      data.gambar = `${API_ENDPOINT.IMAGE_PROV(formattedPropinsi)}`;
      weatherContainer.innerHTML += homeWeatherTemplate(data);
    });
  },
};

export default HomePage;
