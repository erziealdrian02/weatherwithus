import WeatherWithUs from '../../render-api/weather-with-us-api';
import { authorTemplate } from '../templates/template-weather';

const AboutUs = {
  async render() {
    return `
          <about-weather></about-weather>
      `;
  },

  afterRender() {
    const author = WeatherWithUs.dataAuthor();
    const authorWeather = document.querySelector('.author-weather');
    author.forEach((data) => {
      authorWeather.innerHTML += authorTemplate(data);
    });
  },
};

export default AboutUs;
