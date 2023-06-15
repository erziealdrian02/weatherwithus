class DetailWeather extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="detail-info__weather row justify-content-center mt-weather"> </div>
  `;
  }
}

customElements.define("detail-weather", DetailWeather);
