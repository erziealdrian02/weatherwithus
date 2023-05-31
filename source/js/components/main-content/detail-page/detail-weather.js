class DetailWeather extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="container_box">
    <div class="weather-side">
      <div class="weather-gradient"></div>
      <div class="date-container_box">
        <h2 class="date-dayname" id="dayContainer"></h2>
        <span class="date-day" id="dateContainer"></span>
        <i class="location-icon" data-feather="map-pin"></i>
        <span class="location">DKIJakarta, Kota Jakarta Timur</span>
        <br />
        <i class="drop-icon" data-feather="droplet"></i>
        <span class="location">70%</span>
        <div class="location-container_box"></div>
        <div class="info-side_responsive">
          <div class="week-container_box">
            <ul class="week-list">
              <li><img src="assets/weather/227.svg" class="day-icon" alt="" /><span class="day-name">Malam</span><span class="day-temp">21°C</span></li>
              <li><img src="assets/weather/176-179-293-299-353.svg" class="day-icon" alt="" /><span class="day-name">Pagi</span><span class="day-temp">08°C</span></li>
              <li><img src="assets/weather/296-302.svg" class="day-icon" alt="" /><span class="day-name">Siang</span><span class="day-temp">19°C</span></li>
              <li><img src="assets/weather/338.svg" class="day-icon" alt="" /><span class="day-name">Sore</span><span class="day-temp">22°C</span></li>
              <div class="clear"></div>
            </ul>
          </div>
        </div>
      </div>
      <div class="weather-container_box">
        <img src="assets/weather/338.svg" class="weather-icon" alt="" />
        <h1 class="weather-temp">29°C</h1>
        <h3 class="weather-desc">Sunny</h3>
      </div>
    </div>
    <div class="info-side">
      <div class="week-container_box">
        <ul class="week-list">
          <li><img src="assets/weather/227.svg" class="day-icon" alt="" /><span class="day-name">Malam</span><span class="day-temp">21°C</span></li>
          <li><img src="assets/weather/176-179-293-299-353.svg" class="day-icon" alt="" /><span class="day-name">Pagi</span><span class="day-temp">08°C</span></li>
          <li><img src="assets/weather/296-302.svg" class="day-icon" alt="" /><span class="day-name">Siang</span><span class="day-temp">19°C</span></li>
          <li><img src="assets/weather/338.svg" class="day-icon" alt="" /><span class="day-name">Sore</span><span class="day-temp">22°C</span></li>
          <div class="clear"></div>
        </ul>
      </div>
    </div>
  </div>
    `;
  }
}

customElements.define("detail-weather", DetailWeather);
