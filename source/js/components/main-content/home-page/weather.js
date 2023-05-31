class Weather extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h1 class="tittle_section">Todays Weather</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <div class="inputbox">
          <input required="required" type="text" />
          <span>Search</span>
          <i></i>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12 kalimat-responsive">
        <button class="button_modal" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Search by <span>Filter</span></button>
      </div>
    </div>
    <div class="row">
      <div class="sidebar col-md-3">
        <div class="card-body">
          <div class="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary" style="width: 280px">
            <h3>Filter Search</h3>
            <hr />
            <ul class="nav nav-pills flex-column mb-auto">
              <h4>Situasi</h4>
              <li>
                <label class="cyberpunk-checkbox-label">
                  <input class="cyberpunk-checkbox" type="checkbox" />
                  Cerah</label
                >
              </li>
              <li>
                <label class="cyberpunk-checkbox-label">
                  <input class="cyberpunk-checkbox" type="checkbox" />
                  Berawan</label
                >
              </li>
              <li>
                <label class="cyberpunk-checkbox-label">
                  <input class="cyberpunk-checkbox" type="checkbox" />
                  Hujan</label
                >
              </li>
              <li>
                <label class="cyberpunk-checkbox-label">
                  <input class="cyberpunk-checkbox" type="checkbox" />
                  Badai</label
                >
              </li>
            </ul>
            <hr />
            <ul class="nav nav-pills flex-column mb-auto">
              <h4>Satuan</h4>
              <li>
                <label class="cyberpunk-checkbox-label">
                  <input class="cyberpunk-checkbox" type="checkbox" />
                  °C</label
                >
              </li>
              <li>
                <label class="cyberpunk-checkbox-label">
                  <input class="cyberpunk-checkbox" type="checkbox" />
                  °F</label
                >
              </li>
            </ul>
            <hr />
            <button class="button_submit"><span>Button</span><i></i></button>
          </div>
        </div>
      </div>
      <div class="card_weather col-md-9 col-md-12-responsive">
        <div class="row weather-cards"></div>
      </div>
    </div>
  </div>

    `;
  }
}

customElements.define("current-weather", Weather);
