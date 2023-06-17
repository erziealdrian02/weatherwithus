class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
    setInterval(() => {
      this.dateWeather();
    }, 1000);
  }

  render() {
    this.innerHTML = `<nav class="navbar navbar-expand-lg navbar-light fixed-top">
    <div class="container">
      <a class="navbar-brand" href="#/">
        <img src="./assets/icon/smal_logo.png" alt="Logo Weather With Us" width="30" />
        Weather With Us</a
      >
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mx-auto">
          <div class="clock">
            <div id="hours" class="digit">00</div>
            <span>:</span>
            <div id="minutes" class="digit">00</div>
            <span>:</span>
            <div id="seconds" class="digit">00</div>
          </div>
        </ul>
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#/weather-current">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" target="_blank" href="https://ibnux.github.io/BMKG-importer/#pakai-langsung">API</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#/about-us">About US</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
`;
  }

  dateWeather() {
    const waktu = new Date();
    const hours = waktu.getHours().toString().padStart(2, '0');
    const minutes = waktu.getMinutes().toString().padStart(2, '0');
    const seconds = waktu.getSeconds().toString().padStart(2, '0');

    // Update elemen dengan id yang sesuai
    this.querySelector('#hours').textContent = hours;
    this.querySelector('#minutes').textContent = minutes;
    this.querySelector('#seconds').textContent = seconds;
  }
}

customElements.define('app-bar', AppBar);
