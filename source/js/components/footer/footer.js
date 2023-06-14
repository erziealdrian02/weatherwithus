class FooterWeather extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <footer class="py-3 my-0">
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
      <li class="nav-item">
        <a href="#" class="nav-link px-2 text-body-secondary">Home</a>
      </li>
      <li class="nav-item">
        <a href="#" target="_blank" class="nav-link px-2 text-body-secondary">API</a>
      </li>
      <li class="nav-item">
        <a href="about.html" class="nav-link px-2 text-body-secondary">About US</a>
      </li>
    </ul>
    <p class="text-center text-body-secondary">&copy; 2023 Company, Inc</p>
  </footer>    
    `;
  }
}

customElements.define('weather-footer', FooterWeather);
