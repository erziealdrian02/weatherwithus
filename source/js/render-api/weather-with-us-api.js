import API_ENDPOINT from '../globals/api-endpoint';

class WeatherWithUs {
  static async homePage() {
    const response = await fetch(API_ENDPOINT.HOME_PAGE);
    const responseJson = await response.json();
    return responseJson;
  }

  static async detailPage(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }

  static dataAuthor() {
    const author = API_ENDPOINT.ABOUT_US;
    return author;
  }
}

export default WeatherWithUs;
