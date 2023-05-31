class Modal extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
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
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Understood</button>
          </div>
        </div>
      </div>
    </div>
    `;
  }
}

customElements.define("modal-box", Modal);
