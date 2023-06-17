class Hero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <div class="container_cuaca">
          <div class="Keterangan">
            <div class="wrapper_slider">
              <h3>JawaBarat</h3>
              <h1>Bogor</h1>
              <h4>Cibinong</h4>
            </div>
          </div>
          <div class="Cuaca">
            <img src="../assets/weather/143.svg" alt="" />
            <p>33°C</p>
          </div>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>  
`;
  }
}

customElements.define('hero-custom', Hero);
