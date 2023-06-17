import './nav-bar/app-bar';
import './main-content/home-page/hero-section';
import './main-content/home-page/weather';
import './footer/footer';
import './modal-box/modal';
import './main-content/about-page/about-us';
import './main-content/detail-page/detail-weather';

class MainContent extends HTMLElement {
  // eslint-disable-next-line class-methods-use-this
  connectedCallback() {}
}
customElements.define('main-content', MainContent);
