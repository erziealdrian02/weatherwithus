class AboutWeather extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `<div class="container-desc">
    <div class="pinture-desc">
      <div class="container-desc">
        <img src="assets/icon/logo.png" alt="Logo Weather With Us" />
      </div>
    </div>
    <div class="text-desc">
      <div class="text-desc">
        <h3>Tentang Weather With Us</h3>
        <p>
          Cuaca adalah keadaan udara pada waktu dan daerah tertentu yang dapat berubah setiap saat. Unsur-unsur seperti suhu dan kelembapan udara. Dan Weathering With Us berperan untuk menamplikan Ramalan Cuaca yang telah di kumpulkan
          oleh Instansi BMKG dan menampilkannya kepada user.
        </p>
      </div>
    </div>
  </div>
  <div class="team-desc">
    <div class="about-desc">
      <h3>Tentang Kami</h3>
      <p>
        Weather With Us: Aplikasi Cuaca untuk Memahami Kondisi Cuaca dengan Lebih Baik. Kami adalah tim yang berkomitmen untuk memberikan informasi cuaca real-time yang akurat dan mudah dipahami. Dengan tampilan yang jelas dan intuitif,
        kami membantu Anda mengambil keputusan yang tepat berdasarkan kondisi cuaca. Bergabunglah dengan kami dan temukan bagaimana Weather With Us dapat memberikan pengalaman cuaca yang lebih baik bagi Anda.
      </p>
    </div>
  </div>
  <div class="container">
    <div class="row gx-4 author-weather"></div>
  </div>`;
  }
}

customElements.define("about-weather", AboutWeather);
