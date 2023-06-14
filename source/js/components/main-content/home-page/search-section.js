class Search extends HTMLElement {
  connectedCallback() {
    this.render();
    this.setupEventListeners();
  }

  setupEventListeners() {
    const searchElement = this.querySelector('.search');
    searchElement.addEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      const searchInputElement = document.querySelector('#searchElement');
      const searchTerm = searchInputElement.value;
      const searchEvent = new CustomEvent('search', {
        detail: searchTerm,
      });
      this.dispatchEvent(searchEvent);
    }
  };

  render() {
    this.innerHTML = `
      <input class="search" required="required" type="search" id="searchElement" />
      <span>Search</span>
      <i></i>
    `;
  }
}

customElements.define('search-weather', Search);
